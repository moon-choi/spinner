// process.stdout.write("hello from spinner1.js... \rheyyy\n");
const spins = ['|', '/', '-', '\\', '|', `\r`] 

let timer = 100
let character = spins[0]
for (let i = 0; i < spins.length; i++) {
    let spinLine = `\r` + spins[i]

    setTimeout(() => {
        process.stdout.write(spinLine);
    }, timer);
    timer += 200;
    character = spins[i+1]
}