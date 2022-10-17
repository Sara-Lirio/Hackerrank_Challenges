const a = [17,28,30]
const b = [99,16,8]

function compareTriplets(a,b) {
    let pointA = 0
    let pointB = 0
    for (let i=0; i < 3; i++) {
        if (a[i] > b[i]) {
            pointA++
        }}

        for (let i=0; i < 3; i++) {
        if (a[i] < b[i]) {
            pointB++
        }
    }
    return [pointA,pointB]
}

console.log(compareTriplets(a,b));