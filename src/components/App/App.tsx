import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../HomePage';
import TodoPage from '../TodoPage';
import LoginPage from '../LoginPage';
import SignupPage from '../SignupPage';
import PrivateRoute from '../PrivateRoute';

// import TodoList from '../TodoList';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/todospace"
            element={
              <PrivateRoute>
                <TodoPage />
              </PrivateRoute>
            }
          />
          
          {/* --- */}
          {/* <Route element={<PrivateRoute />}>
            <Route path="/todospace" element={<TodoPage />}>
              <Route index path=":id" element={<TodoList />} />
            </Route>
          </Route> */}

          <Route path="*" element={<h1>No Match!</h1>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
