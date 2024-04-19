import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import Header from "./Header";
import MessageContainer from "./MessageContainer";
import { Responses } from "../../utils";
import Footer from "./Footer";
import PropTypes from "prop-types"; // Import PropTypes
       

const Container = ({ isOpen, onClose,themeData }) => {
  const [queries, setQueries] = useState([]);
  const [responses, setResponses] = useState(Responses);
  

  //Function to add a new query
  const addQueryAndResponse = (query, response) => {
    setQueries([...queries, query]);
    setResponses([...responses, response]);
    //update local storage with the new queries array
    localStorage.setItem("queries", JSON.stringify([...queries, query]));
    localStorage.setItem("responses", JSON.stringify([...responses, response]));
  };
  const Reset = () => {
    localStorage.removeItem("queries");
    localStorage.removeItem("responses");
    setQueries([]);
    setResponses([]);
  };
  useEffect(() => {
    const storedQueries = localStorage.getItem("queries");
    if (storedQueries) {
      setQueries(JSON.parse(storedQueries));
    }
    const storedResponses = localStorage.getItem("responses");
    if (storedResponses) {
      setResponses(JSON.parse(storedResponses));
    }
  }, []);

  return (
    <div>
      {isOpen && (
        <Card variant="outlined" className="card" sx={{ borderRadius: 2 }}>
          <Header onClose={onClose} reset={Reset} themeData={themeData} />
          <MessageContainer
            queries={queries}
            responses={responses}
            themeData={themeData}
          />
          <Footer onSubmit={addQueryAndResponse} themeData={themeData} />
        </Card>
      )}
    </div>
  );
};
//prop type validation
Container.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  themeData: PropTypes.func.isRequired,
};

export default Container;
