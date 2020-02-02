import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionHome } from "./action";
import { Button } from "antd";
import "./style.less";

const Home: FC<any> = function (props) {
    const homeState = useSelector((state: any) => state.home);
    const dispatch = useDispatch();
    const linkClick = (e: any) => {
        props.history.push("/one");
    };
    useEffect(() => {
        // actionHome()(dispatch);
    }, []);
    return (
        <div>
            <Button onClick={linkClick}>去One</Button>
        </div>
    );
};
export default Home;
