export type Team = {
  id: number;
  teamName: string;
  members: {
    id: number;
    name: string;
    role: string;
  }[];
};
