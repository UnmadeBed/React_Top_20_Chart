import React from "react";

class MainContainer extends React.Component {
  constructor(props) {
    suoer(props);
    this.state = {
      chart: []
    };
  }
}

componentDidMount() {
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

  fetch(url)
  .then(res => res.json())
  .then(chart => this.setState({chart: chart}))
  .catch(err => console.error);
}

render() {
  return (
    <div>
    <MusicChart />
    </div>
  )

}

export default MainContainer
