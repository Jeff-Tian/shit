var fs = require('fs');
var path = require('path');

function copyRecursiveSync(src, dest) {
    var exists = fs.existsSync(src);

    if (!exists) {
        console.log(src, ' not exists.');

        return;
    }

    var stats = fs.statSync(src);
    var isDirectory = stats.isDirectory();

    console.log(stats);

    if (isDirectory) {
        fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(function (childItemName) {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.linkSync(src, dest);
    }
}

module.exports = {
    list: function () {
        fs.readdir('./templates', function (err, files) {
            if (err) {
                throw  err;
            }

            files.map(function (file) {
                console.log(file);
            });
        });
    },

    copy: function (template, dest) {
        var src = __dirname + '/templates/' + template;

        copyRecursiveSync(src, dest);
    }
};