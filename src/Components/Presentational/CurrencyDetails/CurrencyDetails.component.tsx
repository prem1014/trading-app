
import React, { useEffect, useState } from 'react';
import AppService from '../../Service/App-service';
import Order from './Order';
import QuotingConfig from './QuotingConfig.component';

const CurrencyDetails: React.FC<any> = (props: any) => {
    const itm: Array<any> = [];
    const [orders, setOrders] = useState(itm);

    const listOfCurrency: Array<any> = [
        {
            id: 'btc-eur',
            name: 'BTC EUR'
        },
        {
            id: 'eth-eur',
            name: 'ETH EUR'
        },
        {
            id: 'ltc-eur',
            name: 'LTC EUR'
        },
        {
            id: 'xrp-eur',
            name: 'XRP EUR'
        }
    ]

    const getCurrencyById = (currency: Array<any>) => {
        AppService.getOrdersByCurrency(currency)
            .then(res => {
                let items: Array<any> = [];
                res?.forEach((it: any) => {
                    it.data?.forEach((d: any) => items.push(d))
                })
                setOrders(items)
            })
            .catch(err => {

            })
    }

    useEffect(() => {
        getCurrencyById(listOfCurrency);
    }, [])

    return (
        <div className="row">
            {
                listOfCurrency.map((currency: any) => (
                    <div key={currency.id} className="col-12 mb-20">
                        <div className="app-box-shadow" style={{ padding: '10px' }}>
                            <div className="row">
                                <div className="col-6">
                                    <h5>{currency.name}</h5>
                                </div>
                                <div className="col-6">
                                    <button style={{ float: 'right' }} className="btn btn-success">Start</button>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-3">
                                    <div className="row">
                                        <div className="col-6">
                                        <h6>Bot Status: </h6>
                                        </div>
                                        <div className="col-6">
                                            <div className="bot-status" style={{color: currency.botStatus ? '#198754' : '#da0404'}}></div>
                                        </div>
                                    </div>
                                    <h6>First Position: </h6>
                                    <h6>First Position: </h6>
                                    <h6>Average: </h6>
                                    <h6>Pnl: </h6>
                                </div>
                                <div className="col-9">
                                    <div className="row">
                                        <div className="col-6">
                                        <h5 className="text-center">Current Quoting Config</h5>
                                            <hr />
                                            <QuotingConfig
                                                items={orders.filter((it: any) => (it.market === currency.id && it.side === 'buy'))}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <h5 className="text-center">Open Orders</h5>
                                            <hr />
                                            <div className="row">
                                                <div className="col-6">
                                                    <Order
                                                        text="Buy"
                                                        items={orders.filter((it: any) => (it.market === currency.id && it.side === 'buy'))}
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <Order
                                                        text="Sell"
                                                        items={orders.filter((it: any) => (it.market === currency.id && it.side === 'sell'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CurrencyDetails;