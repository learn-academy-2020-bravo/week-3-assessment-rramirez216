// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1.
    // the state object holds the information that can be manipulated and is holding the  state of the userInput
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2.
    // set state is a method that changes the value of the properties called in the state object
    // and right here it is passing what ever is iputed into the robot text input in into the property userinput that is inside state
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3.
    // destructers the userInput so it can be passed as a prop to the other components and reused 
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. */}
          {/*  the onchange allows us to listen to the inputs change and passes the value inoto the robot method that sets the state  */}
          onChange={ this.robot }
          {/* 5. */}
          {/* what ever is being typed into the input field is being stored here  */}
          value={ userInput }
        />

        <div>
          {/* 6. */}
          {/* this is where the the good robot component is called and being rendered on the page */}
          <GoodRobot
            {/* 7. */}
            {/* the goodrobot component is taking the userinput as props and printing out what ever is being passed into it */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8.
      // this is where the jsx elements are being returned and rendered onto the page
      <div>
        <h3>Good Robot</h3>
        {/* 9. */}
        {/* the userinput's value is called as props and printed onto the page */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10.
// sends information to wherever the good robot component is being imported to 
export default GoodRobot
