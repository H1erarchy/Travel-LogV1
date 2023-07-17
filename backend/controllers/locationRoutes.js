const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Location.find()
    .then((locations) => res.json(locations))
    .catch((err) =>
      res.status(404).json({ message: 'No locations found' })
    );
});

router.get('/:id', (req, res) => {
  db.Location.findById(req.params.id)
    .then((location) => res.json(location))
    .catch((err) =>
      res.status(404).json({ locationsfound: "No Locations Found" })
    );
});

router.post('/', (req, res) => {
  db.Location.create(req.body).then((location) =>
    res.json({ message: "Location added successfully" })
  );
});

router.put('/:id', (req, res) => {
  db.Location.findByIdAndUpdate(req.params.id, req.body)
    .then((location) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

router.delete('/:id', (req, res) => {
  db.Location.findByIdAndRemove(req.params.id, req.body)
    .then((location) => res.json({ msg: "Location entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "Unable to delete Location" }));
});

module.exports = router;