import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState({ image: '' });
  const [btnState, setBtnState] = React.useState(false);

  function handleChange(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setDados({ ...dados, image: URL.createObjectURL(img) });
    }
  }

  function handleClickBtnStatus() {
    setBtnState(!btnState);
  }

  return (
    <GlobalContext.Provider
      value={{
        handleChange,
        dados,
        handleClickBtnStatus,
        btnState,
        setBtnState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
