// components/Modal.js
import React from 'react';

function Modal({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="modal-image"
        />
        <div className="modal-body">
          <h2 className="modal-title">{post.title}</h2>
          <div className="modal-category">{post.category}</div>
          <p className="modal-text">{post.content}</p>
          {/* Add more content sections as needed */}
          <div className="modal-additional-content">
            <h3>About this VR Experience</h3>
            <p>This is an expanded section with more details about the VR experience, requirements, and additional information that would be relevant to the reader.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;