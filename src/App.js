import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import Quotes from "./components/Quotes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
//alt+shift+click-for multiple cursor support
//shit+arrow for selection
//shift+end->all keys goes to end
//for using react router go to webite react router dom

const App = () => {
  let apiKey = process.env.REACT_APP_NEWS_API;
  // setProgress = (progress) => {
  //   //ye hamesha arrow function hona chahiye nhi to this uplabdh nhi hoga
  //   //ye progress main News setProgress={setProgress} component ko pass krr dunga kyu krunga pass taaki main News setProgress={setProgress} component se progress ko set krr pau
  //   this.setState({ progress: progress });
  // };
  const [progress, setProgress] = useState(0);

  //render-jsx ko html me compile krega uske baad screen per show krega is a life cycle method jab react kisi ekk component ko load krti h to kuch series of mrthods run  hote h
  return (
    <div>
      <Router>
        <Navbar />
        {/* <News setProgress={setProgress} pageSize={6} country="in" category={"sports"} /> */}
        {/* <Quotes pageSize={6} country="in" /> */}
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          //    onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={6}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/buisness">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="buisness"
              pageSize={6}
              country="in"
              category="buisness"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={6}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={6}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={6}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={6}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={6}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={6}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
