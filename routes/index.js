var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('heres your message');
});

router.get('/goals', async (req, res) => {
  try {
    let results = await db(`SELECT * FROM goals;`);
  res.send (results.data)
  } catch (err) {
    res.status(500).send({error: err.message});
  }
});


router.post('/goals', async (req, res) =>{
  let { goal,
    difflevel,
    dayofweek,
    completed
      } = req.body;
  const insertGoals = `INSERT INTO goals (goal, difflevel, dayofweek, completed) 
  VALUES ('${goal}', '${difflevel}','${dayofweek}', '${completed}');`
  try {
    await db(insertGoals);
    const results = await db(`SELECT * FROM goals;`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send({error: err.message});
  }
});

router.post('/rewards', async (req, res) => {
  let { reward, gemlevel } = req.body;
  const insertRewards = `INSERT INTO rewards (reward, gemlevel) 
  VALUES ('${reward}', ${gemlevel});`
  try{
    await db(insertRewards);
    res.send("Reward added successfully")
  } catch (err) {
    res.status(500).send({error: err.message});
  }
});



router.put('/goals', async (req, res) => {
  let { id } = req.body;
   try {
     await db(`UPDATE goals SET completed = !completed WHERE id = ${id};`);
     let score = await db(`SELECT SUM(difflevel) AS total FROM goals WHERE completed = true;`)
      res.send(score.data[0].total)
    } catch (err) {
      res.status(500).send({error: err.message});
    }
  });

// router.put('/goals', async (req, res) => {
//  let { id } = req.body;
//   try {
//     await db(`UPDATE goals SET completed = !completed WHERE id = ${id};`);
//     const results = await db(`SELECT * FROM goals;`);
    // res.send(results.data);

    // const getLevel = (score) => {

    //   console.log('inside getLevel score.data', score)
    //   if (+score < 10) {
    //     return "Silver";
    //   } else if (+score < 20) {
    //     return "Gold";
    //   } else {
    //     return "Diamond";
    //   }
    // }


//     let score = await db(`SELECT SUM(difflevel) AS total FROM goals WHERE completed = true;`)
//    const total = score[0].total;
//     // const result = getLevel(score.data[0])
//     res.send({ total })
//   } catch (err) {
//     res.status(500).send({error: err.message});
//   }
// });

router.get('/rewards', async (req, res) => {
  try {
    let results = await db(`SELECT * FROM rewards;`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send({error: err.message});
  }
});

router.delete('/goals', async (req, res) => {
  let { id } = req.body;
  try {
    await db(`DELETE FROM goals WHERE id = ${id};`);
    const results =  await db(`SELECT * FROM goals;`)
    res.send(results.data);
  } catch (err) {
    res.status(500).send({error: err.message});
  }
 
})

module.exports = router;
