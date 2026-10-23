import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, BatteryCharging, Check, ChevronDown, Code2, Cpu, Headphones, Laptop, Menu, Monitor, Search, ShieldCheck, ShoppingBag, Smartphone, Sparkles, Wrench, X, Zap, Sun, Camera } from 'lucide-react';
import './styles.css';

const socials = {
  Facebook: 'https://www.facebook.com/share/1Emj7Tj3is/?mibextid=wwXIfr',
  Instagram: 'https://www.instagram.com/jaymartcomputers1?rpxt=ZXh2aGg4cDVsNGZ4&utm_source=qr',
  YouTube: 'https://youtube.com/@jaymartcomputers?si=Ii-PmG4jkO0yfgld',
  TikTok: 'https://www.tiktok.com/@jaymartcomputers?_r=1&_d=f2mj24dmf87g11&sec_uid=MS4wLjABAAAAnjyKsSwfqNPGZjzrBdXQhgYE6fzCgSXGIzzW59ys-yQFsJQ6FkFTGoKuPKlRt88g&share_author_id=7495985708138775574&sharer_language=en&source=h5_m&u_code=ek15da3bl4jd28&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=7B935E6E-E38B-4502-B919-F6C50AE1118B&user_id=7495985708138775574&sec_user_id=MS4wLjABAAAAnjyKsSwfqNPGZjzrBdXQhgYE6fzCgSXGIzzW59ys-yQFsJQ6FkFTGoKuPKlRt88g&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233'
};

const categories = [
  { name: 'All gear', icon: ShoppingBag }, 
  { name: 'PC accessories', icon: Laptop }, 
  { name: 'Phone accessories', icon: Smartphone }, 
  { name: 'Solar & Power', icon: Sun }, 
  { name: 'Security & CCTV', icon: Camera },
  { name: 'Audio', icon: Headphones }
];

const products = [
  { id: 1, name: 'Wireless mouse & keyboard sets', category: 'PC accessories', note: 'Everyday precision and workflow control', tag: 'WORK SMARTER', image: 'photo-1527814050087-3793815479db' },
  { id: 2, name: 'Ergonomic laptop stands', category: 'PC accessories', note: 'A more comfortable setup for long hours', tag: 'DESK ESSENTIAL', image: 'photo-1527864550417-7fd91fc51a46' },
  { id: 3, name: 'Original USB-C charging cables', category: 'Solar & Power', note: 'Reliable fast daily connectivity', tag: 'DAILY ESSENTIAL', image: 'photo-1583394838336-acd977736f90' },
  { id: 4, name: 'Wireless Bluetooth speakers & earbuds', category: 'Audio', note: 'Immersive sound for work and play', tag: 'TAKE YOUR SOUND', image: 'photo-1590658268037-6bf12165a8df' },
  { id: 5, name: 'Protective phone cases & glass', category: 'Phone accessories', note: 'Style meets robust everyday protection', tag: 'PHONE CARE', image: 'photo-1601593346740-925612772716' },
  { id: 6, name: 'High-capacity power banks', category: 'Solar & Power', note: 'Keep your devices moving all day', tag: 'STAY POWERED', image: 'photo-1609091839311-d5365f9ff1c5' },
  { id: 7, name: 'Solar fans & emergency lamps', category: 'Solar & Power', note: 'Uninterrupted comfort and bright lighting', tag: 'SOLAR SOLUTION', image: 'photo-1583394838336-acd977736f90' },
  { id: 8, name: 'Solar CCTV security cameras', category: 'Security & CCTV', note: 'Wireless smart surveillance with solar backup', tag: 'SMART SECURITY', image: 'photo-1557597774-9d273605dfa9' }
];

const services = [
  { icon: Wrench, number: '01', title: 'Expert repairs & maintenance', body: 'Professional hardware and software servicing including phone flashing, laptop formatting, and general diagnostic fixes.' },
  { icon: Sun, number: '02', title: 'Solar & power solutions', body: 'Reliable solar fans, lamps, and robust power backup systems designed to keep your home and office running smoothly.' },
  { icon: Camera, number: '03', title: 'Network & security installation', body: 'Professional CCTV installation and seamless WiFi setup to secure your premises and boost connectivity.' },
  { icon: Code2, number: '04', title: 'Web design & development', body: 'Modern responsive websites, custom digital tools, and full-stack web solutions built for businesses and creators.' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All gear');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([]);
  const [notice, setNotice] = useState('');
  const [form, setForm] = useState({ name: '', contact: '', interest: 'PC accessories', message: '' });
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { document.title = 'Jaymart Computers & Gadgetry Hub | Technology, Made Practical'; }, []);
  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(''), 3200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const filteredProducts = useMemo(() => products.filter(p =>
    (activeCategory === 'All gear' || p.category === activeCategory) &&
    `${p.name} ${p.category} ${p.note}`.toLowerCase().includes(search.toLowerCase())
  ), [activeCategory, search]);

  const toggleProduct = (product) => {
    setSelected(current => {
      const exists = current.some(item => item.id === product.id);
      setNotice(exists ? `${product.name} removed from your enquiry list` : `${product.name} added to your enquiry list`);
      return exists ? current.filter(item => item.id !== product.id) : [...current, product];
    });
  };

  const enquiryText = () => `Hello Jaymart Computers and Gadgetry Hub! I would like to enquire about:\n${selected.map(p => `• ${p.name} (${p.category})`).join('\n')}\n\nPlease share availability, pricing and delivery details.`;
  
  const copyEnquiry = async () => {
    const text = selected.length ? enquiryText() : 'Hello Jaymart Computers and Gadgetry Hub! I would like to enquire about your products and services.';
    try { await navigator.clipboard.writeText(text); setNotice('Enquiry copied. Paste it into your preferred social inbox.'); }
    catch { setNotice('Your enquiry is ready below in the enquiry panel.'); }
  };

  const submitForm = (e) => {
    e.preventDefault(); setFormError('');
    if (!form.name.trim() || !form.contact.trim() || !form.message.trim()) { setFormError('Please complete your name, contact detail, and message.'); return; }
    setSubmitted(true);
  };

  const makeMailto = () => `mailto:?subject=${encodeURIComponent('Jaymart website enquiry — ' + form.interest)}&body=${encodeURIComponent(`Name: ${form.name}\nContact: ${form.contact}\nInterest: ${form.interest}\n\n${form.message}`)}`;

  return <div className="site-shell">
    <div className="announcement">
      📍 12, Omorogbe Street, Benin Auchi Road, Eyaen, Benin City <span className="announcement-sep">/</span> 📞 +234 810 467 5749
    </div>
    
    <header className="header">
      <a className="brand" href="#home" aria-label="Jaymart home">
        <span className="brand-mark"><Cpu size={22}/></span>
        <span className="brand-copy"><strong>JAYMART</strong><small>COMPUTERS & GADGETRY HUB</small></span>
      </a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {[['What we do','#services'],['Explore gear','#shop'],['About Jaymart','#about'],['Connect','#contact']].map(([label,href])=><a key={label} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={()=>setMenuOpen(false)}>Let's talk <ArrowUpRight size={16}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> TECHNOLOGY, MADE PRACTICAL</div>
          <h1>Good tech.<br/><span>Better everyday.</span></h1>
          <p className="hero-lede">Sales & Swaps of Laptops & Smartphones, Expert Phone Flashing, Laptop Formatting, Solar Solutions, CCTV Installation, and Web Development.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#shop">Explore the gear <ArrowRight size={17}/></a>
            <a className="button button-ghost" href="#services">Discover our services <ArrowDownRight size={17}/></a>
          </div>
          <div className="hero-proof">
            <div className="proof-icon"><BadgeCheck size={19}/></div>
            <p><strong>World-Class Brand Ambiance</strong><span>Original Accessories · Professional Maintenance · Solar Power</span></p>
          </div>
        </div>
        <div className="hero-art" aria-label="Modern computer and mobile technology setup">
          <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-glow"/>
          <div className="hero-image-main">
            <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=85" alt="Modern computer and electronics setup"/>
          </div>
          <div className="float-card float-top">
            <span className="float-icon cyan"><Zap size={18}/></span>
            <span><strong>Solar & Power</strong><small>Fans, lamps & backup systems</small></span>
          </div>
          <div className="float-card float-bottom">
            <span className="float-icon purple"><Wrench size={18}/></span>
            <span><strong>Expert Repairs</strong><small>Flashing, formatting & servicing</small></span>
          </div>
          <div className="hero-number"><strong>J/</strong><span>HUB EYAEN BENIN</span></div>
        </div>
      </section>

      <section className="trust-strip">
        <div><span className="strip-icon"><Laptop size={19}/></span><span>Laptops & smartphones</span></div>
        <div><span className="strip-icon"><Wrench size={19}/></span><span>Flashing & formatting</span></div>
        <div><span className="strip-icon"><Sun size={19}/></span><span>Solar solutions</span></div>
        <div><span className="strip-icon"><Camera size={19}/></span><span>CCTV & WiFi setup</span></div>
      </section>

      <section className="section-wrap services-section" id="services">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line"/> PROFESSIONAL SERVICES</div>
            <h2>Tech solutions built<br/>for your <span>success.</span></h2>
          </div>
          <p>From comprehensive device maintenance and solar energy systems to high-end security and web development, Jaymart delivers excellence.</p>
        </div>
        <div className="service-grid">
          {services.map(s => (
            <article className="service-card" key={s.number}>
              <div className="service-top">
                <span className="service-icon"><s.icon size={23}/></span>
                <span className="service-number">/{s.number}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a href="#contact" aria-label={`Enquire about ${s.title}`} className="card-arrow"><ArrowUpRight size={19}/></a>
            </article>
          ))}
        </div>
      </section>

      <section className="shop-section" id="shop">
        <div className="section-wrap">
          <div className="shop-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line"/> THE GADGETRY EDIT</div>
              <h2>Quality gadgets &<br/><span>accessories.</span></h2>
              <p>Explore our inventory of mobile essentials, computing tools, solar products, and audio gear. Confirm availability and pricing instantly.</p>
            </div>
            <div className="shop-note">
              <Sparkles size={18}/>
              <span>Need custom assistance?<br/><strong>Chat with our support engineers.</strong></span>
            </div>
          </div>
          
          <div className="shop-controls">
            <div className="category-list">
              {categories.map(c => (
                <button key={c.name} className={activeCategory === c.name ? 'category-chip active' : 'category-chip'} onClick={() => setActiveCategory(c.name)}>
                  <c.icon size={16}/>{c.name}
                </button>
              ))}
            </div>
            <label className="search-box">
              <Search size={17}/>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Find gear or accessories..." aria-label="Search accessories"/>
              {search && <button aria-label="Clear search" onClick={() => setSearch('')}><X size={15}/></button>}
            </label>
          </div>

          <div className="product-grid">
            {filteredProducts.map((p, i) => (
              <article className="product-card" key={p.id} style={{ '--delay': `${i * 60}ms` }}>
                <div className="product-image">
                  <img loading="lazy" src={`https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=700&q=80`} alt={p.name}/>
                  <span className="product-tag">{p.tag}</span>
                  <button className={selected.some(item => item.id === p.id) ? 'add-product added' : 'add-product'} onClick={() => toggleProduct(p)} aria-label={`${selected.some(item => item.id === p.id) ? 'Remove' : 'Add'} ${p.name} to enquiry`} title="Add to enquiry">
                    {selected.some(item => item.id === p.id) ? <Check size={19}/> : <ArrowUpRight size={19}/>}
                  </button>
                </div>
                <div className="product-info">
                  <span className="product-category">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p>{p.note}</p>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="empty-state">
              <Search size={25}/>
              <h3>No matching gear found</h3>
              <p>Try another search term or select a different category.</p>
              <button className="text-button" onClick={() => { setSearch(''); setActiveCategory('All gear'); }}>Clear filters <ArrowRight size={16}/></button>
            </div>
          )}

          <div className="catalog-disclaimer">Product imagery is illustrative. Contact Jaymart directly for specific models, stock availability, and latest pricing.</div>
          
          {selected.length > 0 && (
            <div className="enquiry-bar">
              <div>
                <span className="enquiry-count">{selected.length}</span>
                <span><strong>{selected.length === 1 ? 'item' : 'items'} in your enquiry</strong><small>{selected.map(p => p.name).join(' · ')}</small></span>
              </div>
              <button className="button button-primary" onClick={copyEnquiry}>Prepare enquiry <ArrowRight size={17}/></button>
              <button className="clear-enquiry" onClick={() => setSelected([])}>Clear</button>
            </div>
          )}
        </div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="about-visual">
          <img loading="lazy" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1100&q=85" alt="Jaymart tech setup and team workspace"/>
          <div className="about-badge">
            <span>J</span>
            <small>WORLD-CLASS STANDARDS.<br/>PRACTICAL SOLUTIONS.</small>
          </div>
        </div>
        <div className="about-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> THE JAYMART PROMISE</div>
          <h2>Technology that<br/>powers your life and<br/><span>business forward.</span></h2>
          <p>Located at 12, Omorogbe Street, Benin Auchi Road, Eyaen, Benin City, Jaymart Computers and Gadgetry Hub is your premier destination for dependable computer analysis, smartphone services, solar energy setups, and robust web engineering.</p>
          <p>Whether you need professional laptop formatting, phone flashing, security cameras, or high-end gadget accessories, we deliver precision and reliability.</p>
          <a className="text-button" href="#contact">Get in touch with us <ArrowRight size={17}/></a>
          <div className="about-values">
            <div><strong>01</strong><span>Original accessories</span></div>
            <div><strong>02</strong><span>Expert technical support</span></div>
            <div><strong>03</strong><span>Reliable solar & power</span></div>
          </div>
        </div>
      </section>

      <section className="social-section">
        <div className="section-wrap social-inner">
          <div>
            <div className="eyebrow"><span className="eyebrow-line"/> CONNECT WITH US</div>
            <h2>Join our community.<br/><span>Follow our channels.</span></h2>
            <p>Stay updated with our latest gadget arrivals, tech tips, and repair showcases across all our official platforms.</p>
          </div>
          <div className="social-links">
            {Object.entries(socials).map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer">
                <span>{name}</span><ArrowUpRight size={18}/>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-intro">
          <div className="eyebrow"><span className="eyebrow-line"/> VISIT OR REACH OUT</div>
          <h2>Let's talk about<br/><span>your tech needs.</span></h2>
          <p>Visit our store at 12, Omorogbe Street, Eyaen, Benin City or send us an enquiry directly below.</p>
          <div className="contact-mini">
            <div className="contact-mini-icon"><Monitor size={20}/></div>
            <span><strong>Call or WhatsApp: +234 810 467 5749</strong><small>Fast response for repairs, sales, and solar solutions.</small></span>
          </div>
        </div>
        <div className="contact-form-wrap">
          {!submitted ? (
            <form className="contact-form" onSubmit={submitForm} noValidate>
              <div className="form-heading">
                <h3>Start an enquiry</h3>
                <span>WE ARE READY TO ASSIST</span>
              </div>
              <div className="form-row">
                <label>Your name<input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="How should we address you?" autoComplete="name"/></label>
                <label>Phone or email<input value={form.contact} onChange={e => setForm({...form, contact: e.target.value})} placeholder="Where can we reach you?" autoComplete="email"/></label>
              </div>
              <label>I'm interested in
                <select value={form.interest} onChange={e => setForm({...form, interest: e.target.value})}>
                  <option>PC & Laptop Accessories</option>
                  <option>Phone Accessories & Swaps</option>
                  <option>Expert Repairs & Flashing</option>
                  <option>Solar & Power Solutions</option>
                  <option>CCTV & Network Setup</option>
                  <option>Web Design & Development</option>
                  <option>General Enquiry</option>
                </select>
                <ChevronDown className="select-chevron" size={16}/>
              </label>
              <label>Tell us a little more
                <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows="4" placeholder="What specific device or service do you need help with?"/>
              </label>
              {formError && <p className="form-error" role="alert">{formError}</p>}
              <button className="button button-primary form-submit" type="submit">Prepare my enquiry <ArrowRight size={17}/></button>
              <p className="form-note">This form prepares your enquiry message for instant sharing.</p>
            </form>
          ) : (
            <div className="submitted-state">
              <div className="success-icon"><Check size={26}/></div>
              <h3>Your enquiry is ready.</h3>
              <p>Choose how you would like to continue. Open your email app or connect directly via our social channels and WhatsApp.</p>
              <a className="button button-primary" href={makeMailto()}>Open email draft <ArrowUpRight size={17}/></a>
              <div className="social-links compact">
                {Object.entries(socials).map(([name, url]) => (
                  <a key={name} href={url} target="_blank" rel="noreferrer">
                    <span>{name}</span><ArrowUpRight size={16}/>
                  </a>
                ))}
              </div>
              <button className="text-button" onClick={() => setSubmitted(false)}>Edit enquiry</button>
            </div>
          )}
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark"><Cpu size={22}/></span>
          <span className="brand-copy"><strong>JAYMART</strong><small>COMPUTERS & GADGETRY HUB</small></span>
        </a>
        <p>Technology, Made Practical.<br/>12, Omorogbe Street, Benin Auchi Road, Eyaen, Benin City.</p>
        <a className="back-top" href="#home">Back to top <ArrowUpRight size={16}/></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Jaymart Computers and Gadgetry Hub</span>
        <span>Phone: +234 810 467 5749</span>
        <div>
          {Object.entries(socials).map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noreferrer">{name}</a>
          ))}
        </div>
      </div>
    </footer>
    {notice && (
      <div className="toast" role="status">
        <Check size={17}/>{notice}
        <button onClick={() => setNotice('')} aria-label="Dismiss notification"><X size={15}/></button>
      </div>
    )}
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
