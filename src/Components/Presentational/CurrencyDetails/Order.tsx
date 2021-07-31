
import React from 'react';
import moment from 'moment';

const Order: React.FC<any> = (props: any) => {
    return (
        <div className="row">
            <div className="col-12">
                <h6 className="text-center">
                    {props.text ? props.text : 'Orders'}(<span style={{ color: '#20c997' }}>{props.items?.length}</span>)
                </h6>
                {
                    props.items?.length > 0 &&
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Time</th>
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

export default Order;