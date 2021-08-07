let book = {
  title: 'God',
  writer: 'Bernard werber',
  price: '21000',
};
let { another = 'Ants', price } = book;
console.log(another, price);
