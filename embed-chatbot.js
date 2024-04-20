function embedChatbot(config) {
  // Get the user_id from the configuration object
  const user_id = config.user_id;

  // Create a new script element
  var script = document.createElement('script');

  // Set the source of the script to the chatbot script URL with the user_id as a query parameter
  script.src = 'https://cogitochatbot.netlify.app/?user_id=' + encodeURIComponent(user_id);

  // Pass additional attributes as needed
  script.defer = true;

  // Append the script to the document
  document.head.appendChild(script);
}

// Call the embedChatbot function with the embeddedChatbotConfig
embedChatbot(window.embeddedChatbotConfig);
