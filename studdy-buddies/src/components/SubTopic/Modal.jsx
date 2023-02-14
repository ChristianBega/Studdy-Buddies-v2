import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { InputUnstyled } from "@mui/base";
// import "../../Styles/FormPage.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "lightpink",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent() {
  const [formType, setFormType] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    console.log(e.target.parentElement.parentElement.id);
    setOpen(true);
    setFormType(e.target.parentElement.parentElement.id);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <AddIcon />
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Something here ...
          </Typography>
          <form className="modalForm">
            <InputUnstyled className="textFields" type="text" placeholder="Enter description here" />
          </form>
        </Box>
      </Modal>
    </>
  );
}