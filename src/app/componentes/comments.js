import React from 'react'

const Comment = ({comentario}) => {
    return (
        <div className="text-dark">
            {comentario.autor} dijo: 
            <br/>
            {comentario.comment}
            <hr/>
        </div>
    )
}
export default Comment;

