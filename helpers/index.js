
//en az bir özel karakter içermelidir.
export const passwordChar = (value, vm) => {
  const specials = /[1234567890!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return (specials.test(value));
};
