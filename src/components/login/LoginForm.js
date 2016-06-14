/**
 * Created by ASUS on 2016/6/8.
 */
import React ,{ Component,PropTypes } from 'react'
import { Form} from 'react-weui'
import 'weui'
import classNames from 'classnames'

import MobilePhoneInput from './MobilePhoneInput.js'
import PhoneVerifyInput from './PhoneVerifyInput.js'
import LoginButton from './LoginButton.js'

class LoginForm extends  Component{
    render(){
        const { className} = this.props;
        const cls = classNames({
            'login-form':true,
            [className]:className
        })
        return (
            <Form className={cls}>
                <MobilePhoneInput toggleCodeButtonActive = {this.props.actions.toggleCodeButtonActive}
                                        setPhoneNumber = {this.props.actions.setPhoneNumber}/>
                <PhoneVerifyInput active={this.props.codeBtnActive}
                                        toggleCodeButtonActive = {this.props.actions.toggleCodeButtonActive}
                                        setCodeNumber = {this.props.actions.setCodeNumber}/>
                <LoginButton active={this.props.agreementActive && this.props.codeBtnActive && /^1\d{10}$/.test(this.props.phoneNumber) && /^\d{6}$/.test(this.props.codeNumber)}
                                onLogin={()=> this.props.actions.login(this.props.phoneNumber,this.props.codeNumber) } />
            </Form>
        )
    }
}


export default LoginForm