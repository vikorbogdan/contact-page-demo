"use client";
import AddIcon from "@/assets/icons/Add.svg";
import HighPriorityButton from "@/components/buttons/HighPriorityButton";
import { useState } from "react";
import AddContactOverlay from "./AddContactOverlay/AddContactOverlay";

const AddNewButton = () => {
  const [isAddNewContactOverlayOpen, setIsAddNewContactOverlayOpen] =
    useState(false);
  return (
    <>
      <HighPriorityButton
        className="fixed bottom-5 right-5 md:static"
        icon={AddIcon}
        text="Add new"
        onClick={() => setIsAddNewContactOverlayOpen(true)}
      />
      <AddContactOverlay
        isOpen={isAddNewContactOverlayOpen}
        setIsOpen={setIsAddNewContactOverlayOpen}
      />
    </>
  );
};

export default AddNewButton;
