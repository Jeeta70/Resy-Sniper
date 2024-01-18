import { CircleDollarSign, Link, ShieldCheck, Utensils } from "lucide-react";

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
    navigate: "/subscription",
    pathname: "subscription",
    icon: <CircleDollarSign size={18} />,
  },
  {
    title: "Profile",
    navigate: "/profile",
    pathname: "profile",
    icon: <Utensils size={18} />,
  },
];
