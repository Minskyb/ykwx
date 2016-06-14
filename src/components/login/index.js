/**
 * Created by ASUS on 2016/6/8.
 */

import React ,{ Component,PropTypes } from 'react'
import LoginForm from './LoginForm.js'
import Icon from '../../images/LOGO.svg'
import Agreement from './Agreement.js'

import { Toast,Button } from 'react-weui'
import 'weui'

import '../../less/common.less'
import '../../less/login.less'

class Login extends Component {

    onClick(e){
        this.props.actions.hideToast();
    }

    render(){
        return (
         <div className="login">
             <div className="logo">
                 <Icon height={80} width={80} />
             </div>
             <LoginForm {...this.props}/>
             <Agreement className={"agreement-form"}
                            active = {this.props.agreementActive}
                            toggleAgreementActive = {this.props.actions.toggleAgreementActive}/>
             <Toast show={this.props.warn} icon="warn">
                 警告
             </Toast>
         </div>
        )
    }
}


export default Login