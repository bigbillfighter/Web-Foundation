const fs = require('fs');
fs.readFile('./Cymbeline.txt', (err, buffer) => {
    console.log(buffer);
});

import {area} from './circle'
console.log(area(4));