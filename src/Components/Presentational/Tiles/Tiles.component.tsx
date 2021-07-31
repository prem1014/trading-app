import React from 'react';

const Tiles: React.FC<any> = (props: any) => {
    return (
        <div className="row mb-20">
            {
                props.items?.map((item: any) => (
                    <div className={item.className}>
                        <div className="tile app-box-shadow" style={{ backgroundColor: item.color ? item.color : '', padding: '10px' }}>
                            <h5>{item.name}</h5>
                            {
                                item.name === 'Balances' &&
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Currency</th>
                                            <th>Amount</th>
                                            <th>Locked</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            item.value?.map((it: any) => (

                                                <tr>
                                                    <td>{it.asset_id}</td>
                                                    <td>{it.available}</td>
                                                    <td>{it.locked}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Tiles;