// clog
console.log();

// pm
var promiseName = new Promise((resolve, reject) => {
    // do something here
    if (success) {
        resolve(res);
    } else {
        reject(err);
    }
});

// pt
var doPromise = promiseName.then((res) => {
        // do something here
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// forof
for (var variable of iterable) {

}

// fof
for (var item of list) {

}

//fin
for (var i in list) {

}

// class
class ClassName {
    constructor() {

    }
}

// af
() => {

}

// for
for (var i = 0; i < array.length; i++) {
    array[i]
}

// fun
function functionName() {

}


// 自动注释

/*

 */

/**
 *
 */

/**
 * [description]
 * @return {[type]} [description]
 */
function() {

}

/**
 * [functionName description]
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @param  {[type]} c [description]
 * @return {[type]}   [description]
 */
function functionName(a, b, c) {
    return a + b + c;
}

/**
 * [ClassName description]
 */
class ClassName {

    /**
     * [constructor description]
     * @param {[type]} a [description]
     * @param {[type]} b [description]
     * @param {[type]} c [description]
     */
    constructor(a, b, c) {

    }

    /**
     * [functionName description]
     * @param  {[type]} d [description]
     * @param  {[type]} e [description]
     * @param  {[type]} f [description]
     * @return {[type]}   [description]
     */
    function functionName(d, e, f) {

    }
}

// shift + enter可以忽略、跳过自动生成片段