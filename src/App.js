import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeTheme from './components/ChangeTheme';

function App() {
	return (
		<div className='App'>
			<Profile />
			<Login />
			<ChangeTheme />
		</div>
	);
}

export default App;
