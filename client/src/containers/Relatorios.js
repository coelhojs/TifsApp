// import React, { Component } from "react";
// import { $, jQuery } from 'jquery';

// var MaskedInput = React.createClass({
//     getInitialState: function () {
//         return { valor: "" };
//     },
//     handleChange: function (e) {
//         this.setState({ valor: e.target.value });
//     },
//     componentDidMount: function () {
//         var $elem = $(React.findDOMNode(this.refs.maskedInput));
//         var reverse = { reverse: false };

//         if (this.props.isReverse) {
//             reverse = { reverse: true };
//         }

//         $elem.mask(this.props.mask, reverse);
//     },
//     render: function () {
//         return (<div><input type="text" onChange={this.handleChange} ref="maskedInput"></input>{this.state.valor}</div>);
//     }
// });

// React.render(
//     <div>
//         MM/YYYY = <MaskedInput isReverse={false} mask={"00/0000"} /><br />
//         CEP = <MaskedInput isReverse={true} mask={"AAA 00000-000"} /><br />
//         CURRENCY = <MaskedInput isReverse={true} mask={"##0,00"} /><br />
//     </div>
//     , document.getElementById("content"));


// export default MaskedInput;