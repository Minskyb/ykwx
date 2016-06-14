/**
 * Created by ASUS on 2016/6/8.
 */

import ActionTypes from '../constans/loginActionTypes.js'
import { push  } from 'react-router-redux';

export function setCodeButtonState(state){
    return {
        type:ActionTypes.SET_CODE_BUTTON_STATE,
        state:state
    }
}

export function setAgreementState(state){
    return {
        type:ActionTypes.SET_AGREEMENT_STATE,
        state:state
    }
}

export function setPhoneNumber(number){
    return {
        type:ActionTypes.SET_PHONE_NUMBER,
        number:number
    }
}

export function setCodeNumber(number){
    return {
        type:ActionTypes.SET_CODE_NUMBER,
        number:number
    }
}

export function _hideToast(){
    return {
        type:ActionTypes.HIDE_TOAST
    }
}

export function _showToast(){
    return {
        type:ActionTypes.SHOW_TOAST,
    }
}

export function _loginFailed(error){

    return (dispatch,getState) =>{

        dispatch(_showToast());
        setTimeout(()=>dispatch(_hideToast()),2000);
    }
}

export function login(phoneNumber,codeNumber){

    return (dispatch,getState) =>{
        if(Math.random()*10%2 == 0){
            dispatch(push('/home'));
        } else {
            dispatch(_loginFailed({type:'error',msg:'验证码错误！'}));
        }
    }
}