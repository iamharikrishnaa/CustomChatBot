import { Avatar } from "@mui/material";
import CachedIcon from '@mui/icons-material/Cached';
import CloseIcon from '@mui/icons-material/Close';
import dynamicData from "../../assets/avatar.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div className="botDetails">
        <Avatar alt="botAvatar" src={dynamicData}  sx={{ width:30,height:30}}/>
        <div className="botName">name</div>
      </div>
      <div className="chatIcons">
        <CachedIcon sx={{ width:23,height:23}} />
        <CloseIcon sx={{ width:23,height:23}}/>
      </div>
    </div>
  );
};

export default Header;
