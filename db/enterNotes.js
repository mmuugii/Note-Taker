// main js file for the notes 
// this file is necessary for our program to run and take in the front end user input and save it. 

const fs = require('fs');
const path = require('path');
const util = require('util');
const uuid = require('uuid');
// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);

// class to take notes
class Notes {
    read() {
        return readFromFile('./db/db.json', 'utf8');
    }
    write(note) {
        return writeToFile('./db/db.json', JSON.stringify(note));
    }
    getNotes() {
        return this.read().then((notes) => {
            let takenNotes;
            try {
                takenNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                takenNotes = [];
            }
            return takenNotes;
        });
    }
    addNote(note) {
        const { title, text } = note;
        const newNote = { title, text, id: uuid() };
        return this.getNotes().then((notes) => [...notes, newNote]).then((updatedNotes) => this.write(updatedNotes)).then(() => newNote);
    } 
};

module.exports = new Notes();