import React,{useState} from "react";

function Form() {
    const [check,setCheck] = useState(false);


  return (
    <div>
      <h1> login form</h1>
      <div>
        <label htmlFor="username">username </label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">password </label>
        <input type="text" id="password" name="password" />
        <button  aria-pressed="login">login </button>

        <label htmlFor="cars">Choose a car:</label>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html">HTML</label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label htmlFor="css">CSS</label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
        <label htmlFor="javascript">JavaScript</label>

        <div>
            <input type="checkbox" value={check} onChange={(e)=>setCheck(!check)} /> <label> I agree</label>
        </div>
        <div>
            <button aria-pressed="submit" disabled={ check ? false: true}> submit</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
