import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

const Headline1 = ({
  children,
  className,
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "font-display text-[32px] font-medium leading-[48px] tracking-normal",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default Headline1;
