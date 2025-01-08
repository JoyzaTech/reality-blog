// components/Card.js
import React from 'react';

function Card({ post, onReadMore }) {
  return (
    <article className="card">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{post.title}</h2>
        <p className="card-text">{post.content}</p>
        <button 
          className="read-more-button"
          onClick={onReadMore}
        >
          Read More
        </button>
      </div>
    </article>
  );
}

export default Card;