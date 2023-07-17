import React, {useState} from "react";
import {MapContainer, TileLayer, Marker} from 'react-leaflet'
import axios from 'axios';

const TaggingAndCategorization = () => {
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState('');
  
    const handleTagInputChange = (e) => {
      const inputValue = e.target.value.trim();
      if (inputValue !== '' && !tags.includes(inputValue)) {
        setTags([...tags, inputValue]);
      }
    };
  
    const handleRemoveTag = (tag) => {
      setTags(tags.filter((t) => t !== tag));
    };
  
    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Prepare the data to send to the backend
        const data = {
          tags: tags,
          category: category,
        };
      
        axios
          .post('/api/submit', data)
          .then((response) => {
            console.log('Response:', response.data);
    
            setTags([]);
            setCategory('');
          })
          .catch((error) => {
            console.error('Error submitting data:', error);
        
          });
      };
  
    return (
      <div>
        <h3>Tagging and Categorization</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="tag-input">Tags:</label>
            <input
              type="text"
              id="tag-input"
              onChange={handleTagInputChange}
              value=""
              placeholder="Add tags"
            />
            <div>
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                  <button type="button" onClick={() => handleRemoveTag(tag)}>
                    x
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="category-select">Category:</label>
            <select id="category-select" value={category} onChange={handleCategoryChange}>
              <option value="">Select category</option>
              <option value="Adventure">Adventure</option>
              <option value="Nature">Nature</option>
              <option value="Food">Food</option>
              <option value="Historical">Historical</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
  
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[51.505, -0.09]} />
        </MapContainer>
      </div>
    );
  };
  
  export default TaggingAndCategorization;