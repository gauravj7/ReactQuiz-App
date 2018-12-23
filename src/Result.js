import React from 'react';

var PieChart = require("react-chartjs").Pie;


class Result extends React.Component {
	render() {
    let chardata = [
	{
		value: this.props.total - this.props.score,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Wrong"
	},
	{
		value: this.props.score,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Correct"
	}
]

let options = {
  title: {
      display: true,
      text: 'Custom Chart Title'
  }
}

    return (
    <div>
    <PieChart data={chardata} options={options} />
		<h2>Correct: {this.props.score}</h2>
		<h2>Wrong: {this.props.total - this.props.score}</h2>
    </div>
    )

		}

}

export default Result;
