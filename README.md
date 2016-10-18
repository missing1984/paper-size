# Paper Size
Returns dimensions for given paper size
## Install
```
npm install pager-size
```

## Usage
### Retrieve paper dimensions
```js
var paperSize = require('paper-size');
paperSize.getSize('a4', { unit: 'mm' });  -> [ 210, 297 ]
```

 
```js
var paperSize = require('paper-size');
paperSize.getSize('a4', { unit: 'inches' });  -> [ 8.268, 11.693 ]
```

 
```js
var paperSize = require('paper-size');
paperSize.getSize('a4', { unit: 'pixel', dpi: 72 })  -> [ 595, 842 ]
```

### Register new paper size

```js
var paperSize = require('paper-size');
paperSize.register('mypaper', 100, 200); // width and height in mm
paperSize.getSize('mypaper', { unit: 'inches' }); -> [ 3.937, 7.874 ]
```