import React, { useState, useEffect } from "react";

const values = { Germany: "Berlin", Azerbaijan: "Baku", Brazil: "Brasilia" };

function sortValues(data) {
  const allValues = [];

  for (let index = 0; index < Object.entries(data).length; index++) {
    const [country, capital] = Object.entries(data)[index];
    allValues.push({ key: index, value: country });
    allValues.push({ key: index, value: capital });
  }

  return allValues.sort(() => Math.random() - 0.5);
}

export default function CountryCapitalGame({ data = values }) {
  const [values, setValues] = useState([]);
  const [checkRightAnswer, setCheckRightAnswer] = useState([]);

  function handleButtonClicked(e) {
    const element = document.getElementsByClassName(e.target.className)[0];

    element.classList.length < 2
      ? element.classList.add("blue")
      : element.classList.remove("blue");

    checkCountryCapital();
  }

  function checkCountryCapital() {
    const elements = document.getElementsByClassName("blue");

    if (elements.length === 2) {
      Object.entries(elements).map((element) => {
        const { innerHTML } = element[1];
        setCheckRightAnswer((prevState) => [...prevState, innerHTML]);
      });
      return;
    }

    setCheckRightAnswer([]);
  }

  useEffect(() => {
    if (checkRightAnswer.length === 2) {
    }
  }, [checkRightAnswer]);

  useEffect(() => {
    setValues(sortValues(data));
  }, []);

  return (
    <div>
      <style>{`
        .blue {background-color: blue; color: black},
        .red {background-color: red; color: black}
      `}</style>
      {values.map(({ value, key }, index) => {
        return (
          <button
            key={index}
            value={key}
            name={key}
            className={value}
            onClick={(value) => handleButtonClicked(value)}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
}
