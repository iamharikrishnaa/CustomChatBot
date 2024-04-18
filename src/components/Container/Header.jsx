import { Avatar } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import dynamicData from "../../assets/avatar.jpeg";
import PropTypes from "prop-types";

const Header = ({onClose,reset }) => {

  return (
    <div className="header">
      <div className="botDetails">
        <Avatar
          alt="botAvatar"
          src={dynamicData}
          sx={{ width: 35, height: 35 }}
        />
        <div className="botName">
          <Typography variant="body1" component="span">
            name
          </Typography>
        </div>
      </div>
      <div className="chatIcons">
        <CachedIcon
          sx={{ width: 28, height: 28, cursor: "pointer" }}
          onClick={reset}
        />
        <CloseIcon
          sx={{ width: 28, height: 28, cursor: "pointer" }}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Header;
