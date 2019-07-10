const message = [
  {
    name:
      "A unique constraint would be violated on User. Details: Field name = email",
    data: {
      redirect: "/",
      message: "email already taken please login"
    }
  },
  {
    name: "Invalid Password",
    data: {
      id: 1,
      redirect: "/",
      message: "Wrong Password"
    }
  },
  {
    name: "No User Found",
    data: {
      id: 2,
      redirect: "/",
      message: "Email id not registered!! Go -> Signup?"
    }
  }
];
export const checkerror = string => {
  var dataset = null;
  message.forEach(element => {
    if (string === element.name) {
      dataset = element.data;
    }
  });

  return dataset;
};
