/**
 * Created by ASUS on 2016/6/8.
 * 输入位数在 11 位与非 11 位之间切换时，
 * 派发事件 toggleCodeButtonActive 和 setPhoneNumber
 */

import React,{ Component,PropTypes } from 'react'
import { FormCell,CellHeader,Label,CellBody,Input } from 'react-weui'
import 'weui'
import classNames from 'classnames'


class MobilePhoneInput extends Component {

    constructor(props,context){
        super(props,context);
        this.state = {
            phoneNumber:''
        }

        this.phoneNumberPassed = false;
    }

    onChange(e){

        var value = e.target.value.slice(0,11);
        if(/^1\d{10}/.test(value)){
            this.phoneNumberPassed = true;
            this.props.setPhoneNumber(value);
            this.props.toggleCodeButtonActive();
        } else if( this.phoneNumberPassed){
            this.phoneNumberPassed = false;
            this.props.setPhoneNumber(value);
            this.props.toggleCodeButtonActive();
        }
        this.setState({
            phoneNumber:value
        });
    }

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
                    <Input type="tel" value={this.state.phoneNumber}
                            onChange={this.onChange.bind(this)}
                            placeholder="请输入手机号码"
                            onBlur={() => console.log("lose blur")}
                            onFocus={() => console.log("on foucse")}>
                    </Input>
                </CellBody>
            </FormCell>
        )
    }
}

MobilePhoneInput.propTypes = {
    toggleCodeButtonActive:PropTypes.func.isRequired,
    setPhoneNumber:PropTypes.func.isRequired
}

export default MobilePhoneInput