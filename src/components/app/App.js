import { Provider } from 'react-redux';
import store from '../store';
import MainPage from '../MainPage';
import { Router, Routes } from 'react-router-dom';
import '../../style/style.css';
function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <MainPage />
            </div>
        </Provider>
    );
}

export default App;
