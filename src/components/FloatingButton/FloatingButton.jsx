import { useState } from "react";
import Fab from "@mui/material/Fab";
import { Avatar } from "@mui/material";
import dynamicData from "../../assets/Profile.png";
import Container from "../Container/Container";

const FloatingButton = () => {
  const [containerVisible, setContainerVisible] = useState(false);

  const toggleContainer = () => {
    setContainerVisible((prevVisible) => !prevVisible);
  };

  const handleClose = () => {
    setContainerVisible(false);
  };

  return (
    <div>
      <Container isOpen={containerVisible} onClose={handleClose} />
      <div className="floating-button">
        <Fab
          style={{ width: "60px", height: "60px", position: "relative" }}
          aria-label="add"
          onClick={toggleContainer}
        >
          <Avatar
            style={{ width: "60px", height: "60px" }}
            alt="FloatingAvatar"
            src={dynamicData}
          />
        </Fab>
      </div>
    </div>
  );
};

export default FloatingButton;
