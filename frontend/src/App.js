import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";


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

  return(
    <div className="notes-container">
      <NotesList notes={notes}/>
    </div>
  )
}

export default App;