import Typography from "@mui/material/Typography";


const MessageContainer = ({queries,responses}) => {
   
  return (
    <div className="message-container" style={{ maxHeight: '300px', overflowY: 'auto' }}>
      {queries.map((query, index) => (
        <div key={`query-${index}`}>
          <div className="bot-query">
            <div className="query">
              <Typography variant="body1" component="span" className="botmsg">
                {query}
              </Typography>
            </div>
          </div>
          <div className="bot-response">
            <div className="response">
              <Typography
                variant="body1"
                component="span"
              >
                {responses[index]?.text}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageContainer;
