import Typography from '@mui/material/Typography';

const MessageContainer = () => {
  // Dummy queries and responses
  // const queries = ["How can I track my order?", "Do you offer international shipping?"];
  // const responses = [
  //   { text: "You can track your order by logging into your account and going to the 'Order History' section." },
  //   { text: "Yes, we offer international shipping to most countries. Please check our shipping policy for more details." }
  // ];

  return (
    <div className="message-container">
      {/* {queries.map((query, index) => (
        <div key={`query-${index}`}>
            <div className='query'>
          <Typography variant="body1" component="span" className='botmsg'>
            {query}
          </Typography>
          </div>
          <Typography variant="body1" component="h5">
            <span className="response-text">{responses[index]?.text}</span>
          </Typography>
        </div>
      ))} */}
    </div>
  );
};

export default MessageContainer;
