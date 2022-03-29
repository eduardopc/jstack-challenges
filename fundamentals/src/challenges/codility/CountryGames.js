import React, { useState, useEffect, useMemo } from "react";

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
  const [options, setOptions] = useState([]);
  const [checkRightAnswer, setCheckRightAnswer] = useState([]);

  function handleButtonClicked(e) {
    const element = document.getElementsByClassName(e.target.className)[0];

    const isDuplicated = options.some((option) => option === element.className);

    if (!isDuplicated && options.length < 2) {
      setOptions((prevState) => [...prevState, element]);
      element.classList.add("blue");
      return;
    }
  }

  useEffect(() => {
    if (checkRightAnswer.length === 2) {
      if (checkRightAnswer[0] === checkRightAnswer[1]) {
        setValues(values.filter(({ key }) => key != checkRightAnswer[0]));
        setOptions([]);
      } else {
        options.forEach((element) => {
          element.classList.remove("blue");
          element.classList.add("red");
          setTimeout(() => {
            element.classList.remove("red");
            setOptions([]);
          }, 2000);
        });
      }
    }
  }, [checkRightAnswer]);

  useEffect(() => {
    if (options.length === 2) {
      const checkSelectedOptions = [];
      options.forEach((element) => {
        checkSelectedOptions.push(element.id);
      });

      setCheckRightAnswer(checkSelectedOptions);
    }
  }, [options]);

  useMemo(() => setValues(sortValues(data)), []);

  return (
    <div>
      <style>{`
        .blue {background-color: blue; color: black}
        .red {background-color: red; color: black}
      `}</style>
      {values.map(({ value, key }, index) => {
        return (
          <button
            key={index}
            id={key}
            className={value}
            onClick={(value) => handleButtonClicked(value)}
          >
            {value}
          </button>
        );
      })}
      {values.length === 0 && <p>Fim de jogo, parabéns!</p>}
    </div>
  );
}
