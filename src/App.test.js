import React from 'react';
import ReactDOM from 'react-dom';
import PortFolio from "./PortFolio";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortFolio />, div);
  ReactDOM.unmountComponentAtNode(div);
});
