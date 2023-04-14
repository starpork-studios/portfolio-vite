import { WORK_1, WORK_2 } from "../../routes";

export const images = [
  {
    file: "lmi7.jpeg",
    title: "Les Mills",
    subtitle: "Connect",
    url: WORK_1,
    page: {
      heading: "Les Mills",
      year: "2022-23",
      image: "lmi2.png",
      paragraph: (
        <div className="font-body font-light w-full justify-between text-lg gap-4 flex flex-col md:flex-row tracking-wider">
          <ul className="flex flex-col justify-between max-h-[250px]  md:w-[350px]">
            <li>Developing UI components.</li>
            <li>Engineering code architecture.</li>
            <li>Creating end-to-end and unit tests.</li>
          </ul>
          <p className="   md:w-[350px]">
            I was a Frontend Engineer on this project forming a strong working
            relationship with our client's multidisciplinary team. I worked
            alongside designers, product managers, quality assurance and other
            software engineers to collaboratively create and improve a product
            that we're all proud of.
          </p>

          <p className="  md:w-[350px]">
            Les Mills Connect is a web app used by hundreds of thousands of
            users worldwide. Its purpose? to connect gyms with certified Les
            Mills instructors, operating as a 'one stop shop' for all instructor
            needs.
          </p>
        </div>
      ),
    },
  },
  { file: "ss2.png", title: "Smartsims", subtitle: "MikesBikes", url: WORK_2 },
];
export type WorkItem = typeof images[number];

export type WorkData = typeof images;
