import React from 'react';
import Dashboard from './components/Dashboard'
import Login from './components/Login'  
import  Step1 from './components/PropWizard/Step1'
import  Step2 from './components/PropWizard/Step2'
import  Step3 from './components/PropWizard/Step3'
import  Step4 from './components/PropWizard/Step4'
import  Step5 from './components/PropWizard/Step5'

import { Switch, Route} from 'react-router-dom'

export default (
            <Switch>
                <Route component = {Login} exact path = '/'/>
                <Route component = {Dashboard} path = '/Dashboard'/>
                <Route component = {Step1} exact path = '/Step1'/>
                <Route component = {Step2} exact path = '/Step2'/>
                <Route component = {Step3} exact path = '/Step3'/>
                <Route component = {Step4} exact path = '/Step4'/>
                <Route component = {Step5} exact path = '/Step5'/>
            </Switch>
)                       
    
