'use babel';

import React from 'react';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';

import MshtaExecutor from 'MshtaExecutor';

export default class MshtaLauncherIcon extends React.Component {

  constructor(props) {
    super(props);
    this.url = props.url;
    this.snackbarMsg = "";
    this.state = {
      open: false,
    };
  }

  render() {
    let appName = this.props.appName;
    this.snackbarMsg = "Launching " + appName + " ...";
    let appExecPath = this.props.appExecPath;
    return (
      <li>
        <Paper style={MshtaLauncherIcon.style} zDepth={3} circle={true} >
          <img src="./assets/kiwiapp.ico" height="80px" width="80px" onClick={this.performClick.bind(this)} />
          <label>{appName}</label>
        </Paper>
        <Snackbar
          open={this.state.open}
          message={this.snackbarMsg}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose.bind(this)} />
      </li>
    );
  }

  handleRequestClose () {
    this.setState({
      open: false,
    });
  }

  performClick() {
    this.openUrlInMshta(this.url);
    this.setState({
      open: true,
    });
  }

  openUrlInMshta (url) {
    var result = MshtaExecutor.run(url);
    if (result) {
      this.snackbarMsg = result;
      this.setState({
        open: true,
      });
    }
  }
}

MshtaLauncherIcon.style = {
  height: 80,
  width: 80,
  padding: 0,
  margin: 16,
  textAlign: 'center',
  display: 'inline-block',
};

MshtaLauncherIcon.defaultProps = {
  applicationNames: []
}
