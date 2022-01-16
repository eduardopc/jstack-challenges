const array = [
  { name: "productA", price: 1000, quantity: 2 },
  { name: "productB", price: 4000, quantity: 1 },
  { name: "productC", price: 500, quantity: 8 },
];

// find - quanto return === true devolve o valor do objeto no array

const find = array.find((product) => {
  if (product.price > 3000) {
    console.log("Preço é maior que 3000", product);
    return true;
  }
});

console.log({ find });

// findIndex - quanto return === true devolve o índice do objeto no array

const findIndex = array.findIndex((product) => product.price > 3000);

console.log({ findIndex });

// some - verifica se AO MENOS UM elemento do array respeita a regra imposta

const some = array.some((product) => product.price > 4000);

console.log({ some });

// every - verifica se TODOS elementos do array respeita a regra imposta

const every = array.every((product) => product.price > 499);

console.log({ every });

// map - itera sobre um array e retorna um novo array

const map = array.map((product) => {
  if (product.quantity < 8) {
    return {
      ...product,
      subtotal: product.price * product.quantity,
    };
  }
});

console.log({ map });

// filter

const filter = array.filter((product) => product.quantity < 8);

console.log({ filter });

// reduce

const reduce1 = array.reduce((accumulator, product) => {
  return accumulator + product.quantity * product.price;
}, 0);

console.log({ reduce1 });

const reduce2 = array.reduce((accumulator, product) => {
  const newProduct = {
    ...product,
    category: `${product.name} category`,
  };

  accumulator.push(newProduct);

  return accumulator;
}, []);

console.log({ reduce2 });
