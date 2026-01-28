import connection from "mongoose";

export default defineEventHandler(async () => {
  try {
    const data = await connection.connection
      .collection("employees")
      .find({})
      .toArray();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
});
