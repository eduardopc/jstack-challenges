import { users, companies } from "./data.js";

const typeValues = (key, value) => {
  if (key === "age") {
    return +value;
  }

  if (key === "reward") {
    return JSON.parse(value);
  }

  return value;
};

function normalizePayload() {
  return users.map((user) => {
    const element = user.userData.split(";");

    let object = {};

    element.forEach((data) => {
      const [key, value] = data.split("=");
      const rightValue = typeValues(key, value);
      object[key] = rightValue;
    });

    return object;
  });
}

const checkBestCreditOption = (user) => {
  const { name, age, reward } = user;

  if (reward) {
    console.log(name);
  }
};

export const getBestCreditCompany = (customerName) => {
  const users = normalizePayload();

  const user = users.find((user) => {
    if (user.name === customerName) {
      return user;
    }
  });

  return checkBestCreditOption(user);
};

getBestCreditCompany("José Carlos");
