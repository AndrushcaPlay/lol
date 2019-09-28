var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {

//ADD NOTE
    app.post('/add', (req, res) => {
      const note = { note: req.body.notes, checkbox: false  };
      console.log(note)
      db.collection('notes').insert(note,  (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });

//SET CHECKBOX
app.post('/set', (req, res) => {
  const _id = req.body.id;
  const checkbox  = req.body.checkbox;
  const details = { '_id': new ObjectID(_id) };
  const checkboxDate = { note: req.body.notes, checkbox: checkbox};
  console.log(req.body.notes)
  db.collection('notes').update(details, checkboxDate , (err, item) => {
    if (err) {
      console.log(err)
      res.send({'error':'An error has occurred'});
    } else {
      res.send('Checkbox  ' + _id + ' set!');
    } 
  });
});

//DELETE NOTE
    app.post('/delete', (req, res) => {
        const _id = req.body.id;
        const details = { '_id': new ObjectID(_id) };
        db.collection('notes').remove(details, (err, item) => {
          if (err) {
            console.log(err)
            res.send({'error':'An error has occurred'});
          } else {
            res.send('Note ' + _id + ' deleted!');
          } 
        });
      });

//FIND ALL NOTE
      app.get('/find', (req, res) => {
        db.collection('notes').find().toArray( function(err, notes) {
            if(err) throw err;
            res.status(200).json({'notes' : notes});
        });
      });
};