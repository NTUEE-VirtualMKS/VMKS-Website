import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ChangeEvent, useRef, useState } from "react";
import { Loader } from "lucide-react";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { v4 as uuidv4 } from "uuid";
import { storage } from "@/constants/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Button } from "./ui/button";

function StudentIDCardUploadDialog() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const imageRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
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
    <div className="mt-2">
      <Dialog open={visible} onOpenChange={(visible) => setVisible(visible)}>
        <Button
          onClick={() => setVisible(true)}
          className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
        >
          Upload Student ID Card
        </Button>
        <DialogContent className="text-white bg-black rounded-xl w-11/12 sm:w-11/12">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {t("uploadStudenetIDCard")}
            </DialogTitle>
            <DialogDescription className="text-sm">
              {t("pleaseUploadYourStudentIDCardFront")}:
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-1">
            <div
              className="image_div"
              onClick={() => imageRef?.current?.click()}
            >
              <Input
                id="image"
                className="hidden"
                type="file"
                ref={imageRef}
                onChange={handleChange}
              />
              {!isImageLoading ? (
                <img
                  src="/upload-image.svg"
                  width={40}
                  height={40}
                  alt="upload"
                />
              ) : (
                <div className="text-16 flex-center font-medium text-white">
                  Uploading
                  <Loader size={20} className="animate-spin ml-2" />
                </div>
              )}
              <div className="flex flex-col items-center">
                <p className="text-14 font-bold text-sky-300">
                  {t("clickToUpload")}
                </p>
                <p className="text-12 font-normal text-[#71788B]">
                  SVG, PNG, or JPG ({t("max")} 1080x1080px)
                </p>
              </div>
            </div>
            {imgUrl && (
              <>
                <p className="text-white text-base">{t("preview")}</p>
                <div className="flex-center w-full flex flex-col">
                  <img
                    src={imgUrl}
                    width={400}
                    alt="avatar"
                    className="rounded-lg bg-transparent border border-[#444444]"
                  />
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default StudentIDCardUploadDialog;
