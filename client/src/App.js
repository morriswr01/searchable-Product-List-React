// Modules
import React from 'react';
import { Provider } from 'react-redux';

// Store import
import store from './store';

// Check when app launches
import { loadUser } from './actions/authActions'

// Component Imports
import SearchableProductTable from './containers/SearchableProductTable';
import NavBar from './containers/NavBar';

// CSS
import './css/App.css';

class App extends React.Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <NavBar />
                    <SearchableProductTable />
                </div>
            </Provider>
        );
    }
}

export default App;
