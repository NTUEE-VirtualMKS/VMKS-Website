import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { PasswordInput } from "@/components/PasswordInput";
import { Label } from "./ui/label";
import { useTranslation } from "react-i18next";

type PasswordInputDialogProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  handleFunction: () => void;
  pwd: string;
  setPwd: (pwd: string) => void;
};

function PasswordInputDialog({
  visible,
  setVisible,
  handleFunction,
  pwd,
  setPwd,
}: PasswordInputDialogProps) {
  const { t } = useTranslation();
  return (
    <Dialog open={visible} onOpenChange={(visible) => setVisible(visible)}>
      <DialogContent className="sm:max-w-[425px] text-white bg-black">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t("enterPassword")}</DialogTitle>
          <DialogDescription className="text-sm">
            {t("enterYourPasswordForConfirmation")}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2.5">
          <div className="flex flex-row items-center gap-4">
            <Label htmlFor="password" className="text-right ml-12">
              {t("password")}
            </Label>
            <PasswordInput
              id="password"
              placeholder="password"
              className="input-class"
              value={pwd}
              required
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row-reverse gap-2">
          <Button
            onClick={handleFunction}
            className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
          >
            {t("submit")}
          </Button>
          <Button
            onClick={() => setVisible(false)}
            className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
          >
            {t("cancel")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PasswordInputDialog;
