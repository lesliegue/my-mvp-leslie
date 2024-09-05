import React, { useState } from 'react'
import "./Form.css"

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
            <div className='component' id='add-goal-form'>
                <label htmlFor="">Add your goals: </label>
                <div className="add-input">
                    <input type="text" 
                    name="goal"
                    value={newGoal.goal}
                    onChange={(e) => handleInput(e)}
                    />
                </div>
            </div>
                <div className='dropdown'>
                    <label>Ideally, to be completed by: </label>
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
                    <label>For me, this goal is: </label>
                    <select name="difflevel"
                            onChange={(e) => handleInput(e)}>
                                <option value="1">Easy</option>
                                <option value= "2">Moderate</option>
                                <option value="3">Challenging</option>
                    </select>
                </div>
            <div>
                <button className='principal-button'>SUBMIT</button>
            </div>
        </form>
    </div>
  )
}

export default Form