import { ChangeEvent, useState } from "react";
import { Input } from "./ui/input";
import { v4 as uuidv4 } from "uuid";
import { storage } from "@/constants/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useToast } from "./ui/use-toast";
import { Loader } from "lucide-react";
import { useTranslation } from "react-i18next";
import { UserAvatarUploaderProps } from "@/shared/type";

function UserAvatarUploader({
  imgUrl,
  setImgUrl,
  imageRef,
}: UserAvatarUploaderProps) {
  const { t } = useTranslation();
  const [isImageLoading, setIsImageLoading] = useState(false);
  const { toast } = useToast();
  const handleImage = async (image: File) => {
    if (!image) {
      return "Image upload fail!";
    }

    const imageUpload = image.name + uuidv4();
    const imageRef = ref(storage, `images/${imageUpload}`);
    await uploadBytes(imageRef, image).then(() => {
      toast({ title: "Image uploaded successfully!" });
    });
    const imageURL = await getDownloadURL(ref(storage, `images/${imageUpload}`))
      .then((url) => {
        setIsImageLoading(false);
        return url;
      })
      .catch((error) => {
        return `${error}`;
      });
    return imageURL;
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsImageLoading(true);
    if (e.target.files && e.target.files.length > 0) {
      const blob = new Blob([e.target.files[0]], { type: "image/png" });
      const file = new File([blob], `avatar-${uuidv4()}`, {
        type: "image/png",
      });
      const imageUrl = await handleImage(file);
      setImgUrl(imageUrl);
    }
  };

  return (
    <>
      <div className="image_div" onClick={() => imageRef?.current?.click()}>
        <Input
          id="image"
          className="hidden"
          type="file"
          ref={imageRef}
          onChange={handleChange}
        />
        {!isImageLoading ? (
          <img src="/upload-image.svg" width={40} height={40} alt="upload" />
        ) : (
          <div className="text-16 flex-center font-medium dark:text-white">
            Uploading
            <Loader size={20} className="animate-spin ml-2" />
          </div>
        )}
        <div className="flex flex-col items-center">
          <p className="text-14 font-bold dark:text-sky-300 text-sky-500">
            {t("clickToUpload")}
          </p>
          <p className="text-12 font-normal text-[#71788B]">
            SVG, PNG, or JPG ({t("max")} 1080x1080px)
          </p>
        </div>
      </div>
      {imgUrl && (
        <>
          <p className="dark:text-white text-base">{t("preview")}</p>
          <div className="flex-center w-full">
            <img
              src={imgUrl}
              width={150}
              height={150}
              alt="avatar"
              className="rounded-full border dark:border-[#444444] dark:bg-[#1f1f1f] aspect-square"
            />
          </div>
        </>
      )}
    </>
  );
}

export default UserAvatarUploader;
