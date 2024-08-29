"use client";
import SecondaryButton from "./buttons/SecondaryButton";
import ButtonWithContextMenu from "./ButtonWithContextMenu";
import CallIcon from "../assets/icons/Call.svg";
import MoreIcon from "../assets/icons/More.svg";
import MuteIcon from "../assets/icons/Mute.svg";
import { useState } from "react";
import { cn } from "@/utils/cn";

const ContactListItemOptions = () => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  return (
    <div
      className={cn(
        "ml-auto flex -translate-x-10 gap-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100",
        { "translate-x-0 opacity-100": isContextMenuOpen },
      )}
    >
      <SecondaryButton icon={MuteIcon} ariaLabel="Mute" />
      <SecondaryButton icon={CallIcon} ariaLabel="Call" />
      <ButtonWithContextMenu
        isOpen={isContextMenuOpen}
        setIsOpen={setIsContextMenuOpen}
        icon={MoreIcon}
        ariaLabel="More"
        items={[
          {
            icon: CallIcon,
            text: "Call",
            onClick: () => console.log("Call"),
          },
          {
            icon: MuteIcon,
            text: "Mute",
            onClick: () => console.log("Mute"),
          },
        ]}
      />
    </div>
  );
};

export default ContactListItemOptions;
