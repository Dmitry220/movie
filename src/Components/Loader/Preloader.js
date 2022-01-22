import React from "react";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import style from './preloader.module.css'
export const Preloader = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 156 }} spin />;
    return (
        <div className={style.preloader}>
            <Spin indicator={antIcon} />
        </div>

    );
};
