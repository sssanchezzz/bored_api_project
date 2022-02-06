import { Provider } from 'react-redux';
import store from '../store';
import MainPage from '../MainPage';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
    let navigate = useNavigate();

    useEffect(() => {
        navigate('/random');
    }, []);

    return (
        <Provider store={store}>
            <MainPage />
        </Provider>
    );
}

export default App;
