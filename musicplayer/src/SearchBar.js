import React, { useState } from 'react';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const keyboards = [
    { title: "100% or Full Size", image: "https://media.steelseriescdn.com/thumbs/catalogue/products/00733-apex-100/2c1f0fc2b754417887a864905566f770.png.1000x575_q100_crop-scale_optimize_upscale.png" },
    { title: "80% or TKL", image: "https://www.luminkey.com/cdn/shop/files/luminkey80-white-wkl-9009.jpg?v=1695883373&width=1946" },
    { title: "75%", image: "https://rkgamingstore.com/cdn/shop/files/RKROYALKLUDGER75WirelessMechanicalKeyboard_3.jpg?v=1742355441&width=1946" },
    { title: "65%", image: "https://m.media-amazon.com/images/I/61KblpVjdsL._AC_UF894,1000_QL80_.jpg" },
    { title: "60%", image: "https://m.media-amazon.com/images/I/71VSZF9DHnL.jpg" },
  ];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredKeyboards = searchInput.length > 0
    ? keyboards.filter((board) =>
        board.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : keyboards;

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <table>
        <thead>
          <tr>
            <th>Keyboard</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredKeyboards.map((board, index) => (
            <tr key={index}>
              <td>{board.title}</td>
              <td>
                <img src={board.image} alt={board.title} width="150" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;
