import React, { useState } from 'react'

function Form(props) { 

    const [newGoal, setNewGoal] = useState({
        goal: "",
        difflevel: 1,
        dayofweek: "monday",
        completed: false
    })

    const handleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        const inputValue = name === 'difflevel' ? Number(value) : value

        setNewGoal((state) => ({
            ...state, 
            [name]: inputValue,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addGoal(newGoal);
        setNewGoal({
            goal: "",
            difflevel: 1,
            dayofweek: "monday",
            completed: false
        })
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="">Add your Goals
            <input type="text" 
            name="goal"
            value={newGoal.goal}
            onChange={(e) => handleInput(e)}
            />
        </label>
        <select name="dayofweek"
            onChange={(e) => handleInput(e)} >
            <option value="monday">MON</option>
            <option value="tuesday">TUE</option>
            <option value="wednesday">WED</option>
            <option value="thursday">THUR</option>
            <option value="friday">FRI</option>
            <option value="saturday">SAT</option>
            <option value="sunday">SUN</option>
        </select>
        </div>
        <div>
        <label>This Goal is 
            <select name="difflevel"
            onChange={(e) => handleInput(e)}>
                <option value="1">easy</option>
                <option value= "2">moderate</option>
                <option value="3">challenging</option>
            </select>
            for me
        </label>
        <div>
        <button>SUBMIT</button>
        </div>
        </div>
        </form>


    </div>
  )
}

export default Form