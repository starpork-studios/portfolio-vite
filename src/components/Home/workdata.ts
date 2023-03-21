import { WORK_1, WORK_2 } from "../../routes";

export const images = [
  { file: "lmi2.png", title: "Les Mills", subtitle: "Connect", url: WORK_1 },
  { file: "ss2.png", title: "Smartsims", subtitle: "MikesBikes", url: WORK_2 },
  //{ file: "lmi.png" },
  //{ file: "ss.png" },
  //{ file: "lmi2.png" },
];

export type WorkData = typeof images;
