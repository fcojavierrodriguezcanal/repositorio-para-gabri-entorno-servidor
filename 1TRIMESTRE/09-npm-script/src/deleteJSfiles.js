const fs = require('fs');
const path = require('path');

function deleteJsFiles(dirPath) {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isFile() && path.extname(filePath) === '.js') {
            fs.unlinkSync(filePath);
        } else if (stat.isDirectory()) {
            deleteJsFiles(filePath);
        }
    }
}
deleteJsFiles('files');