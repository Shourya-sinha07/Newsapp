// import React, { Component } from 'react' commit this line because it is not used in funtion basd component
import loading from './loading.gif.gif'
// export default class spinner extends Component { comminting out this line and make it funtion based component and use arrow funtion intead of "export default spinner extend componet"
const Spinner=()=>{   //This is the first change you have to make for a function based component
  // render() { commit out opening and closing of render tag
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  // } commit out opening and closing of render tag
}
export default Spinner;