import axios from "axios";
import { IUser } from "../SignUp.interface";

const API_URL = "https://fakestoreapi.com/users";
const instanse = axios.create({
  headers: {
    "content-type": "application/json",
  },
  baseURL: API_URL,
});

export const getSignUp = (user: IUser) => {
  const data = {
    email: user.email,
    username: user.username,
    password: user.password,
    name:{
        firstname: user.firstname,
        lastname: user.lastname,
    },
    address:{
        city: user.city,
        street: user.street,
        number: user.number,
        zipcode: user.zipcode,
        geolocation:{
            lat:  user.lat,
            long: user.long,
        },
    },
    phone: user.phone,
  };
  
  try {
    instanse({
      method: "POST",
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  };
};
