import jwt from "jsonwebtoken";
import "dotenv/config";

const jwtSecret = process.env.JWT_SECRET;

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, jwtSecret, (err, data) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden: Ivalide token" });
      }
      req.user = data;
      next();
    });
  } else {
    console.log(req.headers.authorization);
    res.status(401).json({ message: "Unautharized: No token" })
  }
}

export default authenticateJwt;
