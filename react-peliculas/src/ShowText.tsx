import React from "react";

export default function ShowText(props: showTextProps) {
    return (
        <div>
            {props.text}
        </div>
    )
}

interface showTextProps {
    text: string;
}