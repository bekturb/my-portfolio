export type skillListType = {
  icon: React.ReactNode;
  name: string;
};

export type skillsType = {
  title: string;
  description: string;
  skillList: skillListType[];
};
