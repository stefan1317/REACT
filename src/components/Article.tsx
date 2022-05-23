import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    id: number;
    title: string;
    tag: string;
    author: string;
    date: string;
    imgUrl: string;
    saying: string;
    summary: string;
    content: string;
}

export default function article({ id, title, tag, author, date, imgUrl, saying, summary, content }: Props) {
    return (
        <article>
            <div className='container'>
                <h2 className="title title--details">{title}</h2>
                <ul className="info__container info__container--details">
                    <li className="info__item">{tag}</li>
                    <li className="info__item">Added by
                        <span className="info__mark">{author}</span>
                    </li>
                    <li className="info__item">{date}</li>
                </ul>
                <div className="actions__container">
                    <button type="button" className="actions__btn">Edit</button>
                    <button type="button" className="actions__btn">Delete</button>
                </div>
                <img src={imgUrl} alt="other "/>
                <div className="content__container">
                    <p>{summary}</p>

                    <p className="saying">{saying}</p>
                    <p>{content.substring(0, 500)}</p>
                    <div className="readmore__container">
                        <Link to={`/details/${id}`}>
                            <button type="button" className="button">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}