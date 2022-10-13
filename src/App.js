import "./App.css";
import "./js/script";
import logo from "./clock.jpeg";
function App() {
  return (
    <div className="App">
      <div>
        <head>
          <title>Code With Hossein</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        <body>
          <div class="container">
            <div class="circle"></div>
            <div class="circle"></div>

            <div class="clock">
              <div class="clock-bg">
                <img src={logo} alt="..." />
              </div>
              <div class="hour">
                <span class="hr" id="hr"></span>
              </div>
              <div class="minute">
                <span class="min" id="min"></span>
              </div>
              <div class="second">
                <span class="sec" id="sec"></span>
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default App;
