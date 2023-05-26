import React from "react";
import {useParams} from "react-router-dom";

function Home() {
    // 👇️ get ID from url
    const params = useParams();
    const id = params.id.split('-').slice(-1).pop();
    window.location.href = "http://likeshowbiz.com/?p=" + id;


    return <div/>;
}

export default Home;