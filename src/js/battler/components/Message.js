//@flow
import React from "react";
import './Message.css';

type props = {
    title: string,
    contents: string
}

const Message = (props: props) => {
    return <div className="message">
        <h4>{props.title}</h4>
        <p>{props.contents}</p>
    </div>;
};

export default Message;