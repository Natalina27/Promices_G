let arr = [

    new Promise((resolve, reject) => {
        delay();
        function delay(interval) {

            interval = getRandomDelay(1,5);
            setTimeout(() => resolve(interval), interval * 1000)
            console.log(interval)
        }
    }),
    new Promise((resolve, reject) => {
        delay();
        function delay(interval) {

            interval = getRandomDelay(1,5);
            setTimeout(() => resolve(interval), interval * 1000)
            console.log(interval)
        }
    }),
    new Promise((resolve, reject) => {
        delay();
        function delay(interval) {

            interval = getRandomDelay(1,5);
            setTimeout(() => resolve(interval), interval * 1000)
            console.log(interval)
        }
    }),
]

Promise.all(arr)
    .then(arr => {
        return arr.reduce((sum, current) => sum + current, 0);
    })
    .then(
        result => {console.log(result)},
        error => {console.log(error)}
    )
console.log('arr = ', arr);


function getRandomDelay(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomDelay(1,5));
