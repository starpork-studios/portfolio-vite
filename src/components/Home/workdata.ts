import { WORK_1, WORK_2 } from "../../routes";

export const images = [
  { file: "lmi5.jpeg", title: "Les Mills", subtitle: "Connect", url: WORK_1 },
  { file: "ss2.png", title: "Smartsims", subtitle: "MikesBikes", url: WORK_2 },
];
export type WorkItem = typeof images[number];

export type WorkData = typeof images;
