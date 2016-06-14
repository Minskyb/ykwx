/**
 * Created by ASUS on 2016/6/13.
 */
import React,{ PropTypes,Component } from 'react'
import classNames from 'classnames';

import { Form,FormCell,CellBody,Checkbox } from 'react-weui'
import 'weui'

class Agreement extends Component{

    render(){
        const { className , ...others} = this.props;
        const cls = classNames({
            [className]:className
        })
        return(
            <Form checkbox={true} className={cls} {...others}>
                <FormCell checkbox={true} >
                    <CellBody className="inline-icon text-center">
                        <Checkbox name="checkbox" value="1"
                                    checked={this.props.active}
                                    onClick={() => this.props.setAgreementState(!this.props.active)} />
                        我已阅读并接受<a href="javascript:">《用户服务协议》</a>
                    </CellBody>
                </FormCell>
            </Form>
        )
    }
}

Agreement.propTypes = {
    active:PropTypes.bool,
    setAgreementState:PropTypes.func.isRequired
}

export default Agreement