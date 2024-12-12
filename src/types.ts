export interface PageContent {
  name: string;
  title: string;
  subtitle?: string;
  content?: string;
  sections: PageSection[];
}

export interface PageSection {
  title: string;
  content: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  date: string;
  image?: string;
  slug: string;
}
