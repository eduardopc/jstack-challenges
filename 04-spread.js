const userInfo = {
  name: "Eduardo",
  middleName: "Pacheco",
  lastName: "Celeste",
  childName: "Arthur",
  active: false,
  skills: ["Mobile", "Web", "Testing"],
};

// Spread operator
const updateUserInfo = {
  ...userInfo,
  skills: [...userInfo.skills, "Backend"],
  active: true,
};

console.log(updateUserInfo);
