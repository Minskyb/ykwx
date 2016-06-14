/**
 * Created by ASUS on 2016/6/8.
 */
import React,{ Component,PropTypes } from 'react'
import { FormCell,CellHeader,Label,CellBody,Input,CellFooter,Icon,Button } from 'react-weui'
import 'weui'
import classNames from 'classnames'

class PhoneVerifyInput extends Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            warn:this.props.warn || false,
            verifyNumber:null,
            counter:this.props.counter || 60
        }

        this.codePassed = false;
    }

    onChange(e){

        var value = e.target.value;

        if(this.codePassed && value.length >6){
            return ;
        } else if(this.codePassed && value.length <6){
            this.props.setCodeNumber(value);
            this.codePassed = false;
        } else if(!this.codePassed && value.length == 6){
            this.codePassed = true;
            this.props.setCodeNumber(value);
        }

        this.setState({
            verifyNumber: value
        })
    }

    onClick(e){

        if(!this.props.toggleCodeButtonActive || !this.props.active) return;
        this.props.toggleCodeButtonActive();

        this.setState({
            counter:59
        })

        this._interval = setInterval(() => {
            var counter = this.state.counter;
            if(counter > 0){
                this.setState({counter:--counter})
            } else {
                this.props.toggleCodeButtonActive();
                this.setState({ counter: 60});
                clearInterval(this._interval);
            }
        },1000)
    }
    render(){

        const {className} = this.props;
        const cls = classNames({
            [className]:className
        });

        return (
            <FormCell vcode={true} warn ={this.state.warn} className={cls}>
                <CellHeader>
                    <Label>验证码</Label>
                </CellHeader>
                <CellBody>
                    <Input type="number"
                            value = {this.state.verifyNumber}
                            onChange={this.onChange.bind(this)}
                            placeholder="请输入短信验证码"/>
                </CellBody>
                <CellFooter className="p-r-10">
                    <Icon value="warn" size="small"/>
                    <Button type={!this.props.active ? "default" : "primary"}
                        className="code-btn"
                        disabled={!this.props.active}
                        size="normal"
                        onClick={this.onClick.bind(this)}>
                            {this.state.counter == 60 ? '获取验证码': this.state.counter+'s 后重发'}
                    </Button>
                </CellFooter>
            </FormCell>
        )
    }
}

PhoneVerifyInput.propTypes = {
    toggleCodeButtonActive:PropTypes.func.isRequired,
    active:PropTypes.bool,
    setCodeNumber:PropTypes.func.isRequired
};

export default  PhoneVerifyInput