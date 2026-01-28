import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
  const data = mongoose.connection.readyState;

  return data;
});
