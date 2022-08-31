import React from 'react';
import './App.css';
import {Navbar} from "./componenty/navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {News} from "./componenty/readyComponents/news/News";
import {Setting} from "./componenty/readyComponents/setting/Setting";
import {Music} from "./componenty/readyComponents/music/Music";
import {DialogsContainer} from "./componenty/Dialogs/DialogsContainer";
import {UsersContainer} from "./componenty/Users/UsersContainer";
import {ProfileContainer} from "./componenty/profile/ProfileContainer";
import HeaderContainer from "./componenty/header/HeaderContainer";

// type AppPropsType = {
//     store: RootState
//     dispatch: (action: ActionsType) => void
// }


// const App: React.FC<AppPropsType> = (props) => {
    // const state = props.store

const App=()=>{

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/setting'} render={() => <Setting/>}/>
                </Switch>
            </div>
        </div>

    );
}


export default App;
