import * as fs from 'fs';

let notes = [];

fs.readdirSync('./notes').forEach((file) => {
    let note = fs.readFileSync(`./notes/${file}`);
    notes.push(note);
});


console.log('Menu:');
console.log('1. Create Note');
console.log('2. View Notes');
console.log('3. Delete Note');
console.log('4. Exit');

let stdin = process.openStdin();

stdin.addListener("data", function(d) {
    let input = process.argv[2]

    if (input === '1') {
        console.log('Enter your note:');
        stdin.addListener("data", function(d) {
            let note = process.argv[2]

            if (note === '') {
                console.log('Menu:');
                console.log('1. Create Note');
                console.log('2. View Notes');
                console.log('3. Delete Note');
                console.log('4. Exit');
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