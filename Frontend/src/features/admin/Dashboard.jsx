import React, { useState } from 'react';
import UserManagement from './UserManagement';
import FlatManagement from './FlatManagement';
import './Admin.css';

function Dashboard() {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div className="App">
          <nav className="sidebar">
            <ul>
              <li className={activeTab === 'home' ? 'active' : ''}>
                <button onClick={() => setActiveTab('home')}>Home</button>
              </li>
              <li className={activeTab === 'users' ? 'active' : ''}>
                <button onClick={() => setActiveTab('users')}>Users</button>
              </li>
              <li className={activeTab === 'flats' ? 'active' : ''}>
                <button onClick={() => setActiveTab('flats')}>Flats</button>
              </li>
            </ul>
          </nav>
          <div className="content">
            {activeTab === 'home' && (
              <div className="home-screen">
                <h1>Welcome, Admin!</h1>
                <p>
                  This is your dashboard where you can manage users and flats. 
                  Use the navigation on the left to switch between different management sections.
                </p>
                <p>Here are some quick stats:</p>
                <ul>
                  <li>Total Users: 123</li>
                  <li>Total Flats: 45</li>
                  <li>New Registrations Today: 5</li>
                </ul>
              </div>
            )}
            {activeTab === 'users' && <UserManagement />}
            {activeTab === 'flats' && <FlatManagement />}
          </div>
        </div>
      );
  }
export default Dashboard;
