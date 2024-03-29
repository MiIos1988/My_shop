import React from "react";
import { Link } from "react-router-dom";

type HeaderImageComponentProps = {
    title: string,
    link: string
}

const HeaderImageComponent = (props: HeaderImageComponentProps) => {
    const { title, link } = props;

    return (
        <div className="container-fluid my-4 headerImg">
            <div className="container">
                <p>{title}</p>
                <Link to={"/"}>Home</Link> / <Link to={`/${link}`}>Shop</Link>
            </div>
        </div>
    )

}

export default HeaderImageComponent