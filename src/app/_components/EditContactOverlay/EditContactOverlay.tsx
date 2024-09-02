import clearCachesByServerAction from "@/app/api/_utils/revalidate";
import Overlay from "@/components/Overlay";
import { editContact } from "@/utils/apiUtils";
import { Contact } from "@prisma/client";
import { useState } from "react";
import EditContactOverlayDataForm from "./EditContactOverlayDataForm";
import EditContactOverlayPictureForm from "./EditContactOverlayPictureForm";
type EditContactOverlayProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  contactData: Contact;
};

const EditContactOverlay = ({
  isOpen,
  setIsOpen,
  contactData,
}: EditContactOverlayProps) => {
  const [picture, setPicture] = useState<File | undefined>();
  const [name, setName] = useState(contactData.name);
  const [phoneNumber, setPhoneNumber] = useState(contactData.phone);
  const [email, setEmail] = useState(contactData.email);

  const resetState = () => {
    setPicture(undefined);
    setName(contactData.name);
    setPhoneNumber(contactData.phone);
    setEmail(contactData.email);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("id", contactData.id.toString());
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phoneNumber);
    formData.append("picture", picture as File);

    editContact(formData)
      .then(() => {
        clearCachesByServerAction(undefined);
        resetState();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Overlay
      title="Edit Contact"
      onDone={handleSubmit}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <EditContactOverlayPictureForm
        imageUrl={contactData.imageUrl}
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
