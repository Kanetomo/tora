import React, {useState} from 'react';
import LikeButton from './LikeButton';

const Article = (props) => {
    const [isPublished, togglePublished] = useState(false);

    let publishState = "";
    if(isPublished) {
        publishState = "公開"
    } else {
        publishState = "非公開"
    }
    return(
        <div>
            <h2>{props.title}</h2>
            <label htmlFor="check">公開状態：</label>
            <input type="checkbox" checkd={isPublished} id="check" onClick={() => togglePublished(!isPublished)}/>
            <p>{publishState}</p>
            <LikeButton />
        </div>
    )
};

export default Article