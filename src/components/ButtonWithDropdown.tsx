"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Dropdown, { DropdownProps } from "./Dropdown";
import SecondaryButton from "./buttons/SecondaryButton";
import { ButtonProps } from "./buttons/buttonProps";
import { cn } from "@/utils/cn";

type ButtonWithDropdownProps = ButtonProps & DropdownProps;

const ButtonWithDropdown = ({
  items,
  isOpen,
  setIsOpen,
  icon,
  ariaLabel,
}: ButtonWithDropdownProps) => {
  if (!ariaLabel || !icon) return null;
  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <div>
          <SecondaryButton
            className={cn("relative", {
              "bg-black-80": isOpen,
            })}
            ariaLabel={ariaLabel}
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
