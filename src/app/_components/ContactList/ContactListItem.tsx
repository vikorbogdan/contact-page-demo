import ProfilePic from "@/components/ProfilePic";
import ContactListItemOptions from "./ContactListItemOptions";

type ContactListItemProps = {
  contactData: {
    name: string;
    phone: string;
    picture: string;
  };
};

const ContactListItem = ({ contactData }: ContactListItemProps) => {
  return (
    <li className="group flex gap-4 py-3">
      <ProfilePic
        variant="big"
        src={contactData.picture}
        alt="Profile Picture"
      />
      <div>
        <p className="text-base text-white-100">{contactData.name}</p>
        <p className="text-xs text-white-56">{contactData.phone}</p>
      </div>
      <ContactListItemOptions />
    </li>
  );
};

export default ContactListItem;
