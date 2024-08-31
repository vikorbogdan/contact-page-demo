import { cn } from "@/utils/cn";
import Image from "next/image";
import { ButtonProps } from "./buttonProps";
const SecondaryButton = ({
  icon,
  text,
  ariaLabel,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel || text || ""}
      className={cn(
        "flex items-center gap-2 whitespace-nowrap rounded-lg bg-none px-4 py-2 outline-none transition-colors hover:bg-black-90 active:bg-black-80",
        {
          "pl-3": icon && text,
          "p-2": !text,
        },
        className,
      )}
    >
      {icon && (
        <Image alt="Icon" aria-hidden width={24} height={24} src={icon} />
      )}
      {text && <span>{text}</span>}
    </button>
  );
};

export default SecondaryButton;
