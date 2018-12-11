const { join } = require('path');

export default file => (req, res) => {
    res.sendFile(join(__dirname, '../..', file));
};
