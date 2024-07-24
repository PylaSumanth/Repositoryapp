import React, { useState } from "react";
import { greetingFn } from "./Refresh";

const ShowGreeting = () => {
    const [greeting, setGreeting] = useState("");

    const greetingHandler = () => {
        const greetString = greetingFn();
        setGreeting(greetString);
    };

    return (
        <>
            <h1>Hello Sumanth{greeting}</h1>
            <button onClick={greetingHandler}>Greet User</button>
        </>
    );
};

export default ShowGreeting;
