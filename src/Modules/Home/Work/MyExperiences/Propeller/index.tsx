import { ProjectPage } from "./ProjectPage";

export const Propeller = {
  slug: "propeller",
  file: "/propeller-desktop.png",
  mobile: "/propeller-mobile.png",
  title: (
    <div
      className="flex justify-center flex-col items-center gap-5"
      style={{ color: "#ffffff" }}
    >
      <p>Propeller</p>
    </div>
  ),
  subtitle: "Propeller",
  page: {
    heading: "Propeller",
    year: "2024-26",
    image: "",
    sections: [],
  },
  component: ProjectPage,
};
