import React from 'react';

const DisplayImage = () => {
  const [dados, setDados] = React.useState(null);

  function handleClick(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setDados({ ...dados, image: URL.createObjectURL(img) });
    }
  }
  return (
    <div>
      <div>
        <div>
          <div>
            <h1>Select Image</h1>
            <input type="file" onChange={handleClick} />
            {/* para mostrar só se existir */}
            {dados && <p>{dados.nome}</p>}
            {dados && <img src={dados.image} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayImage;
