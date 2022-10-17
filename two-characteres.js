s = 'abaacdabd'

function alternate(s) {
    const newArr = s.split('');

    const arrSet = [...new Set(newArr)];
    let arr = [];
    let max = 0;

    for (let i = 0; i < arrSet.length - 1; i++) {
        for (let x = i + 1; x < arrSet.length; x++) {
            let pass = false;

            arr = newArr.filter(e => e === arrSet[i] || e === arrSet[x]);

            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] === arr[j + 1]) {
                    pass = true;
                    break;
                }
            }
            if (pass === false) {
                max = Math.max(max, arr.length);
            }
        }
    }
    return max;
}

console.log(alternate(s));