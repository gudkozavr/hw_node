import bcrypt from "bcrypt";

export let users = [
  {
    id: 1,
    username: "Alex",
    email: "alex@test.com",
    password: bcrypt.hashSync("alex123", 10),
    role: "admin",
  },
  {
    id: 2,
    username: "Max",
    email: "max@test.com",
    password: bcrypt.hashSync("max123", 10),
    role: "user",
  },
  {
    id: 3,
    username: "Kate",
    email: "kate@test.com",
    password: bcrypt.hashSync("kate123", 10),
    role: "user",
  },
  {
    id: 4,
    username: "Tom",
    email: "tom@test.com",
    password: bcrypt.hashSync("tom123", 10),
    role: "user",
  },
];
