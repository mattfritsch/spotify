import React from 'react';
import './index.css';
import {ConfigProvider, theme} from "antd";
import {Provider} from "react-redux";
import store from "./store";
import Spotify from "./Spotify";
import {Route, Routes} from "react-router-dom";

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
                    colorTextPlaceholder: '#EEEEEE',
                    colorIcon: '#00b96b'
                },
            }}
            >
                <Provider store={store}>
                    <Routes>
                        <Route path={""} element={<Spotify/>}/>
                        <Route path={"/playlist/:playlistTitle"} element={<Spotify/>}/>
                    </Routes>
                </Provider>
            </ConfigProvider>
        </>
    );
};

export default App;
