export interface Service {
  id: string;
  title: string;
  icon: string;
  desc: string;
  techSpecs: string[];
  img: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  type: string;
  scope: string;
  partner: string;
  img: string;
  completion: number;
  rating: string;
}

export interface HeroSlide {
  title: string;
  desc: string;
  img: string;
  metric: string;
  loc: string;
}

export interface FieldDiary {
  title: string;
  desc: string;
  img: string;
  category: string;
  metric: string;
}
