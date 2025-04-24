import React, { useState } from 'react';
import "./SearchBar.css";

function SearchBar({ items }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = items.filter(item =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;