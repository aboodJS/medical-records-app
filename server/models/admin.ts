import { defineMongooseModel } from "#nuxt/mongoose";

export const admin = defineMongooseModel({
  name: "Admin",
  schema: {
    username: {
      type: "String",
      required: true,
      unique: true,
    },
    password: {
      type: "String",
      required: true,
      unique: false,
    },
  },
});
