import { motion } from "framer-motion";
import MotionWrapper from "../../../../components/Animated/MotionWrapper";
import { MotionFrom } from "../../../../components/Animated/types";
import { LesMills } from "./LesMills";
import { Smartsims } from "./Smartsims";
import { Fergus } from "./Fergus";

export const content = [LesMills, Fergus, Smartsims ];
export type ContentItem = (typeof content)[number];

export type ContentData = typeof content;
