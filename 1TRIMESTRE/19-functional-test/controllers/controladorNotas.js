var fs = require('fs');
const path = require('node:path');

const notePath = "./notas/"

function crearNota(req, res) {


    //try {
    const nota = {
        titulo: `${String(req.body.titulo)}`, id: Math.floor(Math.random() * 1000), contenido: `${String(req.body.contenido)}`
    }

    fs.writeFile(`${notePath}${nota.id}.note`, JSON.stringify(nota), function (err) {
        if (err) throw err;
        console.log('Nota guardada');
    });

    return res.status(200).send({
        success: true,
        message: 'Nota creada',
        nota
    })
    //} catch (error) {
    return res.status(500).send({
        success: false,
        message: 'No se ha podido crear la nota',
    });
    //}
}


function editarNota(req, res) {



    try {
        var notaInicial = fs.readFileSync(`${notePath}${String(req.body.id)}.note`).toString();

        const nota = JSON.parse(notaInicial);
        nota.titulo = titulo || note.titulo
        nota.contenido = String(contenido) || note.contenido

        fs.writeFile(`${notePath}${id}.note`, JSON.stringify(nota), function (err) {
            if (err) throw err;
            console.log('Nota guardada');
        });
        return res.status(200).send({
            success: true,
            message: 'Nota editada',
            nota
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'No se ha podido editar la nota',
        });
    }
}

function borrarNota(req, res) {
    try {
        fs.unlink(`${notePath}${String(req.body.id)}.note`, function (err) {
            if (err) throw err;
            console.log('Nota borrada!');
        });
        return res.status(200).send({
            success: true,
            message: 'Nota borrada',
        })
    }
    catch (error) {
        return res.status(500).send({
            success: false,
            message: 'No se ha podido borrar la nota',
        });
    }
}
function obtenerNotas(req, res) {

    let notas = []


    try {

        let noteFiles = [];
        let files = fs.readdirSync(notePath);
        for (let file of files) {
            if (path.extname(file) === ".note") {
                noteFiles.push(file);
            }
        }

         ("notes", noteFiles)
        return res.status(200).send({
            success: true,
            message: 'Notas recibidas',
            noteFiles
        })
    }
    catch (error) {
        return res.status(500).send({
            success: false,
            message: 'No se han podido obtener las notas'
        });
    }
}

module.exports = {
    crearNota,
    editarNota,
    borrarNota,
    obtenerNotas
};