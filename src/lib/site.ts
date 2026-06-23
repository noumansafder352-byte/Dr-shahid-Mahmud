export const SITE = {
  doctor: "Prof. Brig (R) Dr. Shahid Mahmud",
  short: "Dr. Shahid Mahmud",
  role: "Pediatrician • Neonatologist • Child Neurologist",
  qualification: "MBBS, FCPS Pediatrics",
  tagline: "Dedicated to helping children grow healthy, strong & happy.",
  phone: "+92 300 5197469",
  phoneIntl: "+923005197469",
  phoneSecondary: "+92 329 3166499",
  phoneSecondaryIntl: "+923293166499",
  email: "drshahidmahmud@gmail.com",
  whatsapp: "923005197469",
  clinic: "Nelson Medical Complex",
  address: "Nelson Medical Complex, Abid Majeed Road, Rawalpindi, Pakistan 46000",
  url: "https://drshahidmahmud.com",
  hours: "Mon – Sat: 11:00 AM – 6:00 PM",
  hoursDays: "Monday – Saturday",
  hoursTime: "11:00 AM – 6:00 PM",
  experience: "35+ Years Experience",
  facebook: "https://www.facebook.com/drshahidmahmudrwp",
  instagram: "https://www.instagram.com/drshahidmahmud/",
  tiktok: "https://www.tiktok.com/@drshahidmahmud",
  youtube: "https://www.youtube.com/@drshahidmahmud",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const waLink = (msg = "Hello Doctor, I would like to book an appointment for my child.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const APPOINTMENT_MSG = "From Website\n\nHi Dr Shahid, I want to book an Appointment";
export const ONLINE_CONSULT_MSG = "From Website\n\nHi Dr Shahid, I want to book an Online Consultation";
export const PROMO_OPEN_EVENT = "dsm:open-promo";
export const openPromoModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(PROMO_OPEN_EVENT));
  }
};
