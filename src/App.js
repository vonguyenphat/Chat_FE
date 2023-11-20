import {BrowserRouter} from "react-router-dom";
import AppRouter from './router/AppRouter'
import 'react-toastify/dist/ReactToastify.css';
import Toast from './components/Toast'

function App() {
    return (
        <>
            <Toast/>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </>
    );
}

export default App;
