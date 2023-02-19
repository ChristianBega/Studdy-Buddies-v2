import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import SubtopicsForm from "../Forms/SubtopicsForm";
import { Fab } from "@mui/material";
// import "../../Styles/FormPage.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  backgroundColor: "#f1f1f1",
  border: "2px solid #a6afb44d",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
};

export default function ModalComponent({ setUserInput }) {
  const [formType, setFormType] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    setOpen(true);
    setFormType(e.target.parentElement.parentElement.id);
  };
  const handleClose = () => {
    setOpen(false);
    setFormType("");
  };

  return (
    <>
      <Fab size="small" onClick={handleOpen} aria-label="add">
        <AddIcon />
      </Fab>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Add Something here ...
          </Typography>
          <SubtopicsForm formType={formType} setUserInput={setUserInput} />
        </Box>
      </Modal>
    </>
  );
}
