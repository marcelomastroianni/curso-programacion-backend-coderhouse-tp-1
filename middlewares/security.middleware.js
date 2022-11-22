const validateIfAdmin = (req, res, next) => {
    const { is_admin } = req.headers;
    if (is_admin !== "true") {
      let full_path = req.baseUrl+req.route.path;
      let method = req.method;
      let message = `ruta ${full_path} método ${method} no autorizada`;
      return res.status(401).json({ error: -1 , descripcion: message });
    }
    next();
 }

 module.exports = validateIfAdmin