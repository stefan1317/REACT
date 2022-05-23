import React, { Component } from 'react'
import Article from '../components/Article';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

type Props = {};

type State = {
    articles: ArticlesModel[],
    openModal: boolean,
    firstIndex: number,
    articlesLen: number,
};

type ArticlesModel = {
    id: number;
    title: string;
    tag: string;
    author: string;
    date: string;
    imgUrl: string;
    saying: string;
    summary: string;
    content: string;
};


class Home extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.setStateOfFooter.bind(this);
        this.state = {
        articles: [],
        openModal: false,
        firstIndex: 0,
        articlesLen: 0,    
        };
    }

    setStateOfFooter = (newValue: number) => {
        this.setState({
            firstIndex: newValue
        });
    }

    async componentDidMount() {
        const response = await fetch(`http://localhost:4000/articles`);
        const json = await response.json();
        console.log(json);
        this.setState({ articles: json });
    }

    render() {
        const openModal = this.state.openModal;
        const firstIndex = this.state.firstIndex;
        const articleList = this.state.articles.map((article: ArticlesModel) => (
            <Article key={article.id} id={article.id} title={article.title} tag={article.tag} author={article.author}
                date={article.date} imgUrl={article.imgUrl} saying={article.saying} summary={article.summary} content={article.content} />
        ))
        
        return (
            <div>
                <div>{articleList.filter((article, index) => (index >= firstIndex) && (index < firstIndex + 3))}</div>
                <Footer />
                <Modal openModal={openModal} />
            </div>
        )
    }
}

export default Home