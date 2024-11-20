// Representa una página del CMS
export interface PageContent {
  name: string;
  title: string;
  content: string;
}

// Representa una publicación de blog
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  date: string;
  image?: string;
  slug: string;
}

export interface PageSection {
    title: string;
    content: string;
}
