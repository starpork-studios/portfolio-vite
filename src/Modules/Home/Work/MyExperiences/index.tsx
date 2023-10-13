import { motion } from "framer-motion";
import MotionWrapper from "../../../../components/Animated/MotionWrapper";
import { MotionFrom } from "../../../../components/Animated/types";
import { LesMills } from "./LesMills";
import { Smartsims } from "./Smartsims";

export const content = [LesMills, Smartsims];
export type ContentItem = (typeof content)[number];

export type ContentData = typeof content;
