import React from 'react';
import Article from './Article';

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const authorName="Torahack"
        return(
            <React.Fragment>
                <Article 
                    title="トラハックをよろしく"
                    order={3}
                    isPublished={true}
                    author={authorName}
                />
            </React.Fragment>
        )
    }
}

export default Blog