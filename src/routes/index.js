const express = require('express');
const user = require('../model/user');
const router = express.Router();




router.get('/', (req, res) => {
    user.find({}, (err, user) => {
        if (err) { console.log(err); }
        console.log("users=====>",user)
        res.render('index', {
            titre: 'CRUD MongoDB',
            user: user,
            crud: "Crud"
        });

    });
});

router.post('/add', (req, res) => {
    let body = req.body;
    body.status = false;

    user.create(body, (err, user) => {
        if (err) { console.log(err); }
        res.redirect('/');
    });
});

router.get('/user/:id', (req, res) => {
    let id = req.params.id;
    user.findById(id, (err, user) => {
        if (err) { console.log(err); }
        user.status = !user.status;

        user.save()
            .then(() => res.redirect('/'))
    });
});

router.get('/delete/:id', (req, res) => {
    let id = req.params.id;
    user.remove({ _id: id }, (err, user) => {
        if (err) { console.log(err); }
        res.redirect('/');
    });
});
router.get('/search', (req,res)=>{
    let name = req.body.name
})
module.exports = router;