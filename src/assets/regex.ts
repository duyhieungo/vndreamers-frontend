export const regex = {
  emailRegx: /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/,
  passwordRegx: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  shortNameRegex: /^(?!^0-9)\p{L}{3,32}$/ui,
  username: /[a-z0-9]{6,16}/ui,
  phone: /((0|\+[1-9]{1,3})+([0-9]{9,10}))/
};
