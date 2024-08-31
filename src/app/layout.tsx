import { Glysa, LexendDeca } from "@/assets/fonts";
import AddIcon from "@/assets/icons/Add.svg";
import SettingsIcon from "@/assets/icons/Settings.svg";
import DefaultPicture from "@/assets/images/Default.png";
import HighPriorityButton from "@/components/buttons/HighPriorityButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Headline1 from "@/components/headlines/Headline1";
import BackArrowIcon from "@/assets/icons/Back arrow.svg";
import LightModeIcon from "@/assets/icons/Light mode.svg";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import Image from "next/image";
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
        <aside className="mt-24 flex h-24 grow items-center justify-end border-y-[1px] border-black-60 p-6">
          <SecondaryButton ariaLabel="Back" icon={BackArrowIcon} />
        </aside>
        <div className="min-h-screen w-full max-w-3xl border-x-[1px] border-black-60 pt-24">
          <header className="flex h-24 items-center justify-between border-y-[1px] border-black-60 p-6">
            <Headline1>Contacts</Headline1>
            <div className="flex items-center gap-8">
              <SecondaryButton icon={SettingsIcon} ariaLabel={"Settings"} />
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
        <aside className="mt-24 flex h-24 grow items-center border-y-[1px] border-black-60 p-6">
          <SecondaryButton icon={LightModeIcon} ariaLabel="Toggle Light Mode" />
        </aside>
      </body>
    </html>
  );
}
