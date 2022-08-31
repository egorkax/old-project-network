import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC} from "../../redux/auth-reduser";
import {RootState} from "../../redux/redux-store";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getAuthUserDataTC()


        // authAPI.me()
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {email, id, login} = response.data.data
        //             this.props.setUserDataAC(id, email, login)
        //         }
        //     });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer);