import { getAllContacts } from "@/utils/apiUtils";
import { unstable_cache } from "next/cache";
import AnimatedContactList from "./AnimatedContactList";

const ContactList = async () => {
  const getContacts = unstable_cache(getAllContacts, ["contacts"]);
  const result = await getContacts();
  const contacts = result?.contacts || [];

  return <AnimatedContactList contacts={contacts} />;
};

export default ContactList;
