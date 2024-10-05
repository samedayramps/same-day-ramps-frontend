// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import RentalRequestsList from './components/pages/RentalRequestsList';
import RentalRequestDetails from './components/pages/RentalRequestDetails';
import JobsList from './components/pages/JobsList';
import JobDetails from './components/pages/JobDetails';
import SettingsPage from './components/pages/SettingsPage';
import ErrorNotification from './components/common/ErrorNotification';
import JobCreationWizard from './components/jobs/JobCreationWizard';
import MainLayout from './components/layout/MainLayout';
import AcceptQuotePage from './components/pages/AcceptQuotePage';
import { CssBaseline } from '@mui/material';

const App: React.FC = () => (
  <Router>
    <CssBaseline />
    <ErrorNotification />
    <Routes>
      <Route path="/jobs/:jobId/accept-quote" element={<AcceptQuotePage />} />
      <Route element={<MainLayout><Outlet /></MainLayout>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/rental-requests" element={<RentalRequestsList />} />
        <Route path="/rental-request/:id" element={<RentalRequestDetails />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/jobs/new" element={<JobCreationWizard />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/jobs/edit/:id" element={<JobCreationWizard />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  </Router>
);

export default App;