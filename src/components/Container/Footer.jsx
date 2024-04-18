import { useState } from "react";
import { Send } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import PropTypes from "prop-types";

const Footer = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const summitMessage = (event) => {
    event.preventDefault();
    if (!message) {
      alert("Message cannot be empty");
      return; // Exit the function if message is empty
    }
    onSubmit(message); // Send the message to the parent component
    setMessage(""); // Clear input after sending
  };

  return (
    <form onSubmit={summitMessage}>
      <div className="footer">
        <div style={{ marginTop: 10 }}>
          <div className="text-field">
            <TextField
              placeholder="Ex: What is the contact number of Novagito..."
              variant="standard"
              fullWidth
              style={{
                height: 42,
                justifyContent: "center",
                borderRadius: 23,
                backgroundColor: "#D9DDFF",
              }}
              value={message}
              onChange={(event) => {
              setMessage(event.target.value);
              }}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  summitMessage(event); // Pass event to summitMessage function
                }
              }}
              autoFocus={false}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className="hover-effect">
                    <Send
                      onClick={summitMessage}
                      style={{ cursor: "pointer" }}
                    />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            />
          </div>
        </div>
        <div className="novagito-logo">Powered By Logo</div>
      </div>
    </form>
  );
};

// PropTypes validation
Footer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Footer;
