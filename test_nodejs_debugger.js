console.log("你好");

var a = () => {
    return "hello babel!";
};

var obj = {
    a: a,
    test: () => {
        return "test";
    }
}

console.log(a());

modules.export = a;