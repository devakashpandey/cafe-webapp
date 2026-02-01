import { Menu, X, Instagram, Facebook, Twitter, Phone, Mail, MapPin, Clock, ArrowRight, Star } from "lucide-react";

export const menuCategories = [
  { id: "all", name: "All Items", icon: "☕" },
  { id: "chai", name: "Premium Chai", icon: "🍵" },
  { id: "pizza", name: "Stone Pizza", icon: "🍕" },
  { id: "burger", name: "Burgers", icon: "🍔" },
  { id: "shakes", name: "Shakes", icon: "🥤" },
  { id: "mocktails", name: "Mocktails", icon: "🍹" },
];

export const menuItems = [
  { id: 1, name: "Desi Masala Chai", description: "Authentic blend of spices and fresh ginger.", price: "₹49", category: "chai", image: "/chai_varieties_1769890257667.png", badge: "Signature" },
  { id: 2, name: "Kulhad Special Chai", description: "Slow-brewed in clay pots for earthy aroma.", price: "₹59", category: "chai", image: "/hero_chai_1769890121689.png", badge: "Premium" },
  { id: 3, name: "Cheese Blast Pizza", description: "Gooey mozzarella on a stone-baked crust.", price: "₹249", category: "pizza", image: "/pizza_item_1769890138202.png", badge: "Hot" },
  { id: 4, name: "Tandoori Paneer Burger", description: "Double paneer with secret tandoori sauce.", price: "₹169", category: "burger", image: "/burger_item_1769890168386.png", badge: "New" },
  { id: 5, name: "Oreo Blast Shake", description: "Creamy blend with crushed Oreo cookies.", price: "₹239", category: "shakes", image: "/shake_item_1769890182811.png", badge: "" },
  { id: 6, name: "Sunset Gold Mocktail", description: "Sparkling blend of citrus flavors.", price: "₹149", category: "mocktails", image: "/mocktail_item_1769890153436.png", badge: "Fresh" },
  { id: 7, name: "Loaded Paneer Wrap", description: "Grilled paneer with spicy chutney.", price: "₹189", category: "snacks", image: "/sandwich_item_1769890196876.png", badge: "" },
  { id: 8, name: "Kadak Adrak Chai", description: "Strong tea with fresh ginger punch.", price: "₹55", category: "chai", image: "/chai_varieties_1769890257667.png", badge: "Classic" },
];

export const testimonials = [
  { id: 1, name: "Rahul Sharma", role: "Early Guest", text: "Finally a place that serves real chai! The aroma of Kulhad is just amazing.", avatar: "R" },
  { id: 2, name: "Sneha Kapoor", role: "First Visitor", text: "The vibe is so fresh and energetic. Exactly what our neighborhood needed!", avatar: "S" },
  { id: 3, name: "Arjun Mehta", role: "Food Lover", text: "Tried their Tandoori Burger on day one. Absolutely blown away by the quality.", avatar: "A" },
];

export const stats = [
  { number: "50+", label: "Menu Items" },
  { number: "100%", label: "Live Hygiene" },
  { number: "New", label: "Grand Opening" },
  { number: "Fresh", label: "Daily Batches" },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Vibe", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];
