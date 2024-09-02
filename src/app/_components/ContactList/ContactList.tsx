import { getAllContacts } from "@/utils/apiUtils";
import { unstable_cache } from "next/cache";
import ContactListItem from "./ContactListItem";
const ContactList = async () => {
  const getContacts = unstable_cache(getAllContacts, ["contacts"]);
  const result = await getContacts();
  const contacts = result?.contacts || [];

  return (
    <ul className="flex w-full flex-col items-stretch">
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contactData={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
