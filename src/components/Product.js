// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types';

export default class Product extends React.Component{
  render(){
    return(
      <div>Product</div>
    )
  }
 }

  Product.defaultProps = {
  hasWatermark: false

  };

  Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
    weight: (props,propsName) => {
      // debugger
      const weight = props[propsName]
      if(weight === undefined){
        return new Error ("Need to have a weight prop")
      }
      if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
    },
  }

  // if(isNaN(weight)){
  //   return new error ("Needs to be a number")
  // }
  // const validWeight = weight > 80 && weight < 300;
  //
  // if(!validWeight){
  //   return new error ("Weight needs to be between 80 and 100")
  // }


// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300



// Order.propTypes = {
//   cone: PropTypes.bool,
//   size: PropTypes.string,
//   scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
//   orderInfo: PropTypes.object.isRequired
// };
