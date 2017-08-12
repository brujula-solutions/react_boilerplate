'use babel';

import React from 'react';

import MshtaLauncherIcon from './MshtaLauncherIcon';

export default class PanelView extends React.Component {

  constructor(props) {
    super(props);
    this.noHeader = false;
    this.title = this.props.title;
    if (this.props.noHeader) {
      this.noHeader= this.props.noHeader;
    }
  }

  render() {
    let header = <div className="panel-heading">{this.title}</div>;
    if (this.noHeader) {
      header = "";
    }

    return (
      <div className="panel panel-default" style={PanelView.style}>
        {header}
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

PanelView.style = {
  marginTop : 16,
  marginBottom : 16
}
