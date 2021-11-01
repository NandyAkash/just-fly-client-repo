import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddNewPackage from './Pages/AddNewPackage/AddNewPackage';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';
import Orders from './Pages/Orders/Orders';
import Packages from './Pages/Packages/Packages';
import SinglePackage from './Pages/SignlePackage/SinglePackage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/packages'>
              <Packages></Packages>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/orders'>
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path='/manageorder'>
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <PrivateRoute path='/addpackage'>
              <AddNewPackage></AddNewPackage>
            </PrivateRoute>
            <PrivateRoute path='/packages/:id'>
              <SinglePackage></SinglePackage>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
