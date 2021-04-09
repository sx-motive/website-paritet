import React from "react";
//import Scrollbar from "react-smooth-scrollbar";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Home";
import Websites from "./Websites";
import Contacts from "./Contacts";

import CallCenter from "./call/CallCenter";
import InfoClients from "./call/InfoClients";
import Opros from "./call/Opros";
import Control from "./call/Control";
import Ocenka from "./call/Ocenka";
import SpyClient from "./call/SpyClient";
import ColdCall from "./call/ColdCall";
import VirtualOffice from "./call/VirtualOffice";
import HotLine from "./call/HotLine";
import Zakaz from "./call/Zakaz";
import Bd from "./call/Bd";
import Scenari from "./call/Scenari";
import OnlineCt from "./call/OnlineCt";
import AutoInfo from "./call/AutoInfo";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        {/*  MAIN PAGES ROUTER   */}
        <Route exact path="/" component={Home} />
        <Route exact path="/websites" component={Websites} />
        <Route exact path="/contacts" component={Contacts} />
        {/*  CALL CENTER ROUTER   */}
        <Route exact path="/call/call-center" component={CallCenter} />
        <Route exact path="/call/info-clients" component={InfoClients} />
        <Route exact path="/call/opros" component={Opros} />
        <Route exact path="/call/control" component={Control} />
        <Route exact path="/call/ocenka" component={Ocenka} />
        <Route exact path="/call/spy-client" component={SpyClient} />
        <Route exact path="/call/cold-call" component={ColdCall} />
        <Route exact path="/call/virtual-office" component={VirtualOffice} />
        <Route exact path="/call/hot-line" component={HotLine} />
        <Route exact path="/call/zakaz" component={Zakaz} />
        <Route exact path="/call/bd" component={Bd} />
        <Route exact path="/call/scenari" component={Scenari} />
        <Route path="/call/online-consultant" component={OnlineCt} />
        <Route exact path="/call/auto-informator" component={AutoInfo} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function App() {
  return (
    <>
      <Header />
      {/*<Scrollbar style={{ height: "100vh" }} damping={0.05}>*/}
      <AnimatedSwitch />
      <Footer />
      <ScrollToTop />
      {/*</Scrollbar>*/}
    </>
  );
}

export default App;
