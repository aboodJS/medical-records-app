import mongoose from "mongoose";

export default defineEventHandler(() => {
  const data = [{ name: "Omar Alrefoh", age: "30", job: "doctor", id: "1" }];

  return data;
});
