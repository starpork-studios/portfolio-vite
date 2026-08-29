import { LesMills } from "./LesMills";
import { Smartsims } from "./Smartsims";
import { Fergus } from "./Fergus";
import { Propeller } from "./Propeller/index";

export const content = [Propeller, LesMills, Fergus, Smartsims];
export type ContentItem = (typeof content)[number];

export type ContentData = typeof content;
