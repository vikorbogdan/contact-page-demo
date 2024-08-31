"use client";
import ChangeIcon from "@/assets/icons/change.svg";
import DeleteIcon from "@/assets/icons/Delete.svg";
import DefaultPicture from "@/assets/images/Default.png";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import ProfilePic from "@/components/ProfilePic";
import { useRef } from "react";

type EditContactOverlayPictureFormProps = {
  picture: File | undefined;
  setPicture: (picture: File | undefined) => void;
};

const EditContactOverlayPictureForm = ({
  picture,
  setPicture,
}: EditContactOverlayPictureFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setPicture(e.target.files[0]);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center gap-4">
      <ProfilePic
        variant="big"
        src={picture ? URL.createObjectURL(picture) : DefaultPicture}
        alt="Profile Picture"
      />
      <div className="flex items-center gap-2">
        <input
          onChange={handleChange}
          type="file"
          accept="image/*"
          hidden
          ref={fileInputRef}
        />
        <PrimaryButton
          text="Change Picture"
          icon={ChangeIcon}
          onClick={() => fileInputRef.current?.click()}
        />
        <PrimaryButton
          icon={DeleteIcon}
          ariaLabel="Delete Picture"
          onClick={() => setPicture(undefined)}
        />
      </div>
    </div>
  );
};

export default EditContactOverlayPictureForm;
