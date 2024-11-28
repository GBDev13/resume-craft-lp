import { Marquee } from "./marquee";
import { RiDiscountPercentFill } from "react-icons/ri";
import { Motion } from "./motion";

export const BlackFridayBanner = () => {
  return (
    <Motion
      className="w-full h-7 bg-yellow-400 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Marquee className="[--duration:40s]">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={`black-friday-item-${index}`}
            className="flex items-center gap-4"
          >
            <p className="font-extrabold text-black">BLACK FRIDAY</p>
            <RiDiscountPercentFill className="text-black" />
          </div>
        ))}
      </Marquee>
    </Motion>
  );
};
