import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      {/* <Route path="/tv/popular" render={() => <h1>Popular</h1>} /> */}
      <Route path="/search" component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
/**
 * @description [<Redirect>]
 * <Redirect from="*" to="/" />
 * 일치하는 페이지가 하나도 없으면 어느 페이지든 받아서 "/"로 보내준다.
 * @description [<Switch>]
 * 한 번에 오직 하나의 Route만 Render하게 해준다.
 * - /tv/popular
 *  1. /tv에 exact를 해주지 않으면 <h1>Popular</h1>가 나타나지 않는다
 *  2. 왜냐하면 switch는 하나의 component만 render를 해주기 때문에
 *  3. 이를 방지하려면 /tv에 exact를 넣어줄 것. (정확하게 일치해야 render가 된다.)
 *                          (넣지 않으면 /tv로 시작하는 뭐가 들어와도 일치된다.)
 */
