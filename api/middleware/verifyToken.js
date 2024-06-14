import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  // Check for presence of token
  if (!token) {
    return res.status(401).json({ message: "Not Authenticated" });
  }

  // Verify the token using JWT secret key
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      // Handle errors appropriately
      if (err.name === "JsonWebTokenError") {
        // Invalid token format or signature
        return res.status(403).json({ message: "Invalid Token Format!" });
      } else if (err.name === "TokenExpiredError") {
        // Expired token
        return res.status(401).json({ message: "Token Expired!" });
      } else {
        // Other errors
        console.error("Error verifying token:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }

    // Token is valid, extract user ID from payload (assuming 'id' field in payload)
    req.userId = payload.id;

    // Continue to the next middleware or route handler
    next();
  });
};
