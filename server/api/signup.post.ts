import connection from "mongoose";

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  console.log(data);
  return event;
});
