import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

const Headline3 = ({
  children,
  className,
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn(
        "font-sans text-[16px] leading-[24px] tracking-[0.01em]",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default Headline3;
