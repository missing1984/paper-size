# Paper Size
Returns dimensions for given paper size

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
