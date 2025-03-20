const mustChangePassword = (req, res, next) => {
  const user = req.user;
  const isChange = user.mustChangePassword;
  if (isChange) {
    return res.redirect(`/change-password/${user.id}`);
  }
  next();
};

export default mustChangePassword;
