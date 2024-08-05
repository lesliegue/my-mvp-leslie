import React from 'react'

function Form() {

    const handleInput = (event) => {

    }



  return (
    <div>
        <div>
        <label htmlFor="">Add your Goals
            <input type="text" 
            name="goal"
            value={goal.goal}
            onChange={(e) => handleInput(e)}
            />
        </label>
        <select>
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
        <label htmlFor="difflevel">This Goal is 
            <select>
                <option value="1">easy</option>
                <option value="2">moderate</option>
                <option value="3">challenging</option>
            </select>
            for me
        </label>
        </div>


    </div>
  )
}

export default Form