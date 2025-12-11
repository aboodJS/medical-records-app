export default eventHandler((event) => {
  readBody(event)
    .then((e) => e)
    .then((e) => console.log(e));
  return { res: "request complete" };
});
