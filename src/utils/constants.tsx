import { CircleDollarSign, Link, ShieldCheck, Utensils, User2 } from "lucide-react";

export const siderBarOptions = [
  {
    title: "My Reservations",
    navigate: "/reservations",
    pathname: "reservations",
    icon: <Utensils size={18} />,
  },
  {
    title: "Restaurants",
    navigate: "/restaurants",
    pathname: "restaurant",
    icon: <ShieldCheck size={18} />,
  },
  {
    title: "Integrations",
    navigate: "/integrations",
    pathname: "integration",
    icon: <Link size={18} />,
  },
  {
    title: "Subscription",
    navigate: "/check-subscription",
    pathname: "subscription",
    icon: <CircleDollarSign size={18} />,
  },
  {
    title: "Profile",
    navigate: "/profile",
    pathname: "profile",
    icon: <User2 size={18} />,
  },
];
