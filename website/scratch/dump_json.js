
import { areaData } from './src/data/areaData.js';
import fs from 'fs';

fs.writeFileSync('./src/data/areaData.json', JSON.stringify(areaData, null, 4));
console.log('JSON dumped successfully');
