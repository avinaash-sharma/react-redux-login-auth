import React from 'react'
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import { selectUser } from './features/userSlice';
import {useSelector} from 'react-redux';

const App = () => {
    const user = useSelector(selectUser);
    return (
        <div style={{flex:1, display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
            {user ? <Welcome /> : <Login />}
        </div>
    )
}

export default App
