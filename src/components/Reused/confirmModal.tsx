import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CircularProgress } from "@mui/material";

export default function ConfirmModal({
  open,
  onClose,
  text,
  handleSubmit,
  title,
  loading,
}: {
  open: boolean;
  onClose: () => void;
  text: string;
  handleSubmit: () => void;
  title?: string;
  loading?: boolean;
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>No</Button>
          <Button
            onClick={handleSubmit}
            autoFocus
            startIcon={loading && <CircularProgress sx={{ width: "2rem" }} />}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
