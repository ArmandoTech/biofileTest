const sayHello = (name) => {
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}`;
  alert(`Buenas tardes ${name}!, son las ${time}`);
};
