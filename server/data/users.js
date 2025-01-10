import bcrypt from "bcryptjs";
export const MockUserList = [
  {
    email: "MikeMicheal@gmail.com",
    name: "Mike Micheal",
    username: "MikeMicheal",
    password: bcrypt.hashSync("12345", 10),
    phone: " (555) 603-1724",
   img: "/images/user_1.jpg",
  },
  {
    email: "RobertWatson@gmail.com",
    name: "Robert Watson",
    username: "RobertWatson",
    password: bcrypt.hashSync("12345", 10),
    phone: " (555) 603-1724",
   img: "/images/user_2.jpg",
  },
  {
    email: "CameroonWiliamson@gmail.com",
    name: "Cameroon Wiliamson",
    username: "CameroonWiliamson",
    password: bcrypt.hashSync("12345", 10),
    phone: " (555) 603-1724",
   img: "/images/user_3.jpg",
  },
  {
    email: "KristinCooper@gmail.com",

    name: "Kristin Cooper",
    username: "KristinCooper",
    password: bcrypt.hashSync("12345", 10),
    phone: " (555) 603-1724",
   img: "/images/user_4.jpg",
  },
  {
    email: "KelvinNguyen@gmail.com",
    name: "Kelvin Nguyen",
    username: "KelvinNguyen",
    password: bcrypt.hashSync("12345", 10),
    phone: " (555) 603-1724",
   img: "/images/user_5.jpg",
  },
];
