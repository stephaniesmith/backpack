const { join } = require('path');

module.exports = file => (req, res) => {
    res.sendFile(join(__dirname, '../..', file));
};
