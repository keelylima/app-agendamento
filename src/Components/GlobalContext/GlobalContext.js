import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState({ image: '' });

  function handleChange(event) {
    debugger;
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setDados({ ...dados, image: URL.createObjectURL(img) });
    }
  }

  function testString() {
    console.log('chamou');
  }

  return (
    <GlobalContext.Provider value={{ handleChange, dados, testString }}>
      {children}
    </GlobalContext.Provider>
  );
};
