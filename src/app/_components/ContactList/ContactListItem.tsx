import ProfilePic from "@/components/ProfilePic";
import ContactListItemOptions from "./ContactListItemOptions";
import { Contact } from "@prisma/client";

type ContactListItemProps = {
  contactData: Contact;
};

const ContactListItem = ({ contactData }: ContactListItemProps) => {
  return (
    <li className="group flex gap-4 overflow-hidden py-3">
      <ProfilePic
        variant="small"
        src={contactData.imageUrl ?? ""}
        alt="Profile Picture"
      />
      <div>
        <p className="text-base text-white-100">{contactData.name}</p>
        <p className="text-xs text-white-56">{contactData.phone}</p>
      </div>
      <ContactListItemOptions contactData={contactData} />
    </li>
  );
};

export default ContactListItem;
