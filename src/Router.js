import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import console = require('console');

const RouterComponent = () => {
  return (
    <Router>
        <Scene key="root" hideNavBar>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" initial />
            </Scene>
            <Scene key="main">
                <Scene
                    rightTitle="+"
                    onRight = { () => { console.log("Right event!!!!!")}}
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees" />
                </Scene>
        </Scene>
    </Router>
  );
};

export default RouterComponent;
