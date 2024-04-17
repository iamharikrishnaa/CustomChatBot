import { useState } from "react";
import { Send } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";

const Footer = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const summitMessage = () => {
    if (!message) {
      return;
    }

    onSubmit(message); // Send the message to the parent component
    setMessage(""); // Clear input after sending
  };

  return (
    <div className="footer">
      <div className="text-field">
        <TextField
          placeholder=" Ex:what is the contact number of Novagito... "
          variant="standard"
          fullWidth
          style={{
            backgroundColor: "#D9DDFF",
            marginTop: 10,
            borderRadius: 23,
            height: 42,
            justifyContent: "center",
          }}
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.keyCode === 13) {
              summitMessage();
            }
          }}
          autoFocus={false}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" className="hover-effect">
                <Send onClick={summitMessage} />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
      </div>
      <div className="novagito-logo">Powered By Logo</div>
    </div>
  );
};

export default Footer;
