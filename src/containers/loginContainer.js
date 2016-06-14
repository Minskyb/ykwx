/**
 * Created by ASUS on 2016/6/8.
 */

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from '../components/login'

import {
    setCodeButtonState,
    setAgreementState,
    setPhoneNumber,
    setCodeNumber,
    login
    }  from '../actions/loginActions.js'

function mapStateToProps(state){
    return {
        codeBtnActive:state.login.codeBtnActive,
        phoneNumber:state.login.phoneNumber,
        codeNumber:state.login.codeNumber,
        agreementActive:state.login.agreementActive,
        warn:state.login.warn
    }
}

function mapDispatchToProps(dispatch){

        return {
            actions:bindActionCreators({
                setCodeButtonState,
                setAgreementState,
                setPhoneNumber,
                setCodeNumber,
                login
            },dispatch)
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)