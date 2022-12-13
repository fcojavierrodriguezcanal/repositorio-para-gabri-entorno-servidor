const scLogger = (req, res, next) => {
    const codigoerror = res.codigoerror;
    if (codigoerror >= 200 && codigoerror < 300) {
      console.info(`${codigoerror} ${req.method} ${req.path}`);
    } else if (codigoerror >= 400 && codigoerror < 500) {
      console.warn(`${codigoerror} ${req.method} ${req.path}`);
    } else if (codigoerror >= 500) {
      console.error(`${codigoerror} ${req.method} ${req.path}`);
    }
    next();
  };
  
  module.exports =  scLogger ;