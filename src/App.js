// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Modal from './components/Modal';

function App() {
  const [posts] = useState([
    // Gaming Posts
    {
      title: "VR Gaming: Level Up Your Immersion",
      content: "Discover the thrill of stepping into virtual worlds with cutting-edge VR gaming. Experience breathtaking graphics, immersive sound, and interactive gameplay.",
      imageUrl: "/images/vr-gaming-1.jpg",
      category: "Gaming"
    },
    {
      title: "Competitive VR Esports",
      content: "Explore the rising world of VR esports competitions, where players compete in virtual arenas for glory and prizes.",
      imageUrl: "/images/vr-gaming-2.jpg",
      category: "Gaming"
    },
    {
      title: "VR Racing Simulations",
      content: "Experience the adrenaline rush of high-speed racing in virtual reality with ultra-realistic physics and stunning graphics.",
      imageUrl: "/images/vr-gaming-3.jpg",
      category: "Gaming"
    },
    {
      title: "VR Fighting Games Revolution",
      content: "Step into the ring with revolutionary VR fighting games that put you in the heart of the action.",
      imageUrl: "/images/vr-gaming-4.jpg",
      category: "Gaming"
    },
    {
      title: "Virtual Reality RPG Adventures",
      content: "Embark on epic role-playing adventures in immersive virtual worlds filled with magic and mystery.",
      imageUrl: "/images/vr-gaming-5.jpg",
      category: "Gaming"
    },
    {
      title: "Social VR Gaming",
      content: "Connect with friends in virtual spaces and enjoy multiplayer gaming experiences like never before.",
      imageUrl: "/images/vr-gaming-6.jpg",
      category: "Gaming"
    },
    // Education Posts
    {
      title: "Virtual Classrooms",
      content: "Experience the future of education with interactive virtual classrooms that bring learning to life.",
      imageUrl: "/images/vr-edu-1.jpg",
      category: "Education"
    },
    {
      title: "Historical VR Field Trips",
      content: "Travel through time with virtual reality field trips to historical locations and events.",
      imageUrl: "/images/vr-edu-2.jpg",
      category: "Education"
    },
    {
      title: "Medical Training in VR",
      content: "Learn medical procedures and anatomy in risk-free virtual environments with detailed 3D models.",
      imageUrl: "/images/vr-edu-3.jpg",
      category: "Education"
    },
    {
      title: "Language Learning in VR",
      content: "Immerse yourself in virtual environments designed for natural language acquisition and practice.",
      imageUrl: "/images/vr-edu-4.jpg",
      category: "Education"
    },
    {
      title: "Scientific Visualization",
      content: "Explore complex scientific concepts through interactive 3D visualizations in virtual reality.",
      imageUrl: "/images/vr-edu-5.jpg",
      category: "Education"
    },
    {
      title: "Virtual Skills Training",
      content: "Master new skills with hands-on practice in safe, virtual training environments.",
      imageUrl: "/images/vr-edu-6.jpg",
      category: "Education"
    },
    // Business Posts
    {
      title: "Virtual Office Solutions",
      content: "Transform your workplace with virtual office environments designed for remote collaboration.",
      imageUrl: "/images/vr-business-1.jpg",
      category: "Business"
    },
    {
      title: "VR Product Design",
      content: "Revolutionize product development with virtual reality design and prototyping tools.",
      imageUrl: "/images/vr-business-2.jpg",
      category: "Business"
    },
    {
      title: "Virtual Trade Shows",
      content: "Experience the future of business networking with virtual trade shows and exhibitions.",
      imageUrl: "/images/vr-business-3.jpg",
      category: "Business"
    },
    {
      title: "VR Real Estate Tours",
      content: "Showcase properties with immersive virtual tours that bring spaces to life for potential buyers.",
      imageUrl: "/images/vr-business-4.jpg",
      category: "Business"
    },
    {
      title: "Corporate Training in VR",
      content: "Enhance employee training with immersive virtual reality programs and simulations.",
      imageUrl: "/images/vr-business-5.jpg",
      category: "Business"
    },
    {
      title: "Virtual Team Building",
      content: "Build stronger teams with engaging virtual reality team building exercises and activities.",
      imageUrl: "/images/vr-business-6.jpg",
      category: "Business"
    },
    {
      title: "VR Marketing Experiences",
      content: "Create memorable brand experiences with interactive virtual reality marketing campaigns.",
      imageUrl: "/images/vr-business-7.jpg",
      category: "Business"
    },
    {
      title: "Virtual Conference Rooms",
      content: "Host professional meetings in customizable virtual conference rooms with advanced collaboration tools.",
      imageUrl: "/images/vr-business-8.jpg",
      category: "Business"
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);
  const categories = ['All', 'Gaming', 'Education', 'Business'];

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="app">
      <Navbar 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      <main className="main-content">
        <div className="card-grid">
          {filteredPosts.map((post, index) => (
            <Card 
              key={index} 
              post={post}
              onReadMore={() => setSelectedPost(post)}
            />
          ))}
        </div>
      </main>
      <Modal 
        post={selectedPost} 
        onClose={() => setSelectedPost(null)} 
      />
    </div>
  );
}

export default App;