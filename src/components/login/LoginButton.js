/**
 * Created by ASUS on 2016/6/13.
 */

import React,{ Component,PropTypes } from 'react'
import classNames from 'classnames'
import {Button} from 'react-weui'
import 'weui'

class LoginButton extends Component{

    render(){

        const {className,...others} = this.props;
        const cls = classNames({
            "login-btn":true,
            [className]:className
        })
        return (
            <Button type={!this.props.active ? "default" : "primary"} {...others}
                className={cls}
                disabled={!this.props.active}
                size="normal"
                onClick={this.props.active && this.props.onLogin}>
                登录
            </Button>
        )
    }
}

LoginButton.propTypes = {
    active:PropTypes.bool,
    onLogin:PropTypes.func.isRequired
}

export default LoginButton