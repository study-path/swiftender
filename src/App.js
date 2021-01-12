import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar/Sidebar';
import sideBarMenuData from './components/layout/Sidebar/sidebar-data'

const styles = { 
  app: {
    display: 'flex',
    height: '100%'
  },
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: "1 1 auto",
    position: "relative",
    overflowY: "scroll"
  }
}

function App() {

  const drawMenuRoutes = () => {
    return Object.keys(sideBarMenuData).map(key => {
      const parentItem = sideBarMenuData[key];
      return <Route key={parentItem.title} path={`/${parentItem.route}`} exact component={parentItem.component} />;
    });
  };

  const drawSubMenuRoutes = () => {
    return Object.keys(sideBarMenuData).map(key => {
      const parentItem = sideBarMenuData[key];
      return parentItem.subMenu.map(childItem =>
        <Route key={parentItem.title + childItem.title} path={`/${parentItem.route}/:${parentItem.routerParamName}/${childItem.route}`} exact component={childItem.component} />
      );
    });
  };

  return (
    <div style={styles.app}>
      <BrowserRouter>
        <Sidebar />
        <div style={styles.container}>
          <Header />
          <div style={styles.content}>
            <Switch>
              <Redirect exact  from="/" to='/projects' />
              {drawMenuRoutes()}
              {drawSubMenuRoutes()}
            </Switch>
          </div>
        </div>        
      </BrowserRouter>     
    </div>
  );
};

export default App;