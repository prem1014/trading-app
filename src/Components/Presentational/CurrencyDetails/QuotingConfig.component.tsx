
import React from 'react';
import moment from 'moment';

const QuotingConfig: React.FC<any> = (props: any) => {
    return (
        <div className="row">
            <div className="col-12">
                <h6 className="text-center">
                    {props.text}
                </h6>
                {
                    props.items?.length > 0 &&
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Buy Qty</th>
                                <th>Sell Qty</th>
                                <th>Price Decs</th>
                                <th>Time Delay</th>
                                <th>Auto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.items?.map((it: any) => (

                                    <tr>
                                        <td>{it.quantity}</td>
                                        <td>{it.price}</td>
                                        <td>{moment(it.created_at).format('DD-MM-YYYY')}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default QuotingConfig;