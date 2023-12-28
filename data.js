let data = [
  {
    name: "product0-Bussiness",
    price: 338,
    stock: 40,
    category: "Bussiness",
    id: "hr719778",
  },
  {
    name: "product1-Domestic",
    price: 180,
    stock: 0,
    category: "Domestic",
    id: "sl725372",
  },
  {
    name: "product2-Bussiness",
    price: 467,
    stock: 22,
    category: "Bussiness",
    id: "pr186078",
  },
  {
    name: "product3-Industrial",
    price: 240,
    stock: 47,
    category: "Industrial",
    id: "fr88022",
  },
  {
    name: "product4-Industrial",
    price: 212,
    stock: 42,
    category: "Industrial",
    id: "fr858953",
  },
  {
    name: "product5-Bussiness",
    price: 317,
    stock: 20,
    category: "Bussiness",
    id: "pr548507",
  },
  {
    name: "product6-Industrial",
    price: 214,
    stock: 43,
    category: "Industrial",
    id: "sl70631",
  },
  {
    name: "product7-Industrial",
    price: 240,
    stock: 49,
    category: "Industrial",
    id: "fr534702",
  },
  {
    name: "product8-Bussiness",
    price: 393,
    stock: 30,
    category: "Bussiness",
    id: "pr372601",
  },
  {
    name: "product9-Domestic",
    price: 74,
    stock: 25,
    category: "Domestic",
    id: "fr988620",
  },
  {
    name: "product10-Bussiness",
    price: 458,
    stock: 12,
    category: "Bussiness",
    id: "pr212558",
  },
  {
    name: "product11-Bussiness",
    price: 255,
    stock: 30,
    category: "Bussiness",
    id: "sl695505",
  },
  {
    name: "product12-Bussiness",
    price: 0,
    stock: 25,
    category: "Bussiness",
    id: "sl308252",
  },
  {
    name: "product13-Industrial",
    price: 402,
    stock: 38,
    category: "Industrial",
    id: "pr123601",
  },
  {
    name: "product14-Domestic",
    price: 196,
    stock: 44,
    category: "Domestic",
    id: "hr489185",
  },
  {
    name: "product15-Bussiness",
    price: 460,
    stock: 0,
    category: "Bussiness",
    id: "sl22345",
  },
  {
    name: "product16-Domestic",
    price: 72,
    stock: 27,
    category: "Domestic",
    id: "sl312629",
  },
  {
    name: "product17-Domestic",
    price: 386,
    stock: 43,
    category: "Domestic",
    id: "sl847736",
  },
  {
    name: "product18-Domestic",
    price: 127,
    stock: 33,
    category: "Domestic",
    id: "pr596401",
  },
  {
    name: "product19-Industrial",
    price: 206,
    stock: 6,
    category: "Industrial",
    id: "hr911945",
  },
  {
    name: "product20-Bussiness",
    price: 459,
    stock: 36,
    category: "Bussiness",
    id: "pr750369",
  },
  {
    name: "product21-Industrial",
    price: 153,
    stock: 27,
    category: "Industrial",
    id: "fr23183",
  },
  {
    name: "product22-Domestic",
    price: 232,
    stock: 6,
    category: "Domestic",
    id: "sl699896",
  },
  {
    name: "product23-Industrial",
    price: 485,
    stock: 23,
    category: "Industrial",
    id: "sl61559",
  },
  {
    name: "product24-Domestic",
    price: 182,
    stock: 15,
    category: "Domestic",
    id: "hr553613",
  },
  {
    name: "product25-Industrial",
    price: 222,
    stock: 46,
    category: "Industrial",
    id: "hr381384",
  },
];

//FILTER

const reto1 = data.filter((data) => data.category === "Industrial");
console.log(reto1);

const reto2 = data.filter(
  (data) =>
    data.category === "Industrial" ||
    data.category === "Domestic" ||
    data.price > 100
);

console.log(reto2);

const reto3 = data.filter((data) => data.price > 100 && data.stock > 10);
console.log(reto3);

const reto4 = data.filter(
  (data) => data.id.substring(0, 2) === "fr" || data.id.substring(0, 2) === "pr"
);
console.log(reto4);

const category = document.querySelector(".category");
const btn = document.querySelector(".btn");

const getCategory = function () {
  const cat = data.filter((data) => data.category === category.value);
  console.log(cat);
};

btn.addEventListener("click", getCategory);

//MAP

const getInfo = data.map((obj) => obj);
console.log(getInfo);

const newCategory = data.map((obj) =>
  obj.category === "Industrial" ? { ...obj, category: "Domestic" } : obj
);
console.log(newCategory);
