import fs from 'node:fs';import path from 'node:path';
for(const file of ['index.html','styles.css','elite.css','assets/signature-hero.jpg','app.js','data.js','assets/editorial-hair.jpg'])if(!fs.existsSync(path.join('dist',file)))throw Error(`Missing required asset: ${file}`);
console.log('Static production site ready in dist/. No dependencies or runtime secrets required.');
