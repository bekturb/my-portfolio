export type experienceItemsType = {
  company: string;
  position: string;
  duration: string;
};

export type experienceType = {
  icon: string;
  title: string;
  description: string;
  items: experienceItemsType[];
};
