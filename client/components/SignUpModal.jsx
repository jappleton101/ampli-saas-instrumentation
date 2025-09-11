import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SignupModal({
  handleModalButtonClick,
  signupError,
  signupSuccess,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  return (
    <div>
      <Button onClick={handleOpen}>Sign Up</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Account
          </Typography>
          <Typography variant="body1">
            Create an account to save your progress.
          </Typography>
          <br />
          <TextField
            id="outlined"
            label="Username"
            placeholder="email@example.com"
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            fullWidth
          />
          <br />
          <TextField
            id="outlined"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="outlined"
            label="Confirm Password"
            type="password"
            sx={{ ml: 1 }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          {signupError && (
            <Typography variant="body2" color="red">
              {signupError}
            </Typography>
          )}
          {signupSuccess && (
            <Typography variant="body2" color="green">
              {signupSuccess}
            </Typography>
          )}
          <br />
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              onClick={() =>
                handleModalButtonClick(
                  username,
                  password,
                  confirmPassword,
                  "create-user",
                  firstName,
                  lastName
                )
              }
            >
              Create Account
            </Button>
            <Button variant="contained" onClick={handleClose} color="error">
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
