import React from 'react';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import 'bootstrap/dist/css/bootstrap.css'
import defaultMarkdown from 'DefaultMarkdown';
import './App.css';


class Editor extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onChange(e.target.value);
	}

	render() {
		const value = this.props.value;
		return (
			<div className="col-md-10 offset-md-1">
				<form>
					<textarea id="editor" value={value} onChange={this.handleChange} />
				</form>
			</div>
		);
	}
}

class Preview extends React.Component {

	render() {
		const value = this.props.value;
		return (
			<div className="col-md-10 offset-md-1" id="preview">
				<ReactMarkdown source={value} plugins={[breaks]} />
			</div>
		);
	}
}

const Footer = () => {
	return (
		<div className="footer">
			<p>Made with much coffee, React and Stack<strong>overflow</strong></p>
			<p>Code is on <a href="https://github.com/saadanerdetbare/markdownviewer" target="_blank" rel="noopener noreferrer">github</a></p>
			<p>Jakob Dahl</p>
		</div>
	)
}


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: defaultMarkdown
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value) {
		this.setState({ value: value });
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<Editor value={this.state.value} onChange={this.handleChange} />
					<Preview value={this.state.value} />
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;

