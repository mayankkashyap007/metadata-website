// ============================================
// METADATA TECHNOLOGIES - Site Data
// ============================================

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

export const COMPANY_INFO = {
  name: 'Metadata Technologies',
  phone: '+91 724 913 0238',
  email: 'hr@metadatatechnologies.in',
  address: 'Mindspace Airoli West, MSEB Staff Colony, TTC Industrial Area, Airoli, Navi Mumbai, Maharashtra 400708',
  hours: '8:00 AM – 7:00 PM',
  social: {
    facebook: 'https://www.facebook.com/',
    twitter: 'https://x.com/?lang=en',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
};

export const HERO_SLIDES = [
  {
    tag: 'IT Solution',
    subtitle: 'Innovating Technology for Modern Businesses',
    title: 'Building Smart Digital Solutions for the Future',
    titleHighlight: 'Smart Digital Solutions',
    desc: 'We deliver scalable and reliable software solutions that help businesses accelerate growth and stay competitive.',
    bg: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop',
  },
  {
    tag: 'IT Solution',
    subtitle: 'You Think We Build Your Vision',
    title: 'Empowering Enterprises with Robust Technology',
    titleHighlight: 'Empowering Enterprises',
    desc: 'Our team combines domain expertise and modern engineering to deliver measurable business outcomes.',
    bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop',
  },
];

export const HOME_SERVICES = [
  {
    id: 1,
    icon: 'fa-solid fa-code',
    title: 'Custom Software Development',
    desc: 'We design and build high-performance web, mobile, and enterprise applications optimized for scalability and efficiency.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop',
  },
  {
    id: 2,
    icon: 'fa-solid fa-cloud',
    title: 'Cloud Infrastructure & Deployment',
    desc: 'Secure and flexible cloud solutions enabling faster deployment, reduced overhead, and seamless business continuity.',
    img: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1332&auto=format&fit=crop',
  },
  {
    id: 3,
    icon: 'fa-solid fa-shield-halved',
    title: 'Data Security & Cyber Protection',
    desc: 'Advanced security audits, threat monitoring, and data protection to safeguard your business in a connected world.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop',
  },
];

export const PORTFOLIO_TABS = [
  { id: 'all', label: 'All Projects', count: 12 },
  { id: 'business', label: 'Business Solutions', count: 4 },
  { id: 'software', label: 'Software & Technology', count: 6 },
  { id: 'startup', label: 'Startup', count: 6 },
  { id: 'marketing', label: 'Marketing', count: 9 },
];

export const PROJECTS = [
  { id: 1, title: 'AI-Powered CRM Platform', desc: 'A complete CRM solution using machine learning to analyze customer behavior and automate business operations.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop', categories: ['all', 'software'] },
  { id: 2, title: 'Cloud Infrastructure Migration', desc: 'Full-scale migration to AWS, Azure, GCP improving performance, scalability, and operational cost efficiency.', img: 'https://images.unsplash.com/photo-1667984390527-850f63192709?q=80&w=1332&auto=format&fit=crop', categories: ['all', 'software', 'startup'] },
  { id: 3, title: 'Security Operations Center', desc: 'Enterprise-grade SOC implementation with threat monitoring, intrusion detection, and real-time incident response.', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop', categories: ['all', 'business'] },
  { id: 4, title: 'Business Intelligence Dashboard', desc: 'Interactive BI dashboard visualizing KPIs in real time, enabling data-driven decision making across departments.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop', categories: ['all', 'business', 'marketing'] },
  { id: 5, title: 'Enterprise Web Development', desc: 'Responsive enterprise web platforms with modern UI, secure authentication, and seamless data handling.', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1364&auto=format&fit=crop', categories: ['all', 'startup', 'marketing'] },
  { id: 6, title: 'Mobile App Development', desc: 'High-performance Android applications with clean UI, REST APIs, offline caching, and robust security features.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop', categories: ['all', 'startup', 'marketing'] },
  { id: 7, title: 'Digital Transformation Consulting', desc: 'Helped a traditional business migrate key processes to digital-first workflows — reducing costs and increasing agility.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop', categories: ['all', 'business', 'marketing'] },
  { id: 8, title: 'System Integration & API Dev', desc: 'Developed custom APIs to integrate legacy systems with modern SaaS applications, ensuring smooth data flow.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1334&auto=format&fit=crop', categories: ['all', 'software'] },
];

export const SKILLS = [
  { label: 'Data Protection', value: 75 },
  { label: 'Team Training & Development', value: 85 },
  { label: 'Product Innovation', value: 95 },
];

export const TESTIMONIALS = [
  { name: 'Rohan Mehta', role: 'Founder, Bright Web Labs', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', text: 'Working with Metadata Technology improved our workflow dramatically. Their team delivered cloud migration smoothly with excellent ongoing support.' },
  { name: 'Priya Sharma', role: 'CTO, SoftVision India', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face', text: 'Metadata Technology helped modernize our systems and provided a reliable team that supported us through every step of implementation.' },
  { name: 'Ankit Reddy', role: 'Project Manager, CodeCraft Solutions', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', text: 'Metadata Technology delivered exactly what we needed with high quality and timely execution. Highly recommended for any enterprise project.' },
];

export const PROCESS_STEPS = [
  { icon: 'fa-solid fa-magnifying-glass', step: '01', title: 'Requirement Analysis', desc: 'We discuss project goals, user requirements, and technical needs to plan a clear development strategy.' },
  { icon: 'fa-solid fa-pen-ruler', step: '02', title: 'Design & Development', desc: 'Our team designs scalable architecture and develops secure and high-performance software solutions.' },
  { icon: 'fa-solid fa-rocket', step: '03', title: 'Deployment & Support', desc: 'We deploy the final solution and provide updates, maintenance, and long-term technical support.' },
];

export const SERVICES = [
  { id: 1, title: 'Hybrid Workplace Solutions', desc: 'Comprehensive remote and hybrid work infrastructure, ensuring seamless connectivity and collaboration for distributed teams.', img: 'https://images.unsplash.com/photo-1616531770192-6eaea74c2456?q=80&w=1170&auto=format&fit=crop', features: ['Secure VPN & Remote Access Solutions', 'Collaboration Tools Implementation', 'Endpoint Security Management'] },
  { id: 2, title: 'Enterprise Security Services', desc: 'Protect your business with advanced cybersecurity measures including threat detection, data protection, and compliance management.', img: 'https://plus.unsplash.com/premium_photo-1701179596614-9c64f50cda76?q=80&w=1074&auto=format&fit=crop', features: ['24/7 Threat Monitoring & Response', 'Data Encryption & Compliance', 'Security Awareness Training'] },
  { id: 3, title: 'Managed IT Services', desc: 'Round-the-clock technical support and IT management services to keep your business operations running smoothly.', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop', features: ['Multi-channel Support (Phone, Chat, Email)', 'Quick Response SLA Guarantee', 'Proactive System Maintenance'] },
  { id: 4, title: 'Digital Transformation', desc: 'Seamlessly integrate legacy systems with modern platforms to create unified, efficient business processes.', img: 'https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1086&auto=format&fit=crop', features: ['API Integration & Development', 'Legacy System Modernization', 'Custom Workflow Automation'] },
  { id: 5, title: 'Cloud Migration Services', desc: 'Expert guidance and execution for moving your infrastructure to secure, scalable cloud platforms.', img: 'https://plus.unsplash.com/premium_photo-1688678097910-706dbce46fa4?q=80&w=970&auto=format&fit=crop', features: ['Multi-cloud Strategy Planning', 'Data Migration & Optimization', 'Cost-effective Cloud Architecture'] },
  { id: 6, title: 'AI & Business Intelligence', desc: 'Leverage artificial intelligence and data analytics to gain insights, automate processes, and drive informed decision-making.', img: 'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1332&auto=format&fit=crop', features: ['Predictive Analytics Solutions', 'Process Automation & RPA', 'Custom AI Model Development'] },
];

export const ABOUT_FEATURES = [
  { icon: 'fa-solid fa-shield-halved', title: 'Tailored Software Development', desc: 'We deliver custom software engineered to meet unique business needs, ensuring long-term scalability and performance.' },
  { icon: 'fa-solid fa-microchip', title: 'Smart Technology Integration', desc: 'We integrate modern technologies like AI, cloud, and automation to streamline processes and maximize ROI.' },
];

export const STATS = [
  { icon: 'fa-solid fa-clock-rotate-left', value: 15, suffix: '+', label: 'Years in IT Industry' },
  { icon: 'fa-solid fa-handshake', value: 850, suffix: '+', label: 'Projects Delivered' },
  { icon: 'fa-solid fa-users', value: 120, suffix: '+', label: 'Expert Engineers' },
  { icon: 'fa-solid fa-trophy', value: 25, suffix: '+', label: 'Industry Awards' },
];

export const WHY_US = [
  { icon: 'fa-solid fa-bullseye', title: 'Client-First Approach', desc: 'We put our clients at the core of our operations, listening to their vision and collaborating closely for tailored solutions.' },
  { icon: 'fa-solid fa-bolt', title: 'Agile Delivery', desc: 'Our agile methodology ensures rapid deployment, quick iterations, and on-time delivery without compromising quality.' },
  { icon: 'fa-solid fa-award', title: 'Proven Excellence', desc: 'With 25+ industry awards and 850+ delivered projects, we have the track record to back our promises.' },
  { icon: 'fa-solid fa-headset', title: '24/7 Support', desc: 'Our dedicated support team is available around the clock to resolve issues and keep your systems running seamlessly.' },
];

// ── Office Gallery (images uploaded to /public folder) ──
export const OFFICE_GALLERY = [
  { img: '/teamwork.jpeg',        caption: 'Our Team at Work' },
  { img: '/teamwork1.jpeg',       caption: 'Development Floor' },
  { img: '/conferenceroom.jpeg',  caption: 'Conference Room' },
  { img: '/generalmeeting.jpeg',  caption: 'General Meeting Room' },
  { img: '/cabin.jpeg',           caption: "Director's Cabin" },
  { img: '/officelayout.jpeg',    caption: 'Office Layout' },
  { img: '/workingarea.jpeg',     caption: 'Working Area' },
];
