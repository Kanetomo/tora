import React from 'react';
import Article from './Article';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPublished: false
        }
    }

    //公開状態を反転させる関数
    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    };

    render() {
        const authorName="Torahack"
        return(
            <React.Fragment>
                <Article 
                    title="トラハックをよろしく"
                    //同コンポーネント内はthis.state.key名で渡す
                    isPublished={this.state.isPublished}
                    //関数式に関して渡すことによって無限ループを回避、受け取る側も関数式にする
                    toggle={() => this.togglePublished()}
                />
            </React.Fragment>
        )
    }
}

export default Blog