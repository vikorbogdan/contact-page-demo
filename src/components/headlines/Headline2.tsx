import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

const Headline2 = ({
  children,
  className,
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "font-display text-[24px] font-medium leading-[40px] tracking-normal",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default Headline2;
