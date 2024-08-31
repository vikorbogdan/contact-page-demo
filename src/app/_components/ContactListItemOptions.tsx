"use client";
import CallIcon from "@/assets/icons/Call.svg";
import DeleteIcon from "@/assets/icons/Delete.svg";
import FavouriteIcon from "@/assets/icons/Favourite.svg";
import MoreIcon from "@/assets/icons/More.svg";
import MuteIcon from "@/assets/icons/Mute.svg";
import SettingsIcon from "@/assets/icons/Settings.svg";
import { cn } from "@/utils/cn";
import { useState } from "react";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import ButtonWithDropdown from "../../components/ButtonWithDropdown";
import EditContactOverlay from "./EditContactOverlay";

const ContactListItemOptions = () => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [isEditContactOverlayOpen, setIsEditContactOverlayOpen] =
    useState(false);
  return (
    <div
      className={cn(
        "ml-auto flex -translate-x-10 gap-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100",
        { "translate-x-0 opacity-100": isContextMenuOpen },
      )}
    >
      <SecondaryButton icon={MuteIcon} ariaLabel="Mute" />
      <SecondaryButton icon={CallIcon} ariaLabel="Call" />
      <ButtonWithDropdown
        isOpen={isContextMenuOpen}
        setIsOpen={setIsContextMenuOpen}
        icon={MoreIcon}
        ariaLabel="More"
        items={[
          {
            icon: SettingsIcon,
            text: "Edit",
            onClick: () => setIsEditContactOverlayOpen(true),
          },
          {
            icon: FavouriteIcon,
            text: "Favourite",
            onClick: () => console.log("Favourite"),
          },
          {
            icon: DeleteIcon,
            text: "Remove",
            onClick: () => console.log("Remove"),
          },
        ]}
      />
      <EditContactOverlay
        isOpen={isEditContactOverlayOpen}
        setIsOpen={setIsEditContactOverlayOpen}
      />
    </div>
  );
};

export default ContactListItemOptions;
