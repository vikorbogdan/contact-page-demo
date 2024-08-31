import { formatPhoneNumber } from "@/utils/stringUtils";
import * as Form from "@radix-ui/react-form";

type EditContactOverlayDataFormProps = {
  name: string;
  setName: (name: string) => void;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  email: string;
  setEmail: (email: string) => void;
};

const EditContactOverlayDataForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
}: EditContactOverlayDataFormProps) => {
  const handlePhoneNumberInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const input = e.target.value;
    const digitsOnly = input.replace(/\D/g, "").slice(0, 11);
    setPhoneNumber(digitsOnly);
  };

  return (
    <Form.Root className="flex flex-col gap-8">
      <Form.Field className="flex flex-col gap-1" name="name">
        <Form.Label className="text-xs leading-4 tracking-[0.01em] text-white-56">
          Name
        </Form.Label>
        <Form.Control asChild>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jamie Wright"
            className="rounded-lg border-[1px] border-black-60 bg-black-80 p-3 text-white-100 placeholder-white-32 outline-none"
            type="text"
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="flex flex-col gap-1" name="phoneNumber">
        <Form.Label className="text-xs leading-4 tracking-[0.01em] text-white-56">
          Phone number
        </Form.Label>
        <Form.Control asChild>
          <input
            value={formatPhoneNumber(phoneNumber)}
            onChange={handlePhoneNumberInputChange}
            placeholder="+36 01 234 5678"
            className="rounded-lg border-[1px] border-black-60 bg-black-80 p-3 text-white-100 placeholder-white-32 outline-none"
            type="tel"
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="flex flex-col gap-1" name="email">
        <Form.Label className="text-xs leading-4 tracking-[0.01em] text-white-56">
          E-mail address
        </Form.Label>
        <Form.Control asChild>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jamie.bray@mail.com"
            className="rounded-lg border-[1px] border-black-60 bg-black-80 p-3 text-white-100 placeholder-white-32 outline-none"
            type="email"
          />
        </Form.Control>
      </Form.Field>
    </Form.Root>
  );
};

export default EditContactOverlayDataForm;
