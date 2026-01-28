import { defineMongooseModel } from "#nuxt/mongoose";

export const patient = defineMongooseModel({
  name: "patient",
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
    condition: {
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
