const sayHello = (name) => {
  const time = new Date();
  const hour = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  console.log(`Buenas tardes ${name}!, son las ${hour}`);
};
