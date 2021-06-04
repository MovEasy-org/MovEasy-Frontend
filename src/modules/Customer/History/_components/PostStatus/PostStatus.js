import React from 'react';
import "./PostStatus.scss";
const PostStatus = ({poststatus=false}) => {
    return (
        <>
            <div className={poststatus?("completed"):("pending")}>
                    {
                        poststatus? <h6>Completed</h6> :<h6>Pending</h6>
                    }       
            </div>
        </>
    )
}

export default PostStatus
