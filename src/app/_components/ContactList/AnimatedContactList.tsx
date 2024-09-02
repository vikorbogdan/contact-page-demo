"use client";
import { Contact } from "@prisma/client";
import { motion } from "framer-motion";
import ContactListItem from "./ContactListItem";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type AnimatedContactListProps = {
  contacts: Contact[];
};

const AnimatedContactList = ({ contacts }: AnimatedContactListProps) => {
  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-col items-stretch"
    >
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contactData={contact} />
      ))}
    </motion.ul>
  );
};

export default AnimatedContactList;
