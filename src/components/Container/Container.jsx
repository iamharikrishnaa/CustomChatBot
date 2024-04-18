import { Card } from "@mui/material";
import Header from "./Header";
import MessageContainer from "./MessageContainer";
import Footer from "./Footer";
import PropTypes from "prop-types"; // Import PropTypes

const Container = ({ isOpen, onClose }) => {
  return (
    <div>
      {isOpen && (
        <Card variant="outlined" className="card" sx={{ borderRadius: 5 }}>
          <Header onClose={onClose} />
          <MessageContainer />
          <Footer />
        </Card>
      )}
    </div>
  );
};
//prop type validation
Container.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Container;
