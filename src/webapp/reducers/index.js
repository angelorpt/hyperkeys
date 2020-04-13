import { combineReducers } from 'redux';
import macros from './macros';
import metadatas from './metadatas';

const App = combineReducers({
    macros,
    metadatas,
});

export default App;
