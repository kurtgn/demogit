/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


const b = 10/0;


const AppRendererFunc = () => App;
AppRegistry.registerComponent(appName, AppRendererFunc);
