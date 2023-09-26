import React, { useState } from 'react';

function ConditionalRender() {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <h1>Conditional Rendering</h1>
      <button onClick={toggleMessage}>
        Toggle Message
      </button>
      {showMessage ? (
        <p>This message is displayed conditionally.</p>
      ) : (
        <p>Click the button to show the message.</p>
      )}
    </div>
  );
}

export default ConditionalRender;
