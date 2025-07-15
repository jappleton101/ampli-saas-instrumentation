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

export default function LoginModal({ handleModalButtonClick, loginError }) {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Log In</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <Typography variant="body1">
            Log in to view saved rides and save new rides.
          </Typography>
          <br />
          <TextField
            id="outlined"
            label="Username"
            placeholder="email@example.com"
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <TextField
            id="outlined"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            sx={{ ml: 1 }}
          />
          <br />
          {loginError && (
            <Typography variant="body2" color="red">
              {loginError}
            </Typography>
          )}
          <br />
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              onClick={() =>
                handleModalButtonClick(username, password, null, "login")
              }
            >
              Login
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
