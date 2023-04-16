import { motion, useScroll, useTransform } from "framer-motion";
export enum OverlayType {
  Footer,
  Nav,
}
export const NavOverlay: React.FC<{
  children?: React.ReactNode;
  type: OverlayType;
}> = ({ children, type }) => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const OverlayComponent =
    type === OverlayType.Footer ? motion.footer : motion.nav;

  return (
    <OverlayComponent
      className={`fixed  w-full  z-10 pointer-events-none ${
        type === OverlayType.Footer && "bottom-0"
      }`}
      style={{ opacity }}
    >
      <div
        className="flex flex-col md:my-[40px] md:mx-[60px] 
      mx-[30px] my-[20px]  text-white  font-body font-light tracking-wider	leading-6"
      >
        {children}
      </div>
    </OverlayComponent>
  );
};
