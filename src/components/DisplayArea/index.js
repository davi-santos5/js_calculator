import React from 'react';

import './styles.css';

function DisplayArea({expression, result}) {
    return (
      <div id='display-area'>
        <div id='display-expression'>{expression}</div>
        <div id='display'>{result}</div>
      </div>
    )
  }

  export default DisplayArea;
  
  