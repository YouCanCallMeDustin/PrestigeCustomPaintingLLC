import https from 'node:https';

const HOST = 'api.indexnow.org';
const KEY = '2abfda58abd0480aa668dd43578e1700';
const DOMAIN = 'prestigecustompaintingllc.com';

import fs from 'node:fs';
import path from 'node:path';

const sitemapPath = path.resolve('public', 'sitemap.xml');
let defaultUrls = [`https://${DOMAIN}/`];

try {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  // Simple regex to grab all <loc> values
  const urlMatches = sitemap.match(/<loc>(.*?)<\/loc>/g);
  if (urlMatches) {
    defaultUrls = urlMatches.map(tag => tag.replace(/<\/?loc>/g, '').trim());
  }
} catch (e) {
  console.log('⚠️ Could not read sitemap.xml. Falling back to homepage only.');
}

const urls = process.argv.length > 2 ? process.argv.slice(2) : defaultUrls;

const data = JSON.stringify({
  host: DOMAIN,
  key: KEY,
  keyLocation: `https://${DOMAIN}/${KEY}.txt`,
  urlList: urls
});

const options = {
  hostname: HOST,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

console.log(`\n🚀 Submitting ${urls.length} URL(s) to IndexNow (${HOST})...`);

const req = https.request(options, (res) => {
  if (res.statusCode === 200) {
    console.log('✅ Success! Search engines have been notified (HTTP 200).');
  } else if (res.statusCode === 202) {
    console.log('✅ Accepted: URL has been received and indexing is pending (HTTP 202).');
  } else {
    console.log(`⚠️ Status Code: ${res.statusCode}`);
  }
  
  res.on('data', (d) => {
    if (d.toString().trim()) console.log(d.toString());
  });
});

req.on('error', (error) => {
  console.error('❌ Error submitting to IndexNow:', error);
});

req.write(data);
req.end();
