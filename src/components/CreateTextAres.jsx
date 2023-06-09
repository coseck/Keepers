import React, { useState } from "react";

function CreateArea(props) {
  const [isExpanded, setExpended] = useState(false);
  const [note, Setnote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    Setnote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  function handleClick(event) {
    props.onAdd(note);
    Setnote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  function clicked() {
    setExpended(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={clicked}
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : 1}
        />
        {isExpanded && (
          <button onClick={handleClick} type="submit">
            Add
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
