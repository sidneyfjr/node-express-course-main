const notFound = (req, res) => res.status(404).send('Round does not exit');

module.exports = notFound