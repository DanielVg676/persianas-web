import type {
  FAQItem,
  NeedOption,
  NavItem,
  ProcessStep,
  ProductCard,
  ProjectImage,
  ServiceCategory,
  VisualAsset,
} from "@/shared/types/content";

// Fuente principal para textos reutilizados; evita duplicar datos comerciales.
export const siteConfig = {
  name: "Grupo Vizcaíno",
  descriptor: "Persianas & Pisos",
  city: "Durango, Dgo.",
  phone: "[TELÉFONO CONFIRMADO]",
  whatsapp: "[WHATSAPP CONFIRMADO]",
  email: "[CORREO CONFIRMADO]",
  address: "[DIRECCIÓN CONFIRMADA DE GRUPO VIZCAÍNO]",
  schedule: "[HORARIOS CONFIRMADOS]",
  instagram: "https://www.instagram.com/grupo.vizcaino/",
  facebook: "https://www.facebook.com/grupovizcaino/",
  mapsUrl: "[ENLACE DE GOOGLE MAPS]",
  contactUrl: "#contacto",
  quoteMessage:
    "Hola, me gustaría recibir información y solicitar una cotización con Grupo Vizcaíno.",
  serviceArea: "Durango y zonas cercanas, sujeto a confirmación con un asesor.",
  baseUrl: "https://grupovizcaino.example",
};

export const brandAssets = {
  logoMark: "/brand/logotipo_solo.jpg",
  logoFull: "/brand/marca_letras_con_logo.jpg",
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Persianas", href: "#persianas" },
  { label: "Pisos", href: "#acabados" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=82",
    alt: "Sala contemporánea con luz natural, ventanas amplias y tonos cálidos.",
    category: "Interior",
    sourceLabel: "Unsplash",
    sourceUrl: "https://unsplash.com/",
  },
  livingBlinds: {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    alt: "Sala luminosa con mobiliario neutro y tratamiento de ventana.",
    category: "Persianas y cortinas",
    sourceLabel: "Unsplash",
    sourceUrl: "https://unsplash.com/",
  },
  woodFloor: {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    alt: "Interior cálido con piso de madera y luz natural.",
    category: "Pisos",
    sourceLabel: "Unsplash",
    sourceUrl: "https://unsplash.com/",
  },
  patioAwning: {
    src: "https://images.unsplash.com/photo-1741287541020-7ab5db47d5e4?auto=format&fit=crop&w=1200&q=80",
    alt: "Terraza moderna con área exterior sombreada.",
    category: "Toldos",
    sourceLabel: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/outdoor-patio-with-stylish-seating-and-awning-ooY6UL3e2bk",
  },
  wallFinish: {
    src: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    alt: "Detalle de sala con muro decorativo y acabados interiores.",
    category: "Muros y acabados",
    sourceLabel: "Unsplash",
    sourceUrl: "https://unsplash.com/",
  },
  automation: {
    src: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    alt: "Control inteligente para soluciones de interior.",
    category: "Automatización",
    sourceLabel: "Unsplash",
    sourceUrl: "https://unsplash.com/",
  },
  workspace: {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    alt: "Oficina sobria con luz natural y área de trabajo.",
    category: "Proyecto personalizado",
    sourceLabel: "Unsplash",
    sourceUrl: "https://unsplash.com/",
  },
  blindDetail: {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    alt: "Detalle de interior neutro con textura y luz suave.",
    category: "Detalle",
    sourceLabel: "Unsplash",
    sourceUrl: "https://unsplash.com/",
  },
  consultation: {
    src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    alt: "Espacio residencial cálido para asesoría de acabados.",
    category: "Asesoría",
    sourceLabel: "Unsplash",
    sourceUrl: "https://unsplash.com/",
  },
} satisfies Record<string, VisualAsset>;

export const heroImage = images.hero;

export const trustItems = [
  {
    icon: "message",
    title: "Asesoría personalizada",
    description: "Te ayudamos a elegir materiales, colores y sistemas según tu espacio.",
  },
  {
    icon: "measure",
    title: "Medición en sitio",
    description: "Revisamos dimensiones y condiciones antes de definir la solución.",
  },
  {
    icon: "layers",
    title: "Productos a la medida",
    description: "Opciones pensadas para hogares, oficinas y comercios.",
  },
  {
    icon: "tool",
    title: "Instalación profesional",
    description: "Coordinamos entrega e instalación según el proyecto.",
  },
] as const;

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Persianas y cortinas",
    description:
      "Controla luz, privacidad y ambiente con sistemas a medida.",
    href: "#persianas",
    image: images.livingBlinds,
  },
  {
    title: "Pisos",
    description:
      "Renueva interiores con superficies cálidas y fáciles de combinar.",
    href: "#acabados",
    image: images.woodFloor,
  },
  {
    title: "Toldos y exteriores",
    description:
      "Crea sombra y comodidad en terrazas, patios y áreas abiertas.",
    href: "#exteriores",
    image: images.patioAwning,
  },
  {
    title: "Muros y acabados",
    description:
      "Agrega textura y carácter con papel tapiz, lambrín y paneles.",
    href: "#acabados",
    image: images.wallFinish,
  },
  {
    title: "Automatización",
    description:
      "Controla tus persianas con mayor comodidad en el uso diario.",
    href: "#automatizacion",
    image: images.automation,
  },
  {
    title: "Proyectos personalizados",
    description:
      "Acompañamiento para combinar soluciones según cada necesidad.",
    href: "#contacto",
    image: images.workspace,
  },
];

export const blindProducts: ProductCard[] = [
  {
    name: "Enrollables",
    benefit: "Diseño limpio y versátil.",
    application: "Hogares, oficinas y espacios comerciales.",
    image: images.livingBlinds,
  },
  {
    name: "Blackout",
    benefit: "Mayor control de luz y privacidad.",
    application: "Recámaras, salas audiovisuales y oficinas.",
    image: images.blindDetail,
  },
  {
    name: "Neolux",
    benefit: "Franjas traslúcidas y sólidas para regular la entrada de luz.",
    application: "Salas, comedores y áreas sociales.",
    image: images.hero,
  },
  {
    name: "Panel japonés",
    benefit: "Solución práctica para superficies amplias.",
    application: "Ventanales y divisiones interiores.",
    image: images.workspace,
  },
  {
    name: "Madera",
    benefit: "Textura, calidez y apariencia natural.",
    application: "Ambientes residenciales y oficinas sobrias.",
    image: images.woodFloor,
  },
  {
    name: "Motorizadas",
    benefit: "Control cómodo para ventanas amplias o altas.",
    application: "Espacios de difícil acceso o uso frecuente.",
    image: images.automation,
  },
];

export const needs: NeedOption[] = [
  {
    label: "Bloquear la entrada de luz",
    recommendation:
      "Considera blackout o enrollables con telas de mayor opacidad.",
    products: ["Blackout", "Enrollables", "Motorizadas"],
  },
  {
    label: "Mantener privacidad sin perder iluminación",
    recommendation:
      "Las opciones tipo Neolux o cortinas translúcidas equilibran vista, luz y privacidad.",
    products: ["Neolux", "Cortinas", "Panel japonés"],
  },
  {
    label: "Reducir calor y deslumbramiento",
    recommendation:
      "Un asesor puede ayudarte a elegir telas y sistemas según orientación y uso del espacio.",
    products: ["Enrollables", "Toldos", "Automatización"],
  },
  {
    label: "Renovar pisos",
    recommendation:
      "Combina tonos de piso con muros y textiles para lograr continuidad visual.",
    products: ["Pisos", "Paneles decorativos", "Asesoría"],
  },
  {
    label: "Mejorar un muro",
    recommendation:
      "Papel tapiz, lambrín o paneles pueden aportar textura sin recargar el ambiente.",
    products: ["Papel tapiz", "Lambrín", "Paneles"],
  },
  {
    label: "Automatizar persianas",
    recommendation:
      "Ideal para ventanas altas, amplias o rutinas diarias de apertura y cierre.",
    products: ["Motorizadas", "Control remoto", "Programación"],
  },
  {
    label: "Proteger una terraza o exterior",
    recommendation:
      "Los toldos ayudan a crear sombra y mejorar el uso de áreas exteriores.",
    products: ["Toldos", "Exteriores", "Asesoría"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Cuéntanos sobre tu espacio",
    description:
      "Envíanos una fotografía, medidas aproximadas o una descripción de lo que buscas.",
  },
  {
    title: "Recibe asesoría",
    description:
      "Te ayudamos a comparar opciones, materiales, acabados y niveles de privacidad.",
  },
  {
    title: "Medición y selección",
    description:
      "Confirmamos dimensiones y definimos la solución adecuada para tu proyecto.",
  },
  {
    title: "Instalación",
    description: "Coordinamos la entrega e instalación de tu producto.",
  },
];

export const projectImages: ProjectImage[] = [
  { ...images.livingBlinds, title: "Sala con control de luz" },
  { ...images.woodFloor, title: "Interior con piso cálido" },
  { ...images.workspace, title: "Oficina con luz natural" },
  { ...images.hero, title: "Ventanales en área social" },
  { ...images.patioAwning, title: "Exterior con sombra" },
  { ...images.wallFinish, title: "Acabado decorativo" },
];

export const testimonials = [
  {
    name: "Cliente por confirmar",
    projectType: "Proyecto residencial",
    comment:
      "Contenido temporal. Sustituir por una reseña real antes de publicar testimonios como evidencia.",
  },
  {
    name: "Cliente por confirmar",
    projectType: "Proyecto comercial",
    comment:
      "Contenido temporal. Mantener visible solo si se marca como pendiente de validación.",
  },
  {
    name: "Cliente por confirmar",
    projectType: "Asesoría e instalación",
    comment:
      "Contenido temporal. No agregar calificaciones hasta contar con una fuente real.",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "¿Las persianas se fabrican a la medida?",
    answer:
      "Las soluciones se definen según dimensiones y condiciones del espacio. Un asesor puede confirmar opciones disponibles.",
  },
  {
    question: "¿Realizan visitas para tomar medidas?",
    answer:
      "La medición se coordina según disponibilidad y ubicación. Confirma el alcance con un asesor.",
  },
  {
    question: "¿Ofrecen instalación?",
    answer:
      "Sí, la instalación se contempla como parte del proceso cuando el proyecto lo requiere.",
  },
  {
    question: "¿Qué tipo de persiana me conviene?",
    answer:
      "Depende de la luz, privacidad, dimensiones y uso de cada habitación. La asesoría ayuda a comparar alternativas.",
  },
  {
    question: "¿Puedo solicitar una cotización por WhatsApp?",
    answer:
      "Sí. Puedes enviar datos básicos, fotografías o medidas aproximadas para iniciar la conversación.",
  },
  {
    question: "¿Manejan opciones motorizadas?",
    answer:
      "Hay opciones de automatización, sujetas a disponibilidad y características del proyecto.",
  },
];

export const productInterestOptions = [
  "Persianas",
  "Cortinas",
  "Pisos",
  "Toldos",
  "Automatización",
  "Muros y acabados",
  "Otro",
];

export const spaceTypeOptions = [
  "Hogar",
  "Oficina",
  "Comercio",
  "Exterior",
  "Proyecto por definir",
];

export { images as visualAssets };
