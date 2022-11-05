import './App.css';
import React, { useState } from 'react';

function App() {

  const [score, setScore] = useState(0)

  const [title, setTitle] = useState("")

  const [description, setDescription] = useState("")

  const [URL, setURL] = useState("")
 
  function displayResult(){

    if ((score > 0) && (score < 9)) {
      setTitle("Not Yet Ready for an Online Experience")
      setDescription("Your persona is not ready to participate in an online experience yet. He/She will need a lot of support.")
      setURL("https://cdn.discordapp.com/attachments/1016745958727491615/1038195678825951232/not_ready-gif.gif")
    }

    if ((score > 8) && (score < 17)) {
      setTitle("Almost Ready for an Online Experience")
      setDescription("Your persona is almost ready to participate in an online experience based on his/her skills, access to technology and preferences, but may need some support.")
      setURL("https://cdn.discordapp.com/attachments/1016745958727491615/1038195679123750982/almost_ready-gif.gif")
    }

    if ((score > 16) && (score < 25)) {
      setTitle("Ready for an Online Experience")
      setDescription("Your persona is ready to participate in an online experience based on his/her skills, access to technology and preferences.")
      setURL("https://cdn.discordapp.com/attachments/1016745958727491615/1038195679459278918/ready-gif.gif")
    }
  }

  const clickAnswer = () => {
    setTitle("")
    setDescription("")
    setURL("")
    setScore(0)
  }

  const checkAnswer = (event) => {
    event.preventDefault()
    const num1 = Number.parseInt(document.querySelector('input[name="statement_1"]:checked').value)
    const num2 = Number.parseInt(document.querySelector('input[name="statement_2"]:checked').value)
    const num3 = Number.parseInt(document.querySelector('input[name="statement_3"]:checked').value)
    const num4 = Number.parseInt(document.querySelector('input[name="statement_4"]:checked').value)
    const num5 = Number.parseInt(document.querySelector('input[name="statement_5"]:checked').value)
    const num6 = Number.parseInt(document.querySelector('input[name="statement_6"]:checked').value)
    const num7 = Number.parseInt(document.querySelector('input[name="statement_7"]:checked').value)
    const num8 = Number.parseInt(document.querySelector('input[name="statement_8"]:checked').value)

    setScore(num1+num2+num3+num4+num5+num6+num7+num8)
    displayResult()
  }

  const refreshPage = () => { 
    window.location.reload() 
  }


  return (
    <form>
      <div className="header">
        
        <div className="header-brand">
          <img src="https://cdn.discordapp.com/attachments/1016745958727491615/1038108674368995490/nych_logo_transparent.png" alt="NYCH logo" />
        </div>
        
        <div className="header-text">
          <p>PEOPLE FIRST: IS A ONLINE EXPERIENCE</p>
          <p>A GOOD FIT FOR YOUR CLIENTS?</p>
          <p>Worksheets</p>
        </div>
      </div>

      <div className="header-data">
        <div className="name">
            <label for="name"><strong>Persona:</strong></label>
            <input type="text" name="name" id="persona" />
        </div>

        <div className="program">
            <label for="program"><strong>Program:</strong></label>
            <input type="text" name="program" id="program" />
        </div>
      </div>

        <div className="statement">
            <label for="statement_1">
            1. My persona's need to participate in an online experience is ______.
            </label>
        </div>
      
        <div className="options">
          <div className="option">      
            <input type="radio" onClick={clickAnswer} name="statement_1" className="statement_1" id="high_1" value="3" />
            <label for="high_1">
            <strong>high</strong> – they can't access in-person services
            </label>
          </div>

          <div className="option">
            <input type="radio" onClick={clickAnswer} name="statement_1" className="statement_1" id="moderate_1" value="2" />
            <label for="moderate_1">
            <strong>moderate</strong> – they can access in-person services but with some difficulty
            </label>
          </div>

          <div className="option">
            <input type="radio" onClick={clickAnswer} name="statement_1" className="statement_1" id="low_1" value="1" />
            <label for="low_1">
            <strong>low</strong> – they can access in-person services easily
            </label>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_2">
           2. My persona's level of prior online learning experience is ______.
            </label>
          </div>

          <div className="options">
            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_2" id="high_2" value="3" />
              <label for="high_2">
              <strong>high</strong> - they have attended a Zoom workshop AND completed an online course/training
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_2" id="moderate_2" value="2" />
              <label for="moderate_2">
              <strong>moderate</strong> - they have attended a Zoom workshop OR completed an online course/training
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_2" id="low_2" value="1" />
              <label for="low_2">
              <strong>low</strong> - they haven't attended a Zoom workshop NOR completed an online course/training
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_3">
            3. My persona has most access to ______. 
            </label>
          </div>

          <div className="options">
            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_3" id="desk_lap" value="3" />
              <label for="desk_lap">
              <strong>desktop/laptop</strong>
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_3" id="tablet" value="2" />
              <label for="tablet">
              <strong>tablet</strong>
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_3" id="smartphone" value="1" />
              <label for="smartphone">
              <strong>smartphone</strong>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_4">
            4. My persona's Internet connection is _________. 
            </label>
          </div>

          <div className="options">  
            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_4" id="strong" value="3" />
              <label for="strong">
              <strong>strong</strong> (&gt; 25 Mbps download speed)
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_4" id="good" value="2" />
              <label for="good">
              <strong>good</strong> (25 Mbps - 10 Mbps download speed)
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_4" id="weak" value="1" />
              <label for="weak">
              <strong>weak</strong> (lower than 10 Mbps download speed) OR no at-home Internet connection
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_5">
            5. My persona's learning space is ______. 
            </label>
          </div>

          <div className="options">  
            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_5" id="ideal" value="3" />
              <label for="ideal">
              <strong>ideal</strong> - they always or often have access to a quiet space
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_5" id="good" value="2" />
              <label for="good">
              <strong>good enough</strong> - they sometimes have access to a quiet space
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_5" id="not_ideal" value="1" />
              <label for="not_ideal">
              <strong>not ideal</strong> - they seldom or never have access to a quiet space
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_6">
            6. My persona's digital skills are ______.  
            </label>
          </div>

          <div className="options">  
            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_6" id="high_6" value="3" />
              <label for="high_6">
              <strong>high</strong> - can do basic computer tasks easily
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_6" id="moderate_6" value="2" />
              <label for="moderate_6">
              <strong>moderate</strong> - can do basic computer but with some support
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_6" id="low_6" value="1" />
              <label for="low_6">
              <strong>low</strong> - can't do basic computer tasks
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_7">
            7. My persona's interest in learning new technologies is ______.  
            </label>
          </div>
          
          <div className="options">
            <div className="option">  
              <input type="radio" onClick={clickAnswer} name="statement_7" id="high_7" value="3" />
              <label for="high_7">
              <strong>high</strong> - likes learning new technologies and learns easily
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_7" id="moderate_7" value="2" />
              <label for="moderate_7">
              <strong>moderate</strong> - likes learning new technologies and learns with some support
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_7" id="low_7" value="1" />
              <label for="low_7">
              <strong>low</strong> - doesn't like learning new technologies
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_8">
            8. My persona's ability to follow written instructions is _______.   
            </label>
          </div>

          <div className="options">
            <div className="option">  
              <input type="radio" onClick={clickAnswer} name="statement_8" id="easily" value="3" />
              <label for="easily">
              <strong>easily</strong>
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_8" id="mid" value="2" />
              <label for="mid">
              <strong>with some support</strong>
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_8" id="difficulty" value="1" />
              <label for="difficulty">
              <strong>with difficulty</strong>
              </label>
            </div>
          </div>
        </div>
        {title !== "" ?
        <div className="result">
          <div className="text-box">
            <p className="title"><strong>{title}</strong></p>
            <p className="description">{description}</p>
          </div>
            <img className="figure-text" alt="illustration" src={URL} />
            <button className="button-send-clear" onClick={refreshPage}>
            CLEAR
            </button>
        </div> :
        <div className="button">
          <button className="button-send-clear" type="submit" onClick={checkAnswer}>
          SEND
          </button>
        </div>}
        
    </form>
  );
}

export default App;
