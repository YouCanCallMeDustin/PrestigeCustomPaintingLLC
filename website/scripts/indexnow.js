const https = require('https');

const HOST = 'api.indexnow.org';
const KEY = '2abfda58abd0480aa668dd43578e1700';
const DOMAIN = 'prestigecustompaintingllc.com';

// You can pass the specific URLs you want to update via command line arguments
// Example: node scripts/indexnow.js https://prestigecustompaintingllc.com/painting-liberty-lake
const defaultUrls = [
  `https://${DOMAIN}/`
];

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
