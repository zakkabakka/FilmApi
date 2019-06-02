module.exports = (app, db) => {
  app.get( "/films", (req, res) =>
    db.post.findAll().then( (result) => res.json(result) )
  );

  app.get( "/film/:id", (req, res) =>
    db.post.findById(req.params.id).then( (result) => res.json(result))
  );

  app.post("/film", (req, res) => 
    db.post.create({
      title: req.body.title,
      content: req.body.description,
      title: req.body.image,
      content: req.body.url
    }).then( (result) => res.json(result) )
  );

  app.put( "/film/:id", (req, res) =>
    db.post.update({
      title: req.body.title,
      content: req.body.description,
      title: req.body.image,
      content: req.body.url
    },
    {
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );

  app.delete( "/film/:id", (req, res) =>
    db.post.destroy({
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );
}