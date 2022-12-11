let fs = require('fs');

let notes = [];

fs.readdirSync('./notes').forEach((file) => {
    let note = fs.readFileSync(`./notes/${file}`);
    notes.push(note);
});
imprimirmenu();
function imprimirmenu(){
console.log('Menu:');
console.log('1. Create Note');
console.log('2. View Notes');
console.log('3. Delete Note');
console.log('4. Exit');

let stdin = process.openStdin();
}
stdin.addListener("data", function(d) {
    let input = d.toString().trim();

    if (input === '1') {
        console.log('Escribe tu nota:');
        stdin.addListener("data", function(d) {
            let note = d.toString().trim();

            if (note === '') {
                console.log('Menu:');
                console.log('1. Crear Nota');
                console.log('2. Ver notas');
                console.log('3. Borrar notas');
                console.log('4. Salir');
            } else {
                notes.push(note);
                fs.writeFileSync(`./notes/${Date.now()}.txt`, note);
            }
        });
    } else if (input === '2') {
        notes.forEach((note, index) => {
            console.log(`${index + 1}. ${note}`);
        });

        console.log('Menu:');
        console.log('1. Create Note');
        console.log('2. View Notes');
        console.log('3. Delete Note');
        console.log('4. Exit');
    } else if (input === '3') {
        console.log('Which note would you like to delete?');
        stdin.addListener("data", function(d) {
            let choice = d.toString().trim();
            notes.splice(choice - 1, 1);
            fs.readdirSync('./notes').forEach((file) => {
                fs.unlinkSync(`./notes/${file}`);
            });
            notes.forEach((note, index) => {
                fs.writeFileSync(`./notes/${index}.txt`, note);
            });
        });
    } else if (input === '4') {
        process.exit();
    } else {
        console.log('Menu:');
        console.log('1. Create Note');
        console.log('2. View Notes');
        console.log('3. Delete Note');
        console.log('4. Exit');
    }
});