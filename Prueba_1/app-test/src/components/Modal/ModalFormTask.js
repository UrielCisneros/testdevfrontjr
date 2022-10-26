import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  Alert,
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { labelCheck } from "components/CardUser/CardTask";
import { green, red } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { postFormTask } from "features/users/users.actions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalFormTask({
  handleClickAction,
  open,
  user,
  setOpenSnack,
}) {
  const dispatch = useDispatch();

  const [dataForm, setDataForm] = useState({
    title: "",
    completed: false,
  });

  const [errorForm, setErrorForm] = useState(false);

  const handleChangeForm = (e) => {
    if (e.target.name === "title" && e.target.name !== "") setErrorForm(false);
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleClickForm = () => {
    if (!dataForm.title) return setErrorForm(true);
    dispatch(
      postFormTask({
        dataForm: {
          userId: parseInt(user.id),
          ...dataForm,
        },
        callback: (error) => {
          if (error)
            return setOpenSnack({
              message: "Ups, try again.",
              type: "error",
              openSnack: true,
            });
          setDataForm({
            title: "",
            completed: false,
          });
          handleClickAction(false);
          setOpenSnack({
            message: "Task is register",
            type: "success",
            openSnack: true,
          });
        },
      })
    );
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClickAction(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Register new task"}</DialogTitle>
        <Box mx={2}>
          {errorForm && <Alert severity="error">Pleace enter the title</Alert>}
        </Box>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            name="title"
            type="text"
            value={dataForm.title}
            onChange={handleChangeForm}
            fullWidth
            variant="standard"
          />
          <FormControlLabel
            value="end"
            control={
              <Checkbox
                {...labelCheck}
                value={dataForm.completed}
                name="completed"
                onChange={() =>
                  setDataForm({ ...dataForm, completed: !dataForm.completed })
                }
                sx={{
                  color: red[500],
                  "&.Mui-checked": {
                    color: green[300],
                  },
                }}
              />
            }
            label={`Task is completed `}
            labelPlacement="end"
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: red[300] }}
            onClick={() => handleClickAction(false)}
          >
            Cancel
          </Button>
          <Button onClick={() => handleClickForm()}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
