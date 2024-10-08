export const passwordValidator = function (value) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value);
};
export const mobileValidator=function(value){
    return /^\d{10}$/.test(value)
}
export const emailValidator=function(value){
    return /^[a-zA-Z0-9][^\s@]*@[^\s@]+[^\s@]+$/.test(value);
}
