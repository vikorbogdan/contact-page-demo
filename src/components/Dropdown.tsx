import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export type DropdownProps = {
  items: { icon: StaticImageData; text: string; onClick: () => void }[];
  className?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Dropdown = ({ items, className, isOpen, setIsOpen }: DropdownProps) => {
  return (
    <DropdownMenu.Content
      className={cn(
        "absolute -left-5 top-2 flex flex-col overflow-clip rounded-lg bg-black-80",
        className,
      )}
    >
      {items.map((item, index) => (
        <DropdownMenu.Item
          key={index}
          onClick={() => {
            setIsOpen(!isOpen);
            item.onClick();
          }}
          className={
            "flex min-w-52 cursor-pointer select-none gap-3 bg-none px-3 py-[10px] hover:bg-black-70 hover:outline-none active:bg-black-60"
          }
        >
          <Image
            className="opacity-[.56]"
            aria-hidden
            width={20}
            height={20}
            src={item.icon}
            alt={item.text}
          />
          <div>{item.text}</div>
        </DropdownMenu.Item>
      ))}
    </DropdownMenu.Content>
  );
};

export default Dropdown;
