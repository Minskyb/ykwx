/**
 * Created by ASUS on 2016/6/15.
 */
import React,{Component,PropTypes} from 'react'
import classNames from 'classnames'

class Input extends Component{

    constructor(props,context){
        super(props,context);
        this.state = {
            value:null
        }
    }

    onChange(e){
        const originValue = e.target.value;
        const value = originValue.slice(0,this.props.rt_limit || originValue.length);
        if(this.props.rt_pattern && this.props.rt_setVerifyState){
            const pattern = new RegExp(this.props.rt_pattern);
            pattern.test(value) ? this.props.rt_setVerifyState(true) :this.props.rt_setVerifyState(false)
        }
        this.setState({
            value:value
        })
    }

    onBlur(e){
        const value = e.target.value;
        this.props.rt_setValue && this.props.rt_setValue(value);
    }

    render(){
        const {className,...others} = this.props;
        const cls = classNames({
            weui_input:true,
            [className]:className
        });

       return (
           <input className={cls}
                  {...others}
                  onChange={::this.onChange}
                  onBlur ={ ::this.onBlur}
                  value = {this.state.value}/>
       )
    }
}

Input.propTypes = {
    rt_setValue:PropTypes.func,
    rt_setVerifyState:PropTypes.func,
    rt_limit:PropTypes.number,
    rt_pattern:PropTypes.string
}

Input.defaultProps = {
    // defaultValue: undefined
};

export default Input