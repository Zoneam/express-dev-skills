const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    update: updateSkill,
    updateOneSkill
  };
  
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll().sort((a, b) => b.skillLevel - a.skillLevel)
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id)
    });
  }

  function newSkill(req, res) {
    res.render('skills/new');
  }

  function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
  }

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }

  function updateSkill(req, res) {
    res.render('skills/update',{
      skill: Skill.getOne(req.params.id).skill,
      id: req.params.id,
      skillLevel: Skill.getOne(req.params.id).skillLevel
    });
  }

  function updateOneSkill(req, res) {
    Skill.updateOne(req)
    res.redirect('/skills');
  }
