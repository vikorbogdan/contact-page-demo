import { PropsWithChildren } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Headline2 from "./headlines/Headline2";
import SecondaryButton from "./buttons/SecondaryButton";
import PrimaryButton from "./buttons/PrimaryButton";
type OverlayProps = {
  title: string;
  onDone: () => void;
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Overlay = ({
  title,
  children,
  onDone,
  isOpen,
  setIsOpen,
}: PropsWithChildren<OverlayProps>) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[#000000]/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 flex w-full max-w-[364px] -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-lg bg-black-100 p-6">
          <Dialog.Title asChild>
            <Headline2>{title}</Headline2>
          </Dialog.Title>
          {children}
          <div className="flex w-full justify-end gap-2">
            <Dialog.Close asChild>
              <SecondaryButton text="Cancel" />
            </Dialog.Close>
            <PrimaryButton
              text="Done"
              onClick={() => {
                onDone();
                setIsOpen(false);
              }}
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Overlay;
