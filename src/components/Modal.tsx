import React from 'react'
import '../index.css'

type Props = {
    openModal: boolean,
}

export default function Modal({openModal}: Props) {
  return (
    <div className={openModal ? "modal__overlay show-modal" : "modal__overlay"}>
              <div className="modal">
                <div className="modal__content">
                  <h2 className="title">Add/Edit article</h2>
                  <div className="inputs__container">
                    <input type="text" name="title" className="input" placeholder="Please enter title" />
                    <input type="text" name="tag" className="input" placeholder="Please enter tag" />
                    <input type="text" name="author" className="input" placeholder="Please enter author" />
                    <input type="text" name="date" className="input" placeholder="Please enter date" />
                    <input type="text" name="imgUrl" className="input input--big" placeholder="Please enter image url" />
                  </div>
                  <textarea className="textarea" name="content" placeholder="Please enter content"></textarea>
                  <div className="modal__buttons">
                    <button type="button" className="button">Cancel</button>
                    <button type="button" className="button button--pink">Save</button>
                  </div>
                </div>
              </div>
            </div>
      )
}