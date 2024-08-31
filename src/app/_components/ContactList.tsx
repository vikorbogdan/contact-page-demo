import Image from "next/image";
import ContactListItemOptions from "./ContactListItemOptions";
import SarahPicture from "@/assets/images/Sarah.png";
import TimothyPicture from "@/assets/images/Timothy.png";
import ProfilePic from "@/components/ProfilePic";
const ContactList = () => {
  return (
    <ul className="flex w-full flex-col items-stretch">
      <li className="group flex gap-4 py-3">
        <ProfilePic
          variant="small"
          src={TimothyPicture}
          alt="Profile Picture"
        />
        <div>
          <p className="text-base text-white-100">Timothy Lewis</p>
          <p className="text-xs text-white-56">+36 01 234 5678</p>
        </div>
        <ContactListItemOptions />
      </li>
      <li className="group flex gap-4 py-3">
        <ProfilePic variant="small" src={SarahPicture} alt="Profile Picture" />
        <div>
          <p className="text-base text-white-100">Sarah Wright</p>
          <p className="text-xs text-white-56">+36 01 234 5678</p>
        </div>
        <ContactListItemOptions />
      </li>
    </ul>
  );
};

export default ContactList;
