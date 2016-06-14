/**
 * Created by ASUS on 2016/6/8.
 * 输入位数在 11 位与非 11 位之间切换时，
 * 派发事件 toggleCodeButtonActive 和 setPhoneNumber
 */

import React,{ Component,PropTypes } from 'react'
import { FormCell,CellHeader,Label,CellBody } from 'react-weui'
import {Input} from '../common'
import 'weui'
import classNames from 'classnames'


class MobilePhoneInput extends Component {

    render(){
        const {className} = this.props;
        const cls = classNames({
            [className]:className
        });

        return (
            <FormCell className={cls} >
                <CellHeader>
                    <Label>手机号</Label>
                </CellHeader>
                <CellBody>
                    <Input type="tel"
                            placeholder="请输入手机号码"
                            rt_limit={11}
                            rt_pattern="^1\d{10}$"
                            rt_setValue = {this.props.setPhoneNumber}
                            rt_setVerifyState = {this.props.setCodeButtonState}>
                    </Input>
                </CellBody>
            </FormCell>
        )
    }
}

MobilePhoneInput.propTypes = {
    setCodeButtonState:PropTypes.func.isRequired,
    setPhoneNumber:PropTypes.func.isRequired
}

export default MobilePhoneInput