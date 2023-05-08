import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";


const App = () => {

  const [searchText, setSearchText] = useState("");

  const [notes, setNotes] = useState([]);


  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await fetch("http://localhost:8080/api/notes");
    const data = await response.json();
    console.log(data);
    setNotes(data);
  };

const addNote = async (title, text) => {
  try {
    const newNote = {
        title: title,
        text: text,
    };
    const response = await fetch("http://localhost:8080/api/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
    });
    const data = await response.json();
    setNotes([...notes, data]);
  } catch (error) {
    console.error("Error while adding note:", error);
  }
    
};

  const deleteNode = async (id) => {
    await fetch(`http://localhost:8080/api/notes/${id}`, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return(
    <div className="notes-container">
      <div className="header">
        <h1>Notizen</h1>
        <Search handleSearch={setSearchText}/>
      </div>
      <NotesList 
        notes={Array.isArray(notes) ? notes.filter((note) => note.text?.toLowerCase().includes(searchText) || note.title?.toLowerCase().includes(searchText)) : []} 
        handleAddNote={addNote} 
        handleDeleteNode={deleteNode}/>
    </div>
  )
}

export default App;