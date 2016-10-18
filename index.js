var SIZES_IN_MM = {
    'A0': [841, 1189],
    'A1': [594, 841],
    'A2': [420, 594],
    'A3': [297, 420],
    'A4': [210, 297],
    'A5': [148, 210],
    'A6': [105, 148],
    'A7': [74, 105],
    'A8': [52, 74],
    'A9': [37, 52],
    'A10': [26, 37],
    'B0': [1000, 1414],
    'B1': [707, 1000],
    'B2': [500, 707],
    'B3': [353, 500],
    'B4': [250, 353],
    'B5': [176, 250],
    'B6': [125, 176],
    'B7': [88, 125],
    'B8': [62, 88],
    'B9': [44, 62],
    'B10': [31, 44],
    'C0': [917, 1297],
    'C1': [648, 917],
    'C2': [458, 648],
    'C3': [324, 458],
    'C4': [229, 324],
    'C5': [162, 229],
    'C6': [114, 162],
    'C7': [81, 114],
    'C8': [57, 81],
    'C9': [40, 57],
    'C10': [28, 40],
    'LETTER': [216, 279],
    'LEGAL': [216, 356]
};

var mmToM = function(dimension) {
    if (dimension) {
        return [
            parseFloat((dimension[0] / 100).toFixed(3)),
            parseFloat((dimension[1] / 100).toFixed(3))
        ];
    }
};

var mmToCM = function(dimension) {
    if (dimension) {
        return [
            parseFloat((dimension[0] / 10).toFixed(3)),
            parseFloat((dimension[1] / 10).toFixed(3))
        ];
    }
};

var mmToInches = function(dimension) {
    if (dimension) {
        return [
            parseFloat((dimension[0] / 25.4).toFixed(3)),
            parseFloat((dimension[1] / 25.4).toFixed(3))
        ];
    }
};

var mmToPixel = function(dimension, dpi) {
    dpi || (dpi = 72);
    dimension = mmToInches(dimension);
    if (dimension) {
        return [
            Math.round(dimension[0] * dpi),
            Math.round(dimension[1] * dpi)
        ];
    }
};

module.exports = {
    register: function(name, width, height) {
        if (width > height) {
            height = [width, width = height][0];
        }
        SIZES_IN_MM[name] = [width, height];
    },
    getSize: function(name, options) {
        options || (options = {});
        var dimension = SIZES_IN_MM[name.toUpperCase()];
        if (options.unit) {
            switch (options.unit.toLowerCase()) {
                case 'm':
                    dimension = mmToM(dimension);
                    break;
                case 'cm':
                    dimension = mmToCM(dimension);
                    break;
                case 'inches':
                    dimension = mmToInches(dimension);
                    break;
                case 'pixel':
                    dimension = mmToPixel(dimension, options.dpi);
                    break;
            }
        }
        return dimension;
    }
};