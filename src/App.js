import React, { useState } from 'react';
import Introduction from './components/Introduction';

function App() {
  const [inputs, setInputs] = useState([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newInput = { name, title, description, isEditing: false };
    setInputs([...inputs, newInput]);
    setName('');
    setTitle('');
    setDescription('');
  };

  const handleEditClick = (index) => {
    const newInputs = [...inputs];
    newInputs[index].isEditing = true;
    setInputs(newInputs);
  };

  const handleSaveClick = (index, newName, newTitle, newDescription) => {
    const newInputs = [...inputs];
    newInputs[index].name = newName;
    newInputs[index].title = newTitle;
    newInputs[index].description = newDescription;
    newInputs[index].isEditing = false;
    setInputs(newInputs);
  };

  const handleCancelClick = (index) => {
    const newInputs = [...inputs];
    newInputs[index].isEditing = false;
    setInputs(newInputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={handleInputChange} />

        <label htmlFor="title">Title:</label>
        <input type="text" name="title" value={title} onChange={handleInputChange} />

        <label htmlFor="description">Description:</label>
        <input type="text" name="description" value={description} onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>

      {inputs.map((input, index) => (
        <Introduction
          key={index}
          {...input}
          onEditClick={() => handleEditClick(index)}
          onSaveClick={(newName, newTitle, newDescription) =>
            handleSaveClick(index, newName, newTitle, newDescription)
          }
          onCancelClick={() => handleCancelClick(index)}
        />
      ))}
    </div>
  );
}

export default App;
