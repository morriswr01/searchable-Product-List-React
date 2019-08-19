// Modules
import React from 'react';
import { Provider } from 'react-redux';

// Store import
import store from './store';

// Component Imports
import SearchableProductTable from './containers/SearchableProductTable';
import NavBar from './components/NavBar';

// CSS
import './css/App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <NavBar />
                <SearchableProductTable />
            </div>
        </Provider>
    );
}

export default App;
