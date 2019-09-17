import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../constans/routes";

export class Header extends React.Component {
    render() {
        return (
            <div>
                {routes.map((route) =>
                    <Link key={route.path} to={route.path}>{route.label}</Link>
                )}
            </div>
        )
    }
};