function soma() {
  let sum = 0;

  Object.values(arguments).map((value) => {
    if (typeof value === "number") {
      sum = sum + value;
    }
  });

  console.log(sum);
}

soma(2, 3, 4, 5, 6, "Eduardo");

function somaWithRestOperator(...argumentos) {
  let sum = 0;

  argumentos.map((value) => {
    if (typeof value === "number") {
      sum = sum + value;
    }
  });

  console.log(sum);
}

somaWithRestOperator(2, 3, 4, 5, 6, "Eduardo");
