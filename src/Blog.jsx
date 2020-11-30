import React from 'react';
import Article from './Article';


const Blog = () => {
    // componentDidMount() {
    //     //ボタンがクリックされたらいいねをカウントアップする
    //     document.getElementById('counter').addEventListener('click', this.countUp)
    // }

    // componentDidUpdate() {
    //     if (this.state.count >= 10) {
    //         this.setState({count: 0})
    //     }
    // }

    // componentWillUnmount() {
    //     document.getElementById('counter').removeEventListener('click', this.countUp)
    // }

    //公開状態を反転させる関数


    // countUp = () => {
    //     this.setState({ count: this.state.count + 1})
    // }


    return(
        <React.Fragment>
            <Article 
                title="トラハックをよろしく"
                // count={this.state.count}
            />
        </React.Fragment>
    )
}


export default Blog