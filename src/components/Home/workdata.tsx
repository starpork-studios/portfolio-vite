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
        <div className="flex flex-row gap-8 font-body">
          <p className="flex-1">
            Les Mills Connect is a web app used by hundreds of thousands of
            users worldwide. Its purpose? to connect gyms with certified Les
            Mills instructors, operating as a 'one stop shop' for all instructor
            needs.
          </p>
          <div className="flex-1 gap-4 flex flex-col ">
            <p>
              I was a Frontend Engineer on this project forming a strong working
              relationship with our client's multidisciplinary team.
            </p>
            <ul>
              <li>Developing UI components.</li>
              <li>Engineering code architecture.</li>
              <li>Creating end-to-end and unit tests.</li>
            </ul>
          </div>
        </div>
      ),
    },
  },
  { file: "ss2.png", title: "Smartsims", subtitle: "MikesBikes", url: WORK_2 },
];
export type WorkItem = typeof images[number];

export type WorkData = typeof images;
