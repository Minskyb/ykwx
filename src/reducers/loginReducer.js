/**
 * Created by ASUS on 2016/6/12.
 */

import ActionTypes from '../constans/loginActionTypes.js'

const initState = {
    codeBtnActive:false,
    phoneNumber:null,
    codeNumber:null,
    agreementActive:false,
    warn:false
}

export default function loginReducer(state=initState,action){
    switch (action.type){
        case ActionTypes.SET_CODE_BUTTON_STATE:
            return Object.assign({},state,{
                codeBtnActive:action.state
            });
        case ActionTypes.SET_AGREEMENT_STATE:
            return Object.assign({},state,{
                agreementActive:action.state
            });
        case ActionTypes.SET_PHONE_NUMBER:
            return Object.assign({},state,{
                phoneNumber:action.number
            });
        case ActionTypes.SET_CODE_NUMBER:
            return Object.assign({},state,{
                codeNumber:action.number
            });
        case ActionTypes.SHOW_TOAST:
            return Object.assign({},state,{
                warn:true
            })
        case ActionTypes.HIDE_TOAST:
            return Object.assign({},state,{
                warn:false
            })
        default :
            return state;
    }
}