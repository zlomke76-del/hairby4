import fs from 'node:fs';import path from 'node:path';
for(const file of ['index.html','styles.css','app.js','data.js','assets/editorial-hair.jpg'])if(!fs.existsSync(path.join('dist',file)))throw Error(`Missing required asset: ${file}`);
console.log('Static production site ready in dist/. No dependencies or runtime secrets required.');
