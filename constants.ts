import type { NavLink, Service, BlogPost, Client } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contacto', href: '#contacto' },
];

export const SERVICES: Service[] = [
  { name: 'AUTONIVELANTE', description: 'Pisos lisos, continuos y de alta resistencia para un acabado perfecto.' },
  { name: 'CÁSCARA DE NARANJA', description: 'Acabado texturizado que oculta imperfecciones y ofrece durabilidad.' },
  { name: 'ANTIDERRAPANTE', description: 'Máxima seguridad en áreas húmedas o con tráfico pesado.' },
  { name: 'URETANO CEMENTICIO', description: 'Solución ultra resistente a químicos, abrasión y choques térmicos.' },
  { name: 'CONDUCTIVO', description: 'Disipa la estática para proteger equipos electrónicos sensibles.' },
  { name: 'CONCRETO PULIDO', description: 'Acabado moderno, brillante y de bajo mantenimiento.' },
  { name: 'MORTERO EPÓXICO', description: 'Reparación y nivelación de superficies con alta resistencia mecánica.' },
  { name: 'DECORATIVO HOJUELA', description: 'Diseños personalizados con hojuelas de vinilo para un look único.' },
  { name: 'DECORATIVO CUARZO', description: 'Pisos de alta resistencia y estética con agregados de cuarzo de color.' },
  { name: 'LÍNEAS AMARILLAS', description: 'Señalización vial y de áreas de trabajo duradera y de alta visibilidad.' },
  { name: 'EPÓXICO EN POLIAMÍDA', description: 'Recubrimiento flexible y resistente para superficies metálicas y de concreto.' },
  { name: 'CURVA SANITARIA', description: 'Acabados higiénicos que impiden la acumulación de suciedad y bacterias.' },
  { name: 'MESAS EPÓXICAS', description: 'Creación de mesas y encimeras con diseños artísticos y alta durabilidad.' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Ventajas de los Pisos Epóxicos en la Industria',
    excerpt: 'Descubre por qué los recubrimientos epóxicos son la elección número uno para naves industriales, almacenes y fábricas.',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1920',
  },
  {
    title: 'Mantenimiento y Cuidado de tu Piso de Concreto Pulido',
    excerpt: 'Consejos prácticos para mantener tu piso de concreto pulido luciendo como nuevo por años, maximizando tu inversión.',
    imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1920',
  },
  {
    title: 'Tendencias en Diseño con Pisos Decorativos de Hojuela',
    excerpt: 'Explora las últimas tendencias en diseño de interiores utilizando pisos de hojuela para crear espacios únicos y modernos.',
    imageUrl: 'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?q=80&w=1920',
  },
];
// fix: Added missing ABOUT_TEXT constant
export const ABOUT_TEXT = {
  title: 'Sobre Nosotros',
  content: 'En LM EPOXY, somos especialistas en la aplicación de recubrimientos epóxicos de alta calidad para pisos industriales, comerciales y residenciales. Con años de experiencia, nuestro equipo garantiza soluciones duraderas, estéticas y funcionales adaptadas a las necesidades específicas de cada cliente.',
  highlight: 'Nuestro compromiso es transformar tus espacios con pisos resistentes, seguros y de fácil mantenimiento.'
};
// fix: Added missing APPLICATIONS_TEXT constant
export const APPLICATIONS_TEXT = {
  title: '¿Dónde se Utilizan?',
  content: 'Los pisos epóxicos son increíblemente versátiles y se adaptan a una amplia variedad de entornos gracias a su resistencia y acabado. Son la solución ideal para:'
};
// fix: Added missing APPLICATION_AREAS constant
export const APPLICATION_AREAS: string[] = [
  'Naves industriales y bodegas',
  'Estacionamientos y cocheras',
  'Hospitales y laboratorios',
  'Cocinas industriales y restaurantes',
  'Tiendas y centros comerciales',
  'Gimnasios y áreas deportivas',
  'Residencias y áreas decorativas'
];
// fix: Added missing ADVANTAGES_TEXT constant
export const ADVANTAGES_TEXT = {
  title: 'Ventajas Principales',
};
// fix: Added missing ADVANTAGES_LIST constant
export const ADVANTAGES_LIST: string[] = [
  'Alta resistencia química y a la abrasión',
  'Superficie monolítica y sin juntas',
  'Fácil limpieza y mantenimiento',
  'Acabado estético y brillante',
  'Propiedades antiderrapantes y seguras',
  'Larga durabilidad y vida útil',
  'Aplicación rápida y curado eficiente'
];
// fix: Added missing CLIENTS constant
export const CLIENTS: Client[] = [
    { name: 'Empresa A', logoUrl: 'https://i.imgur.com/8Q5Yf3B.png' },
    { name: 'Empresa B', logoUrl: 'https://i.imgur.com/JZa8q5j.png' },
    { name: 'Empresa C', logoUrl: 'https://i.imgur.com/Y1Z5k3a.png' },
    { name: 'Empresa D', logoUrl: 'https://i.imgur.com/tYp4k3g.png' },
    { name: 'Empresa E', logoUrl: 'https://i.imgur.com/3d0A7Gf.png' },
    { name: 'Empresa F', logoUrl: 'https://i.imgur.com/rXb2v7e.png' },
    { name: 'Empresa G', logoUrl: 'https://i.imgur.com/v8c9b9H.png' },
    { name: 'Empresa H', logoUrl: 'https://i.imgur.com/c4h6f8L.png' },
];