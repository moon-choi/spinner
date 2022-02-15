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


//I did it without help!!!!