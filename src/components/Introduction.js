import React, { useState } from 'react';

function Introduction(props) {
  const { name, title, description, isEditing, onEditClick, onSaveClick, onCancelClick } = props;
  const [newName, setNewName] = useState(name);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleSaveClick = () => {
    onSaveClick(newName, newTitle, newDescription);
  };

  if (isEditing) {
    return (
      <div>
        <label htmlFor="newName">Name:</label>
        <input type="text" name="newName" value={newName} onChange={handleNameChange} />

        <label htmlFor="newTitle">Title:</label>
        <input type="text" name="newTitle" value={newTitle} onChange={handleTitleChange} />

        <label htmlFor="newDescription">Description:</label>
        <input type="text" name="newDescription" value={newDescription} onChange={handleDescriptionChange} />

        <button onClick={handleSaveClick}>Save</button>
        <button onClick={onCancelClick}>Cancel</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1 onClick={onEditClick}>{name}</h1>
        <h3 onClick={onEditClick}>{title}</h3>
        <p onClick={onEditClick}>{description}</p>
      </div>
    );
  }
}

export default Introduction;
