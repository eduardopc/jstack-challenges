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
  const { age, reward } = user;

  let bestOption = null;

  if (age > 64) {
    if (reward) {
      bestOption = companies.sort((firstCompany, secondCompany) => {
        return (
          firstCompany.priceRewardElderly - secondCompany.priceRewardElderly ||
          secondCompany.rating - firstCompany.rating
        );
      });
    } else {
      bestOption = companies.sort((firstCompany, secondCompany) => {
        return (
          firstCompany.priceElderly - secondCompany.priceElderly ||
          secondCompany.rating - firstCompany.rating
        );
      });
    }
  } else {
    if (reward) {
      bestOption = companies.sort((firstCompany, secondCompany) => {
        return (
          firstCompany.priceReward - secondCompany.priceReward ||
          secondCompany.rating - firstCompany.rating
        );
      });
    } else {
      bestOption = companies.sort((firstCompany, secondCompany) => {
        return (
          firstCompany.price - secondCompany.price ||
          secondCompany.rating - firstCompany.rating
        );
      });
    }
  }

  return bestOption;
};

export const getBestCreditCompany = (customerName) => {
  const users = normalizePayload();

  const user = users.find((user) => {
    if (user.name === customerName) {
      return user;
    }
  });

  return checkBestCreditOption(user)[0].name;
};

console.log(getBestCreditCompany("José Carlos"));
