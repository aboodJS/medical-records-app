import { defineMongooseModel } from "#nuxt/mongoose";

export const employee = defineMongooseModel({
  name: "employee",
  schema: {
    name: {
      type: "String",
      required: true,
      unique: true,
    },
    age: {
      type: "String",
      required: true,
      unique: false,
    },
    job: {
      type: "String",
      required: true,
      unique: false,
    },
    id: {
      type: "String",
      required: true,
      unique: false,
    },
  },
});
