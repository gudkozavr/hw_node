const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.body.role === role) {
      next();
    } else {
      return res.status(403).json({
        message: "Forbidden: you don't have access!"
      });
    }
  }
}


export default authorizeRole;
