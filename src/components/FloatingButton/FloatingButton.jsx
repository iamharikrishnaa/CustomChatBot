import { useState,useEffect } from "react";
import Fab from "@mui/material/Fab";
import { Avatar } from "@mui/material";
import Container from "../Container/Container";

const FloatingButton = ({user_id}) => {
  const [containerVisible, setContainerVisible] = useState(false);
  const [themeData, setThemeData] = useState(null);
  const { popup_picture } = themeData?.results || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
           `http://stanging-backend-chatbot-env.eba-xpae3fqu.ap-southeast-1.elasticbeanstalk.com/api/v1/chatbot-customizations/${user_id}/`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setThemeData(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user_id]);

  const toggleContainer = () => {
    setContainerVisible((prevVisible) => !prevVisible);
  };

  const handleClose = () => {
    setContainerVisible(false);
  };

  return (
    <div>
      <Container isOpen={containerVisible} onClose={handleClose} themeData={themeData} />
      <div className="floating-button">
        <Fab
          style={{ width: "60px", height: "60px", position: "relative" }}
          aria-label="add"
          onClick={toggleContainer}
        >
          <Avatar
            style={{ width: "60px", height: "60px" }}
            alt="FloatingAvatar"
            src={popup_picture}
          />
        </Fab>
      </div>
    </div>
  );
};

export default FloatingButton;
