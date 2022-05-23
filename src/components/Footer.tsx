import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Footer extends Component<Props, State> {
// constructor(props: any) {
//     super(props);
//     this.handleClick.bind(this);
//   }
    
  // handleClick = () => {
  //   this.props.setStateOfFooter(3);
  // }

  state = {}

  render() {
    return (
      <footer className="footer">
          <button className="footer__link">previous</button>
          <button className="footer__link footer__link--next">next</button>
  </footer>
    )
  }
}