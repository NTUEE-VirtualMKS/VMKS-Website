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
  DialogFooter,
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

function AuthorizedCodePage() {
  const { toast } = useToast();
  const [visible, setVisible] = useState(false);
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
      setVisible(false);
      toast({ title: "Authorized code generated successfully" });
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="w-10/12 flex flex-col mx-auto mt-20 mb-8 text-white">
        <h1 className="text-white">生成加簽碼</h1>
        <Dialog open={visible} onOpenChange={(visible) => setVisible(visible)}>
          <DialogTrigger asChild>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
              <Button
                className="m-3 text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
                onClick={() => setVisible(true)}
              >
                生成加簽碼
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] text-white bg-black">
            <DialogHeader>
              <DialogTitle className="text-2xl">生成加簽碼</DialogTitle>
              <DialogDescription className="text-sm">
                請填寫以下資訊:
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="number" className="text-right">
                number
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
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
              <Label htmlFor="code length" className="text-right mt-3">
                length
              </Label>
              <Select
                value={length}
                onValueChange={(length) => setLength(length)}
              >
                <SelectTrigger
                  className="bg-[#15171C] w-9/12 border-0 focus:ring focus:ring-sky-300 text-16 text-base"
                  id="code length"
                >
                  <SelectValue placeholder="code length" />
                </SelectTrigger>
                <SelectContent className="bg-black">
                  <SelectGroup>
                    <SelectLabel className="text-white text-base">
                      length
                    </SelectLabel>
                    <SelectItem value="5" className="text-white text-base">
                      5
                    </SelectItem>
                    <SelectItem value="6" className="text-white text-base">
                      6
                    </SelectItem>
                    <SelectItem value="7" className="text-white text-base">
                      7
                    </SelectItem>
                    <SelectItem value="8" className="text-white text-base">
                      8
                    </SelectItem>
                    <SelectItem value="9" className="text-white text-base">
                      9
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button
                onClick={() => setVisible(false)}
                className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
              >
                取消
              </Button>
              <Button
                onClick={handleGenerate}
                className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
              >
                提交
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div className="flex flex-row justify-start gap-3">
          {codeList.map((code, index) => (
            <div key={index} className="text-white flex flex-col text-20">
              <p className="text-white">Update At: {code.updatedAt}</p>
              {code.codeList?.map((code, index) => (
                <div key={index} className="text-white">
                  {code}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AuthorizedCodePage;
