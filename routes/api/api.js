// api route js file
const router = require('express').Router();
const note = require('../../enterNotes.js');
// const { v4: uuidv4 } = require('uuid');
// const { notes } = require('../../db/db.json');

// get route for notes

router.get('/notes', (req, res) => {
    note.getNotes().then((notes) => {
        return res.json(notes);
    }).catch((err) => res.status(900).json(err));
});

// post for notes
router.post('/notes', (req, res) => {
    note.addNote(req.body).then((note) => res.json(note)).catch((err) => res.status(900).json(err));
});

module.exports = router;