import * as React from "react";
import { MdOutlineNoteAdd } from "react-icons/md";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function AddDoc({ onCreateDoc }) {
  const [open, setOpen] = React.useState(false);
  const [heading, setHeading] = React.useState("");
  const [doc, setDoc] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateDoc = (event) => {
    event.preventDefault();
    const newDoc = {
      desc: doc,
      filesize: ".9mb", // you can update this as needed
      close: false,
      tag: { isOpen: true, tagTitle: heading, tagColor: "blue" }, // you can update the tag color as needed
    };
    onCreateDoc(newDoc);
    handleClose();
    setDoc("");
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark", //default theme
      primary: {
        // main: "#90caf9",
        main: "#fff",
      },
      secondary: {
        main: "#f48fb1",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <React.Fragment>
        <MdOutlineNoteAdd
          onClick={handleClickOpen}
          className="text-white text-5xl m-10 cursor-pointer fixed bottom-0 right-0 z-[999] transition-transform ease-in-out hover:scale-110"
        />
        <Dialog
          type="dark"
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <DialogTitle>Create Document</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText> */}
            {/* <input type="text" name="" id="" ref={body_text} /> */}
            <TextField
              required
              fullWidth
              id="heading"
              label="Heading"
              variant="filled"
              placeholder="Heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
            <TextField
              required
              fullWidth
              id="doc"
              label="Write"
              multiline
              rows={8}
              variant="filled"
              placeholder="Enter your content content"
              value={doc}
              onChange={(e) => setDoc(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={(e) => handleCreateDoc(e)}>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </ThemeProvider>
  );
}
