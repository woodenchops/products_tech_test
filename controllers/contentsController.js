exports.getContents = (req, res) => {
    res.status(200).json({
        msg: 'contents page'
    });
};