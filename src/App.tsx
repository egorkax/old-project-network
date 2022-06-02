import React from 'react';
import './App.css';
import {Header} from "./componenty/header/Header";
import {Navbar} from "./componenty/navbar/Navbar";
import {Profile} from "./componenty/profile/Profile";
import {Dialogs} from "./componenty/Dialogs/Dialogs";
import {Route, Switch} from "react-router-dom";
import {News} from "./componenty/news/News";
import {Setting} from "./componenty/setting/Setting";
import {Music} from "./componenty/music/Music";
import {ActionsType, RootState} from "./redux/redux-store";
import {DialogsContainer} from "./componenty/Dialogs/DialogsContainer";

type AppPropsType = {
    store: RootState
    dispatch: (action: ActionsType) => void
}


const App: React.FC<AppPropsType> = (props) => {
    const state = props.store


    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path={'/profile'} render={() => <Profile profilePages={state.profilePages}
                                                                    dispatch={props.dispatch}/>}/>

                    <Route path={'/dialogs'} render={() => <DialogsContainer dialogPages={state.dialogPages}
                                                                             dispatch={props.dispatch}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/setting'} render={() => <Setting/>}/>
                </Switch>
            </div>
        </div>

    );
}


export default App;
