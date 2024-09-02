import Overlay from "@/components/Overlay";
import { useState } from "react";
import AddContactOverlayDataForm from "./AddContactOverlayDataForm";
import AddContactOverlayPictureForm from "./AddContactOverlayPictureForm";
import { createContact } from "@/utils/apiUtils";
import clearCachesByServerAction from "@/app/api/_utils/revalidate";
type AddContactOverlayProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const AddContactOverlay = ({ isOpen, setIsOpen }: AddContactOverlayProps) => {
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

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phoneNumber);
    formData.append("picture", picture as File);

    createContact(formData)
      .then(() => {
        resetState();
        clearCachesByServerAction(undefined);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Overlay
      title="Add Contact"
      onDone={handleSubmit}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <AddContactOverlayPictureForm picture={picture} setPicture={setPicture} />
      <AddContactOverlayDataForm
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

export default AddContactOverlay;
