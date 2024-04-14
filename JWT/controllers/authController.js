const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('authorization-token');
    if(!token) return res.status(401).send('Access Denied: Token is required');

    // res.send("Token recebido")

    try {
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = userVerified; // Tradução do token se ele for válido { id: askdkasdk, admin: false }
        next(); 
    } catch(error) {
        res.status(404).send("Access Denied: Token Invalid");
    }
}