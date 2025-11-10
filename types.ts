export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  name: string;
  description: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  imageUrl: string;
}
// fix: Added missing Client interface
export interface Client {
  name: string;
  logoUrl: string;
}