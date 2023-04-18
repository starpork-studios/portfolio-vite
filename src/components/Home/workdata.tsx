import { motion } from "framer-motion";
import { WORK_1, WORK_2 } from "../../routes";
import MotionWrapper from "../Overlay/Shared/MotionWrapper";
import { MotionFrom } from "../Overlay/Shared/types";

export const images = [
  {
    file: "lmi7.jpeg",
    mobile: "lmi7mobile.jpeg",
    title: "Les Mills",
    subtitle: "Connect",
    url: WORK_1,
    page: {
      heading: "Les Mills",
      year: "2022-23",
      image: "lmi2.png",
      paragraph: (
        <div className="font-body h-full font-light w-full justify-between text-lg gap-4 flex flex-col md:flex-row tracking-wider">
          <MotionWrapper
            direction={MotionFrom.Above}
            delay={1}
            triggerInView={true}
            className=" md:w-[350px]"
          >
            <ul className="h-full flex flex-col justify-between">
              <li>Developing UI components.</li>
              <li>Engineering code architecture.</li>
              <li>Creating end-to-end and unit tests.</li>
            </ul>
          </MotionWrapper>

          <MotionWrapper
            className="   md:w-[350px]"
            direction={MotionFrom.Above}
            delay={1.2}
            triggerInView={true}
          >
            <p>
              I was a Frontend Engineer on this project forming a strong working
              relationship with our client's multidisciplinary team. I worked
              alongside designers, product managers, quality assurance and other
              software engineers to collaboratively create and improve a product
              that we're all proud of.
            </p>
          </MotionWrapper>

          <MotionWrapper
            className="   md:w-[350px]"
            direction={MotionFrom.Above}
            delay={1.4}
            triggerInView={true}
          >
            <p>
              Les Mills Connect is a web app used by hundreds of thousands of
              users worldwide. Its purpose? to connect gyms with certified Les
              Mills instructors, operating as a 'one stop shop' for all
              instructor needs.
            </p>
          </MotionWrapper>
        </div>
      ),
    },
  },
  {
    file: "ss2.png",
    mobile: "ss2mobile.png",
    title: "Smartsims",
    subtitle: "MikesBikes",
    url: WORK_2,
  },
];
export type WorkItem = typeof images[number];

export type WorkData = typeof images;
