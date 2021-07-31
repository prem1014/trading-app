import React from 'react';
import AppRoute from './Components/Routes/Routes.component';

import './App.scss';

const App: React.FC<any> = (props: any) => {
    return (
        <div className="container-fluid"><AppRoute /></div>
    )
}

export default App;