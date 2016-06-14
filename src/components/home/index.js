/**
 * Created by ASUS on 2016/6/14.
 */

import React,{ Component,PropTypes } from 'react'
import {Input} from '../common/index'

class Home extends Component {

    render(){
        return (
         <div>
             <h2>Hello Welcome to Home Page!</h2>
             <br/>
             <Input type="text" placeholder="nihao" rt_limit="8"/>
         </div>
        )
    }
}

export default Home