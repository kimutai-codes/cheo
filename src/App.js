import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';
import Login from './pages/Login';
import AddDay from './pages/AddDay';
import AddFeed from './pages/AddFeed';
import AddFeeder from './pages/AddFeeder';
import Feeds from './pages/Feeds';
import Feeders from './pages/Feeders';
import DayChart from './pages/DayChart';
import { useLocation } from 'react-router-dom';
import AdminLogin from './pages/Admin';
import { LoginContext } from './Helper/Context';
import { useState } from 'react';
import Home from './pages/Home';

function App() {
	const [admin, setAdmin] = useState(false);
	return (
		<LoginContext.Provider className='App' value={{ admin, setAdmin }}>
			<Router>
				{/* <Layout /> */}
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>

					<Route exact path='/login'>
						<Login />
					</Route>

					<Route exact path='/admin'>
						<AdminLogin />
					</Route>

					<Route exact path='/daychart'>
						<DayChart />
					</Route>

					<Route exact path='/today'>
						<AddDay />
					</Route>

					<Route exact path='/feeds'>
						<Feeds />
					</Route>

					<Route exact path='/addfeed'>
						<AddFeed />
					</Route>

					<Route exact path='/feeders'>
						<Feeders />
					</Route>

					<Route exact path='/addfeeder'>
						<AddFeeder />
					</Route>
				</Switch>
			</Router>
		</LoginContext.Provider>
	);
}

export default App;
