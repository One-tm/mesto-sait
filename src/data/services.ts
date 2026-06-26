import { Bath, Cat, Dog, Scissors } from "lucide-react";

export const services = [
  {
    title: "Комплексный груминг",
    description: "Купание, сушка, стрижка, уход за ушами, когтями и шерстью.",
    price: "от 2 200 ₽",
    Icon: Scissors,
    image: "/images/service-grooming-v3.png",
    href: "/services/strizhka-sobak"
  },
  {
    title: "Купание и уход",
    description: "Бережное купание, сушка и расчесывание для чистоты и свежести.",
    price: "от 900 ₽",
    Icon: Bath,
    image: "/images/service-bath-v3.png",
    href: "/services/myte-i-sushka"
  },
  {
    title: "Уход для кошек",
    description: "Деликатное вычесывание, купание и гигиена без лишнего стресса.",
    price: "от 1 500 ₽",
    Icon: Cat,
    image: "/images/service-cat-v3.png",
    href: "/services/gruming-koshek"
  },
  {
    title: "Экспресс-уход",
    description: "Быстрый уход между полноценными визитами: гигиена, расчесывание, свежесть.",
    price: "от 700 ₽",
    Icon: Dog,
    image: "/images/service-express-v3.png",
    href: "/services/gigiena-sobak"
  }
];
