import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [searchText, setSearchText] = useState("");     // Notizen und Suchtext werden im State gespeichert
  const [notes, setNotes] = useState([]);     

  useEffect(() => {       // Bei jedem Neu-Rendern werden die Notizen erneut abgerufen
    fetchNotes();
  }, []);

  const fetchNotes = async () => {        // Abrufen aller Notizen
    const response = await fetch("http://localhost:8080/api/notes");
    const data = await response.json();
    console.log(data);
    setNotes(data);
  };

const addNote = async (title, text) => {        // Hinzufügen neuer Notizen
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

  const deleteNote = async (id) => {      // Löschen von Notizen
    await fetch(`http://localhost:8080/api/notes/${id}`, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote = async (id, title, text) => { // Notizen bearbeiten
    const newNote = {
      id: id,
      title: title,
      text: text,
    };
    const response = await fetch(`http://localhost:8080/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });
    
    const updatedNote = await response.json();
    
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return updatedNote;
      }
      return note;
    });
    
    setNotes(updatedNotes);
  };
  

  return(
    <div className="notes-container">
      <div className="header">
        <h1>Notizen</h1>
        <Search handleSearch={setSearchText}/>
      </div>
      <NotesList 
        notes={Array.isArray(notes) ? notes.filter((note) => note.text?.toLowerCase().includes(searchText) || note.title?.toLowerCase().includes(searchText)) : []}     // Nur Notizen welche den Suchtext entsprechen werden angezeigt
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
        handleEditNote={editNote}
      />
        
    </div>
  )
}

export default App;