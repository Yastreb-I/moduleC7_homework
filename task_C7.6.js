export function reverseString(str) {
    let revers = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revers += str[i];
    }
    return revers;
}


//console.log(reverseString("qwertyuiop")) // poiuytrewq