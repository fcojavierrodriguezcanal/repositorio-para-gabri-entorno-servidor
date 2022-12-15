


/*login*/


console.log('token',token);
/*resto*/
const decoded = jwt.verify(token,secret);

console.log('decoded',decoded);