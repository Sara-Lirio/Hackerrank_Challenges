const n = 8
const p = 3

function pageCount(n, p) {
    const turn = parseInt(p / 2);
    const back = parseInt((n / 2) - turn)

    const count = Math.min(turn, back);
    return count
}

console.log(pageCount(n, p));
