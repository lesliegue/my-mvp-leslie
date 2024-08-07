var express = require('express');
var router = express.Router();
const db = require("../model/helper");


router.get('/goals', async (req, res) => {
  try {
    let results = await db(`SELECT * FROM goals;`);
  res.send (results.data)
  } catch (err) {
    res.status(500).send({error: err.message});
  }
});

router.get('/goals/score', async (req, res) => {
  try {
    let results = await db(`SELECT SUM(difflevel) as total FROM goals WHERE completed = true;`);
  
    res.send(results)
  } catch (err) {
    res.status(500).send({err});
  }
})


router.post('/goals', async (req, res) =>{
  const { goal, difflevel, dayofweek, completed } = req.body.newGoal
  
  const insertGoals = `INSERT INTO goals (goal, difflevel, dayofweek, completed) 
  VALUES ('${goal}', ${difflevel},'${dayofweek}', ${completed});`
  try {
    await db(insertGoals);
    const results = await db(`SELECT * FROM goals;`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send({error: err.message});
  }
});

router.post('/rewards', async (req, res) => {
  let { reward, gemlevel } = req.body.newReward;
  const insertRewards = `INSERT INTO rewards (reward, gemlevel) 
  VALUES ('${reward}', '${gemlevel}');`
  try{
    await db(insertRewards);
    res.send("Reward added successfully")
  } catch (err) {
    res.status(500).send({error: err.message});
  }
});


router.put('/goals', async (req, res) => {
  console.log('HEYYYYY', req.body)
 let { id } = req.body.e;
  try {
   const foundGoal = await db(`SELECT * FROM goals WHERE id = ${id}`);
   let completedValue = foundGoal.data[0].completed
  
    await db(`UPDATE goals SET completed = ${!completedValue} WHERE id = ${id};`);

    const updatedGoals = await db(`SELECT * FROM goals`)

    let score = await db(`SELECT SUM(difflevel) AS total FROM goals WHERE completed = true;`)
  
    res.send(updatedGoals.data)
  } catch (err) {
    res.status(500).send({error: err.message});
  }
});

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
