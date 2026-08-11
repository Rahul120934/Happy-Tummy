export type Badge = "BEST SELLER" | "NEW";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  badge?: Badge;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "goan",
    name: "Goan Delicacies",
    emoji: "🦐",
    items: [
      {
        name: "Chicken Xacuti",
        description:
          "A traditional Goan delicacy made with freshly ground coconut, spices and aromatic herbs.",
        price: 220,
      },
      {
        name: "Chicken Cafreal",
        description:
          "Authentic Goan cafreal chicken marinated in a blend of green masala and spices, grilled to perfection.",
        price: 220,
      },
      {
        name: "Mutton Sukka",
        description:
          "Flavorful mutton cooked in a rich coconut and spice blend, a true Goan classic.",
        price: 300,
      },
      {
        name: "Mushroom Xacuti",
        description:
          "A delicious vegetarian delicacy made with mushrooms, freshly ground coconut and aromatic spices.",
        price: 180,
      },
      {
        name: "Goan Fish Curry",
        description:
          "Traditional Goan fish curry cooked in coconut, kokum and spices. Simple, soulful and full of Goan flavors.",
        price: 100,
      },
      {
        name: "Tisryo Sukha (Clams)",
        description:
          "Spicy and flavorful dry clams stir-fry with traditional Goan spices. A coastal delight!",
        price: 150,
      },
      {
        name: "Prawn Balchao",
        description:
          "Spicy, tangy and aromatic prawn balchao made with authentic Goan spices. A bold coastal treat!",
        price: 220,
      },
    ],
  },
  {
    id: "veg",
    name: "Veg Delicacies",
    emoji: "🥬",
    items: [
      {
        name: "Dal Tadka",
        description:
          "Comforting dal tadka tempered with authentic spices and aromatic seasoning.",
        price: 120,
      },
      {
        name: "Jeera Rice",
        description:
          "Fragrant basmati rice cooked with cumin and mild spices. Simple, light & delicious.",
        price: 120,
      },
      {
        name: "Veg Fried Rice",
        description:
          "Flavorful stir-fried rice with fresh vegetables and subtle spices. A perfect wholesome meal.",
        price: 120,
      },
      {
        name: "Mushroom Masala",
        description:
          "Flavorful mushrooms cooked in a rich onion-tomato masala with authentic spices.",
        price: 150,
      },
      {
        name: "Goan Sprouts Curry",
        description:
          "Nutritious sprouts cooked in aromatic xacuti masala. Wholesome and delicious.",
        price: 150,
      },
      {
        name: "Chole Masala",
        description:
          "Tangy and spicy chole cooked with traditional spices and aromatic herbs.",
        price: 150,
      },
      {
        name: "Mushroom Xacuti",
        description:
          "A delicious delicacy made with mushrooms, freshly ground coconut and aromatic spices.",
        price: 150,
      },
      {
        name: "Paneer Butter Masala",
        description:
          "Soft paneer cubes cooked in a creamy tomato gravy with butter and aromatic spices.",
        price: 250,
      },
      {
        name: "Reshmi Paneer",
        description:
          "Mild and creamy paneer delicacy made with cashews, cream and fragrant spices.",
        price: 250,
      },
    ],
  },
  {
    id: "biryani",
    name: "Biryani",
    emoji: "🍚",
    items: [
      {
        name: "Chicken Dum Biryani",
        description:
          "Classic dum style biryani with tender chicken, aromatic spices & long grain basmati rice.",
        price: 200,
      },
      {
        name: "Zaffrani Chicken Biryani",
        description:
          "Fragrant zaffrani rice cooked with juicy chicken, saffron, whole spices & rich flavors.",
        price: 250,
      },
      {
        name: "Malai Seekh Biryani",
        description:
          "Creamy malai seekh layered with flavorful rice, herbs & aromatic biryani masala. Available in Chicken or Mutton.",
        price: 250,
        badge: "NEW",
      },
    ],
  },
  {
    id: "pulao",
    name: "Pulao",
    emoji: "🍛",
    items: [
      {
        name: "Mixed Veg Pulao",
        description:
          "A wholesome mix of seasonal vegetables & fragrant basmati rice, mildly spiced to perfection.",
        price: 150,
      },
      {
        name: "Prawns Pulao",
        description:
          "Authentic Goan style prawns pulao made with aromatic spices, coconut & fragrant basmati rice.",
        price: 200,
      },
      {
        name: "Chicken Yakhni Pulao",
        description:
          "Tender chicken cooked in a rich & creamy yakhni made with curd, mild spices & fragrant basmati rice.",
        price: 200,
      },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    emoji: "🍕",
    items: [
      {
        name: "Veggie Delight",
        description: "Loaded with colorful veggies, cheese & Italian herbs.",
        price: 149,
      },
      {
        name: "Paneer Tikka",
        description:
          "Spicy paneer tikka, capsicum, onion & mozzarella cheese.",
        price: 199,
      },
      {
        name: "Corn and Capsicum",
        description:
          "Sweet corn, capsicum, cheese & a perfect flavour in every bite.",
        price: 199,
        badge: "BEST SELLER",
      },
      {
        name: "Cheese Lovers",
        description: "A heavenly mix of cheese & herbs.",
        price: 199,
      },
      {
        name: "Barbecue Chicken",
        description:
          "Smoky BBQ sauce, juicy chicken, onion, capsicum & mozzarella for a bold flavour.",
        price: 249,
        badge: "BEST SELLER",
      },
      {
        name: "Chicken Delight",
        description:
          "Juicy chicken, bell peppers, capsicum, cheese & herbs — a classic everybody loves.",
        price: 249,
        badge: "BEST SELLER",
      },
    ],
  },
  {
    id: "ramen",
    name: "Ramen",
    emoji: "🍜",
    items: [
      {
        name: "Cheese Flavoured Ramen",
        description:
          "Cheesy, cozy & totally unforgettable. Pure comfort in every slurp.",
        price: 199,
        badge: "BEST SELLER",
      },
      {
        name: "Carbonara Ramen",
        description:
          "Creamy dreams, ramen style — a rich carbonara hug in a noodle bowl.",
        price: 199,
      },
      {
        name: "2x Hot & Spicy Ramen",
        description:
          "Not for the faint-hearted — double the heat, double the thrill.",
        price: 199,
      },
      {
        name: "Fusion Carbonara Ramen",
        description:
          "Spicy meets creamy: spicy ramen and creamy carbonara sauce mixed with peanut butter for a slight Asian kick, topped with a soft boiled egg.",
        price: 199,
        badge: "BEST SELLER",
      },
    ],
  },
  {
    id: "tiffin",
    name: "Tiffin Meals",
    emoji: "🥘",
    items: [
      {
        name: "Veg Tiffin Meal",
        description:
          "Veg curry (choice of Dal Tadka or Moong Sprouts Curry, Xacuti style), white rice, Potato Kapa (rava fry), salad & pickle.",
        price: 150,
      },
      {
        name: "Non-Veg Thali",
        description:
          "Fish curry (Goan style), white rice, 1 pc fish fry (any fish), salad & pickle.",
        price: 200,
      },
      {
        name: "Chicken Thali",
        description:
          "Chicken curry (Goan style), white rice, 2–3 pcs chicken pakodas, salad & pickle.",
        price: 220,
      },
    ],
  },
];
