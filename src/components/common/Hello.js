/**
 * Created by ASUS on 2016/6/15.
 */
import React,{Component,PropTypes} from 'react'
import classNames from 'classnames'

class Hello extends Component{

    render(){
        const {className,...others} = this.props;
        const cls = classNames({
            weui_input:true,
            [className]:className
        });

        return (
            <input className={cls} {...others} />
        )
    }
}

export default Hello