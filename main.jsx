import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, BatteryCharging, Check, ChevronDown, Code2, Cpu, Headphones, Laptop, Menu, Monitor, Search, ShieldCheck, ShoppingBag, Smartphone, Sparkles, Wrench, X, Zap } from 'lucide-react';
import './styles.css';

const socials = {
  Facebook: 'https://www.facebook.com/share/1Emj7Tj3is/?mibextid=wwXIfr',
  Instagram: 'https://www.instagram.com/jaymartcomputers1?rpxt=ZXh2aGg4cDVsNGZ4&utm_source=qr',
  YouTube: 'https://youtube.com/@jaymartcomputers?si=Ii-PmG4jkO0yfgld',
  TikTok: 'https://www.tiktok.com/@jaymartcomputers?_r=1&_d=f2mj24dmf87g11&sec_uid=MS4wLjABAAAAnjyKsSwfqNPGZjzrBdXQhgYE6fzCgSXGIzzW59ys-yQFsJQ6FkFTGoKuPKlRt88g&share_author_id=7495985708138775574&sharer_language=en&source=h5_m&u_code=ek15da3bl4jd28&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=7B935E6E-E38B-4502-B919-F6C50AE1118B&user_id=7495985708138775574&sec_user_id=MS4wLjABAAAAnjyKsSwfqNPGZjzrBdXQhgYE6fzCgSXGIzzW59ys-yQFsJQ6FkFTGoKuPKlRt88g&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233'
};
const categories = [
  { name: 'All gear', icon: ShoppingBag }, { name: 'PC accessories', icon: Laptop }, { name: 'Phone accessories', icon: Smartphone }, { name: 'Audio', icon: Headphones }, { name: 'Power & charging', icon: BatteryCharging }
];
const products = [
  { id: 1, name: 'Wireless mouse', category: 'PC accessories', note: 'Everyday precision', tag: 'WORK SMARTER', image: 'photo-1527814050087-3793815479db' },
  { id: 2, name: 'Laptop stand', category: 'PC accessories', note: 'A more comfortable setup', tag: 'DESK ESSENTIAL', image: 'photo-1527864550417-7fd91fc51a46' },
  { id: 3, name: 'USB-C charging cable', category: 'Power & charging', note: 'Reliable daily connectivity', tag: 'DAILY ESSENTIAL', image: 'photo-1583394838336-acd977736f90' },
  { id: 4, name: 'Wireless earbuds', category: 'Audio', note: 'Sound for work and play', tag: 'TAKE YOUR SOUND', image: 'photo-1590658268037-6bf12165a8df' },
  { id: 5, name: 'Protective phone case', category: 'Phone accessories', note: 'Style meets everyday protection', tag: 'PHONE CARE', image: 'photo-1601593346740-925612772716' },
  { id: 6, name: 'Power bank', category: 'Power & charging', note: 'Keep your day moving', tag: 'STAY POWERED', image: 'photo-1609091839311-d5365f9ff1c5' }
];
const services = [
  { icon: Wrench, number: '01', title: 'PC support & troubleshooting', body: 'Practical help with everyday computer problems, setup, software, and performance issues.' },
  { icon: Smartphone, number: '02', title: 'Phone & gadget guidance', body: 'Get help choosing accessories that suit your device, needs, and budget.' },
  { icon: Code2, number: '03', title: 'Web design & development', body: 'Modern responsive websites and full-stack web solutions for people and businesses.' },
  { icon: ShieldCheck, number: '04', title: 'Setup & digital solutions', body: 'Friendly guidance to get your devices, tools, and digital workflows working together.' }
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

  useEffect(() => { document.title = 'Jaymart Computers & Gadgetry Hub | Tech that works for you'; }, []);
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
  const enquiryText = () => `Hello Jaymart Computers and Gadgetry Hub! I'd like to enquire about:\n${selected.map(p => `• ${p.name} (${p.category})`).join('\n')}\n\nPlease share availability, pricing and delivery details.`;
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
    <div className="announcement"><span className="pulse-dot"/> Your everyday tech partner <span className="announcement-sep">/</span> Accessories · Support · Web development</div>
    <header className="header">
      <a className="brand" href="#home" aria-label="Jaymart home"><span className="brand-mark"><Cpu size={22}/></span><span className="brand-copy"><strong>JAYMART</strong><small>COMPUTERS & GADGETRY HUB</small></span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {[['What we do','#services'],['Explore gear','#shop'],['About Jaymart','#about'],['Connect','#contact']].map(([label,href])=><a key={label} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={()=>setMenuOpen(false)}>Let's talk <ArrowUpRight size={16}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/> TECHNOLOGY, MADE PRACTICAL</div>
          <h1>Good tech.<br/><span>Better everyday.</span></h1>
          <p className="hero-lede">Your next accessory, your next solution, your next big idea — let's make technology work harder for you.</p>
          <div className="hero-actions"><a className="button button-primary" href="#shop">Explore the gear <ArrowRight size={17}/></a><a className="button button-ghost" href="#services">Discover our services <ArrowDownRight size={17}/></a></div>
          <div className="hero-proof"><div className="proof-icon"><BadgeCheck size={19}/></div><p><strong>Built around your needs</strong><span>Thoughtful recommendations. Practical tech support.</span></p></div>
        </div>
        <div className="hero-art" aria-label="Modern computer and mobile technology setup">
          <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-glow"/>
          <div className="hero-image-main"><img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=85" alt="Modern computer and electronics desk setup"/></div>
          <div className="float-card float-top"><span className="float-icon cyan"><Zap size={18}/></span><span><strong>Power your day</strong><small>Accessories that fit your flow</small></span></div>
          <div className="float-card float-bottom"><span className="float-icon purple"><Code2 size={18}/></span><span><strong>Ideas into digital</strong><small>Websites & tech solutions</small></span></div>
          <div className="hero-number"><strong>J/</strong><span>TECH, WITH PURPOSE</span></div>
        </div>
      </section>

      <section className="trust-strip"><div><span className="strip-icon"><Laptop size={19}/></span><span>PC & laptop accessories</span></div><div><span className="strip-icon"><Smartphone size={19}/></span><span>Phone & mobile essentials</span></div><div><span className="strip-icon"><Wrench size={19}/></span><span>Practical tech support</span></div><div><span className="strip-icon"><Code2 size={19}/></span><span>Web development</span></div></section>

      <section className="section-wrap services-section" id="services"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> MORE THAN A GADGET SHOP</div><h2>Tech for what<br/>comes <span>next.</span></h2></div><p>From everyday essentials to digital experiences, Jaymart brings useful technology and practical expertise into one place.</p></div>
        <div className="service-grid">{services.map(s=><article className="service-card" key={s.number}><div className="service-top"><span className="service-icon"><s.icon size={23}/></span><span className="service-number">/{s.number}</span></div><h3>{s.title}</h3><p>{s.body}</p><a href="#contact" aria-label={`Enquire about ${s.title}`} className="card-arrow"><ArrowUpRight size={19}/></a></article>)}</div>
      </section>

      <section className="shop-section" id="shop"><div className="section-wrap"><div className="shop-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> THE GADGETRY EDIT</div><h2>Small upgrades.<br/><span>Big difference.</span></h2><p>Explore a starter selection of everyday tech essentials. Ask us about availability, compatible models, and current pricing.</p></div><div className="shop-note"><Sparkles size={18}/><span>Need help choosing?<br/><strong>We can help you find the right fit.</strong></span></div></div>
        <div className="shop-controls"><div className="category-list">{categories.map(c=><button key={c.name} className={activeCategory===c.name?'category-chip active':'category-chip'} onClick={()=>setActiveCategory(c.name)}><c.icon size={16}/>{c.name}</button>)}</div><label className="search-box"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Find an accessory..." aria-label="Search accessories"/>{search && <button aria-label="Clear search" onClick={()=>setSearch('')}><X size={15}/></button>}</label></div>
        <div className="product-grid">{filteredProducts.map((p,i)=><article className="product-card" key={p.id} style={{'--delay':`${i*60}ms`}}><div className="product-image"><img loading="lazy" src={`https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=700&q=80`} alt={p.name}/><span className="product-tag">{p.tag}</span><button className={selected.some(item=>item.id===p.id)?'add-product added':'add-product'} onClick={()=>toggleProduct(p)} aria-label={`${selected.some(item=>item.id===p.id)?'Remove':'Add'} ${p.name} to enquiry`} title="Add to enquiry">{selected.some(item=>item.id===p.id)?<Check size={19}/>:<ArrowUpRight size={19}/>}</button></div><div className="product-info"><span className="product-category">{p.category}</span><h3>{p.name}</h3><p>{p.note}</p></div></article>)}</div>
        {filteredProducts.length===0&&<div className="empty-state"><Search size={25}/><h3>No matching gear found</h3><p>Try another search or choose a different category.</p><button className="text-button" onClick={()=>{setSearch('');setActiveCategory('All gear')}}>Clear filters <ArrowRight size={16}/></button></div>}
        <div className="catalog-disclaimer">Product imagery is illustrative. Items, stock, compatibility, and prices must be confirmed with Jaymart before purchase.</div>
        {selected.length>0&&<div className="enquiry-bar"><div><span className="enquiry-count">{selected.length}</span><span><strong>{selected.length===1?'item':'items'} in your enquiry</strong><small>{selected.map(p=>p.name).join(' · ')}</small></span></div><button className="button button-primary" onClick={copyEnquiry}>Prepare enquiry <ArrowRight size={17}/></button><button className="clear-enquiry" onClick={()=>setSelected([])}>Clear</button></div>}
      </div></section>

      <section className="about-section section-wrap" id="about"><div className="about-visual"><img loading="lazy" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1100&q=85" alt="Technology team collaborating around a laptop"/><div className="about-badge"><span>J</span><small>CURIOUS BY NATURE.<br/>PRACTICAL BY DESIGN.</small></div></div><div className="about-copy"><div className="eyebrow"><span className="eyebrow-line"/> THE JAYMART APPROACH</div><h2>Technology should<br/>open doors — not<br/><span>add friction.</span></h2><p>Jaymart Computers and Gadgetry Hub brings together computer know-how, useful PC and phone accessories, and modern web development. We believe the best tech is the tech that solves a real problem and makes your day a little easier.</p><p>Whether you're upgrading your setup, looking for the right gadget, or ready to build a stronger online presence, let's find a practical way forward.</p><a className="text-button" href="#contact">Let's find your solution <ArrowRight size={17}/></a><div className="about-values"><div><strong>01</strong><span>Useful over complicated</span></div><div><strong>02</strong><span>People-first guidance</span></div><div><strong>03</strong><span>Built for real life</span></div></div></div></section>

      <section className="social-section"><div className="section-wrap social-inner"><div><div className="eyebrow"><span className="eyebrow-line"/> STAY IN THE LOOP</div><h2>Follow the tech.<br/><span>Join the community.</span></h2><p>Connect with Jaymart for tech tips, product content, and updates.</p></div><div className="social-links">{Object.entries(socials).map(([name,url])=><a key={name} href={url} target="_blank" rel="noreferrer"><span>{name}</span><ArrowUpRight size={18}/></a>)}</div></div></section>

      <section className="contact-section section-wrap" id="contact"><div className="contact-intro"><div className="eyebrow"><span className="eyebrow-line"/> LET'S GET YOU CONNECTED</div><h2>What's your next<br/><span>tech move?</span></h2><p>Tell us what you're looking for. We'll help you figure out the next step.</p><div className="contact-mini"><div className="contact-mini-icon"><Monitor size={20}/></div><span><strong>Accessories, support or a website?</strong><small>Choose your area of interest and send an enquiry.</small></span></div></div>
        <div className="contact-form-wrap">{!submitted?<form className="contact-form" onSubmit={submitForm} noValidate><div className="form-heading"><h3>Start a conversation</h3><span>WE'RE LISTENING</span></div><div className="form-row"><label>Your name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="How should we address you?" autoComplete="name"/></label><label>Phone or email<input value={form.contact} onChange={e=>setForm({...form,contact:e.target.value})} placeholder="Where can we reach you?" autoComplete="email"/></label></div><label>I'm interested in<select value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})}><option>PC accessories</option><option>Phone accessories</option><option>Computer support</option><option>Web design & development</option><option>Other enquiry</option></select><ChevronDown className="select-chevron" size={16}/></label><label>Tell us a little more<textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows="4" placeholder="What do you need help with?"/></label>{formError&&<p className="form-error" role="alert">{formError}</p>}<button className="button button-primary form-submit" type="submit">Prepare my enquiry <ArrowRight size={17}/></button><p className="form-note">This form prepares an enquiry on your device; it does not send data to a server.</p></form>:<div className="submitted-state"><div className="success-icon"><Check size={26}/></div><h3>Your enquiry is ready.</h3><p>Choose how you'd like to continue. Your message will be prepared in your email app, or you can connect through Jaymart's social channels.</p><a className="button button-primary" href={makeMailto()}>Open email draft <ArrowUpRight size={17}/></a><div className="social-links compact">{Object.entries(socials).map(([name,url])=><a key={name} href={url} target="_blank" rel="noreferrer"><span>{name}</span><ArrowUpRight size={16}/></a>)}</div><button className="text-button" onClick={()=>setSubmitted(false)}>Edit enquiry</button></div>}</div>
      </section>
    </main>

    <footer className="footer"><div className="footer-main"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Cpu size={22}/></span><span className="brand-copy"><strong>JAYMART</strong><small>COMPUTERS & GADGETRY HUB</small></span></a><p>Tech that works for you.<br/>Accessories, solutions, and digital experiences.</p><a className="back-top" href="#home">Back to top <ArrowUpRight size={16}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Jaymart Computers and Gadgetry Hub</span><span>Made for curious minds and better setups.</span><div>{Object.entries(socials).map(([name,url])=><a key={name} href={url} target="_blank" rel="noreferrer">{name}</a>)}</div></div></footer>
    {notice&&<div className="toast" role="status"><Check size={17}/>{notice}<button onClick={()=>setNotice('')} aria-label="Dismiss notification"><X size={15}/></button></div>}
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
