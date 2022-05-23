import React, { Component } from 'react'

type Props = {}

type State = {
    openModal: boolean,
}

export default class AddButton extends Component<Props, State> {
  state = {
      openModal: true,
  }

  addArticle() {
    this.setState({ openModal: true });
  }

  render() {
    return (
        <div className="add__container">
            <button type="button" onClick={this.addArticle} className="button"> + Add Article</button>
        </div>
    );
  }
}