import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";

export type ContextMenuProps = {
  items: { icon: StaticImageData; text: string; onClick: () => void }[];
  className?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const ContextMenu = ({
  items,
  className,
  isOpen,
  setIsOpen,
}: ContextMenuProps) => {
  return (
    <ul
      className={cn(
        "absolute z-10 flex flex-col overflow-clip rounded-lg bg-black-80",
        className,
      )}
    >
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            setIsOpen(!isOpen);
            item.onClick();
          }}
          className={
            "flex min-w-52 cursor-pointer gap-3 bg-none px-3 py-[10px] hover:bg-black-70 active:bg-black-60"
          }
        >
          <Image
            className="fill-white-56"
            aria-hidden
            width={20}
            height={20}
            src={item.icon}
            alt={item.text}
          />
          <div>{item.text}</div>
        </li>
      ))}
    </ul>
  );
};

export default ContextMenu;
