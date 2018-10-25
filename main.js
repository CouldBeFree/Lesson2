let x = "{asd: 1, qwe: function (a, b) {return a + b}";
let z = "{asd: 1, qwe: function a, b) {return a + b}";
let rt = "{asd: 1, qwe: function (a, b {return a + b}}";

function checkString(string) {
    let splitArray = string.split('');
    let bracketRight = splitArray.filter(item => item === '}');
    let bracketLeft = splitArray.filter(item => item === '{');
    let copeRight = splitArray.filter(item => item === ')');
    let copeLeft = splitArray.filter(item => item === '(');

    if(bracketRight.length != bracketLeft.length){
        console.error('} or { missing')
    } else if(copeRight.length != copeLeft.length){
        console.error(') or ( missing')
    }
}