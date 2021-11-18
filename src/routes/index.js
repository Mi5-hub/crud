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
router.get('/getInfo', async (req, res) => {
    const { id } = req.query;
    if (!id) {
     global.logger.error('id can\'t find')
     res.json({
      errno: 1
     });
     return;
    }
    const userResult = await User.find({name: id}).exec();
    console.log(userResult);
    res.json({
     errno: 0,
     data: {
      id: userResult[0]._id,
      name: userResult[0].name,
      src: userResult[0].src
     }
    })
   });

   router.post('/search',(req,res)=>{
    user.findAll({
        where: {
          name: req.body.name,
        }
      },(users)=>{
          console.log('search user',users);
          res.render('index',{users})
      })
   })
module.exports = router;