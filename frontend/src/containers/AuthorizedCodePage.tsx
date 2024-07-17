// TODO: UI
import {
  AUTHORIZED_CODE_UPDATE_MUTATION,
  GET_AUTHORIZED_CODE_QUERY,
} from "@/graphql";
import { useMutation } from "@apollo/client";
import type { AuthorizedCodeInputType } from "@/shared/type";
import { useState } from "react";
// TODO: replace with shadcn/ui
import {
  Dialog,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
} from "@mui/material";
import { Button } from "@/components/ui/button.tsx";
import LoaderSpinner from "@/components/LoaderSpinner";
import { useToast } from "@/components/ui/use-toast";

const AuthorizedCodePage = () => {
  const { toast } = useToast();
  const [visible, setVisible] = useState<boolean>(false);
  const [number, setNumber] = useState<string>("10");
  const [length, setLength] = useState<string>("6");
  // const [list, setList] = useState<string[]>([]);

  const [updateAuthorizedCode, { loading, error }] = useMutation(
    AUTHORIZED_CODE_UPDATE_MUTATION,
    {
      refetchQueries: [{ query: GET_AUTHORIZED_CODE_QUERY }],
    }
  );

  const handleGenerate = () => {
    const numberInt: number = Number(number);
    const lengthInt: number = Number(length);

    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const randomCode: string[] = ["The generated authorized codes are:"];

    for (let i = 0; i < numberInt; i++) {
      let result: string = "";
      for (let j = 0; j < lengthInt; j++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      randomCode.push(result);
    }

    const alertMessage = randomCode.join("\n");

    const userResponse = confirm(alertMessage);
    if (userResponse) {
      formSubmit({ codeList: randomCode.slice(1) });
    }

    setNumber("10");
    setLength("6");
  };

  const formSubmit = ({ codeList }: AuthorizedCodeInputType) => {
    updateAuthorizedCode({
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
    }
  };

  return (
    <>
      <div className="w-10/12 flex flex-col mx-auto mt-20 mb-8 text-white">
        <h1 className="text-white">生成加簽碼</h1>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-3">
          <Button
            className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
            onClick={() => setVisible(true)}
          >
            生成加簽碼
          </Button>
        </div>
        <Dialog
          open={visible}
          onClose={() => setVisible(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>生成加簽碼</DialogTitle>
          <DialogContent>
            <FormControl className="w-50">
              <TextField
                margin="dense"
                id="number"
                label="內文"
                type="number"
                fullWidth
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <InputLabel id="option-input-label" className="w-50">
                Code length
              </InputLabel>
              <Select
                labelId="number-input"
                id="option-input"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              >
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setVisible(false)}
              className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
            >
              取消
            </Button>
            <Button
              onClick={() => handleGenerate()}
              className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
            >
              Generate
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default AuthorizedCodePage;
