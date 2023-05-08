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

    private List<Note> notes = new ArrayList<>();

    public NoteService() {
        // Add 4 default notes
        notes.add(new Note(getRandomId(), "Erste Notiz", "Hallo, das ist die erste Notiz!", "02.04.2020"));
        notes.add(new Note(getRandomId(), "Einkaufsliste", "Eier, Bananen, Birnen, Speck,...", "13.12.2020"));
        notes.add(new Note(getRandomId(), "Test123", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor, felis et lacinia interdum, lacus orci tristique risus, id cursus lorem nibh.", "25.03.2023"));
        notes.add(new Note(getRandomId(), "Notiz4", "Hier steht der Text der vierten Notiz", "05.05.2023"));
    }

    public List<Note> getAllNotes() {
        return notes;
    }

    public Note addNote(Note note) {
        String id = UUID.randomUUID().toString();
        SimpleDateFormat formatter = new SimpleDateFormat("dd.MM.yyyy");
        String formattedDate = formatter.format(new Date());
        Note noteWithID = new Note(id, note.getTitle(), note.getText(), formattedDate);
        notes.add(noteWithID);
        System.out.println(noteWithID);
        return noteWithID;
    }

    public void deleteNote(String id) {
        notes = notes.stream().filter(note -> !note.getId().equals(id)).collect(Collectors.toList());
    }

    private String getRandomId() {
        System.out.println(UUID.randomUUID().toString());
        return UUID.randomUUID().toString();
    }
}
