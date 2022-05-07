import React from 'react';
import './App.css';
import {Header} from "./componenty/header/Header";
import {Navbar} from "./componenty/navbar/Navbar";
import {Profile} from "./componenty/profile/Profile";
import {Dialogs} from "./componenty/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {News} from "./componenty/news/News";
import {Setting} from "./componenty/setting/Setting";
import {Music} from "./componenty/music/Music";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {



    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path={'/profile'} render={() => <Profile profilePages={props.state.profilePages}/>}/>
                        <Route path={'/dialogs'} render={() => <Dialogs dialogPages={props.state.dialogPages} />}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/setting'} render={() => <Setting/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
