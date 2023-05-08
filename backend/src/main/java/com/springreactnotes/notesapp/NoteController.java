package com.springreactnotes.notesapp;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController  // Bezeichnet die Klasse als API Controller, sodass sie HTTP-Anfragen bearbeiten kann
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:3000")     // Erlaube der React-App Zugriffe auf das Backend machen zu können
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }

    @PostMapping
    public Note addNote(@RequestBody Note note) {
        return noteService.addNote(note);
    }

    @PutMapping("/{id}")
    public void editNote(@RequestBody Note note) {
        noteService.editNote(note);
    }

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable String id) {
        noteService.deleteNote(id);
    }
}
