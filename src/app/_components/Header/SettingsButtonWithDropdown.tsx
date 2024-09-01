"use client";
import ButtonWithDropdown from "@/components/ButtonWithDropdown";
import SettingsIcon from "@/assets/icons/Settings.svg";
import LightModeIcon from "@/assets/icons/Light mode.svg";
import { useState } from "react";

type SettingsButtonWithDropdownProps = {
  className?: string;
};

const SettingsButtonWithDropdown = ({
  className,
}: SettingsButtonWithDropdownProps) => {
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);
  return (
    <ButtonWithDropdown
      className={className}
      isOpen={isSettingsDropdownOpen}
      setIsOpen={setIsSettingsDropdownOpen}
      ariaLabel="Settings"
      icon={SettingsIcon}
      items={[
        {
          icon: LightModeIcon,
          text: "Toggle light mode",
          onClick: () => {},
        },
      ]}
    />
  );
};

export default SettingsButtonWithDropdown;
