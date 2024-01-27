import { AUTHORIZED_CODE_UPDATE_MUTATION, GET_AUTHORIZED_CODE_QUERY } from "../graphql";
import { useMutation } from "@apollo/client";
import type { AuthorizedCodeInput } from "../../../backend/src/types/types";
import { useState } from "react";
import { Dialog, Button, FormControl, InputLabel, Select, MenuItem, DialogActions, DialogContent, TextField, DialogContentText, DialogTitle, makeStyles } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthorizedCodePage = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [number, setNumber] = useState<string>("10");
  const [length, setLength] = useState<string>("6");
  const [list, setList] = useState<string[]>([]);
  const navigate = useNavigate();

  const [updateAuthorizedCode, { loading, error }] = useMutation(
    AUTHORIZED_CODE_UPDATE_MUTATION,
    {
      refetchQueries: [{ query: GET_AUTHORIZED_CODE_QUERY }],
    }
  );
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  
  // const useStyles = makeStyles((theme) => ({
  //   formControl: {
  //     margin: theme.spacing(1),
  //     minWidth: 120,
  //   },
  // }));

  const handleGenerate = () => {
    const numberInt: number = Number(number);
    const lengthInt: number = Number(length);
  
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const randomCode: string[] = ["The generated authorized codes are:"];

    for(let i = 0; i < numberInt; i++){
      let result: string = "";
      for(let j = 0; j < lengthInt; j++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      randomCode.push(result);
    }

    const alertMessage = randomCode.join('\n');

    const userResponse = confirm(alertMessage);
    if(userResponse){
      formSubmit({codeList: randomCode.slice(1)});
    }

    setNumber("10");
    setLength("6");
  }

  const formSubmit = ({ codeList }: AuthorizedCodeInput) => {
    // const classes = useStyles();
    updateAuthorizedCode({
      variables: {
        authorizedCodeInput: {
          codeList,
        },
      },
    });
    
    setVisible(false);
  };


  return(
    <>
      <div className="flex justify-center m-3">公告一覽</div>

      <Button className="m-3" variant="outlined" onClick={() => setVisible(true)}>
        新增加簽碼
      </Button>

      <Dialog open={visible} onClose={() => setVisible(false)} maxWidth="sm" fullWidth>
        <DialogTitle>新增公告</DialogTitle>
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
            <InputLabel id="option-input-label" className="w-50">Code length</InputLabel>
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
          <Button onClick={() => setVisible(false)} color="primary">
            取消
          </Button>
          <Button onClick={() => handleGenerate()} color="primary">
            Generate
          </Button>
        </DialogActions>
      </Dialog>

      <div className="flex justify-center m-3">
        <Button  variant="outlined" onClick={() => navigate(-1)}>
          返回
        </Button>
      </div>
    </>
  )
}
  
export default AuthorizedCodePage;