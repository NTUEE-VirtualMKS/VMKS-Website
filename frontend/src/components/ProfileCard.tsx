// TODO: Beautify the UI of the ProfileCard component
import { type ProfileCardProps } from "@/shared/type";
import LoaderSpinner from "./LoaderSpinner";
import { useState } from "react";
import { Button } from "./ui/button";

function ProfileCard({
  name,
  studenetID,
  password,
  photoLink,
  laserCutAvailable,
  isAdmin,
  isMinister,
}: ProfileCardProps) {
  const [showPassword, setShowPassword] = useState(false);
  if (!photoLink) return <LoaderSpinner />;

  return (
    <div className="my-2 flex flex-col gap-6 max-md:items-center md:flex-row">
      <img
        src={photoLink}
        width={300}
        height={300}
        alt="User Image"
        className="aspect-square rounded-2xl border border-white"
      />
      <div className="flex flex-col max-md:items-center">
        <div className="flex flex-col">
          <figure className="flex gap-2 max-md:justify-center">
            <img src="/verified.svg" width={25} height={25} alt="verified" />
            <p className="text-20 font-medium text-white">
              Verified {isMinister ? "Minister" : isAdmin ? "Admin" : "User"}
            </p>
          </figure>
          <p className="text-5xl font-extrabold tracking-[-0.32px] text-white">
            {name}
          </p>
          <p className="text-lg text-white font-semibold">
            Student ID: {studenetID}
          </p>
          <p className="text-lg text-white font-semibold">
            Password: {showPassword ? password : "＊＊＊＊＊＊＊＊"}
            {!showPassword ? (
              <Button
                className="text-sky-300 border border-sky-300 rounded-lg ml-3"
                onClick={() => setShowPassword(true)}
              >
                show
              </Button>
            ) : (
              <Button
                className="text-sky-300 border border-sky-300 rounded-lg ml-3"
                onClick={() => setShowPassword(false)}
              >
                hide
              </Button>
            )}
          </p>
          <p className="text-lg text-white font-semibold">
            Laser Cut Available: {laserCutAvailable ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
