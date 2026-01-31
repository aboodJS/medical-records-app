import connection from "mongoose";

defineEventHandler(async (event) => {
  const data = await readBody(event);
  console.log(data);
  return data;
});
