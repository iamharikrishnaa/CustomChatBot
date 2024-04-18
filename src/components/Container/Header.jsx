import { Avatar } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import dynamicData from "../../assets/avatar.jpeg";
import PropTypes from "prop-types";

const Header = ({ onClose }) => {
  return (
    <div className="header">
      <div className="botDetails">
        <Avatar alt="botAvatar" src={dynamicData} sx={{ width: 30, height: 30 }} />
        <div className="botName">name</div>
      </div>
      <div className="chatIcons">
        <CachedIcon sx={{ width: 23, height: 23, cursor: "pointer" }} />
        <CloseIcon sx={{ width: 23, height: 23, cursor: "pointer" }} onClick={onClose} />
      </div>
    </div>
  );
};

Header.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Header;
