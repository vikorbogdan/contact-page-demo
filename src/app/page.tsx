import Image from "next/image";
import CallIcon from "../assets/icons/Call.svg";
import MoreIcon from "../assets/icons/More.svg";
import MuteIcon from "../assets/icons/Mute.svg";
import SarahPicture from "../assets/images/Sarah.png";
import TimothyPicture from "../assets/images/Timothy.png";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import ButtonWithContextMenu from "@/components/ButtonWithContextMenu";
import ContactListItemOptions from "@/components/ContactListItemOptions";

export default function Home() {
  return (
    <ul className="flex w-full flex-col items-stretch">
      <li className="group flex gap-4 py-3">
        <Image
          className="rounded-full border-[1px] border-black-60"
          width={40}
          height={40}
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
        <Image
          className="rounded-full border-[1px] border-black-60"
          width={40}
          height={40}
          src={SarahPicture}
          alt="Profile Picture"
        />
        <div>
          <p className="text-base text-white-100">Sarah Wright</p>
          <p className="text-xs text-white-56">+36 01 234 5678</p>
        </div>
        <ContactListItemOptions />
      </li>
    </ul>
  );
}
