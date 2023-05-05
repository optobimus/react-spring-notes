import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";


const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Erste Notiz",
      text: "Das ist meine erste Notiz",
      date: "05/02/2020",
    },
    {
      id: nanoid(),
      title: "Einkaufliste",
      text: "Bananen, Speck, Eier",
      date: "06/05/2020",
    },
    {
      id: nanoid(),
      title: "blabla",
      text: "lorem ipsum ....",
      date: "20/01/2022",
    },
    {
      id: nanoid(),
      title: "Titel hier schreiben",
      text: "Das ist der Text meiner vierten Notiz",
      date: "05/05/2023",
    },

  ]);
  const [searchText, setSearchText] = useState("");

  const addNote = (title, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNode = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }


  return(
    <div className="notes-container">
      <Search handleSearch={setSearchText}/>
      <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText) || note.title.toLowerCase().includes(searchText))} 
        handleAddNote={addNote} 
        handleDeleteNode={deleteNode}/>
    </div>
  )
}

export default App;