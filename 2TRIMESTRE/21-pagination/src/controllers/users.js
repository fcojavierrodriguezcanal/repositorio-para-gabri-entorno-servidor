
 async function getUsers(req, res, next) {
 const filters = req.query;
 return res.status(200).send({ results: [], filters });
 }

 function getUserId(req, res, next) {
    
 return res.status(200).send(req.params.id);
 }

 function createUser(req, res, next) {
 return res.status(201).send({ message: 'Created' });
 }

 module.exports = {
 getUsers,
 getUserId,
 createUser,
};