export type stackType = {
  name: string;
};

export type projectType = {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: stackType[];
  image: string;
  live: string;
  github: string;
};
