import React, { useState } from 'react';
import "./SearchBar.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const albums = [
    { title: "Abbey Road", artist: "The Beatles", image: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg" },
    { title: "Thriller", artist: "Michael Jackson", image: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png" },
    { title: "To Pimp a Butterfly", artist: "Kendrick Lamar", image: "https://m.media-amazon.com/images/I/81VcA8-kuZL._UF1000,1000_QL80_.jpg" },
    { title: "Random Access Memories", artist: "Daft Punk", image: "https://upload.wikimedia.org/wikipedia/en/2/26/Daft_Punk_-_Random_Access_Memories.png" },
    { title: "Blue", artist: "Joni Mitchell", image: "https://upload.wikimedia.org/wikipedia/en/e/e1/Bluealbumcover.jpg" },
    { title: "Kind of Blue", artist: "Miles Davis", image: "https://m.media-amazon.com/images/I/71dQKN2UEfL._UF1000,1000_QL80_.jpg" },
    { title: "Led Zeppelin IV", artist: "Led Zeppelin", image: "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg" },
    { title: "Rumours", artist: "Fleetwood Mac", image: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG" },
    { title: "Nevermind", artist: "Nirvana", image: "https://m.media-amazon.com/images/I/71MrcL3-MhL.jpg" },
    { title: "Purple Rain", artist: "Prince", image: "https://m.media-amazon.com/images/I/81CzfbO4CrL.jpg" },
    { title: "Tapestry", artist: "Carole King", image: "https://m.media-amazon.com/images/I/9127CQsmybL.jpg" },
    { title: "What's Going On", artist: "Marvin Gaye", image: "https://upload.wikimedia.org/wikipedia/en/8/84/MarvinGayeWhat%27sGoingOnalbumcover.jpg" },
    { title: "Blood on the Tracks", artist: "Bob Dylan", image: "https://m.media-amazon.com/images/I/81x8ZJqMm7L._UF1000,1000_QL80_.jpg" },
    { title: "The Velvet Underground & Nico", artist: "The Velvet Underground", image: "https://m.media-amazon.com/images/I/71H2+Sj3wmL.jpg" },
    { title: "OK Computer", artist: "Radiohead", image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png" },
    { title: "The Joshua Tree", artist: "U2", image: "https://m.media-amazon.com/images/I/71nhNKvy+fL._UF1000,1000_QL80_.jpg" },
    { title: "Bad", artist: "Michael Jackson", image: "https://m.media-amazon.com/images/I/717IE87d0dL.jpg" },
    { title: "Illmatic", artist: "Nas", image: "https://upload.wikimedia.org/wikipedia/en/2/27/IllmaticNas.jpg" },
    { title: "Homework", artist: "Daft Punk", image: "https://upload.wikimedia.org/wikipedia/en/9/9c/Daftpunk-homework.jpg" },
    { title: "Bach: Goldberg Variations", artist: "Glenn Gould", image: "https://m.media-amazon.com/images/I/71PjiPLpd4L._UF1000,1000_QL80_.jpg" },
    { title: "Grace", artist: "Jeff Buckley", image: "https://upload.wikimedia.org/wikipedia/en/e/e4/Jeff_Buckley_grace.jpg" },
    { title: "Miles Smiles", artist: "Miles Davis", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Miles_Davis_-_Miles_Smiles.jpg/220px-Miles_Davis_-_Miles_Smiles.jpg" },
    { title: "Metallica", artist: "Metallica", image: "https://upload.wikimedia.org/wikipedia/en/2/2c/Metallica_-_Metallica_cover.jpg" },
    { title: "The Low End Theory", artist: "A Tribe Called Quest", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/ATribeCalledQuestTheLowEndtheory.jpg/250px-ATribeCalledQuestTheLowEndtheory.jpg" }
  ];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredalbums = searchInput.length > 0
    ? albums.filter((board) =>
        board.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : albums;

  return (
    <div>
      <div className="search-container">
        <div className="search-bar">
          <div className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            className="search-input"
            type="search"
            placeholder="Search..."
            onChange={handleChange}
            value={searchInput}
          />
        </div>
      </div>


      <div className="flex">
          <table>
            <thead>
              <tr>
                <th>Song</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {filteredalbums.map((board, index) => (
                <tr key={index}>
                  <td>{board.title}</td>
                  <td>{board.artist}</td>
                  <td>
                    <img src={board.image} alt={board.title} width="150" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


    </div>


    </div>
  );
};

export default SearchBar;