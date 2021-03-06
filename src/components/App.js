import React, {propTypes} from 'react';
import TaskBar from './common/TaskBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import cyan50 from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: cyan50
	}

});

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Paper className="contentApp" zDepth={3}>
						{this.props.children}
					</Paper>
					<TaskBar/>
				</div>
			</MuiThemeProvider>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.object.isRequired
};


export default App;