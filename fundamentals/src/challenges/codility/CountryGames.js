import React, { useState, useEffect } from "react";

const values = { Germany: "Berlin", Azerbaijan: "Baku", Brazil: "Brasilia" };

function sortValues(data) {
  const allValues = [];

  for (const [country, capital] of Object.entries(data)) {
    allValues.push(country);
    allValues.push(capital);
  }

  return allValues.sort(() => Math.random() - 0.5);
}

export default function CountryCapitalGame({ data = values }) {
  const [values, setValues] = useState([]);
  const [checkRightAnswer, setCheckRightAnswer] = useState([]);

  function handleButtonClicked(e) {
    const element = document.getElementsByClassName(e.target.value)[0];

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
        .blue {background-color: blue; color: black}
      `}</style>
      {values.map((value, index) => {
        return (
          <button
            key={index}
            value={value}
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
