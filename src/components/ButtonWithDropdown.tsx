"use client";
import { cn } from "@/utils/cn";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Dropdown, { DropdownProps } from "./Dropdown";
import SecondaryButton from "./buttons/SecondaryButton";
import { ButtonProps } from "./buttons/buttonProps";

type ButtonWithDropdownProps = ButtonProps & DropdownProps;

const ButtonWithDropdown = ({
  items,
  isOpen,
  setIsOpen,
  icon,
  ariaLabel,
  text,
  className,
}: ButtonWithDropdownProps) => {
  if ((!ariaLabel && !text) || !icon) return null;
  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <div className={className}>
          <SecondaryButton
            className={cn("relative", {
              "bg-black-80": isOpen,
            })}
            ariaLabel={ariaLabel}
            text={text}
            icon={icon}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </DropdownMenu.Trigger>
      {isOpen && (
        <DropdownMenu.Portal>
          <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} items={items} />
        </DropdownMenu.Portal>
      )}
    </DropdownMenu.Root>
  );
};

export default ButtonWithDropdown;
