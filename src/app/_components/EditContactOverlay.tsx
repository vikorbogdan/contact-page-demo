import Overlay from "@/components/Overlay";
import { useState } from "react";
import EditContactOverlayDataForm from "./EditContactOverlayDataForm";
import EditContactOverlayPictureForm from "./EditContactOverlayPictureForm";
type EditContactOverlayProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const EditContactOverlay = ({ isOpen, setIsOpen }: EditContactOverlayProps) => {
  const [picture, setPicture] = useState<File | undefined>();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const resetState = () => {
    setPicture(undefined);
    setName("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <Overlay
      title="Edit Contact"
      onDone={resetState}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <EditContactOverlayPictureForm
        picture={picture}
        setPicture={setPicture}
      />
      <EditContactOverlayDataForm
        name={name}
        setName={setName}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        email={email}
        setEmail={setEmail}
      />
    </Overlay>
  );
};

export default EditContactOverlay;
