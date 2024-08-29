"use client";
import ContextMenu, { ContextMenuProps } from "./ContextMenu";
import SecondaryButton from "./buttons/SecondaryButton";
import { ButtonProps } from "./buttons/buttonProps";

type ButtonWithContextMenuProps = ButtonProps & ContextMenuProps;

const ButtonWithContextMenu = ({
  items,
  isOpen,
  setIsOpen,
  icon,
  ariaLabel,
}: ButtonWithContextMenuProps) => {
  if (!ariaLabel || !icon) return null;
  return (
    <div className="relative">
      <SecondaryButton
        ariaLabel={ariaLabel}
        icon={icon}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <ContextMenu isOpen={isOpen} setIsOpen={setIsOpen} items={items} />
      )}
    </div>
  );
};

export default ButtonWithContextMenu;
