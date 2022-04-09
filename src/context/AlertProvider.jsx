import { createContext, useState } from 'react';

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [messages, setMessages] = useState({});

  const showAlert = (messages) => {
    setMessages((m) => ({ ...m, ...messages }));

    setTimeout(() => {
      setMessages({});
    }, 3500);
  };

  return (
    <AlertContext.Provider value={{ messages, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider };

export default AlertContext;
