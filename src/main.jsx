
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/*
 JAYMART COMPUTERS AND GADGETRY HUB
 Replace all of src/main.jsx with this file.

 IMPORTANT:
 - Product prices below are EDITABLE EXAMPLES, not verified Jaymart prices.
 - Replace them with your current selling prices before publishing.
 - Product image paths point to public/images/.
 - Add your own images with matching filenames, or edit the paths below.
 - WhatsApp orders are enquiries; final price, availability and delivery
   must be confirmed with the customer.
*/

const SITE = {
  name: "Udotor John Itsenegbemhe",
  business: "Jaymart Computers and Gadgetry Hub",
  location: "Benin City, Edo State, Nigeria",
  email: "johnudotor@gmail.com",
  phone: "+234 815 601 5526",
  whatsapp: "2348104675749",
  github: "https://github.com/johnudotor",
  linkedin:
    "https://linkedin.com/in/udotor-john-itsenegbemhe-0a621678",
  youtube: "https://youtube.com/@jaymartcomputers?si=Ii-PmG4jkO0yfgld",
  facebook: "https://www.facebook.com/share/1Emj7Tj3is/?mibextid=wwXIfr",
  instagram:
    "https://www.instagram.com/jaymartcomputers1?rpxt=ZXh2aGg4cDVsNGZ4&utm_source=qr",
  tiktok: "https://www.tiktok.com/@jaymartcomputers",
};

const CATEGORIES = [
  "All Products",
  "Laptops & Computers",
  "Computer Accessories",
  "Mobile Phones",
  "Phone Accessories",
  "Audio & Wearables",
  "Networking",
  "Solar Panels & Power",
  "Solar Accessories",
  "Storage & Components",
];

/*
 PRODUCT CATALOGUE
 Price values are examples to edit.
 Set image paths to your own photos in public/images/.
 "available" can be changed to false when a product is out of stock.
*/
const PRODUCTS = [
  // COMPUTERS
  {
    id: "laptop-hp",
    name: "HP Laptop",
    category: "Laptops & Computers",
    price: 450000,
    image: "/images/hp-laptop.jpg",
    description: "Laptop for office work, online learning, business and everyday computing. Edit with processor, RAM, storage and screen size.",
    available: true,
  },
  {
    id: "laptop-dell",
    name: "Dell Laptop",
    category: "Laptops & Computers",
    price: 480000,
    image: "/images/dell-laptop.jpg",
    description: "Dell notebook for productivity, business and professional use. Add the exact model and specifications.",
    available: true,
  },
  {
    id: "laptop-lenovo",
    name: "Lenovo Laptop",
    category: "Laptops & Computers",
    price: 420000,
    image: "/images/lenovo-laptop.jpg",
    description: "Laptop options for students, offices and home users. Replace this with the specific model and configuration.",
    available: true,
  },
  {
    id: "macbook",
    name: "Apple MacBook",
    category: "Laptops & Computers",
    price: 850000,
    image: "/images/macbook.jpg",
    description: "MacBook for development, creative work and productivity. Specify chip, memory, storage and condition.",
    available: true,
  },
  {
    id: "desktop",
    name: "Desktop Computer",
    category: "Laptops & Computers",
    price: 350000,
    image: "/images/desktop-computer.jpg",
    description: "Desktop system for office, business, school or home use. Specify whether the monitor and peripherals are included.",
    available: true,
  },
  {
    id: "monitor",
    name: "Computer Monitor",
    category: "Computer Accessories",
    price: 125000,
    image: "/images/monitor.jpg",
    description: "External display for workstations and home offices. Add screen size, resolution and connection types.",
    available: true,
  },
  {
    id: "keyboard",
    name: "USB Keyboard",
    category: "Computer Accessories",
    price: 12000,
    image: "/images/keyboard.jpg",
    description: "Wired keyboard for desktop computers and compatible devices.",
    available: true,
  },
  {
    id: "wireless-keyboard",
    name: "Wireless Keyboard",
    category: "Computer Accessories",
    price: 22000,
    image: "/images/wireless-keyboard.jpg",
    description: "Wireless keyboard for a cleaner desk setup. Specify layout and connection type.",
    available: true,
  },
  {
    id: "mouse",
    name: "Computer Mouse",
    category: "Computer Accessories",
    price: 8000,
    image: "/images/mouse.jpg",
    description: "Computer mouse for everyday navigation and productivity.",
    available: true,
  },
  {
    id: "wireless-mouse",
    name: "Wireless Mouse",
    category: "Computer Accessories",
    price: 15000,
    image: "/images/wireless-mouse.jpg",
    description: "Wireless mouse for laptops and compatible desktop systems.",
    available: true,
  },
  {
    id: "laptop-bag",
    name: "Laptop Bag",
    category: "Computer Accessories",
    price: 18000,
    image: "/images/laptop-bag.jpg",
    description: "Protective laptop bag for carrying your computer and everyday accessories.",
    available: true,
  },
  {
    id: "laptop-stand",
    name: "Laptop Stand",
    category: "Computer Accessories",
    price: 18000,
    image: "/images/laptop-stand.jpg",
    description: "Laptop stand for a more comfortable workstation setup.",
    available: true,
  },
  {
    id: "cooling-pad",
    name: "Laptop Cooling Pad",
    category: "Computer Accessories",
    price: 22000,
    image: "/images/cooling-pad.jpg",
    description: "Laptop cooling pad. Check size and compatibility before ordering.",
    available: true,
  },
  {
    id: "usb-hub",
    name: "USB-C Hub and Adapter",
    category: "Computer Accessories",
    price: 25000,
    image: "/images/usb-c-hub.jpg",
    description: "Multiport adapter for compatible laptops, tablets and devices.",
    available: true,
  },
  {
    id: "webcam",
    name: "USB Webcam",
    category: "Computer Accessories",
    price: 28000,
    image: "/images/webcam.jpg",
    description: "External webcam for online meetings, classes and streaming.",
    available: true,
  },
  {
    id: "printer",
    name: "Computer Printer",
    category: "Computer Accessories",
    price: 165000,
    image: "/images/printer.jpg",
    description: "Printer for home, office or business use. Specify model and print type.",
    available: true,
  },

  // MOBILE PHONES
  {
    id: "iphone",
    name: "Apple iPhone",
    category: "Mobile Phones",
    price: 750000,
    image: "/images/iphone.jpg",
    description: "iPhone models subject to availability. Enter the model, storage capacity, condition and SIM type.",
    available: true,
  },
  {
    id: "samsung",
    name: "Samsung Galaxy Phone",
    category: "Mobile Phones",
    price: 450000,
    image: "/images/samsung-phone.jpg",
    description: "Samsung Galaxy smartphone. Specify the series, memory, storage and condition.",
    available: true,
  },
  {
    id: "tecno",
    name: "TECNO Smartphone",
    category: "Mobile Phones",
    price: 220000,
    image: "/images/tecno-phone.jpg",
    description: "TECNO smartphones for communication, entertainment and daily productivity.",
    available: true,
  },
  {
    id: "infinix",
    name: "Infinix Smartphone",
    category: "Mobile Phones",
    price: 200000,
    image: "/images/infinix-phone.jpg",
    description: "Infinix smartphones. Add the exact model, RAM, storage and colour.",
    available: true,
  },
  {
    id: "itel",
    name: "itel Smartphone",
    category: "Mobile Phones",
    price: 110000,
    image: "/images/itel-phone.jpg",
    description: "itel phones for everyday mobile use. Confirm model and availability.",
    available: true,
  },
  {
    id: "tablet",
    name: "Tablet",
    category: "Mobile Phones",
    price: 250000,
    image: "/images/tablet.jpg",
    description: "Tablet options for learning, business, reading and entertainment.",
    available: true,
  },

  // PHONE ACCESSORIES
  {
    id: "charger",
    name: "Phone Charger and Adapter",
    category: "Phone Accessories",
    price: 12000,
    image: "/images/phone-charger.jpg",
    description: "Charging adapter. Confirm connector, output wattage and device compatibility.",
    available: true,
  },
  {
    id: "cable",
    name: "USB Charging Cable",
    category: "Phone Accessories",
    price: 5000,
    image: "/images/charging-cable.jpg",
    description: "Charging and data cable. Select USB-C, Lightning or another compatible connector.",
    available: true,
  },
  {
    id: "powerbank",
    name: "Power Bank",
    category: "Phone Accessories",
    price: 25000,
    image: "/images/power-bank.jpg",
    description: "Portable charging for compatible phones and devices. Add capacity and output specifications.",
    available: true,
  },
  {
    id: "phone-case",
    name: "Phone Case and Cover",
    category: "Phone Accessories",
    price: 5000,
    image: "/images/phone-case.jpg",
    description: "Protective phone case. Specify the exact phone model for fit.",
    available: true,
  },
  {
    id: "screen-protector",
    name: "Screen Protector",
    category: "Phone Accessories",
    price: 4000,
    image: "/images/screen-protector.jpg",
    description: "Screen protection for compatible phones. Confirm the model before ordering.",
    available: true,
  },
  {
    id: "car-charger",
    name: "Car Phone Charger",
    category: "Phone Accessories",
    price: 10000,
    image: "/images/car-charger.jpg",
    description: "Vehicle charger for compatible phones and other USB-powered devices.",
    available: true,
  },
  {
    id: "selfie-stick",
    name: "Selfie Stick and Phone Tripod",
    category: "Phone Accessories",
    price: 15000,
    image: "/images/selfie-stick.jpg",
    description: "Phone holder for selfies, video calls and content creation.",
    available: true,
  },
  {
    id: "phone-holder",
    name: "Phone Holder",
    category: "Phone Accessories",
    price: 8000,
    image: "/images/phone-holder.jpg",
    description: "Desk or vehicle phone holder. Edit with the type you sell.",
    available: true,
  },
  {
    id: "memory-card",
    name: "MicroSD Memory Card",
    category: "Storage & Components",
    price: 9000,
    image: "/images/memory-card.jpg",
    description: "Removable storage for supported phones, cameras and other devices. Specify capacity and speed class.",
    available: true,
  },
  {
    id: "flash-drive",
    name: "USB Flash Drive",
    category: "Storage & Components",
    price: 8000,
    image: "/images/flash-drive.jpg",
    description: "Portable file storage. Choose the capacity and connector type.",
    available: true,
  },
  {
    id: "external-drive",
    name: "External Hard Drive or SSD",
    category: "Storage & Components",
    price: 95000,
    image: "/images/external-drive.jpg",
    description: "External storage for backup and file transfer. Confirm capacity and drive type.",
    available: true,
  },

  // AUDIO AND WEARABLES
  {
    id: "earbuds",
    name: "Wireless Earbuds",
    category: "Audio & Wearables",
    price: 25000,
    image: "/images/wireless-earbuds.jpg",
    description: "Wireless earbuds for calls, music and everyday listening.",
    available: true,
  },
  {
    id: "headphones",
    name: "Bluetooth Headphones",
    category: "Audio & Wearables",
    price: 35000,
    image: "/images/headphones.jpg",
    description: "Wireless headphones. Specify battery life, microphone and audio features.",
    available: true,
  },
  {
    id: "speaker",
    name: "Portable Bluetooth Speaker",
    category: "Audio & Wearables",
    price: 28000,
    image: "/images/bluetooth-speaker.jpg",
    description: "Portable speaker for music and everyday entertainment.",
    available: true,
  },
  {
    id: "smartwatch",
    name: "Smartwatch",
    category: "Audio & Wearables",
    price: 35000,
    image: "/images/smartwatch.jpg",
    description: "Smartwatch options. Confirm phone compatibility, features and strap size.",
    available: true,
  },
  {
    id: "microphone",
    name: "USB or Wireless Microphone",
    category: "Audio & Wearables",
    price: 30000,
    image: "/images/microphone.jpg",
    description: "Microphone for content creation, streaming, calls or recording.",
    available: true,
  },

  // NETWORKING
  {
    id: "router",
    name: "Wi-Fi Router",
    category: "Networking",
    price: 35000,
    image: "/images/router.jpg",
    description: "Router for home, office and small-business internet connectivity.",
    available: true,
  },
  {
    id: "modem",
    name: "Internet Modem",
    category: "Networking",
    price: 45000,
    image: "/images/modem.jpg",
    description: "Internet modem. Confirm network compatibility and SIM requirements.",
    available: true,
  },
  {
    id: "switch",
    name: "Network Switch",
    category: "Networking",
    price: 30000,
    image: "/images/network-switch.jpg",
    description: "Network switch for connecting compatible wired devices.",
    available: true,
  },
  {
    id: "ethernet",
    name: "Ethernet Cable",
    category: "Networking",
    price: 3000,
    image: "/images/ethernet-cable.jpg",
    description: "Ethernet cable for wired networking. Edit with length and cable category.",
    available: true,
  },

  // SOLAR AND BACKUP POWER
  {
    id: "solar-panel",
    name: "Solar Panel",
    category: "Solar Panels & Power",
    price: 95000,
    image: "/images/solar-panel.jpg",
    description: "Solar panel for compatible solar power systems. Specify wattage and panel type.",
    available: true,
  },
  {
    id: "solar-fan",
    name: "Solar Fan",
    category: "Solar Panels & Power",
    price: 65000,
    image: "/images/solar-fan.jpg",
    description: "Solar-powered fan or compatible DC fan kit. Specify panel, battery and included accessories.",
    available: true,
  },
  {
    id: "solar-light",
    name: "Solar Security Light",
    category: "Solar Panels & Power",
    price: 18000,
    image: "/images/solar-security-light.jpg",
    description: "Solar-powered outdoor lighting. Confirm brightness, battery and sensor features.",
    available: true,
  },
  {
    id: "solar-home-light",
    name: "Solar Home Lighting Kit",
    category: "Solar Panels & Power",
    price: 45000,
    image: "/images/solar-home-kit.jpg",
    description: "Solar lighting kit for suitable household applications. Specify included lights and capacity.",
    available: true,
  },
  {
    id: "inverter",
    name: "Solar Inverter",
    category: "Solar Panels & Power",
    price: 250000,
    image: "/images/solar-inverter.jpg",
    description: "Inverter for a compatible solar or backup-power installation. Specify rated capacity and system voltage.",
    available: true,
  },
  {
    id: "hybrid-inverter",
    name: "Hybrid Solar Inverter",
    category: "Solar Panels & Power",
    price: 450000,
    image: "/images/hybrid-inverter.jpg",
    description: "Hybrid inverter for compatible solar, battery and grid systems. Confirm technical requirements before purchase.",
    available: true,
  },
  {
    id: "solar-battery",
    name: "Solar Battery",
    category: "Solar Panels & Power",
    price: 280000,
    image: "/images/solar-battery.jpg",
    description: "Battery for a compatible backup-power system. Specify chemistry, voltage and capacity.",
    available: true,
  },
  {
    id: "power-station",
    name: "Portable Power Station",
    category: "Solar Panels & Power",
    price: 350000,
    image: "/images/power-station.jpg",
    description: "Portable energy storage for compatible devices and appliances. Add watt-hour and output ratings.",
    available: true,
  },
  {
    id: "solar-generator",
    name: "Solar Generator Kit",
    category: "Solar Panels & Power",
    price: 300000,
    image: "/images/solar-generator.jpg",
    description: "Portable solar power kit. List exactly which panel, battery and charging accessories are included.",
    available: true,
  },
  {
    id: "solar-controller",
    name: "Solar Charge Controller",
    category: "Solar Accessories",
    price: 25000,
    image: "/images/solar-controller.jpg",
    description: "Charge controller for compatible solar panels and batteries. Specify controller type and rating.",
    available: true,
  },
  {
    id: "solar-cable",
    name: "Solar DC Cable",
    category: "Solar Accessories",
    price: 5000,
    image: "/images/solar-cable.jpg",
    description: "Solar cable for compatible installations. Specify conductor size and length.",
    available: true,
  },
  {
    id: "solar-connectors",
    name: "Solar Connectors",
    category: "Solar Accessories",
    price: 3000,
    image: "/images/solar-connectors.jpg",
    description: "Solar connectors and compatible cable accessories for suitable systems.",
    available: true,
  },
  {
    id: "solar-mounting",
    name: "Solar Panel Mounting Kit",
    category: "Solar Accessories",
    price: 25000,
    image: "/images/solar-mounting-kit.jpg",
    description: "Mounting hardware for appropriate panel installations. Confirm roof type and compatibility.",
    available: true,
  },
  {
    id: "dc-fan",
    name: "DC Fan for Solar Systems",
    category: "Solar Accessories",
    price: 22000,
    image: "/images/dc-fan.jpg",
    description: "DC fan for compatible solar or battery-powered systems. Confirm voltage and power requirements.",
    available: true,
  },
  {
    id: "solar-pump",
    name: "Solar Water Pump",
    category: "Solar Accessories",
    price: 125000,
    image: "/images/solar-water-pump.jpg",
    description: "Solar water pump options for appropriate applications. Specify head, flow rate and power requirements.",
    available: true,
  },
  {
    id: "solar-inverter-cable",
    name: "Inverter Cable and Fuse Kit",
    category: "Solar Accessories",
    price: 18000,
    image: "/images/inverter-cable-kit.jpg",
    description: "Suitable cables, fuses and related connection accessories. Match ratings to the intended installation.",
    available: true,
  },
  {
    id: "surge-protector",
    name: "Surge Protection Device",
    category: "Solar Accessories",
    price: 18000,
    image: "/images/surge-protector.jpg",
    description: "Surge protection for compatible electrical and solar installations. Verify specifications with an installer.",
    available: true,
  },
];

const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    type: "Web Development",
    image: "/images/project-portfolio.jpg",
    description:
      "A personal website for presenting technical skills, professional background and project work.",
    link: SITE.github,
  },
  {
    title: "Business Website",
    type: "Web Development",
    image: "/images/project-business.jpg",
    description:
      "Business-focused web experiences with clear service information and customer enquiry pathways.",
    link: SITE.github,
  },
  {
    title: "Technology Tutorials",
    type: "Content Creation",
    image: "/images/project-tech-content.jpg",
    description:
      "Practical technology content covering computer features, software and useful digital tools.",
    link: SITE.youtube,
  },
];

/*
 CARPENTRY GALLERY:
 Add your own photographs to public/images/carpentry/.
 Replace each path below with your actual filename.
 Keep landscape photos where possible so the large gallery looks professional.
*/
const CARPENTRY_GALLERY = [
  {
    image: "/images/carpentry/roofing-1.jpg",
    title: "Roof Carpentry",
    description: "Roof framing, timber work and roofing project.",
  },
  {
    image: "/images/carpentry/decking-1.jpg",
    title: "Decking and Formwork",
    description: "Decking carpentry and formwork for a building project.",
  },
  {
    image: "/images/carpentry/ceiling-1.jpg",
    title: "Ceiling Installation",
    description: "Ceiling framework, boarding and related carpentry.",
  },
  {
    image: "/images/carpentry/lintel-1.jpg",
    title: "Lintel Formwork",
    description: "Timber formwork associated with lintel construction.",
  },
  {
    image: "/images/carpentry/parapet-1.jpg",
    title: "Parapet Work",
    description: "Carpentry and formwork associated with parapet construction.",
  },
  {
    image: "/images/carpentry/boarding-1.jpg",
    title: "House Boarding",
    description: "Boarding and building-related timber work.",
  },
  {
    image: "/images/carpentry/site-1.jpg",
    title: "Construction Site",
    description: "A building project showing completed or ongoing carpentry work.",
  },
];

const SKILLS = [
  "JavaScript", "React", "Next.js", "HTML5", "CSS3",
  "Tailwind CSS", "Node.js", "Express", "MongoDB",
  "Mongoose", "API Integration", "AI Integration",
  "GitHub", "Website Hosting",
];

const money = (value) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);

function App() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
  });
  const [notice, setNotice] = useState("");
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const visibleProducts = PRODUCTS.filter((product) => {
    const categoryMatch =
      activeCategory === "All Products" ||
      product.category === activeCategory;

    const term = search.trim().toLowerCase();
    const searchMatch =
      !term ||
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term);

    return categoryMatch && searchMatch;
  });

  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const currentSlide = CARPENTRY_GALLERY[slide];

  // Automatic carpentry gallery; pause while hovered or when manually paused.
  useEffect(() => {
    if (paused || CARPENTRY_GALLERY.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % CARPENTRY_GALLERY.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused]);

  function moveSlide(direction) {
    setSlide((current) =>
      (current + direction + CARPENTRY_GALLERY.length) %
      CARPENTRY_GALLERY.length
    );
  }

  function addProduct(product) {
    if (!product.available) return;

    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });

    setNotice(`${product.name} added to your enquiry list.`);
  }

  function setQuantity(id, quantity) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeProduct(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function orderMessage() {
    const lines = cart.map(
      (item, index) =>
        `${index + 1}. ${item.name}\n   Category: ${item.category}\n   Quantity: ${item.quantity}\n   Displayed price: ${money(item.price)} each (please confirm)`
    );

    return [
      `PRODUCT ENQUIRY — ${SITE.business}`,
      "",
      "Hello Jaymart, please confirm the availability and final prices of these items:",
      "",
      ...lines,
      "",
      `Name: ${customer.name}`,
      `Phone: ${customer.phone}`,
      `Location: ${customer.location || "Not supplied"}`,
      `Additional requirements: ${customer.message || "None"}`,
      "",
      "Please confirm current prices, specifications, warranty and delivery options before I complete my order.",
    ].join("\n");
  }

  function sendOrder(event) {
    event.preventDefault();

    if (cart.length === 0) {
      setNotice("Add at least one product to your enquiry list.");
      return;
    }

    if (!customer.name.trim() || !customer.phone.trim()) {
      setNotice("Enter your name and phone number to continue.");
      return;
    }

    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(orderMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setNotice("Review the prepared WhatsApp message and press Send.");
  }

  function sendContact(event) {
    event.preventDefault();

    if (!contact.name.trim() || !contact.email.trim() || !contact.message.trim()) {
      setNotice("Complete your name, email and message.");
      return;
    }

    const text = [
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      "",
      contact.message,
    ].join("\n");

    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const closeMenu = () => setMobileMenu(false);

  return (
    <div className="jaymart">
      <style>{`
        :root {
          --bg: #0b192b;
          --panel: #102238;
          --text: #e5edf7;
          --muted: #91a5bb;
          --accent: #65f0d0;
          --line: rgba(198,220,243,.13);
          --white: #fff;
          --ink: #142237;
          --shopbg: #f4f7fb;
          --blue: #1768b5;
          --green: #128654;
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 85px; }
        body { margin: 0; font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .jaymart { color: var(--text); background: var(--bg); line-height: 1.65; }
        .jaymart a { color: inherit; text-decoration: none; }
        .jaymart button, .jaymart input, .jaymart textarea { font: inherit; }
        .jaymart button, .jaymart a { -webkit-tap-highlight-color: transparent; }
        .jaymart button:focus-visible, .jaymart a:focus-visible, .jaymart input:focus-visible, .jaymart textarea:focus-visible {
          outline: 3px solid var(--accent); outline-offset: 3px;
        }
        .wrap { width: min(1240px, calc(100% - 44px)); margin: 0 auto; }
        .eyebrow { margin: 0 0 12px; color: var(--accent); font: 700 .74rem/1.4 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .15em; text-transform: uppercase; }
        .heading { margin: 0 0 18px; font-size: clamp(2rem,4vw,3rem); line-height: 1.13; letter-spacing: -.045em; color: #eef5ff; }
        .lead { max-width: 740px; margin: 0; color: #a9bbcf; font-size: 1rem; }
        .section { padding: 94px 0; border-top: 1px solid var(--line); }
        .section-head { max-width: 790px; margin-bottom: 35px; }
        .site-header { position: sticky; top: 0; z-index: 100; background: rgba(8,20,35,.96); border-bottom: 1px solid var(--line); backdrop-filter: blur(16px); }
        .nav { min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 22px; }
        .brand { display: flex; align-items: center; gap: 11px; min-width: 210px; }
        .brand-mark { width: 43px; height: 43px; display: grid; place-items: center; border-radius: 12px; background: var(--accent); color: #0b192b; font-weight: 950; }
        .brand strong { display: block; font-size: .94rem; letter-spacing: .06em; }
        .brand small { display: block; color: var(--muted); font-size: .68rem; }
        .nav-links { display: flex; gap: 17px; align-items: center; }
        .nav-links a { color: #c4d2e2; font-size: .8rem; }
        .nav-links a:hover { color: var(--accent); }
        .menu-button { display: none; border: 1px solid var(--line); background: transparent; color: white; padding: 9px 12px; border-radius: 8px; }
        .button { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid transparent; border-radius: 9px; padding: 12px 17px; font-weight: 800; font-size: .88rem; cursor: pointer; transition: transform .2s, background .2s; }
        .button:hover { transform: translateY(-2px); }
        .button-primary { color: #071829 !important; background: var(--accent); }
        .button-outline { color: #e9f2ff !important; border-color: rgba(226,240,255,.28); background: transparent; }
        .button-dark { color: white !important; background: #102238; }
        .button-green { color: white !important; background: var(--green); }
        .button-small { padding: 8px 11px; font-size: .78rem; }
        .hero { padding: 83px 0 72px; }
        .hero-grid { display: grid; grid-template-columns: minmax(0,1fr) 250px; gap: 50px; align-items: center; }
        .hero h1 { margin: 15px 0 17px; font-size: clamp(2.65rem,6vw,5rem); line-height: 1.02; letter-spacing: -.065em; color: #f3f7fc; }
        .hero h1 span { color: var(--accent); }
        .hero-title { color: #b5c8dc; font-size: 1.15rem; }
        .hero-copy { max-width: 700px; color: #a2b4c9; font-size: 1rem; }
        .hero-buttons { display: flex; flex-wrap: wrap; gap: 11px; margin-top: 25px; }
        .hero-social { display: flex; flex-wrap: wrap; gap: 15px; margin-top: 24px; color: #a7b9cd; font-size: .82rem; }
        .hero-social a:hover { color: var(--accent); }
        .hero-aside { border-left: 1px solid var(--line); padding-left: 25px; }
        .aside-label { margin: 0 0 14px; color: var(--accent); font: 700 .7rem ui-monospace, monospace; letter-spacing: .12em; }
        .aside-link { display: block; padding: 11px 0; color: #c9d8e9; border-bottom: 1px solid var(--line); font-size: .85rem; }
        .aside-link:after { content: " ↗"; color: var(--accent); }
        .aside-link:hover { color: var(--accent); }
        .about-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 50px; align-items: start; }
        .profile-placeholder { min-height: 330px; display: grid; place-items: center; padding: 25px; border: 1px solid var(--line); border-radius: 16px; background: linear-gradient(145deg,#102944,#0d1d31); text-align: center; }
        .profile-placeholder img { width: 100%; max-height: 460px; object-fit: cover; border-radius: 12px; }
        .profile-placeholder .monogram { width: 100px; height: 100px; display: grid; place-items: center; margin: auto auto 18px; border-radius: 25px; color: #071829; background: var(--accent); font-size: 2rem; font-weight: 950; }
        .profile-placeholder strong { display: block; color: #f4f8ff; font-size: 1.2rem; }
        .profile-placeholder p, .about-copy p { color: #9fb2c8; }
        .facts { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 23px; }
        .fact { padding: 14px; border: 1px solid var(--line); border-radius: 10px; }
        .fact strong { display: block; color: #e9f2ff; font-size: .88rem; }
        .fact span { color: var(--muted); font-size: .76rem; }
        .tag-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }
        .tag { padding: 6px 10px; border: 1px solid rgba(101,240,208,.18); border-radius: 5px; color: #bdece1; background: rgba(101,240,208,.045); font: .75rem ui-monospace, monospace; }
        .experience-list { border-top: 1px solid var(--line); }
        .experience-item { display: grid; grid-template-columns: 125px 1fr; gap: 20px; padding: 23px 0; border-bottom: 1px solid var(--line); }
        .experience-date { color: #93a8bd; font: .76rem ui-monospace, monospace; }
        .experience-item h3 { margin: 0 0 5px; color: #e8f1fb; font-size: 1rem; }
        .experience-item p { margin: 0; color: #9fb2c8; font-size: .88rem; }
        .cards { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 16px; }
        .service-card { padding: 22px; border: 1px solid var(--line); border-radius: 13px; background: rgba(255,255,255,.025); }
        .service-icon { font-size: 1.4rem; }
        .service-card h3 { margin: 12px 0 8px; color: #eaf3ff; font-size: 1rem; }
        .service-card p { margin: 0; color: #9fb2c8; font-size: .86rem; }
        .project-card { overflow: hidden; border: 1px solid var(--line); border-radius: 13px; background: #0e2034; }
        .project-image { aspect-ratio: 16/10; background: #162b42; overflow: hidden; }
        .project-image img { width: 100%; height: 100%; object-fit: cover; }
        .project-fallback { height: 100%; min-height: 150px; display: grid; place-items: center; padding: 20px; color: #94adc5; text-align: center; font-size: .8rem; }
        .project-body { padding: 19px; }
        .project-type { color: var(--accent); font: .7rem ui-monospace, monospace; text-transform: uppercase; }
        .project-body h3 { margin: 9px 0; color: #eaf2fb; font-size: 1.03rem; }
        .project-body p { color: #9fb2c8; font-size: .86rem; }
        .project-body a { color: var(--accent); font-size: .82rem; font-weight: 800; }
        .shop-section { background: var(--shopbg); color: var(--ink); }
        .shop-section .heading { color: #102238; }
        .shop-section .lead { color: #607187; }
        .shop-section .eyebrow { color: #126b92; }
        .shop-bar { display: grid; grid-template-columns: 1fr auto; gap: 13px; margin: 24px 0 15px; }
        .shop-input { width: 100%; padding: 13px 14px; border: 1px solid #d8e0ea; border-radius: 9px; background: white; color: #15253a; }
        .category-scroll { display: flex; gap: 8px; overflow-x: auto; padding: 2px 0 13px; margin-bottom: 14px; }
        .category-btn { flex-shrink: 0; padding: 8px 12px; border: 1px solid #d8e0ea; border-radius: 6px; background: white; color: #41546b; font-size: .77rem; font-weight: 750; }
        .category-btn.active { background: #102238; color: white; border-color: #102238; }
        .catalogue-meta { display: flex; justify-content: space-between; align-items: center; gap: 15px; margin: 10px 0 20px; color: #62748a; font-size: .83rem; }
        .product-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 15px; }
        .product-card { display: flex; flex-direction: column; min-width: 0; overflow: hidden; border: 1px solid #e0e6ee; border-radius: 12px; background: white; box-shadow: 0 4px 15px rgba(19,42,70,.035); }
        .product-image { position: relative; aspect-ratio: 1/0.88; overflow: hidden; background: #e9eef4; }
        .product-image img { width: 100%; height: 100%; object-fit: cover; transition: transform .25s; }
        .product-card:hover .product-image img { transform: scale(1.04); }
        .product-placeholder { height: 100%; min-height: 135px; display: grid; place-items: center; padding: 15px; color: #697b90; text-align: center; font-size: .77rem; }
        .stock-label { position: absolute; top: 10px; left: 10px; padding: 4px 7px; border-radius: 5px; color: #126441; background: #e3f8ec; font-size: .67rem; font-weight: 800; }
        .stock-label.out { color: #9e2929; background: #fff0f0; }
        .product-info { display: flex; flex: 1; flex-direction: column; padding: 14px; }
        .product-category { color: #58748f; font-size: .68rem; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; }
        .product-info h3 { margin: 7px 0; color: #14243a; font-size: .93rem; line-height: 1.35; }
        .product-info p { flex: 1; margin: 0 0 13px; color: #6b7b8d; font-size: .78rem; line-height: 1.55; }
        .price { color: #0e263f; font-size: 1.08rem; font-weight: 900; }
        .price-note { margin: 3px 0 12px; color: #8a98a8; font-size: .68rem; }
        .product-info .button { width: 100%; }
        .cart-section { margin-top: 36px; padding: 24px; border: 1px solid #dce4ed; border-radius: 13px; background: white; }
        .cart-section h3 { margin: 0 0 8px; color: #14243a; }
        .cart-intro { margin: 0 0 20px; color: #6b7b8d; font-size: .85rem; }
        .cart-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        .cart-item { display: grid; grid-template-columns: 1fr auto; gap: 12px; padding: 13px 0; border-bottom: 1px solid #e6ebf1; }
        .cart-item strong { display: block; color: #14243a; font-size: .87rem; }
        .cart-item small { color: #75859a; }
        .qty { display: flex; gap: 8px; align-items: center; margin-top: 6px; }
        .qty button { width: 27px; height: 27px; border: 1px solid #dbe3ec; border-radius: 6px; background: #f8fafc; }
        .remove { border: 0; color: #a33131; background: transparent; font-size: .76rem; }
        .empty-cart { padding: 28px 10px; color: #728197; border: 1px dashed #d1dbe6; border-radius: 10px; text-align: center; }
        .field { display: grid; gap: 6px; margin-bottom: 12px; }
        .field label { color: #3e5269; font-size: .78rem; font-weight: 800; }
        .field input, .field textarea { width: 100%; padding: 11px 12px; border: 1px solid #d7e0e9; border-radius: 8px; color: #14243a; background: white; }
        .field textarea { min-height: 90px; resize: vertical; }
        .notice { margin: 12px 0; padding: 11px 13px; border-radius: 8px; color: #145c40; background: #e8f9f0; font-size: .82rem; }
        .note { color: #718096; font-size: .75rem; }
        .carpentry-intro { max-width: 830px; margin-bottom: 28px; }
        .gallery { position: relative; overflow: hidden; border: 1px solid var(--line); border-radius: 16px; background: #071525; }
        .gallery-image { position: relative; height: clamp(300px, 58vw, 650px); background: #12263c; touch-action: pan-y; }
        .gallery-image img { width: 100%; height: 100%; object-fit: cover; }
        .gallery-placeholder { width: 100%; height: 100%; display: grid; place-items: center; padding: 25px; color: #a9bfd5; text-align: center; }
        .gallery-caption { position: absolute; right: 0; bottom: 0; left: 0; padding: 60px 25px 22px; background: linear-gradient(transparent,rgba(3,10,19,.94)); }
        .gallery-caption small { color: var(--accent); font: .74rem ui-monospace, monospace; text-transform: uppercase; }
        .gallery-caption h3 { margin: 5px 0; color: white; font-size: clamp(1.25rem,3vw,2rem); }
        .gallery-caption p { max-width: 680px; margin: 0; color: #d1deed; }
        .gallery-arrow { position: absolute; top: 50%; z-index: 2; width: 44px; height: 44px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,.35); border-radius: 50%; color: white; background: rgba(5,18,32,.65); font-size: 1.4rem; transform: translateY(-50%); }
        .gallery-arrow:hover { color: #071829; background: var(--accent); }
        .gallery-arrow.left { left: 15px; }
        .gallery-arrow.right { right: 15px; }
        .gallery-bottom { display: flex; justify-content: space-between; align-items: center; gap: 15px; flex-wrap: wrap; padding: 14px 16px; border-top: 1px solid var(--line); }
        .gallery-controls { display: flex; align-items: center; gap: 8px; }
        .gallery-controls button { padding: 7px 10px; border: 1px solid var(--line); border-radius: 7px; color: #e2edf9; background: #102238; font-size: .77rem; }
        .dots { display: flex; gap: 7px; }
        .dot { width: 8px; height: 8px; padding: 0; border: 0; border-radius: 50%; background: #4b6279; }
        .dot.active { width: 23px; border-radius: 9px; background: var(--accent); }
        .gallery-count { color: #9cb0c6; font: .75rem ui-monospace, monospace; }
        .construction-services { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 13px; margin-top: 25px; }
        .construction-service { padding: 17px; border: 1px solid var(--line); border-radius: 10px; }
        .construction-service strong { display: block; color: #e8f1fb; font-size: .88rem; }
        .construction-service span { display: block; margin-top: 6px; color: #9fb2c8; font-size: .79rem; }
        .content-banner { display: flex; justify-content: space-between; align-items: center; gap: 25px; padding: 25px; border: 1px solid var(--line); border-radius: 13px; background: #102238; }
        .content-banner h3 { margin: 0 0 8px; color: #edf4fd; }
        .content-banner p { max-width: 700px; margin: 0; color: #9fb2c8; }
        .contact-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 35px; }
        .contact-list { display: grid; gap: 12px; }
        .contact-item { padding: 15px; border: 1px solid var(--line); border-radius: 10px; }
        .contact-item strong { display: block; color: #edf4fd; }
        .contact-item a, .contact-item span { display: block; margin-top: 5px; color: #9fb2c8; overflow-wrap: anywhere; }
        .contact-form { padding: 22px; border: 1px solid var(--line); border-radius: 13px; background: rgba(255,255,255,.025); }
        .contact-form h3 { margin: 0 0 18px; color: #f0f6ff; }
        .contact-form .field label { color: #bdcde0; }
        .contact-form .field input, .contact-form .field textarea { border-color: var(--line); color: white; background: #0b192b; }
        .contact-form .field input::placeholder, .contact-form .field textarea::placeholder { color: #71859d; }
        .socials { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 20px; }
        .socials a { padding: 8px 10px; border: 1px solid var(--line); border-radius: 7px; color: #c5d4e6; font-size: .78rem; }
        .socials a:hover { color: var(--accent); border-color: var(--accent); }
        .footer { padding: 25px 0; border-top: 1px solid var(--line); color: #8ea3b9; font-size: .78rem; }
        .footer-row { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px; }
        .float-wa { position: fixed; right: 18px; bottom: 18px; z-index: 80; width: 52px; height: 52px; display: grid; place-items: center; border-radius: 50%; color: white !important; background: #15965c; box-shadow: 0 8px 24px rgba(0,0,0,.28); font-size: 1.4rem; }
        @media (max-width: 1050px) {
          .nav-links { gap: 10px; }
          .nav-links a { font-size: .74rem; }
          .product-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
        }
        @media (max-width: 850px) {
          .menu-button { display: block; }
          .nav { min-height: 70px; }
          .nav-links { display: none; position: absolute; top: 70px; left: 0; right: 0; padding: 12px 22px 20px; background: #0b192b; border-bottom: 1px solid var(--line); }
          .nav-links.open { display: grid; gap: 0; }
          .nav-links a { padding: 12px 0; border-bottom: 1px solid var(--line); font-size: .88rem; }
          .hero-grid, .about-grid, .cart-layout, .contact-grid { grid-template-columns: 1fr; }
          .hero-grid { gap: 30px; }
          .hero-aside { border-left: 0; padding-left: 0; }
          .hero-aside-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 0 18px; }
          .hero-aside-inner .aside-label { grid-column: 1/-1; }
          .cards { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .construction-services { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .section { padding: 70px 0; }
        }
        @media (max-width: 560px) {
          .wrap { width: calc(100% - 28px); }
          .brand { min-width: 0; }
          .brand strong { font-size: .82rem; }
          .brand small { font-size: .61rem; }
          .brand-mark { width: 37px; height: 37px; }
          .hero { padding: 57px 0; }
          .hero h1 { font-size: clamp(2.5rem,12vw,3.4rem); }
          .hero-title { font-size: 1rem; }
          .hero-buttons { flex-direction: column; align-items: stretch; }
          .hero-aside-inner { grid-template-columns: 1fr 1fr; }
          .section { padding: 57px 0; }
          .cards { grid-template-columns: 1fr; }
          .product-grid { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; }
          .product-info { padding: 10px; }
          .product-info h3 { font-size: .83rem; }
          .product-info p { font-size: .73rem; }
          .product-info .price { font-size: .94rem; }
          .product-info .button { padding: 9px 6px; font-size: .72rem; }
          .shop-bar { grid-template-columns: 1fr; }
          .cart-section { padding: 16px; }
          .experience-item { grid-template-columns: 1fr; gap: 7px; }
          .facts { grid-template-columns: 1fr 1fr; }
          .construction-services { grid-template-columns: 1fr; }
          .gallery-image { height: 380px; }
          .gallery-arrow { width: 36px; height: 36px; }
          .gallery-arrow.left { left: 8px; }
          .gallery-arrow.right { right: 8px; }
          .gallery-caption { padding: 55px 16px 18px; }
          .gallery-caption p { font-size: .82rem; }
          .content-banner { align-items: stretch; flex-direction: column; padding: 18px; }
          .contact-form { padding: 16px; }
          .footer-row { flex-direction: column; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; }
        }
      `}</style>

      <header className="site-header">
        <div className="wrap nav">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">UJ</span>
            <span>
              <strong>UDOTOR JOHN</strong>
              <small>Developer · Digital Professional</small>
            </span>
          </a>

          <nav className={`nav-links ${mobileMenu ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#shop" onClick={closeMenu}>Shop</a>
            <a href="#carpentry" onClick={closeMenu}>Carpentry</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMobileMenu((value) => !value)}
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <main>
        {/* PORTFOLIO HERO */}
        <section className="hero" id="home">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">Full-Stack Developer · Digital Professional</p>
              <h1>
                Udotor John
                <br />
                <span>Itsenegbemhe.</span>
              </h1>
              <p className="hero-title">
                I build practical digital experiences for people and businesses.
              </p>
              <p className="hero-copy">
                I’m a Computer Science graduate and full-stack web developer
                working with modern JavaScript technologies, APIs and databases.
                My professional work also spans website development, social media
                management, content management and technology education.
              </p>
              <div className="hero-buttons">
                <a className="button button-primary" href="#projects">Explore My Work ↘</a>
                <a className="button button-outline" href="#contact">Let's Talk</a>
              </div>
              <div className="hero-social">
                <a href={SITE.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href={SITE.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href={SITE.youtube} target="_blank" rel="noreferrer">YouTube ↗</a>
              </div>
            </div>

            <aside className="hero-aside">
              <div className="hero-aside-inner">
                <p className="aside-label">ON THIS WEBSITE</p>
                <a className="aside-link" href="#about">About me</a>
                <a className="aside-link" href="#experience">Experience</a>
                <a className="aside-link" href="#projects">Selected work</a>
                <a className="aside-link" href="#services">Digital services</a>
                <a className="aside-link" href="#shop">Online shop</a>
                <a className="aside-link" href="#carpentry">Building carpentry</a>
              </div>
            </aside>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="wrap about-grid">
            <div className="profile-placeholder">
              {/*
                PROFILE PHOTO:
                Upload your portrait to public/images/profile.jpg.
                Replace the monogram area with:
                <img src="/images/profile.jpg" alt="Udotor John Itsenegbemhe" />
              */}
              <div>
                <div className="monogram">UJ</div>
                <strong>Udotor John Itsenegbemhe</strong>
                <p>Computer Science Graduate · Full-Stack Developer</p>
              </div>
            </div>

            <div className="about-copy">
              <p className="eyebrow">01 / About</p>
              <h2 className="heading">Technology, communication and practical problem-solving.</h2>
              <p>
                I hold a B.Sc. in Computer Science from Ambrose Alli University,
                where I graduated magna cum laude. My technical background
                includes React, Next.js, JavaScript, Node.js, Express, MongoDB,
                APIs, AI integration and website hosting.
              </p>
              <p>
                I also work in social media and content management, including
                practical technology content. Outside the digital space, I bring
                almost 15 years of carpentry experience focused on building
                construction, roofing and related timber work.
              </p>
              <div className="facts">
                <div className="fact">
                  <strong>B.Sc. Computer Science</strong>
                  <span>Ambrose Alli University</span>
                </div>
                <div className="fact">
                  <strong>Web Development Training</strong>
                  <span>React, Node.js, MongoDB and JavaScript</span>
                </div>
                <div className="fact">
                  <strong>Digital Content</strong>
                  <span>Social media and content management</span>
                </div>
                <div className="fact">
                  <strong>Building Carpentry</strong>
                  <span>Roofing and construction-related woodwork</span>
                </div>
              </div>
              <div className="tag-list">
                {SKILLS.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">02 / Experience and Background</p>
              <h2 className="heading">The foundation behind my work.</h2>
              <p className="lead">
                A combination of formal education, technical training,
                computer-based operational experience and practical work.
              </p>
            </div>

            <div className="experience-list">
              <article className="experience-item">
                <div className="experience-date">2019 – 2020</div>
                <div>
                  <h3>Web Development Industrial Trainee — Infinity Computer Tech</h3>
                  <p>
                    Completed industrial training focused on web development,
                    HTML, CSS, PHP fundamentals and website hosting.
                  </p>
                </div>
              </article>
              <article className="experience-item">
                <div className="experience-date">2011 – 2020</div>
                <div>
                  <h3>Ad Hoc Staff / Computer Operator — INEC</h3>
                  <p>
                    Supported computer-based operations during Continuous Voter
                    Registration and election-related assignments.
                  </p>
                </div>
              </article>
              <article className="experience-item">
                <div className="experience-date">Education</div>
                <div>
                  <h3>B.Sc. Computer Science — Ambrose Alli University</h3>
                  <p>Graduated in August 2021, magna cum laude.</p>
                </div>
              </article>
              <article className="experience-item">
                <div className="experience-date">Practical work</div>
                <div>
                  <h3>Building Carpentry and Construction Work</h3>
                  <p>
                    Almost 15 years of carpentry experience in roofing,
                    decking/formwork, ceilings, boarding and related
                    building construction work.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">03 / Selected Work</p>
              <h2 className="heading">Work that shows how I think and build.</h2>
              <p className="lead">
                Replace the image placeholders with screenshots and thumbnails
                from your actual websites and published content. Add direct live
                project links when available.
              </p>
            </div>
            <div className="cards">
              {PROJECTS.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.parentElement.innerHTML =
                          `<div class="project-fallback">Add your image:<br/>${project.image}</div>`;
                      }}
                    />
                  </div>
                  <div className="project-body">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Explore related work ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DIGITAL SERVICES */}
        <section className="section" id="services">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">04 / Services</p>
              <h2 className="heading">Digital services for growing businesses.</h2>
              <p className="lead">
                Practical services focused on building a professional online
                presence, improving customer communication and presenting
                products and information clearly.
              </p>
            </div>
            <div className="cards">
              {[
                ["⌘", "Website Design and Development", "Responsive business websites, portfolio websites and service websites."],
                ["⚙", "Full-Stack Development", "Frontend and backend development with JavaScript, React, Node.js, Express and MongoDB."],
                ["📣", "Social Media Management", "Page management, content planning, publishing and audience engagement support."],
                ["✍", "Content Management", "Organising and maintaining website content, product information and digital communications."],
                ["🎬", "Technology Content Creation", "Practical computer tips, Windows tutorials and useful digital technology content."],
                ["🧰", "Computer Support", "Computer troubleshooting, software setup, maintenance and practical technical assistance."],
              ].map(([icon, title, description]) => (
                <article className="service-card" key={title}>
                  <span className="service-icon">{icon}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FULL ONLINE STORE */}
        <section className="section shop-section" id="shop">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">JAYMART ONLINE SHOP</p>
              <h2 className="heading">The technology you need, in one place.</h2>
              <p className="lead">
                Computers, mobile phones, accessories, audio devices, networking
                equipment, solar panels, solar fans, inverters, batteries and
                related power accessories. Add products to your enquiry list to
                request a confirmed quote from Jaymart.
              </p>
            </div>

            <div className="shop-bar">
              <input
                className="shop-input"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products, categories and accessories..."
                aria-label="Search products"
              />
              <a className="button button-dark" href="#cart">
                Enquiry List ({cartQuantity})
              </a>
            </div>

            <div className="category-scroll" aria-label="Product categories">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`category-btn ${activeCategory === category ? "active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="catalogue-meta">
              <span>{visibleProducts.length} products displayed</span>
              <span>Prices are editable examples — confirm before publishing.</span>
            </div>

            <div className="product-grid">
              {visibleProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.parentElement.insertAdjacentHTML(
                          "beforeend",
                          `<div class="product-placeholder">Add product photo<br/>${product.image}</div>`
                        );
                      }}
                    />
                    <span className={`stock-label ${product.available ? "" : "out"}`}>
                      {product.available ? "Enquire to confirm stock" : "Out of stock"}
                    </span>
                  </div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="price">{money(product.price)}</div>
                    <div className="price-note">Example price · edit before publishing</div>
                    <button
                      type="button"
                      className="button button-dark"
                      disabled={!product.available}
                      onClick={() => addProduct(product)}
                    >
                      {product.available ? "Add to Enquiry +" : "Unavailable"}
                    </button>
                  </div>
                </article>
              ))}
              {visibleProducts.length === 0 && (
                <div className="empty-cart">
                  No matching products. Try another search or category.
                </div>
              )}
            </div>

            <div className="cart-section" id="cart">
              <h3>Your Product Enquiry</h3>
              <p className="cart-intro">
                Choose the items and quantities you want. Your list will be
                prepared in WhatsApp so Jaymart can confirm the current prices,
                availability and delivery details.
              </p>

              {notice && <div className="notice" role="status">{notice}</div>}

              <div className="cart-layout">
                <div>
                  {cart.length === 0 ? (
                    <div className="empty-cart">
                      Your enquiry list is empty. Add a product from the catalogue.
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div className="cart-item" key={item.id}>
                        <div>
                          <strong>{item.name}</strong>
                          <small>{item.category} · {money(item.price)} each (example)</small>
                          <div className="qty">
                            <button
                              type="button"
                              aria-label={`Reduce ${item.name} quantity`}
                              onClick={() => setQuantity(item.id, item.quantity - 1)}
                            >−</button>
                            <strong>{item.quantity}</strong>
                            <button
                              type="button"
                              aria-label={`Increase ${item.name} quantity`}
                              onClick={() => setQuantity(item.id, item.quantity + 1)}
                            >+</button>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="remove"
                          onClick={() => removeProduct(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <form onSubmit={sendOrder}>
                  <div className="field">
                    <label htmlFor="order-name">Full name *</label>
                    <input
                      id="order-name"
                      value={customer.name}
                      onChange={(event) => setCustomer({ ...customer, name: event.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="order-phone">Phone / WhatsApp *</label>
                    <input
                      id="order-phone"
                      type="tel"
                      value={customer.phone}
                      onChange={(event) => setCustomer({ ...customer, phone: event.target.value })}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="order-location">Delivery location</label>
                    <input
                      id="order-location"
                      value={customer.location}
                      onChange={(event) => setCustomer({ ...customer, location: event.target.value })}
                      placeholder="City or delivery area"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="order-message">Additional requirements</label>
                    <textarea
                      id="order-message"
                      value={customer.message}
                      onChange={(event) => setCustomer({ ...customer, message: event.target.value })}
                      placeholder="Preferred brand, model, specifications or delivery details"
                    />
                  </div>
                  <button className="button button-green" type="submit" style={{ width: "100%" }}>
                    Send Enquiry on WhatsApp ↗
                  </button>
                  <p className="note">
                    WhatsApp opens with the selected products and quantities.
                    You must press Send in WhatsApp. This is not an automatic
                    payment or confirmed-order system.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CARPENTRY SWIPE GALLERY */}
        <section className="section" id="carpentry">
          <div className="wrap">
            <div className="carpentry-intro">
              <p className="eyebrow">05 / Building Carpentry and Construction</p>
              <h2 className="heading">Work you can see. Experience you can discuss.</h2>
              <p className="lead">
                Almost 15 years of practical carpentry experience in roofing,
                decking and formwork, lintel and parapet formwork, ceilings,
                house boarding and other building-related timber work. This is
                construction carpentry, separate from furniture-making.
              </p>
            </div>

            <div
              className="gallery"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
            >
              <div
                className="gallery-image"
                onTouchStart={(event) => {
                  const touch = event.touches[0];
                  event.currentTarget.dataset.touchStart = String(touch.clientX);
                }}
                onTouchEnd={(event) => {
                  const start = Number(event.currentTarget.dataset.touchStart || 0);
                  const end = event.changedTouches[0].clientX;
                  const distance = end - start;
                  if (Math.abs(distance) > 45) moveSlide(distance > 0 ? -1 : 1);
                }}
              >
                <img
                  key={currentSlide.image}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.parentElement.insertAdjacentHTML(
                      "afterbegin",
                      `<div class="gallery-placeholder">Add your actual project photo here:<br/>${currentSlide.image}</div>`
                    );
                  }}
                />

                <button
                  type="button"
                  className="gallery-arrow left"
                  onClick={() => moveSlide(-1)}
                  aria-label="Previous carpentry project"
                >‹</button>
                <button
                  type="button"
                  className="gallery-arrow right"
                  onClick={() => moveSlide(1)}
                  aria-label="Next carpentry project"
                >›</button>

                <div className="gallery-caption">
                  <small>Carpentry project {slide + 1} / {CARPENTRY_GALLERY.length}</small>
                  <h3>{currentSlide.title}</h3>
                  <p>{currentSlide.description}</p>
                </div>
              </div>

              <div className="gallery-bottom">
                <div className="gallery-controls">
                  <button type="button" onClick={() => moveSlide(-1)}>← Previous</button>
                  <button
                    type="button"
                    onClick={() => setPaused((value) => !value)}
                  >
                    {paused ? "▶ Resume Auto-Slide" : "Ⅱ Pause Auto-Slide"}
                  </button>
                  <button type="button" onClick={() => moveSlide(1)}>Next →</button>
                </div>

                <div className="dots" aria-label="Choose a project image">
                  {CARPENTRY_GALLERY.map((item, index) => (
                    <button
                      key={item.image}
                      type="button"
                      className={`dot ${slide === index ? "active" : ""}`}
                      onClick={() => setSlide(index)}
                      aria-label={`Show ${item.title}`}
                      aria-pressed={slide === index}
                    />
                  ))}
                </div>
                <span className="gallery-count">
                  {String(slide + 1).padStart(2, "0")} / {String(CARPENTRY_GALLERY.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="construction-services">
              {[
                ["Roof carpentry", "Roof framing, trusses and related timber work."],
                ["Decking and formwork", "Timber support and formwork for building construction."],
                ["Lintel and parapet formwork", "Carpentry and formwork coordinated with the construction team."],
                ["Ceiling installation", "Ceiling framing, supports and boarding."],
                ["House boarding", "Building boarding and related timber work."],
                ["General carpentry contracting", "Project scope discussion, site coordination and carpentry work."],
              ].map(([title, description]) => (
                <div className="construction-service" key={title}>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </div>
              ))}
            </div>

            <div className="hero-buttons" style={{ marginTop: 25 }}>
              <a
                className="button button-primary"
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello, I would like to discuss a building carpentry project. I can share site photos, location and scope of work.")}`}
                target="_blank"
                rel="noreferrer"
              >
                Discuss a Carpentry Project ↗
              </a>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY CONTENT */}
        <section className="section" id="content">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">06 / Technology Content</p>
              <h2 className="heading">Making everyday technology easier to use.</h2>
              <p className="lead">
                I share practical technology tutorials and digital content,
                including computer features and Windows tips. Explore my public
                channels for videos and updates.
              </p>
            </div>
            <div className="content-banner">
              <div>
                <h3>Jaymart Computers on YouTube</h3>
                <p>
                  Add your favourite video thumbnails and direct tutorial links
                  here as your content library grows.
                </p>
              </div>
              <a className="button button-primary" href={SITE.youtube} target="_blank" rel="noreferrer">
                Visit YouTube ↗
              </a>
            </div>
            <div className="socials">
              <a href={SITE.youtube} target="_blank" rel="noreferrer">YouTube ↗</a>
              <a href={SITE.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
              <a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
              <a href={SITE.tiktok} target="_blank" rel="noreferrer">TikTok ↗</a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">07 / Contact</p>
              <h2 className="heading">Have a project or product in mind?</h2>
              <p className="lead">
                Contact me about websites, digital content, computers and
                accessories, mobile phones, solar products or construction carpentry.
              </p>
            </div>

            <div className="contact-grid">
              <div>
                <div className="contact-list">
                  <div className="contact-item">
                    <strong>Location</strong>
                    <span>{SITE.location}</span>
                  </div>
                  <div className="contact-item">
                    <strong>Email</strong>
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </div>
                  <div className="contact-item">
                    <strong>Phone</strong>
                    <a href="tel:+2348156015526">{SITE.phone}</a>
                  </div>
                  <div className="contact-item">
                    <strong>WhatsApp</strong>
                    <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">
                      Start a conversation ↗
                    </a>
                  </div>
                </div>
                <div className="socials">
                  <a href={SITE.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a href={SITE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href={SITE.facebook} target="_blank" rel="noreferrer">Facebook</a>
                  <a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a>
                </div>
              </div>

              <form className="contact-form" onSubmit={sendContact}>
                <h3>Send a Message</h3>
                <div className="field">
                  <label htmlFor="contact-name">Your name *</label>
                  <input
                    id="contact-name"
                    value={contact.name}
                    onChange={(event) => setContact({ ...contact, name: event.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="contact-email">Email address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={contact.email}
                    onChange={(event) => setContact({ ...contact, email: event.target.value })}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="contact-message">How can I help? *</label>
                  <textarea
                    id="contact-message"
                    value={contact.message}
                    onChange={(event) => setContact({ ...contact, message: event.target.value })}
                    placeholder="Tell me about your project, product or service enquiry."
                    required
                  />
                </div>
                <button className="button button-primary" type="submit" style={{ width: "100%" }}>
                  Continue to WhatsApp ↗
                </button>
                <p className="note">
                  This prepares a message in WhatsApp. Press Send there to submit it.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-row">
          <div>
            <strong>{SITE.business}</strong>
            <div>Digital services · Computers · Mobile · Solar · Carpentry</div>
          </div>
          <span>© {new Date().getFullYear()} Jaymart. All rights reserved.</span>
        </div>
      </footer>

      <a
        className="float-wa"
        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello Jaymart, I would like to make an enquiry.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Jaymart on WhatsApp"
        title="Chat with Jaymart"
      >
        ☎
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
