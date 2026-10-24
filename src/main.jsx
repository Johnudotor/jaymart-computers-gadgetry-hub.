
import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/*
  JAYMART COMPUTERS AND GADGETRY HUB
  Complete main.jsx replacement.

  IMAGE GUIDE:
  1. Replace each image URL in PRODUCTS with your own product photos.
  2. Replace the profile image placeholder in the About section with your portrait.
  3. Add screenshots of real websites you have built in the Portfolio section.
  4. Add photos of your roofing, ceiling, decking, lintel, parapet and other
     construction/carpentry work in the Construction section.
  5. Use clear, well-lit photos that you own or have permission to publish.

  ORDER FLOW:
  Customers add products to their enquiry list, enter quantities and contact
  details, then send the list through WhatsApp for confirmation.
  This is an enquiry system, not an automatic payment gateway.
*/

const BUSINESS = {
  name: "Jaymart Computers and Gadgetry Hub",
  shortName: "JAYMART",
  email: "johnudotor@gmail.com",
  phone: "+234 815 601 5526",
  alternatePhone: "+234 810 467 5749",
  whatsapp: "2348104675749",
  location: "Benin City, Edo State, Nigeria",
  github: "https://github.com/johnudotor",
  linkedin:
    "https://linkedin.com/in/udotor-john-itsenegbemhe-0a621678",
  facebook: "https://www.facebook.com/share/1Emj7Tj3is/?mibextid=wwXIfr",
  instagram:
    "https://www.instagram.com/jaymartcomputers1?rpxt=ZXh2aGg4cDVsNGZ4&utm_source=qr",
  youtube: "https://youtube.com/@jaymartcomputers?si=Ii-PmG4jkO0yfgld",
  tiktok: "https://www.tiktok.com/@jaymartcomputers",
};

/*
  PRODUCT PHOTOS:
  Replace image URLs with your own images.
  Use a direct image URL or a path to an image placed in your public folder,
  such as "/images/laptop.jpg".
  Do not use a Google search results URL as an image source.
*/
const PRODUCTS = [
  {
    id: "laptop",
    name: "Laptops and Notebooks",
    category: "Computers",
    description:
      "Laptops for work, study, business, programming and everyday computing.",
    image: "/images/laptop.jpg",
    badge: "Computers",
  },
  {
    id: "desktop",
    name: "Desktop Computers",
    category: "Computers",
    description:
      "Desktop systems and computer setups for offices, homes and businesses.",
    image: "/images/desktop-computer.jpg",
    badge: "Computers",
  },
  {
    id: "monitor",
    name: "Monitors and Displays",
    category: "Accessories",
    description:
      "Displays for office work, productivity, entertainment and workstations.",
    image: "/images/monitor.jpg",
    badge: "Accessories",
  },
  {
    id: "keyboard-mouse",
    name: "Keyboards and Mice",
    category: "Accessories",
    description:
      "Wired and wireless input devices for everyday computing and work.",
    image: "/images/keyboard-mouse.jpg",
    badge: "Accessories",
  },
  {
    id: "storage",
    name: "Storage Devices",
    category: "Accessories",
    description:
      "Flash drives, external storage and other data-storage accessories.",
    image: "/images/storage-devices.jpg",
    badge: "Accessories",
  },
  {
    id: "networking",
    name: "Networking Accessories",
    category: "Accessories",
    description:
      "Routers, network accessories and connectivity equipment.",
    image: "/images/networking.jpg",
    badge: "Accessories",
  },
  {
    id: "smartphones",
    name: "Mobile Phones",
    category: "Mobile Phones",
    description:
      "Smartphones for communication, business, learning and entertainment.",
    image: "/images/mobile-phones.jpg",
    badge: "Mobile",
  },
  {
    id: "phone-accessories",
    name: "Phone Accessories",
    category: "Mobile Phones",
    description:
      "Phone chargers, cables, cases, screen protectors and other accessories.",
    image: "/images/phone-accessories.jpg",
    badge: "Mobile",
  },
  {
    id: "power-bank",
    name: "Power Banks and Chargers",
    category: "Mobile Phones",
    description:
      "Portable charging solutions and compatible charging accessories.",
    image: "/images/power-bank.jpg",
    badge: "Mobile",
  },
  {
    id: "solar-panel",
    name: "Solar Panels",
    category: "Solar Products",
    description:
      "Solar panels for home, business and other power-system applications.",
    image: "/images/solar-panels.jpg",
    badge: "Solar",
  },
  {
    id: "inverter",
    name: "Inverters and Power Systems",
    category: "Solar Products",
    description:
      "Inverters and power-system components selected for your requirements.",
    image: "/images/inverter.jpg",
    badge: "Solar",
  },
  {
    id: "solar-battery",
    name: "Solar Batteries",
    category: "Solar Products",
    description:
      "Battery options for compatible solar and backup-power installations.",
    image: "/images/solar-batteries.jpg",
    badge: "Solar",
  },
  {
    id: "solar-accessories",
    name: "Solar Accessories",
    category: "Solar Products",
    description:
      "Charge controllers, cables, mounting accessories and related components.",
    image: "/images/solar-accessories.jpg",
    badge: "Solar",
  },
];

const PRODUCT_CATEGORIES = [
  "All Products",
  "Computers",
  "Accessories",
  "Mobile Phones",
  "Solar Products",
];

const WEB_SKILLS = [
  "JavaScript",
  "React",
  "Next.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "API Integration",
  "AI Integration",
  "GitHub",
  "Website Hosting",
];

const DIGITAL_SERVICES = [
  {
    icon: "💻",
    title: "Website Design and Development",
    description:
      "Professional, responsive websites for businesses, organisations, personal brands and service providers.",
  },
  {
    icon: "⚙️",
    title: "Full-Stack Web Development",
    description:
      "Frontend and backend development using modern JavaScript technologies, APIs and databases.",
  },
  {
    icon: "📱",
    title: "Social Media Management",
    description:
      "Support for social media pages, content planning, publishing, brand consistency and audience engagement.",
  },
  {
    icon: "🎬",
    title: "Content Management and Creation",
    description:
      "Organising website and social content, developing useful technology content and presenting information clearly.",
  },
  {
    icon: "🧰",
    title: "Computer Support and Maintenance",
    description:
      "Computer troubleshooting, software installation, system setup and practical technical support.",
  },
  {
    icon: "🌐",
    title: "Business Technology Support",
    description:
      "Practical advice on online business presence, website improvements and technology solutions for daily operations.",
  },
];

const CONSTRUCTION_SERVICES = [
  {
    title: "Roof Carpentry and Roofing Works",
    description:
      "Roof timber framing, truss construction, roof framing and related carpentry work.",
    image: "/images/roofing-work.jpg",
  },
  {
    title: "Decking and Formwork",
    description:
      "Carpentry work for decking and formwork, including preparation of timber supports and shuttering where required.",
    image: "/images/decking-formwork.jpg",
  },
  {
    title: "Lintel and Parapet Formwork",
    description:
      "Timber formwork and carpentry associated with lintels and parapet construction, in coordination with the building team.",
    image: "/images/lintel-parapet.jpg",
  },
  {
    title: "Ceiling Installation",
    description:
      "Ceiling framing, support structures, boarding and associated installation work.",
    image: "/images/ceiling-work.jpg",
  },
  {
    title: "House Boarding and Timber Work",
    description:
      "Boarding of houses and other building-related timber work as required by the project.",
    image: "/images/house-boarding.jpg",
  },
  {
    title: "General Carpentry and Contracting",
    description:
      "Building carpentry, site coordination and general contracting for carpentry-related construction work.",
    image: "/images/carpentry-work.jpg",
  },
];

const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    type: "Web Development",
    description:
      "A portfolio website designed to present development skills, selected work and professional information.",
    image: "/images/project-portfolio.jpg",
    link: BUSINESS.github,
  },
  {
    title: "Business Website Development",
    type: "Web Development",
    description:
      "Responsive website experiences focused on clear service information, usability and customer enquiries.",
    image: "/images/project-business-website.jpg",
    link: BUSINESS.github,
  },
  {
    title: "Technology Content",
    type: "Content and Social Media",
    description:
      "Practical technology content that helps people understand computer features, software and everyday digital tools.",
    image: "/images/project-tech-content.jpg",
    link: BUSINESS.youtube,
  },
];

/* ---------- Reusable components ---------- */

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function ImagePlaceholder({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`image-placeholder ${className}`}>
      {!failed && src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="image-fallback">
          <span aria-hidden="true">▧</span>
          <span>{alt}</span>
          <small>Replace with your photo</small>
        </div>
      )}
    </div>
  );
}

function WhatsAppLink({ children, message = "Hello Jaymart, I would like to make an enquiry." }) {
  const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a href={url} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
      {children}
    </a>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");
  const [enquiryItems, setEnquiryItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerLocation, setCustomerLocation] = useState("");
  const [customerMessage, setCustomerMessage] = useState("");
  const [enquiryNotice, setEnquiryNotice] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactNotice, setContactNotice] = useState("");

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const enquiryCount = enquiryItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function addToEnquiry(product) {
    setEnquiryItems((current) => {
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

    setEnquiryNotice(`${product.name} added to your enquiry list.`);
    window.setTimeout(() => setEnquiryNotice(""), 3000);
  }

  function changeQuantity(productId, amount) {
    setEnquiryItems((current) =>
      current
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromEnquiry(productId) {
    setEnquiryItems((current) =>
      current.filter((item) => item.id !== productId)
    );
  }

  function createOrderMessage() {
    const itemsText = enquiryItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}\n   Category: ${item.category}\n   Quantity: ${item.quantity}`
      )
      .join("\n\n");

    return [
      `PRODUCT ENQUIRY — ${BUSINESS.name}`,
      "",
      "Hello Jaymart, I would like to enquire about the following items:",
      "",
      itemsText,
      "",
      "CUSTOMER DETAILS",
      `Name: ${customerName || "Not provided"}`,
      `Phone: ${customerPhone || "Not provided"}`,
      `Location: ${customerLocation || "Not provided"}`,
      `Additional requirements: ${customerMessage || "None provided"}`,
      "",
      "Please confirm availability, current prices, product specifications and delivery or collection options.",
    ].join("\n");
  }

  function sendProductEnquiry(event) {
    event.preventDefault();

    if (enquiryItems.length === 0) {
      setEnquiryNotice("Please add at least one product before sending.");
      return;
    }

    if (!customerName.trim() || !customerPhone.trim()) {
      setEnquiryNotice("Please enter your name and phone number.");
      return;
    }

    const message = createOrderMessage();
    const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setEnquiryNotice(
      "Your enquiry has been prepared in WhatsApp. Review it and press Send there."
    );
  }

  function sendGeneralContact(event) {
    event.preventDefault();

    if (
      !contactName.trim() ||
      !contactEmail.trim() ||
      !contactMessage.trim()
    ) {
      setContactNotice("Please complete your name, email and message.");
      return;
    }

    const message = [
      `Hello, my name is ${contactName}.`,
      `Email: ${contactEmail}`,
      `Subject: ${contactSubject || "General enquiry"}`,
      "",
      contactMessage,
    ].join("\n");

    const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setContactNotice(
      "Your message has been prepared in WhatsApp. Press Send to contact Jaymart."
    );
  }

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <style>{`
        :root {
          --navy: #081426;
          --navy-2: #101f35;
          --blue: #1c76d2;
          --cyan: #42d5e8;
          --ink: #172438;
          --muted: #65738a;
          --paper: #f5f8fc;
          --white: #ffffff;
          --border: #e0e7f0;
          --green: #15965c;
          --radius: 18px;
          --shadow: 0 14px 40px rgba(8, 20, 38, .09);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 90px; }
        body {
          margin: 0;
          color: var(--ink);
          background: var(--white);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          line-height: 1.65;
        }
        body, button, input, textarea, select { font-family: inherit; }
        a { color: inherit; text-decoration: none; }
        img { display: block; max-width: 100%; }
        button, input, textarea { font: inherit; }
        button, a { -webkit-tap-highlight-color: transparent; }
        button { cursor: pointer; }
        button:focus-visible, a:focus-visible, input:focus-visible, textarea:focus-visible {
          outline: 3px solid rgba(66, 213, 232, .8);
          outline-offset: 3px;
        }
        .container { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }
        .section { padding: 88px 0; }
        .section-soft { background: var(--paper); }
        .section-dark { background: var(--navy); color: var(--white); }
        .eyebrow {
          margin: 0 0 12px;
          color: var(--blue);
          font-size: .76rem;
          font-weight: 850;
          letter-spacing: .16em;
          text-transform: uppercase;
        }
        .section-dark .eyebrow { color: var(--cyan); }
        .section-heading { max-width: 760px; margin-bottom: 34px; }
        .section-heading.centered { margin-left: auto; margin-right: auto; text-align: center; }
        .section-heading h2 {
          margin: 0;
          color: var(--navy);
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.13;
          letter-spacing: -.045em;
        }
        .section-dark .section-heading h2 { color: var(--white); }
        .section-description { margin: 16px 0 0; color: var(--muted); font-size: 1.02rem; }
        .section-dark .section-description { color: #c0cddd; }
        .site-header {
          position: sticky; top: 0; z-index: 50;
          background: rgba(8, 20, 38, .96);
          border-bottom: 1px solid rgba(255,255,255,.09);
          backdrop-filter: blur(16px);
        }
        .nav-row { min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .brand { display: inline-flex; align-items: center; gap: 11px; color: white; flex-shrink: 0; }
        .brand-mark {
          display: grid; place-items: center; width: 44px; height: 44px;
          border-radius: 13px; color: var(--navy); font-weight: 950;
          background: linear-gradient(135deg, var(--cyan), #80f2ce);
          box-shadow: 0 7px 22px rgba(66,213,232,.2);
        }
        .brand-name { display: block; font-weight: 900; letter-spacing: .06em; line-height: 1.2; }
        .brand-subtitle { display: block; color: #b8c9dc; font-size: .7rem; margin-top: 4px; }
        .nav-links { display: flex; align-items: center; gap: 20px; }
        .nav-links a { color: #d6e0ed; font-size: .86rem; font-weight: 650; transition: color .2s; }
        .nav-links a:hover { color: var(--cyan); }
        .nav-actions { display: flex; align-items: center; gap: 10px; }
        .menu-toggle {
          display: none; color: white; background: transparent;
          border: 1px solid rgba(255,255,255,.25); border-radius: 10px; padding: 8px 11px;
        }
        .btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 9px;
          padding: 12px 18px; border-radius: 11px; border: 1px solid transparent;
          font-size: .91rem; font-weight: 800; text-align: center;
          transition: transform .2s, box-shadow .2s, background .2s;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn-primary { color: white; background: var(--blue); box-shadow: 0 8px 20px rgba(28,118,210,.2); }
        .btn-primary:hover { background: #155eaa; }
        .btn-outline { border-color: rgba(255,255,255,.32); color: white; background: transparent; }
        .btn-outline-dark { border-color: var(--border); color: var(--navy); background: white; }
        .btn-whatsapp { color: white; background: var(--green); }
        .btn-whatsapp:hover { background: #0f7c4b; }
        .btn-small { padding: 9px 12px; font-size: .82rem; }
        .hero {
          position: relative; overflow: hidden; padding: 88px 0 76px;
          color: white; background:
          radial-gradient(circle at 80% 12%, rgba(66,213,232,.19), transparent 28%),
          radial-gradient(circle at 10% 90%, rgba(28,118,210,.2), transparent 34%),
          linear-gradient(135deg, #081426, #10243e 70%, #0a1b2f);
        }
        .hero-grid { display: grid; grid-template-columns: 1.12fr .88fr; gap: 48px; align-items: center; }
        .hero-kicker {
          display: inline-flex; align-items: center; gap: 9px; padding: 7px 12px;
          border: 1px solid rgba(66,213,232,.28); border-radius: 999px;
          color: #c8faff; background: rgba(66,213,232,.07); font-size: .78rem; font-weight: 750;
        }
        .hero h1 { max-width: 720px; margin: 22px 0; font-size: clamp(2.8rem, 6vw, 5rem); line-height: 1.02; letter-spacing: -.065em; }
        .hero h1 span { color: var(--cyan); }
        .hero-copy { max-width: 620px; color: #c5d2e2; font-size: 1.08rem; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 27px; }
        .hero-note { margin-top: 25px; color: #a9bad0; font-size: .85rem; }
        .hero-panel {
          padding: 25px; border: 1px solid rgba(255,255,255,.14);
          border-radius: 25px; background: rgba(255,255,255,.06);
          box-shadow: 0 25px 80px rgba(0,0,0,.2);
        }
        .hero-panel-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 20px; }
        .hero-panel-top strong { font-size: 1rem; }
        .live-dot { display: inline-flex; align-items: center; gap: 7px; color: #a9f6d2; font-size: .76rem; }
        .live-dot:before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: #42e59d; }
        .hero-feature-list { display: grid; gap: 12px; }
        .hero-feature {
          display: flex; gap: 14px; align-items: flex-start; padding: 14px;
          border: 1px solid rgba(255,255,255,.08); border-radius: 14px;
          background: rgba(7,16,30,.32);
        }
        .hero-feature-icon { display: grid; place-items: center; width: 43px; height: 43px; flex-shrink: 0; border-radius: 12px; background: rgba(66,213,232,.13); font-size: 1.25rem; }
        .hero-feature strong { display: block; color: white; }
        .hero-feature span { display: block; color: #b7c8dc; font-size: .83rem; margin-top: 3px; }
        .trust-strip { padding: 19px 0; background: #edf5fc; border-bottom: 1px solid #e2ebf5; }
        .trust-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; }
        .trust-item { display: flex; align-items: center; gap: 10px; color: #30425a; font-size: .86rem; font-weight: 750; }
        .trust-item span { font-size: 1.25rem; }
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 45px; align-items: center; }
        .about-panel {
          min-height: 350px; display: grid; place-items: center; padding: 26px;
          border-radius: 24px; background:
          radial-gradient(circle at 20% 20%, rgba(66,213,232,.28), transparent 30%),
          linear-gradient(145deg, #0d2540, #123b5e);
          color: white; overflow: hidden;
        }
        .about-panel-inner { width: 100%; max-width: 360px; }
        .about-monogram { display: grid; place-items: center; width: 85px; height: 85px; margin-bottom: 20px; border-radius: 22px; background: var(--cyan); color: var(--navy); font-size: 1.7rem; font-weight: 950; }
        .about-panel h3 { margin: 0 0 8px; font-size: 1.65rem; }
        .about-panel p { margin: 0; color: #d0e1f1; }
        .about-text p { color: var(--muted); }
        .fact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 22px 0; }
        .fact { padding: 13px; border: 1px solid var(--border); border-radius: 12px; background: white; }
        .fact strong { display: block; color: var(--navy); font-size: .9rem; }
        .fact span { color: var(--muted); font-size: .79rem; }
        .tag-list { display: flex; flex-wrap: wrap; gap: 9px; }
        .tag { display: inline-flex; padding: 7px 11px; border: 1px solid #dce6f2; border-radius: 999px; background: #f8fbff; color: #30435b; font-size: .8rem; font-weight: 700; }
        .cards-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 20px; }
        .service-card, .project-card, .construction-card, .product-card {
          min-width: 0; overflow: hidden; border: 1px solid var(--border);
          border-radius: var(--radius); background: white; box-shadow: 0 4px 18px rgba(8,20,38,.035);
          transition: transform .22s, box-shadow .22s;
        }
        .service-card:hover, .project-card:hover, .construction-card:hover, .product-card:hover {
          transform: translateY(-4px); box-shadow: var(--shadow);
        }
        .service-card { padding: 24px; }
        .service-icon { display: grid; place-items: center; width: 49px; height: 49px; margin-bottom: 17px; border-radius: 15px; background: #e9f7ff; font-size: 1.45rem; }
        .service-card h3, .project-card h3, .construction-card h3, .product-card h3 { margin: 0 0 9px; color: var(--navy); font-size: 1.08rem; line-height: 1.35; }
        .service-card p, .project-card p, .construction-card p, .product-card p { margin: 0; color: var(--muted); font-size: .9rem; }
        .skill-section { margin-top: 35px; padding-top: 26px; border-top: 1px solid var(--border); }
        .skill-section h3 { margin: 0 0 14px; font-size: 1rem; }
        .project-card .image-placeholder, .construction-card .image-placeholder { aspect-ratio: 16 / 10; }
        .project-body, .construction-body { padding: 20px; }
        .project-type { display: inline-block; margin-bottom: 10px; color: var(--blue); font-size: .72rem; font-weight: 850; letter-spacing: .08em; text-transform: uppercase; }
        .project-link { display: inline-flex; margin-top: 16px; color: var(--blue); font-weight: 800; font-size: .86rem; }
        .image-placeholder { position: relative; width: 100%; aspect-ratio: 4 / 3; overflow: hidden; background: linear-gradient(135deg,#e4edf7,#f7fbff); }
        .image-placeholder img { width: 100%; height: 100%; object-fit: cover; transition: transform .35s; }
        .product-card:hover .image-placeholder img { transform: scale(1.035); }
        .image-fallback { height: 100%; min-height: 150px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; padding: 16px; text-align: center; color: #52657b; background: linear-gradient(135deg,#e7eff8,#f8fbff); }
        .image-fallback span:first-child { font-size: 2rem; }
        .image-fallback span:nth-child(2) { font-weight: 800; font-size: .9rem; }
        .image-fallback small { font-size: .74rem; }
        .shop-toolbar { display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: center; margin-bottom: 22px; }
        .search-box { width: 100%; padding: 13px 15px; border: 1px solid var(--border); border-radius: 12px; color: var(--ink); background: white; }
        .category-list { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
        .category-btn { padding: 9px 13px; border: 1px solid var(--border); border-radius: 999px; color: #40516a; background: white; font-size: .82rem; font-weight: 750; }
        .category-btn.active { color: white; border-color: var(--navy); background: var(--navy); }
        .product-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 17px; }
        .product-card .image-placeholder { aspect-ratio: 4 / 3; }
        .product-body { padding: 16px; }
        .product-badge { display: inline-flex; margin-bottom: 9px; padding: 4px 8px; border-radius: 999px; color: #145b9f; background: #e8f4ff; font-size: .69rem; font-weight: 850; }
        .product-card h3 { font-size: .98rem; }
        .product-card p { font-size: .82rem; min-height: 65px; }
        .product-actions { margin-top: 15px; }
        .product-actions .btn { width: 100%; }
        .shop-notice { margin: 0 0 17px; padding: 12px 15px; border: 1px solid #a7e9cb; border-radius: 11px; color: #0b7046; background: #eafbf3; font-size: .88rem; }
        .enquiry-layout { display: grid; grid-template-columns: 1.1fr .9fr; gap: 25px; align-items: start; margin-top: 40px; }
        .enquiry-panel, .enquiry-form { padding: 24px; border: 1px solid var(--border); border-radius: 18px; background: white; }
        .enquiry-panel h3, .enquiry-form h3 { margin: 0 0 8px; color: var(--navy); font-size: 1.2rem; }
        .muted { color: var(--muted); font-size: .88rem; }
        .empty-enquiry { margin-top: 20px; padding: 25px 15px; border: 1px dashed #cbd7e5; border-radius: 13px; color: var(--muted); text-align: center; }
        .enquiry-item { display: grid; grid-template-columns: 1fr auto; gap: 12px; align-items: center; padding: 15px 0; border-bottom: 1px solid var(--border); }
        .enquiry-item:last-child { border-bottom: 0; }
        .enquiry-item strong { display: block; color: var(--navy); font-size: .91rem; }
        .enquiry-item small { color: var(--muted); font-size: .76rem; }
        .quantity-controls { display: flex; align-items: center; gap: 8px; margin-top: 7px; }
        .quantity-controls button { display: grid; place-items: center; width: 28px; height: 28px; border: 1px solid var(--border); border-radius: 8px; color: var(--navy); background: #f8fbff; font-weight: 900; }
        .quantity-controls span { min-width: 20px; text-align: center; font-weight: 800; }
        .remove-btn { border: 0; color: #b42318; background: transparent; font-size: .78rem; font-weight: 800; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .field { display: grid; gap: 6px; margin-bottom: 14px; }
        .field label { color: #304158; font-size: .82rem; font-weight: 800; }
        .field input, .field textarea {
          width: 100%; padding: 12px 13px; border: 1px solid #d6e0eb;
          border-radius: 10px; color: var(--ink); background: #fff;
        }
        .field textarea { min-height: 110px; resize: vertical; }
        .field input::placeholder, .field textarea::placeholder { color: #95a2b3; }
        .full-width { grid-column: 1 / -1; }
        .form-note { margin: 12px 0 0; color: var(--muted); font-size: .78rem; }
        .empty-state { grid-column: 1 / -1; padding: 30px; border: 1px dashed var(--border); border-radius: 14px; text-align: center; color: var(--muted); }
        .construction-intro { max-width: 850px; margin-bottom: 30px; }
        .construction-note { margin-top: 25px; padding: 16px 18px; border-left: 4px solid var(--cyan); border-radius: 0 12px 12px 0; color: #d0dceb; background: rgba(255,255,255,.06); font-size: .88rem; }
        .content-banner {
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          padding: 28px; border-radius: 20px; background: linear-gradient(135deg,#eaf7ff,#f4fbff);
          border: 1px solid #d7eaf9;
        }
        .content-banner h3 { margin: 0 0 8px; color: var(--navy); font-size: 1.35rem; }
        .content-banner p { max-width: 700px; margin: 0; color: var(--muted); }
        .contact-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 28px; align-items: start; }
        .contact-info { display: grid; gap: 13px; }
        .contact-item { padding: 17px; border: 1px solid rgba(255,255,255,.1); border-radius: 14px; background: rgba(255,255,255,.045); }
        .contact-item strong { display: block; color: white; }
        .contact-item a, .contact-item span { display: block; margin-top: 5px; color: #bdccdd; overflow-wrap: anywhere; }
        .contact-form { padding: 24px; border: 1px solid rgba(255,255,255,.12); border-radius: 18px; background: rgba(255,255,255,.055); }
        .contact-form h3 { margin: 0 0 20px; color: white; }
        .contact-form .field label { color: #d5e0ed; }
        .contact-form .field input, .contact-form .field textarea { border-color: rgba(255,255,255,.16); color: white; background: rgba(3,12,25,.35); }
        .contact-form .field input::placeholder, .contact-form .field textarea::placeholder { color: #9eafc2; }
        .contact-form .form-note { color: #b5c5d8; }
        .social-links { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
        .social-link { display: inline-flex; align-items: center; gap: 8px; padding: 9px 12px; border: 1px solid rgba(255,255,255,.2); border-radius: 10px; color: #e4eef9; font-size: .82rem; font-weight: 750; }
        .social-link:hover { border-color: var(--cyan); color: var(--cyan); }
        .site-footer { padding: 27px 0; color: #b4c3d6; background: #050e1a; font-size: .82rem; }
        .footer-row { display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap; }
        .footer-links { display: flex; flex-wrap: wrap; gap: 15px; }
        .footer-links a:hover { color: var(--cyan); }
        .floating-whatsapp {
          position: fixed; right: 20px; bottom: 20px; z-index: 40;
          display: grid; place-items: center; width: 56px; height: 56px;
          border-radius: 50%; color: white; background: var(--green);
          box-shadow: 0 10px 30px rgba(0,0,0,.22); font-size: 1.55rem;
        }
        .floating-whatsapp:hover { transform: translateY(-3px); }
        @media (max-width: 1050px) {
          .nav-links { gap: 12px; }
          .nav-links a { font-size: .8rem; }
          .nav-actions .btn { padding: 10px 12px; }
          .product-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
        }
        @media (max-width: 850px) {
          .menu-toggle { display: inline-flex; align-items: center; gap: 8px; }
          .nav-actions { margin-left: auto; }
          .nav-links {
            position: absolute; top: 76px; left: 0; right: 0; display: none;
            align-items: stretch; gap: 0; padding: 12px 20px 20px;
            background: var(--navy); border-bottom: 1px solid rgba(255,255,255,.12);
          }
          .nav-links.open { display: flex; flex-direction: column; }
          .nav-links a { padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,.08); font-size: .92rem; }
          .nav-links a:last-child { border-bottom: 0; }
          .hero-grid, .two-col, .contact-grid, .enquiry-layout { grid-template-columns: 1fr; }
          .hero-grid { gap: 32px; }
          .hero-panel { max-width: 650px; }
          .cards-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .trust-grid { grid-template-columns: repeat(2,1fr); }
          .product-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .section { padding: 68px 0; }
        }
        @media (max-width: 560px) {
          .container { width: min(100% - 28px, 1160px); }
          .nav-row { min-height: 68px; gap: 8px; }
          .brand-mark { width: 38px; height: 38px; }
          .brand-name { font-size: .86rem; }
          .brand-subtitle { font-size: .63rem; }
          .nav-links { top: 68px; }
          .nav-actions .btn { display: none; }
          .hero { padding: 58px 0 52px; }
          .hero h1 { font-size: clamp(2.55rem, 12vw, 3.5rem); }
          .hero-copy { font-size: .98rem; }
          .hero-actions { flex-direction: column; align-items: stretch; }
          .hero-panel { padding: 16px; }
          .trust-grid { gap: 12px; }
          .trust-item { font-size: .77rem; }
          .section { padding: 56px 0; }
          .cards-grid, .product-grid { grid-template-columns: 1fr 1fr; gap: 11px; }
          .service-card { padding: 17px; }
          .service-card h3 { font-size: .97rem; }
          .service-card p { font-size: .83rem; }
          .product-body { padding: 12px; }
          .product-card h3 { font-size: .89rem; }
          .product-card p { min-height: 95px; font-size: .78rem; }
          .product-card .btn { padding: 9px 7px; font-size: .76rem; }
          .shop-toolbar { grid-template-columns: 1fr; }
          .category-list { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 7px; }
          .category-btn { flex-shrink: 0; }
          .enquiry-panel, .enquiry-form, .contact-form { padding: 17px; }
          .form-grid, .fact-grid { grid-template-columns: 1fr; }
          .content-banner { align-items: stretch; flex-direction: column; padding: 20px; }
          .floating-whatsapp { width: 50px; height: 50px; right: 13px; bottom: 13px; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <header className="site-header">
        <div className="container nav-row">
          <a href="#home" className="brand" onClick={closeMobileMenu}>
            <span className="brand-mark">JM</span>
            <span>
              <span className="brand-name">JAYMART</span>
              <span className="brand-subtitle">Computers · Web · Technology</span>
            </span>
          </a>

          <nav
            className={`nav-links ${mobileMenuOpen ? "open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#development" onClick={closeMobileMenu}>Web & Digital</a>
            <a href="#portfolio" onClick={closeMobileMenu}>Portfolio</a>
            <a href="#shop" onClick={closeMobileMenu}>Shop</a>
            <a href="#construction" onClick={closeMobileMenu}>Carpentry</a>
            <a href="#content" onClick={closeMobileMenu}>Tech Content</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </nav>

          <div className="nav-actions">
            <a className="btn btn-primary btn-small" href="#shop">Browse Products</a>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              ☰ Menu
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO: main professional identity and routes into each part of the business */}
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <span className="hero-kicker">Technology · Digital Solutions · Construction</span>
              <h1>
                I build digital experiences. <span>I make technology practical.</span>
              </h1>
              <p className="hero-copy">
                I’m Udotor John Itsenegbemhe — a Computer Science graduate,
                full-stack web developer, digital content professional and
                experienced building carpenter. Through Jaymart, I combine
                practical skills with dependable service for people and businesses.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#portfolio">Explore My Work ↗</a>
                <a className="btn btn-outline" href="#shop">Shop Computers & Solar</a>
                <a className="btn btn-outline" href="#contact">Work With Me</a>
              </div>
              <p className="hero-note">
                Based in Benin City, Edo State, Nigeria · Available for enquiries
                about digital services, products and carpentry projects.
              </p>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-top">
                <strong>What I bring to the table</strong>
                <span className="live-dot">Professional services</span>
              </div>
              <div className="hero-feature-list">
                <div className="hero-feature">
                  <span className="hero-feature-icon">⌘</span>
                  <div>
                    <strong>Web Development</strong>
                    <span>Responsive websites, frontend and backend solutions.</span>
                  </div>
                </div>
                <div className="hero-feature">
                  <span className="hero-feature-icon">🛒</span>
                  <div>
                    <strong>Technology Products</strong>
                    <span>Computers, mobile phones, accessories and solar products.</span>
                  </div>
                </div>
                <div className="hero-feature">
                  <span className="hero-feature-icon">📣</span>
                  <div>
                    <strong>Digital Content</strong>
                    <span>Social media management, content planning and technology tutorials.</span>
                  </div>
                </div>
                <div className="hero-feature">
                  <span className="hero-feature-icon">🏗️</span>
                  <div>
                    <strong>Building Carpentry</strong>
                    <span>Roofing, decking, formwork, ceilings and related building work.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="trust-strip">
          <div className="container trust-grid">
            <div className="trust-item"><span>🎓</span> Computer Science Graduate</div>
            <div className="trust-item"><span>💻</span> Full-Stack Web Development</div>
            <div className="trust-item"><span>📱</span> Digital & Content Management</div>
            <div className="trust-item"><span>🪚</span> Building Carpentry Experience</div>
          </div>
        </div>

        {/* ABOUT: use your own portrait in /public/images/profile.jpg if desired */}
        <section className="section" id="about">
          <div className="container two-col">
            <div className="about-panel">
              <div className="about-panel-inner">
                {/*
                  IMAGE PLACEHOLDER:
                  Add your professional portrait at /public/images/profile.jpg.
                  To display it here, replace the about-monogram div with:
                  <ImagePlaceholder src="/images/profile.jpg" alt="Udotor John Itsenegbemhe" />
                  Then style the portrait as needed.
                */}
                <div className="about-monogram">UJ</div>
                <h3>Udotor John Itsenegbemhe</h3>
                <p>Full-Stack Developer · Digital Professional · Building Carpenter</p>
              </div>
            </div>

            <div className="about-text">
              <SectionHeading
                eyebrow="About Me"
                title="A practical professional with skills across digital and hands-on work."
              />
              <p>
                I hold a B.Sc. in Computer Science from Ambrose Alli University,
                where I graduated magna cum laude. My technical background
                includes modern JavaScript development, frontend and backend
                technologies, APIs, AI integration and website hosting.
              </p>
              <p>
                Alongside technology, I bring long-term practical experience in
                building carpentry and related construction work. I also work
                across social media and content management, helping information
                and services reach their intended audience.
              </p>
              <div className="fact-grid">
                <div className="fact">
                  <strong>B.Sc. Computer Science</strong>
                  <span>Ambrose Alli University</span>
                </div>
                <div className="fact">
                  <strong>Full-Stack Development</strong>
                  <span>React, Node.js, Express, MongoDB</span>
                </div>
                <div className="fact">
                  <strong>Digital Communications</strong>
                  <span>Social media and content management</span>
                </div>
                <div className="fact">
                  <strong>Building Carpentry</strong>
                  <span>Roofing and construction-related woodwork</span>
                </div>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href={BUSINESS.github} target="_blank" rel="noreferrer">View GitHub ↗</a>
                <a className="btn btn-outline-dark" href={BUSINESS.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
              </div>
            </div>
          </div>
        </section>

        {/* DIGITAL SERVICES */}
        <section className="section section-soft" id="development">
          <div className="container">
            <SectionHeading
              eyebrow="Digital Services"
              title="Digital solutions designed around your goals."
              description="From creating a professional online presence to managing content and supporting everyday technology, these services help individuals and businesses work smarter online."
              centered
            />
            <div className="cards-grid">
              {DIGITAL_SERVICES.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon" aria-hidden="true">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>

            <div className="skill-section">
              <h3>Technical Skills and Tools</h3>
              <div className="tag-list">
                {WEB_SKILLS.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO: replace sample images with real project screenshots */}
        <section className="section" id="portfolio">
          <div className="container">
            <SectionHeading
              eyebrow="Selected Work"
              title="A portfolio built around practical digital work."
              description="Explore examples of web development and technology content. Replace the sample image paths with screenshots of your actual work so visitors can see the projects clearly."
            />
            <div className="cards-grid">
              {PROJECTS.map((project) => (
                <article className="project-card" key={project.title}>
                  <ImagePlaceholder src={project.image} alt={project.title} />
                  <div className="project-body">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                      View related work ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="muted" style={{ marginTop: 20 }}>
              Portfolio note: add direct links to individual live projects when available.
              The current links lead to your GitHub profile or YouTube channel, not to
              a claim that every project shown has a separate live demo.
            </p>
          </div>
        </section>

        {/* ONLINE SHOP */}
        <section className="section section-soft" id="shop">
          <div className="container">
            <SectionHeading
              eyebrow="Jaymart Online Shop"
              title="Computers, mobile phones and solar products."
              description="Browse the product categories, search for an item and add what you need to your enquiry list. Send the list to Jaymart to confirm availability, specifications, pricing and delivery options."
            />

            <div className="shop-toolbar">
              <input
                className="search-box"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search laptops, chargers, phones, solar panels..."
                aria-label="Search products"
              />
              <a className="btn btn-primary" href="#product-enquiry">
                Enquiry List ({enquiryCount})
              </a>
            </div>

            <div className="category-list" aria-label="Filter product categories">
              {PRODUCT_CATEGORIES.map((category) => (
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

            {enquiryNotice && <p className="shop-notice" role="status">{enquiryNotice}</p>}

            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <ImagePlaceholder src={product.image} alt={product.name} />
                  <div className="product-body">
                    <span className="product-badge">{product.badge}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="product-actions">
                      <button
                        type="button"
                        className="btn btn-primary btn-small"
                        onClick={() => addToEnquiry(product)}
                      >
                        + Add to Enquiry
                      </button>
                    </div>
                  </div>
                </article>
              ))}
              {filteredProducts.length === 0 && (
                <div className="empty-state">
                  No matching products found. Try another search or category.
                </div>
              )}
            </div>

            <div className="enquiry-layout" id="product-enquiry">
              <div className="enquiry-panel">
                <h3>Your Product Enquiry List</h3>
                <p className="muted">
                  Choose products and quantities. We will confirm final prices and
                  availability with you before an order is finalised.
                </p>

                {enquiryItems.length === 0 ? (
                  <div className="empty-enquiry">
                    <div style={{ fontSize: "2rem" }}>🛒</div>
                    <strong>Your list is empty</strong>
                    <p className="muted">Add products from the catalogue to get started.</p>
                  </div>
                ) : (
                  enquiryItems.map((item) => (
                    <div className="enquiry-item" key={item.id}>
                      <div>
                        <strong>{item.name}</strong>
                        <small>{item.category}</small>
                        <div className="quantity-controls">
                          <button
                            type="button"
                            aria-label={`Reduce quantity of ${item.name}`}
                            onClick={() => changeQuantity(item.id, -1)}
                          >−</button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            aria-label={`Increase quantity of ${item.name}`}
                            onClick={() => changeQuantity(item.id, 1)}
                          >+</button>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => removeFromEnquiry(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>

              <form className="enquiry-form" onSubmit={sendProductEnquiry}>
                <h3>Send Your Enquiry</h3>
                <p className="muted">
                  Enter your contact details so Jaymart can respond to your request.
                </p>

                <div className="field">
                  <label htmlFor="customer-name">Your name *</label>
                  <input
                    id="customer-name"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="customer-phone">Phone / WhatsApp number *</label>
                  <input
                    id="customer-phone"
                    type="tel"
                    value={customerPhone}
                    onChange={(event) => setCustomerPhone(event.target.value)}
                    placeholder="Enter your contact number"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="customer-location">Delivery location or city</label>
                  <input
                    id="customer-location"
                    value={customerLocation}
                    onChange={(event) => setCustomerLocation(event.target.value)}
                    placeholder="e.g. Benin City"
                  />
                </div>

                <div className="field">
                  <label htmlFor="customer-message">Additional requirements</label>
                  <textarea
                    id="customer-message"
                    value={customerMessage}
                    onChange={(event) => setCustomerMessage(event.target.value)}
                    placeholder="Mention preferred brand, model, specifications, budget or delivery requirements."
                  />
                </div>

                <button className="btn btn-whatsapp" type="submit" style={{ width: "100%" }}>
                  Send Product Enquiry on WhatsApp ↗
                </button>
                <p className="form-note">
                  This opens WhatsApp with your product list prepared. Review the
                  message and press Send. Your order is not confirmed until Jaymart
                  responds and confirms the details.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* CONSTRUCTION / CARPENTRY: separate from furniture making */}
        <section className="section section-dark" id="construction">
          <div className="container">
            <div className="construction-intro">
              <SectionHeading
                eyebrow="Construction and Building Carpentry"
                title="Practical carpentry for building projects."
                description="Alongside my technology work, I have almost 15 years of experience in carpentry and building-related woodwork. This service focuses on construction carpentry and site work, not furniture-making."
              />
            </div>

            <div className="cards-grid">
              {CONSTRUCTION_SERVICES.map((service) => (
                <article className="construction-card" key={service.title}>
                  <ImagePlaceholder src={service.image} alt={service.title} />
                  <div className="construction-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="construction-note">
              <strong>Project enquiries:</strong> Share the project location, scope
              of work, drawings or measurements where available, expected timeline
              and site photos. Work scope, materials, pricing and scheduling should
              be agreed upon before commencement. Structural and concrete-related
              work should be carried out in coordination with appropriately
              qualified construction professionals.
            </div>

            <div className="hero-actions" style={{ marginTop: 24 }}>
              <WhatsAppLink message="Hello Jaymart, I would like to discuss a building carpentry or construction project. I can share the location, scope of work and photos for assessment." >
                Discuss a Carpentry Project ↗
              </WhatsAppLink>
              <a className="btn btn-outline" href="#contact">Request a Consultation</a>
            </div>
          </div>
        </section>

        {/* TECH CREATOR */}
        <section className="section" id="content">
          <div className="container">
            <SectionHeading
              eyebrow="Technology Content"
              title="Making technology easier to understand."
              description="I create and share practical technology content, including computer tips, Windows features and digital tools. This section connects visitors with my public content channels."
            />

            <div className="content-banner">
              <div>
                <h3>Explore practical tech tips and tutorials</h3>
                <p>
                  Visit my channels for technology content and updates. Add your
                  preferred tutorial thumbnails or video embeds here as your
                  content library grows.
                </p>
              </div>
              <a className="btn btn-primary" href={BUSINESS.youtube} target="_blank" rel="noreferrer">
                Visit YouTube Channel ↗
              </a>
            </div>

            {/*
              OPTIONAL VIDEO IMAGE PLACEHOLDERS:
              Add your own tutorial thumbnails to /public/images/tutorial-1.jpg,
              /public/images/tutorial-2.jpg, and /public/images/tutorial-3.jpg.
              You can add a grid of video cards here later with links to each video.
            */}

            <div className="social-links" style={{ marginTop: 25 }}>
              <a className="social-link" href={BUSINESS.youtube} target="_blank" rel="noreferrer">▶ YouTube</a>
              <a className="social-link" href={BUSINESS.facebook} target="_blank" rel="noreferrer">f Facebook</a>
              <a className="social-link" href={BUSINESS.instagram} target="_blank" rel="noreferrer">◎ Instagram</a>
              <a className="social-link" href={BUSINESS.tiktok} target="_blank" rel="noreferrer">♪ TikTok</a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section-dark" id="contact">
          <div className="container">
            <SectionHeading
              eyebrow="Get in Touch"
              title="Tell me what you need."
              description="Contact me about web development, social media and content management, computers and accessories, mobile phones, solar products, or construction carpentry."
            />

            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <strong>📍 Location</strong>
                  <span>{BUSINESS.location}</span>
                </div>
                <div className="contact-item">
                  <strong>✉️ Email</strong>
                  <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                </div>
                <div className="contact-item">
                  <strong>📞 Phone</strong>
                  <a href="tel:+2348156015526">{BUSINESS.phone}</a>
                  <a href="tel:+2348104675749">{BUSINESS.alternatePhone}</a>
                </div>
                <div className="contact-item">
                  <strong>💬 WhatsApp</strong>
                  <a
                    href={`https://wa.me/${BUSINESS.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Start a WhatsApp conversation ↗
                  </a>
                </div>
                <div className="social-links">
                  <a className="social-link" href={BUSINESS.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a className="social-link" href={BUSINESS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  <a className="social-link" href={BUSINESS.facebook} target="_blank" rel="noreferrer">Facebook</a>
                  <a className="social-link" href={BUSINESS.instagram} target="_blank" rel="noreferrer">Instagram</a>
                </div>
              </div>

              <form className="contact-form" onSubmit={sendGeneralContact}>
                <h3>Send a Message</h3>
                {contactNotice && (
                  <p className="shop-notice" role="status">{contactNotice}</p>
                )}
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="contact-name">Your name *</label>
                    <input
                      id="contact-name"
                      value={contactName}
                      onChange={(event) => setContactName(event.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-email">Email address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={contactEmail}
                      onChange={(event) => setContactEmail(event.target.value)}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="field full-width">
                    <label htmlFor="contact-subject">What is your enquiry about?</label>
                    <input
                      id="contact-subject"
                      value={contactSubject}
                      onChange={(event) => setContactSubject(event.target.value)}
                      placeholder="Website, product, social media, carpentry..."
                    />
                  </div>
                  <div className="field full-width">
                    <label htmlFor="contact-message">Your message *</label>
                    <textarea
                      id="contact-message"
                      value={contactMessage}
                      onChange={(event) => setContactMessage(event.target.value)}
                      placeholder="Tell me about your needs, project or questions."
                      required
                    />
                  </div>
                </div>
                <button className="btn btn-whatsapp" type="submit" style={{ width: "100%" }}>
                  Continue to WhatsApp ↗
                </button>
                <p className="form-note">
                  Your message will open in WhatsApp for you to review and send.
                  The email field is included in the message so you can be contacted
                  using the details you provide.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>
            <strong>JAYMART COMPUTERS AND GADGETRY HUB</strong>
            <div>Technology products · Digital services · Building carpentry</div>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#development">Digital Services</a>
            <a href="#shop">Shop</a>
            <a href="#construction">Carpentry</a>
            <a href="#contact">Contact</a>
          </div>
          <div>© {new Date().getFullYear()} Jaymart. All rights reserved.</div>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hello Jaymart, I would like to make an enquiry.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Jaymart on WhatsApp"
        title="Chat with Jaymart on WhatsApp"
      >
        ☎
      </a>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
