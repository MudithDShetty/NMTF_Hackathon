import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeDashboard from './user-dashB';

<Route path="/dashboard" element={<HomeDashboard />} />;

export default function Login() {
  return (
    <div>
      <HomeDashboard />
    </div>
  );
}
