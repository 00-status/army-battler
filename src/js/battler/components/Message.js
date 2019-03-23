//@flow
import React from "react";

type props = {
    title: string,
    contents: string
}

const Message = (props: props) => {
    return <div>
        <h4>{props.title}</h4>
        <p>{props.contents}</p>
    </div>;
};

export default Message;