import { cn } from "@/utils/cn";
import Image from "next/image";
import { ButtonProps } from "./buttonProps";

const PrimaryButton = ({ icon, text, ariaLabel, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel || text || ""}
      className={cn(
        "flex h-full w-full items-center gap-2 whitespace-nowrap rounded-lg bg-black-60 px-4 py-2 transition-colors hover:bg-black-50 active:bg-black-40",
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
    </button>
  );
};

export default PrimaryButton;
