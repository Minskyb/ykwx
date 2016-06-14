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
        case ActionTypes.TOGGLE_CODE_BUTTON_ACTIVE:
            return Object.assign({},state,{
                codeBtnActive:!state.codeBtnActive
            });
        case ActionTypes.TOGGLE_AGREEMENT_ACTIVE:
            return Object.assign({},state,{
                agreementActive:!state.agreementActive
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