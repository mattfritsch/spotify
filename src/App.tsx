import React from 'react';
import './index.css';
import {ConfigProvider, theme} from "antd";
import {Provider} from "react-redux";
import store from "./store";
import Home from "./Home";

const App = () => {
    return (
        <>
            <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorPrimary: '#00b96b',
                    colorBgContainer: '#000000',
                    colorText: '#EEEEEE',
                },
            }}
            >
                <Provider store={store}>
                    <Home />
                </Provider>
            </ConfigProvider>
        </>
    );
};

export default App;
