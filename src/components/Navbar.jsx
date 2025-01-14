// components/Navbar.js
import React from 'react';

function Navbar({ categories, selectedCategory, onCategoryChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">Reality Blog</h1>
        <div className="navbar-categories">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;