const regExpVali = (target, name) => {
  const idRegExp = /^[A-za-z0-9]{4,12}$/g;
  const pwRegExp =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  let verify;

  if (name === 'username') verify = idRegExp.test(target);
  if (name === 'password') verify = pwRegExp.test(target);

  return verify;
};

export default regExpVali;
