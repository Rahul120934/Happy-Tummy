import {
  Soup,
  Leaf,
  Heart,
  ShoppingBag,
  Building2,
  Users,
  PartyPopper,
  Briefcase,
  BookOpen,
  MessageCircle,
  Rocket
} from "lucide-react";

export const siteConfig = {
  brand: {
    name: "Happy Tummy",
    tagline: "Homely food, made with love",
    taglineAlt: "Good Food • Good Mood • Happy Tummy",
    description:
      "Home-style cloud kitchen in Alto Porvorim, Goa — serving authentic Goan delicacies, biryani, pizza, ramen, and wholesome tiffin meals. Freshly cooked with love, delivered to your doorstep.",
  },

  contact: {
    phonePrimary: "9325416822",
    phoneSecondary: "7020965178",
    whatsappNumber: "919325416822",
    whatsappMessage:
      "Hi Happy Tummy! I'd like to place an order. Here's what I'd like:\n\n",
    address: "Alto Porvorim, Bardez, Goa",
    upiId: "sadusankhalkar@oksbi",
    hours: "11:00 AM – 9:00 PM", // Placeholder — confirm with client
    daysOpen: "Monday – Saturday", // Placeholder — confirm with client
  },

  about: {
    story:
      "Born from a passion for authentic home-cooked flavours, Happy Tummy brings the warmth of a Goan kitchen straight to your doorstep. Every dish is freshly prepared with premium ingredients, no shortcuts, no artificial preservatives — just honest, homely food made with love.",
    highlights: [
      {
        icon: Soup,
        title: "Homely Recipes",
        text: "Traditional recipes passed down through generations",
      },
      {
        icon: Leaf,
        title: "Fresh Ingredients",
        text: "Premium quality, handpicked every day",
      },
      {
        icon: Heart,
        title: "Made with Love",
        text: "No artificial colors or preservatives",
      },
      {
        icon: ShoppingBag,
        title: "Takeaway & Delivery",
        text: "Fast delivery right to your doorstep",
      },
    ],
  },

  bulkOrders: {
    heading: "Bulk Orders & Catering",
    description:
      "Planning a get-together, office lunch, or family celebration? We've got you covered with freshly prepared meals for every occasion. Advance booking is appreciated.",
    categories: [
      { icon: Building2, title: "Office Lunches" },
      { icon: Users, title: "Family Gatherings" },
      { icon: PartyPopper, title: "Small Events & Functions" },
      { icon: Briefcase, title: "Corporate Meals" },
    ],
  },

  howToOrder: {
    steps: [
      {
        icon: BookOpen,
        title: "Browse Our Menu",
        text: "Explore our delicious range of Goan delicacies, biryani, pizza, ramen & more",
      },
      {
        icon: MessageCircle,
        title: "WhatsApp or Call",
        text: "Send us your order on WhatsApp or give us a quick call",
      },
      {
        icon: Rocket,
        title: "Fresh Delivery",
        text: "We freshly prepare your meal and deliver it hot to your doorstep",
      },
    ],
  },

  seo: {
    title: "Happy Tummy — Homely Food, Made with Love | Goa Cloud Kitchen",
    description:
      "Order authentic Goan delicacies, biryani, pizza, ramen & tiffin meals from Happy Tummy — a home-style cloud kitchen in Alto Porvorim, Goa. WhatsApp to order!",
    ogImage: "/og-image.jpg",
    url: "https://happytummy.in",
  },
};
