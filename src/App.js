import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <head>
          <title>Code With Hossein</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="stylesheet" href="../css/style.css" />
        </head>

        <body>
          <div class="container">
            <div class="circle"></div>
            <div class="circle"></div>

            <div class="clock">
              <div class="clock-bg">
                <img src="../images/clock.png" alt="..." />
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

          <script type="text/javascript" src="../js/script.js"></script>
        </body>
      </div>
    </div>
  );
}

export default App;
