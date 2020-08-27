// Example usage:
//
// import { MyShape } from ./myShape.js;
//
// class MyComponent extends React.Component {
//   //
// }
//
// MyComponent.propTypes = {
//   input: MyShape
// };

import PropTypes from "prop-types";

let _Welcome;
_Welcome = PropTypes.shape({
    "greeting": PropTypes.string,
    "instructions": PropTypes.arrayOf(PropTypes.string),
});

export const Welcome = _Welcome;
