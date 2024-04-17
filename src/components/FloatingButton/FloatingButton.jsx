import Fab from "@mui/material/Fab";
import { Avatar } from "@mui/material";
import dynamicData from "../../assets/avatar.jpeg";
import Container from "../Container/Container";

const FloatingButton = () => {
  return (
    <div>
      <Container />
      <Fab style={{ width: "70px", height: "70px" }} aria-label="add">
        <Avatar
          style={{ width: "70px", height: "70px" }}
          alt="FloatingAvatar"
          src={dynamicData}
        />
      </Fab>
    </div>
  );
};

export default FloatingButton;
