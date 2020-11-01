import React from 'react';

// 两种写法
function HelloWorld(props) {
  return (
    <div>
      say hello in function HelloWorld {props.name}        
    </div>
  );
}

export default HelloWorld;

// class HelloWorld extends React.Component {
//   render() {
//     return <h1>Hello in HelloWorld,{this.props.name}</h1>;
//   }
// }

// export default HelloWorld