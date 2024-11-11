export type educationsItemsType = {
  institution: string;
  degree: string;
  duration: string;
};

export type educationsType = {
  icon: string;
  title: string;
  description: string;
  items: educationsItemsType[];
};
