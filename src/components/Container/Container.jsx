import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import Header from "./Header";
import MessageContainer from "./MessageContainer";
import { Responses } from "../../utils";
import Footer from "./Footer";
import PropTypes from "prop-types"; // Import PropTypes

const Container = ({ isOpen, onClose }) => {
  const [queries, setQueries] = useState([]);
  const [responses, setResponses] = useState(Responses);
  const [themeData, setThemeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://stanging-backend-chatbot-env.eba-xpae3fqu.ap-southeast-1.elasticbeanstalk.com/api/v1/chatbot-customizations/deea696a-593c-411a-aa06-d5b906e34402/"
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
  }, []);

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
};

export default Container;
