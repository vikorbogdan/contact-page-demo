import { cn } from "@/utils/cn";
import Image from "next/image";
import { ButtonProps } from "./buttonProps";

const HighPriorityButton = ({
  icon,
  text,
  ariaLabel,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <div
      className={cn(
        "group rounded-full bg-gradient-to-t from-black-20/0 to-black-20 p-[1px]",
        className,
      )}
    >
      <button
        onClick={onClick}
        aria-label={ariaLabel || text || ""}
        className="rounded-full bg-black-100 bg-gradient-to-t from-black-60 to-black-60/70"
      >
        <div
          className={cn(
            "flex h-full w-full items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 transition-colors group-hover:bg-white-100/[.04]",
            {
              "pl-3": icon && text,
              "p-2": !text,
            },
          )}
        >
          {icon && (
            <Image alt="Icon" aria-hidden width={24} height={24} src={icon} />
          )}
          {text && <span>{text}</span>}
        </div>
      </button>
    </div>
  );
};

export default HighPriorityButton;
