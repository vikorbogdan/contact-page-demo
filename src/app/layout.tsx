import { Glysa, LexendDeca } from "@/assets/fonts";
import AddIcon from "@/assets/icons/Add.svg";
import BackArrowIcon from "@/assets/icons/Back arrow.svg";
import LightModeIcon from "@/assets/icons/Light mode.svg";
import SettingsIcon from "@/assets/icons/Settings.svg";
import DefaultPicture from "@/assets/images/Default.png";
import HighPriorityButton from "@/components/buttons/HighPriorityButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Headline1 from "@/components/headlines/Headline1";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import Image from "next/image";
import SettingsButtonWithDropdown from "./_components/Header/SettingsButtonWithDropdown";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact management page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localFonts = `${Glysa.variable} ${LexendDeca.variable}`;
  return (
    <html lang="en">
      <body
        className={cn(
          localFonts,
          "flex items-start justify-center bg-black-100 font-sans text-[14px] tracking-[0.01em] text-white-100",
        )}
      >
        <aside className="mt-24 hidden h-24 grow items-center justify-end border-y-[1px] border-black-60 p-6 md:flex">
          <SecondaryButton ariaLabel="Back" icon={BackArrowIcon} />
        </aside>
        <div className="min-h-screen w-full max-w-3xl border-x-[1px] border-black-60 md:pt-24">
          <header className="flex h-24 items-center border-y-[1px] border-black-60 p-6">
            <SecondaryButton
              className="md:hidden"
              ariaLabel="Back"
              icon={BackArrowIcon}
            />

            <Headline1>Contacts</Headline1>
            <div className="ml-auto flex items-center gap-8">
              <SecondaryButton
                className="hidden md:flex"
                icon={SettingsIcon}
                ariaLabel={"Settings"}
              />
              <SettingsButtonWithDropdown className="md:hidden" />
              <Image
                className="rounded-full border-[1.5px] border-white-100"
                alt="Profile Picture"
                width={24}
                height={24}
                src={DefaultPicture}
              />
              <HighPriorityButton
                className="fixed bottom-5 right-5 md:static"
                icon={AddIcon}
                text="Add new"
              />
            </div>
          </header>
          <main className="px-6 pt-3">{children}</main>
        </div>
        <aside className="mt-24 hidden h-24 grow items-center border-y-[1px] border-black-60 p-6 md:flex">
          <SecondaryButton icon={LightModeIcon} ariaLabel="Toggle Light Mode" />
        </aside>
      </body>
    </html>
  );
}
