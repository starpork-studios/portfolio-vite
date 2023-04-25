import { motion } from "framer-motion";
import { WORK_1, WORK_2 } from "../../routes";
import MotionWrapper from "../../components/Overlay/Shared/MotionWrapper";
import { MotionFrom } from "../../components/Overlay/Shared/types";

export const content = [
  {
    file: "lmi7.jpeg",
    mobile: "lmi7mobile.jpeg",
    title: "Les Mills",
    subtitle: "Connect",
    url: WORK_1,
    page: {
      heading: "Les Mills",
      year: "2022-23",
      image: "Content/LMI-UI.png",
      sections: [
        {
          heading: "Background",
          paragraphs: [
            <p>
              Les Mills International has grown from a small family-owned gym to
              a globally recognised brand with a presence in countries all
              around the world.
            </p>,
            <p>
              Les Mills hoped to boost acquisition, retention and referral
              numbers by creating Les Mills Connect, a one-stop digital platform
              to support Les Mills clubs and instructors around the world.
            </p>,
          ],
        },
        {
          heading: "Responsibilities",
          paragraphs: [
            <>
              <p>
                I worked as a Frontend Engineer on Les Mills Connect forming a
                strong working relationship with our client's multidisciplinary
                team.
              </p>
              <p>
                I worked alongside designers, product managers, quality
                assurance and other software engineers to collaboratively create
                and improve Connect to be a product that we're all proud of.
              </p>
            </>,
            <>
              <p>
                While working on this project, I had a range of technical
                responsibilities
              </p>
              <ul>
                <li>Building UI components</li>
                <li>Creating & maintaining full end to end automation tests</li>
                <li>Integrating analytics systems</li>
                <li>Developing responsiveness and accessibility</li>
                <li>Implementing CI/CD</li>
              </ul>
            </>,
          ],
        },
        {
          heading: "Outcomes",
          paragraphs: [
            <div>
              <p>
                Les Mills Connect is now a web app used by hundreds of thousands
                of users worldwide.
              </p>
              <p className="text-[56px] h-auto">100k+</p>
              <p>Active users</p>
            </div>,
            <div>
              <p>Connect is being used all over the world</p>
              <p className="text-[56px] h-auto">30+</p>
              <p>Countries</p>
            </div>,
          ],
        },
      ],
    },
  },
];
export type ContentItem = (typeof content)[number];

export type ContentData = typeof content;
