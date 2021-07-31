import React, { useState, useEffect } from 'react';

import './Home.component.scss';
import { useHistory } from 'react-router-dom';

import AppService from '../../Service/App-service';


import Modal from '../../Shared/Modal/Modal.component';
import Tiles from '../Tiles/Tiles.component';
import CurrencyDetails from '../CurrencyDetails/CurrencyDetails.component';

const Home = () => {
    const tilesItems = [
        {
            name: 'Balances',
            value: [],
            color: 'white',
            className: 'col-lg-4 col-12'
        },
        {
            name: 'B2C2 Streams',
            value: [],
            color: '#1e74d9',
            className: 'col-lg-2 col-12'
        },
        {
            name: 'Phases',
            value: [],
            color: '#ffc107',
            className: 'col-lg-2 col-12'
        },
        {
            name: 'Orders Socket',
            value: [],
            color: '#dd4b39',
            className: 'col-lg-2 col-12'
        },
        {
            name: 'Trade Socket',
            value: [],
            color: '#11b9e6',
            className: 'col-lg-2 col-12'
        }
    ]

    const [tilesData, setTilesData] = useState(tilesItems);
    const getBalances = () => {
        AppService.getBalances()
        .then((res: any) => {
            let data = [...tilesData];
            data[0].value = res?.data;
            setTilesData(data);
        })
        .catch( err => {

        })
    }

    useEffect( () => {
        getBalances();
    }, [])

    return (
        <div className="home">
            <Tiles
                items={tilesData}
            />
            <CurrencyDetails />
        </div>
    )
}

export default Home;