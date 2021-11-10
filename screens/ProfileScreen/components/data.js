import Burger from "../../../assets/images/burger.jpg";
import BurgerTwo from "../../../assets/images/BurgerTwo.webp";
import Pizza from "../../../assets/images/pizza.jpg";
import { screenTypes } from "../../../store/Auth/"

export const orderMapper = (orders, currentScreen) => {
  const mapped = orders.map(order => ({
    ...order,
    id: order._id,
    title: order.food.title,
    status: order.status,
    image: order.food.image,
  }))
  if (currentScreen) {
    if (currentScreen.length > 0) {
      if (currentScreen === screenTypes.PENDING) {
        return mapped.filter(order => order.status !== "closed")
      } else if (currentScreen === screenTypes.COMPLETED) {
        return mapped.filter(order => order.status === "closed")
      }
    }
  }
  return mapped
}

export default [
  {
    id: "1",
    title: "RUSTY DRIVE",
    status: "Cooking",
    image: Burger,
  },
  {
    id: "2",
    title: "RUSTY DRIVE",
    status: "Out For Delivery",
    image: BurgerTwo,
  },
  {
    id: "3",
    title: "RUSTY DRIVE",
    status: "Order Received",
    image: Pizza,
  },
  {
    id: "4",
    title: "RUSTY DRIVE",
    status: "Cooking",
    image: Burger,
  },
  {
    id: "5",
    title: "RUSTY DRIVE",
    status: "Delivered",
    image: BurgerTwo,
  },
  {
    id: "6",
    title: "RUSTY DRIVE",
    status: "Cooking",
    image: Pizza,
  },
];