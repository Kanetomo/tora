import React from 'react';
import Article from './Article';


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPublished: false,
            count: 0
        }
    }

    componentDidMount() {
        //ボタンがクリックされたらいいねをカウントアップする
        document.getElementById('counter').addEventListener('click', this.countUp)
    }

    componentDidUpdate() {
        if (this.state.count >= 10) {
            this.setState({count: 0})
        }
    }

    componentWillUnmount() {
        document.getElementById('counter').removeEventListener('click', this.countUp)
    }

    //公開状態を反転させる関数
    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    };

    countUp = () => {
        this.setState({ count: this.state.count + 1})
    }

    render() {
        return(
            <React.Fragment>
                <Article 
                    title="トラハックをよろしく"
                    //同コンポーネント内はthis.state.key名で渡す
                    isPublished={this.state.isPublished}
                    //関数式に関して渡すことによって無限ループを回避、受け取る側も関数式にする
                    toggle={() => this.togglePublished()}
                    count={this.state.count}
                />
            </React.Fragment>
        )
    }
}

export default Blog