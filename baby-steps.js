// console.log(process.argv);
let sum = 0;
const Array = process.argv.slice(2).map(e => parseInt(e))
for (let i = 0; i < Array.length; i++) {
    const el = Array[i];
    sum += el
}
console.log(sum);


