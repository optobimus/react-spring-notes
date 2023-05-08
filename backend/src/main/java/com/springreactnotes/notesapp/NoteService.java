package com.springreactnotes.notesapp;

import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class NoteService {

    private List<Note> notes = new ArrayList<>();       // Speichert alle Notizen in einer ArrayList ab

    public NoteService() {      // Initialisiere mit 4 Standard-Notizen
        // Add 4 default notes
        notes.add(new Note(getRandomId(), "Erste Notiz", "Hallo, das ist die erste Notiz!", "02.04.2020"));
        notes.add(new Note(getRandomId(), "Einkaufsliste", "Eier, Bananen, Birnen, Speck,...", "13.12.2020"));
        notes.add(new Note(getRandomId(), "Test123", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.", "25.03.2023"));
        notes.add(new Note(getRandomId(), "Notiz4", "Hier steht der Text der vierten Notiz", "05.05.2023"));
    }

    public List<Note> getAllNotes() {
        return notes;
    }

    public Note addNote(Note note) {
        String id = UUID.randomUUID().toString();
        String formattedDate = getFormattedDate(new Date());
        Note noteWithID = new Note(id, note.getTitle(), note.getText(), formattedDate);
        notes.add(noteWithID);
        return noteWithID;
    }

    public void deleteNote(String id) {
        notes.removeIf(note -> note.getId().equals(id));
    }

    public void editNote(Note newNote) {
        String id = newNote.getId();
        for (int i = 0; i < notes.size(); i++) {
            Note note = notes.get(i);
            if (note.getId().equals(id)) {
                note.setTitle(newNote.getTitle());
                note.setText(newNote.getText());
                note.setDate(getFormattedDate(new Date()));
                return;
            }
        }
    }

    private String getRandomId() {
        System.out.println(UUID.randomUUID().toString());
        return UUID.randomUUID().toString();
    }

    private String getFormattedDate(Date date) {
        SimpleDateFormat formatter = new SimpleDateFormat("dd.MM.yyyy");
        String formattedDate = formatter.format(date);
        return formattedDate;
    }
}
