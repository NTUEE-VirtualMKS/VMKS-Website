import { useEffect, useState } from "react";
import {
  AUTHORIZED_CODE_UPDATE_MUTATION,
  GET_AUTHORIZED_CODE_QUERY,
} from "@/graphql";
import { useLazyQuery, useMutation } from "@apollo/client";
import { Button } from "@/components/ui/button";
import LoaderSpinner from "@/components/LoaderSpinner";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type {
  AuthorizedCodeInputType,
  AuthorizedCodeType,
} from "@/shared/type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { KeyRound } from "lucide-react";

function AuthorizedCodePage() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [clickedCodes, setClickedCodes] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [number, setNumber] = useState("10");
  const [length, setLength] = useState("6");
  const [codeList, setCodeList] = useState<AuthorizedCodeType[]>([]);
  const [getAuthorizedCode] = useLazyQuery(GET_AUTHORIZED_CODE_QUERY);

  const [updateAuthorizedCode, { loading, error }] = useMutation(
    AUTHORIZED_CODE_UPDATE_MUTATION,
    {
      refetchQueries: [{ query: GET_AUTHORIZED_CODE_QUERY }],
    }
  );

  const handleGenerate = async () => {
    const numberInt = parseInt(number);
    const lengthInt = parseInt(length);
    if (numberInt < 1 || numberInt > 20) {
      toast({
        title: "The number must be between 1 and 20",
        variant: "destructive",
      });
      return;
    }
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const randomCode = ["The generated authorized codes are:"];

    for (let i = 0; i < numberInt; i++) {
      let result = "";
      for (let j = 0; j < lengthInt; j++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      randomCode.push(result);
    }

    const alertMessage = randomCode.join("\n");

    const userResponse = confirm(alertMessage);
    if (userResponse) {
      setVisible(false);
      await formSubmit({ codeList: randomCode.slice(1) });
      const { data } = await getAuthorizedCode();
      const authorizedCode = data?.GetAuthorizedCode;
      if (authorizedCode) {
        setCodeList([authorizedCode]);
      }
    }

    setNumber("10");
    setLength("6");
  };

  const formSubmit = async ({ codeList }: AuthorizedCodeInputType) => {
    await updateAuthorizedCode({
      variables: {
        authorizedCodeInput: {
          codeList,
        },
      },
    });
    if (loading) return <LoaderSpinner />;
    if (error) {
      toast({ title: `${error.message}`, variant: "destructive" });
    } else {
      toast({ title: "Authorized code generated successfully" });
    }
  };

  useEffect(() => {
    // Load clicked codes from localStorage on component mount
    const storedClickedCodes = localStorage.getItem("clickedCodes");
    if (storedClickedCodes) {
      setClickedCodes(JSON.parse(storedClickedCodes));
    }
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({ title: "Text copied to clipboard!", variant: "share" });
      },
      (err) => {
        toast({
          title: "Failed to copy text to clipboard!",
          variant: "destructive",
        });
        console.log(err);
      }
    );
    const updatedClickedCodes = { ...clickedCodes, [text]: true };
    setClickedCodes(updatedClickedCodes);
    // Save updated clicked codes to localStorage
    localStorage.setItem("clickedCodes", JSON.stringify(updatedClickedCodes));
  };

  useEffect(() => {
    getAuthorizedCode().then(({ data }) => {
      const authorizedCode = data?.GetAuthorizedCode;
      if (authorizedCode) {
        setCodeList([authorizedCode]);
      }
    });
  }, []);

  return (
    <>
      <div className="w-10/12 flex flex-col mx-auto mt-20 mb-8 dark:text-white">
        <h1 className="dark:text-white p-1 flex flex-row items-center gap-2">
          <KeyRound className="dark:text-white" size={35} />
          {t("generateCode")}
        </h1>
        <Dialog open={visible} onOpenChange={(visible) => setVisible(visible)}>
          <DialogTrigger asChild>
            <div className="flex flex-row">
              <Button
                className="m-3 text-blue-500 border-blue-500 bg-transparent hover:bg-transparent shadow-md dark:text-sky-300 border dark:border-sky-300 transform active:scale-90 transition-transform duration-200"
                onClick={() => setVisible(true)}
              >
                {t("generateCode")}
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent className="w-11/12 sm:w-11/12 md:w-[23rem] lg:w-[25rem] xl:w-[25rem] rounded-xl dark:text-white dark:bg-black">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {t("generateCode")}
              </DialogTitle>
              <DialogDescription className="text-sm">
                {t("pleaseFillInAllFields")}:
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="number" className="text-right lowercase">
                {t("quantity")}
              </Label>
              <Input
                id="number"
                type="number"
                placeholder="number"
                className="col-span-3 input-class"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-2 ml-8 xs:ml-8 sm:ml-16 md:ml-8 lg:ml-10 xl:ml-10">
              <Label
                htmlFor="code length"
                className="text-right mt-3 w-10 mr-2"
              >
                {t("length")}
              </Label>
              <Select
                value={length}
                onValueChange={(length) => setLength(length)}
              >
                <SelectTrigger
                  className="dark:bg-[#15171C] input-class"
                  id="code length"
                >
                  <SelectValue placeholder="code length" />
                </SelectTrigger>
                <SelectContent className="dark:bg-black">
                  <SelectGroup>
                    <SelectLabel className="dark:text-white text-base">
                      {t("length")}
                    </SelectLabel>
                    <SelectItem value="5" className="dark:text-white text-base">
                      5
                    </SelectItem>
                    <SelectItem value="6" className="dark:text-white text-base">
                      6
                    </SelectItem>
                    <SelectItem value="7" className="dark:text-white text-base">
                      7
                    </SelectItem>
                    <SelectItem value="8" className="dark:text-white text-base">
                      8
                    </SelectItem>
                    <SelectItem value="9" className="dark:text-white text-base">
                      9
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-row-reverse gap-2">
              <Button
                onClick={handleGenerate}
                className="submit-button hover:bg-blue-500 hover:bg-opacity-90"
              >
                {t("submit")}
              </Button>
              <Button
                onClick={() => setVisible(false)}
                className="cancel-button  hover:bg-red-500 hover:bg-opacity-90"
              >
                {t("cancel")}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <div className="flex flex-row justify-start gap-4">
          {codeList.map((code, index) => (
            <div key={index} className="dark:text-white flex flex-col text-20">
              <p className="dark:text-white font-semibold text-xl">
                {t("lastChange")}: {code.updatedAt.split(",")[0]}
              </p>
              {code.codeList?.map((code, index) => (
                <div className="flex flex-row">
                  <p
                    key={index}
                    className={cn(
                      "dark:text-white text-lg font-semibold cursor-pointer transform active:scale-95 transition-transform duration-200",
                      clickedCodes[code!] ? "text-blue-600" : "dark:text-white"
                    )}
                    onClick={() => copyToClipboard(code!)}
                  >
                    {index < 9 ? `0${index + 1}` : index + 1}. {code}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { AuthorizedCodePage };
