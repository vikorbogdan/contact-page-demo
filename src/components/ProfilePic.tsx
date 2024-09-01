import Image, { ImageProps } from "next/image";

type ProfilePicProps = {
  variant: "small" | "big";
} & ImageProps;

const ProfilePic = ({ variant, ...props }: ProfilePicProps) => {
  return (
    <Image
      className="aspect-square rounded-full border-[1px] border-black-60 object-cover"
      {...props}
      width={variant === "small" ? 40 : 88}
      height={variant === "small" ? 40 : 88}
    />
  );
};

export default ProfilePic;
