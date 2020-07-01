exports.getWelcome = (req, res) => {
    res.status(200).json({
        msg: 'Welcome to our page'
    });

}