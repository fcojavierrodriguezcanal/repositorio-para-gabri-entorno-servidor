function pong(req, res, next){
    res.status(200).send('pong');
}

function getFibinacciNumber(req, res, next){
    const { number } = req.query;
    
    res.status(200).send(number);
}

module.exports = {
    pong,
    getFibinacciNumber
}