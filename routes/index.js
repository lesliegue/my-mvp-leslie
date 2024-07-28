var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('heres your message');
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


module.exports = router;
