import "./App.css";
import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "Input: ",
			value: "",
		};
	}
	updateContent = (input) => {
		if (this.state.type === "Result: ") {
			this.setState({ type: "Input: ", value: "" });
		}
		// console.log("value: " + this.state.value);
		// console.log("input: " + input);
		if (
			this.state.value === "" ||
			this.state.value === "Enter a number other than 0 first"
		) {
			if (
				input === "=" ||
				input === "+" ||
				input === "-" ||
				input === "clear" ||
				input === "*" ||
				input === "/" ||
				input === "0"
			) {
				// console.log("did it");
				this.setState({ value: "Enter a number other than 0 first" });
			} else {
				this.setState({ value: input });
			}
		} else {
			if (this.state.value === "Enter a number other than 0 first") {
				this.setState({ value: input });
			} else {
				let newValue = this.state.value + input;
				this.setState({ value: newValue });
			}
		}
	};
	equals = () => {
		console.log("equal pushed");
		console.log("value: " + this.state.value);
		this.setState({ type: "Result: " });
		let equation = this.state.value;
		console.log(equation);
		let answer = eval(equation);
		this.setState({ value: answer });
	};

	clear = () => {
		this.setState({ type: "Input: ", value: "" });
	};

	render() {
		return (
			<div className="App">
				<table>
					<thead>
						<th colSpan="4">Taylor's React.js Calculator</th>
					</thead>
					<tbody>
						<tr>
							<td className="inputLabel" colSpan="1">
								{this.state.type}
							</td>
							<td className="screen" colSpan="3">
								{this.state.value}
							</td>
						</tr>
						<tr>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-function"
									value="+"
								>
									+
								</button>
							</td>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-30"
									value="0"
								>
									0
								</button>
							</td>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-function"
									value="-"
								>
									-
								</button>
							</td>
							<td>
								<button
									onClick={(e) => this.clear(e.target.value)}
									className="button-clear"
									value="clear"
								>
									CLEAR
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-30"
									value="1"
								>
									1
								</button>
							</td>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-30"
									value="2"
								>
									2
								</button>
							</td>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-30"
									value="3"
								>
									3
								</button>
							</td>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-function"
									value="*"
								>
									*
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-30"
									value="4"
								>
									4
								</button>
							</td>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-30"
									value="5"
								>
									5
								</button>
							</td>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-30"
									value="6"
								>
									6
								</button>
							</td>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-function"
									value="/"
								>
									/
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-30"
									value="7"
								>
									7
								</button>
							</td>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-30"
									value="8"
								>
									8
								</button>
							</td>
							<td>
								<button
									onClick={(e) =>
										this.updateContent(e.target.value)
									}
									className="button-30"
									value="9"
								>
									9
								</button>
							</td>
							<td>
								<button
									onClick={() => this.equals()}
									className="button-equal"
									value="="
								>
									=
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
