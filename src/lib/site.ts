export const SITE = {
  doctor: "Prof. Brig (R) Dr. Shahid Mahmud",
  short: "Dr. Shahid Mahmud",
  role: "Pediatrician • Neonatologist • Child Neurologist",
  qualification: "MBBS, FCPS Pediatrics",
  tagline: "Dedicated to helping children grow healthy, strong & happy.",
  phone: "0300 5197469",
  phoneIntl: "+923005197469",
  whatsapp: "923005197469",
  clinic: "Nelson Medical Complex",
  address: "Nelson Medical Complex, Abid Majeed Road, Rawalpindi, Pakistan 46000",
  url: "https://drshahidmahmud.com",
  hours: "Mon – Sat: 5:00 PM – 9:00 PM",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/child-neurology", label: "Child Neurology" },
  { to: "/vaccination", label: "Vaccination" },
  { to: "/child-development", label: "Development" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export const waLink = (msg = "Hello Doctor, I would like to book an appointment for my child.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
