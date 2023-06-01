import { motion } from "framer-motion";
import MotionWrapper from "../../components/Animated/MotionWrapper";
import { MotionFrom } from "../../components/Animated/types";

export const content = [
  {
    file: "lmi7.jpeg",
    mobile: "lmi7mobile.jpeg",
    title: "Les Mills",
    subtitle: "Connect",
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
              <p className=" mb-4">
                While working on this project, I had a range of technical
                responsibilities
              </p>
              <ul className="list-disc list-inside">
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
  {
    file: "ss2.png",
    mobile: "ss2mobile.png",
    title: "Smartsims",
    subtitle: "MikesBikes",
    page: {
      heading: "Smartsims",
      year: "2017-22",
      image: "Content/SS-UI.png",
      sections: [
        {
          heading: "Background",
          paragraphs: [
            <p>
              Smartsims provides universities all around the world with
              educational business simulation software. They have a range of
              simulations but their most popular is MikesBikes. A simulation
              where students control their own bike manufacturing company which
              they use to compete in a multiplayer environment against their
              peers. Their goal, to achieve the highest market shareholder value
              they can.
            </p>,
            <>
              <p className=" mb-4">
                These simulations were built a over 10 years ago so naturally
                the product aged.
              </p>
              <p>
                While the majority of core foundations are just as relevant
                today as they were back then, the user experience was in need of
                some modernisation.
              </p>
            </>,
          ],
        },
        {
          heading: "Responsibilities",
          paragraphs: [
            <>
              <p>
                I worked as a Software Engineer at Smartsims in a small team
                focused on the continuous improvement of core functionality as
                well designing and developing a new modernised product.
              </p>
              <p>
                While I worked both on backend and frontend my main
                responsibility was the new product.
              </p>
            </>,
            <>
              <p className=" mb-4">
                While working at Smartsims, I had a range of technical
                responsibilities
              </p>
              <ul className="list-disc list-inside">
                <li>Building UI interfaces</li>
                <li>Backend schema design</li>
                <li>Implementing an in house analytics system</li>
                <li>Developing responsiveness and accessibility</li>
                <li>Maintaining our admin client</li>
                <li>Creating server health monitoring tools</li>
              </ul>
            </>,
          ],
        },
        {
          heading: "Outcomes",
          paragraphs: [
            <p>
              We received great user feedback and existing customers were very
              excited and satisfied with the new product.
            </p>,
            <div>
              <p>
                Smartsims business simulations are used by universities
                worldwide
              </p>
              <p className="text-[56px] h-auto">500+</p>
              <p>Universities</p>
            </div>,
          ],
        },
      ],
    },
  },
];
export type ContentItem = (typeof content)[number];

export type ContentData = typeof content;
