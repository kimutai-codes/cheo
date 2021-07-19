import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';
import Login from './pages/Login';
import AddDay from './pages/AddDay';
import AddFeed from './pages/AddFeed';
import AddFeeder from './pages/AddFeeder';
import Feeds from './pages/Feeds';

function App() {
	return (
		<div className='App'>
			<Router>
				<Layout />
				<Switch>
					<Route exact path='/'>
						<Login />
					</Route>

					<Route exact path='/days'>
						<AddDay />
					</Route>

					<Route exact path='/feeds'>
            <Feeds/>
					</Route>

					<Route exact path='/addfeed'>
						<AddFeed />
					</Route>

					<Route exact path='/addfeeder'>
						<AddFeeder />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
