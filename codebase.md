# tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}

```

# package.json

```json
{
  "name": "same-day-ramps-frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@mui/icons-material": "^6.1.1",
    "@mui/material": "^6.1.1",
    "@mui/x-date-pickers": "^7.18.0",
    "@reduxjs/toolkit": "^2.2.7",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.111",
    "@types/react": "^18.3.9",
    "@types/react-dom": "^18.3.0",
    "axios": "^1.7.7",
    "date-fns": "^2.29.2",
    "dayjs": "^1.11.13",
    "formik": "^2.4.6",
    "ionicons": "^7.4.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.26.2",
    "react-scripts": "5.0.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4",
    "yup": "^1.4.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/react": "^16.0.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/google.maps": "^3.58.1",
    "eslint": "^8.57.1",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-react": "^7.36.1",
    "jest": "^27.5.1",
    "prettier": "^3.3.3"
  }
}

```

# frontend-codebase.md

```md
# tsconfig.json

\`\`\`json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}

\`\`\`

# package.json

\`\`\`json
{
  "name": "same-day-ramps-frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@mui/icons-material": "^6.1.1",
    "@mui/material": "^6.1.1",
    "@mui/x-date-pickers": "^7.18.0",
    "@reduxjs/toolkit": "^2.2.7",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.111",
    "@types/react": "^18.3.9",
    "@types/react-dom": "^18.3.0",
    "axios": "^1.7.7",
    "date-fns": "^2.29.2",
    "dayjs": "^1.11.13",
    "formik": "^2.4.6",
    "ionicons": "^7.4.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.26.2",
    "react-scripts": "5.0.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4",
    "yup": "^1.4.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/react": "^16.0.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/google.maps": "^3.58.1",
    "eslint": "^8.57.1",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-react": "^7.36.1",
    "jest": "^27.5.1",
    "prettier": "^3.3.3"
  }
}

\`\`\`

# README.md

\`\`\`md
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

\`\`\`

# .gitignore

\`\`\`
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

\`\`\`

# src/theme.ts

\`\`\`ts
// src/theme.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007AFF', // iOS blue color
    },
    background: {
      default: '#F9F9F9', // Light gray background
    },
    text: {
      primary: '#000000',
      secondary: '#8E8E93', // iOS secondary text color
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'SF Pro Text',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h6: {
      fontWeight: 600,
      fontSize: '17px',
      lineHeight: '22px',
    },
    body1: {
      fontSize: '17px',
      lineHeight: '22px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#F9F9F9',
          color: '#000000',
          boxShadow: 'none',
          borderBottom: '1px solid #C6C6C8',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '44px', // iOS Navbar height
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // iOS button style
        },
        contained: {
          boxShadow: 'none',
          backgroundColor: '#007AFF',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#005BB5',
          },
        },
        outlined: {
          borderColor: '#007AFF',
          color: '#007AFF',
          '&:hover': {
            borderColor: '#005BB5',
            color: '#005BB5',
            backgroundColor: 'rgba(0, 122, 255, 0.1)',
          },
        },
      },
    },
  },
});

export default theme;
\`\`\`

# src/setupTests.ts

\`\`\`ts
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

\`\`\`

# src/reportWebVitals.ts

\`\`\`ts
import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

\`\`\`

# src/react-app-env.d.ts

\`\`\`ts
/// <reference types="react-scripts" />

\`\`\`

# src/logo.svg

This is a file of the type: SVG Image

# src/index.tsx

\`\`\`tsx
// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import store from './stores/store';
import { Provider } from 'react-redux';
import { ErrorProvider } from './contexts/ErrorContext';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { CssBaseline } from '@mui/material';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Create root using ReactDOM.createRoot
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ErrorProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Resets default styling */}
            <App />
          </ThemeProvider>
        </ErrorProvider>
      </Provider>
    </React.StrictMode>
  );
}
\`\`\`

# src/index.css

\`\`\`css
/* src/index.css */

body {
  margin: 0;
  background-color: #F9F9F9;
}
\`\`\`

# src/App.tsx

\`\`\`tsx
// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import RentalRequestsList from './components/pages/RentalRequestsList';
import RentalRequestDetails from './components/pages/RentalRequestDetails';
import JobsList from './components/pages/JobsList';
import JobDetails from './components/pages/JobDetails';
import SettingsPage from './components/pages/SettingsPage';
import ErrorNotification from './components/common/ErrorNotification';
import JobCreationWizard from './components/jobs/JobCreationWizard';
import MainLayout from './components/layout/MainLayout';
import { CssBaseline } from '@mui/material';

const App: React.FC = () => (
  <Router>
    <CssBaseline />
    <ErrorNotification />
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rental-requests" element={<RentalRequestsList />} />
        <Route path="/rental-requests/:id" element={<RentalRequestDetails />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/jobs/new" element={<JobCreationWizard />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/jobs/edit/:id" element={<JobCreationWizard />} /> {/* Added this line */}
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </MainLayout>
  </Router>
);

export default App;
\`\`\`

# src/App.test.tsx

\`\`\`tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

\`\`\`

# src/App.css

\`\`\`css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

\`\`\`

# public/robots.txt

\`\`\`txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

\`\`\`

# public/manifest.json

\`\`\`json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

\`\`\`

# public/logo512.png

This is a binary file of the type: Image

# public/logo192.png

This is a binary file of the type: Image

# public/index.html

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script>
      const apiKey = process.env.REACT_APP_MAP_API_KEY;
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    </script>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

\`\`\`

# public/favicon.ico

This is a binary file of the type: Binary

# src/utils/loadGoogleMapsApi.ts

\`\`\`ts
export const loadGoogleMapsApi = (apiKey: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = (error) => reject(error);
    document.head.appendChild(script);
  });
};
\`\`\`

# src/utils/formatDate.ts

\`\`\`ts
export const formatDate = (dateString: string, format: string = 'MM/DD/YYYY'): string => {
    const date = new Date(dateString);
    // Use date-fns or moment.js for formatting
    return date.toLocaleDateString(); // Simplified
  };
\`\`\`

# src/types/RentalRequest.ts

\`\`\`ts
// src/types/RentalRequest.ts
export enum SalesStage {
    RENTAL_REQUEST = 'RENTAL_REQUEST',
    RENTAL_REQUEST_RECEIVED = 'RENTAL_REQUEST_RECEIVED',
    // Add other stages as needed
  }
  
  export interface CustomerInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }
  
  export interface RampDetails {
    knowRampLength: boolean;
    rampLength?: number;
    knowRentalDuration: boolean;
    rentalDuration?: number;
    installTimeframe: string;
    mobilityAids: string[];
  }
  
  export interface RentalRequest {
    _id: string;
    customerInfo: CustomerInfo;
    rampDetails: RampDetails;
    installAddress: string;
    status: 'pending' | 'approved' | 'rejected' | 'archived';
    salesStage: SalesStage;
    customerId?: string;
    quoteId?: string;
    jobId?: string;
    createdAt: string;
    updatedAt: string;
  }
\`\`\`

# src/types/PricingVariables.ts

\`\`\`ts
// src/types/PricingVariables.ts
export interface PricingVariables {
    warehouseAddress: string;
    baseDeliveryFee: number;
    deliveryFeePerMile: number;
    baseInstallFee: number;
    installFeePerComponent: number;
    rentalRatePerFt: number;
  }
\`\`\`

# src/types/PricingCalculation.ts

\`\`\`ts
// src/types/PricingCalculation.ts
export interface PricingCalculation {
    deliveryFee: number;
    installFee: number;
    monthlyRate: number;
    discount: number;
    totalUpfront: number;
  }
\`\`\`

# src/types/Job.ts

\`\`\`ts
// src/types/Job.ts

export enum JobStage {
  REQUESTED = 'REQUESTED',
  CONTACTED = 'CONTACTED',
  QUOTE_SENT = 'QUOTE_SENT',
  QUOTE_ACCEPTED = 'QUOTE_ACCEPTED',
  PAID = 'PAID',
  SCHEDULED = 'SCHEDULED',
  INSTALLED = 'INSTALLED',
  REMOVAL_SCHEDULED = 'REMOVAL_SCHEDULED',
  REMOVED = 'REMOVED',
  COMPLETED = 'COMPLETED'
}

export interface RampComponent {
  type: 'ramp' | 'landing';
  size: string;
  quantity: number;
  width?: number; // Optional width for landings
}

export interface RampConfiguration {
  components: RampComponent[];
  totalLength: number;
  rentalDuration?: number; // Make rentalDuration optional
}

export interface Schedule {
  date: string | null; // Changed from Date to string
  timeSlot: string;
}

export interface Job {
  _id?: string; // Make _id optional
  stage: JobStage;
  customerInfo: CustomerInfo;
  rampConfiguration: RampConfiguration;
  pricing: {
    deliveryFee: number;
    installFee: number;
    monthlyRate: number;
    upfrontFee: number;
  };
  installationSchedule?: Schedule;
  removalSchedule?: Schedule;
  communicationLog?: Array<{
    date: string;
    type: 'email' | 'phone' | 'in-person' | 'system';
    notes: string;
  }>;
  createdAt?: string;
  updatedAt?: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  installAddress: string;
  mobilityAids?: string[];
  notes?: string;
}

export interface Pricing {
  deliveryFee: number;
  installFee: number;
  monthlyRate: number;
  upfrontFee: number;
}
\`\`\`

# src/stores/store.ts

\`\`\`ts
// src/stores/store.ts
import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobsSlice';
import rentalRequestsReducer from './rentalRequestsSlice';
import pricingVariablesReducer from './pricingVariablesSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    rentalRequests: rentalRequestsReducer,
    pricingVariables: pricingVariablesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

\`\`\`

# src/stores/rentalRequestsSlice.ts

\`\`\`ts
// src/stores/rentalRequestsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RentalRequest } from '../types/RentalRequest';
import { rentalRequestsApi } from '../services/api';

interface RentalRequestsState {
  rentalRequests: RentalRequest[];
  loading: boolean;
  error: string | null;
}

const initialState: RentalRequestsState = {
  rentalRequests: [],
  loading: false,
  error: null,
};

export const fetchRentalRequests = createAsyncThunk('rentalRequests/fetchRentalRequests', async () => {
  const response = await rentalRequestsApi.getAll();
  return response.data;
});

// Other async thunks: createRentalRequest, archiveRentalRequest, deleteRentalRequest, etc.

const rentalRequestsSlice = createSlice({
  name: 'rentalRequests',
  initialState,
  reducers: {
    // Define synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRentalRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRentalRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.rentalRequests = action.payload;
      })
      .addCase(fetchRentalRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch rental requests';
      });
    // Handle other actions
  },
});

export default rentalRequestsSlice.reducer;
\`\`\`

# src/stores/pricingVariablesSlice.ts

\`\`\`ts
// src/stores/pricingVariablesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PricingVariables } from '../types/PricingVariables';
import { pricingVariablesApi } from '../services/api';

interface PricingVariablesState {
  variables: PricingVariables | null;
  loading: boolean;
  error: string | null;
}

const initialState: PricingVariablesState = {
  variables: null,
  loading: false,
  error: null,
};

export const fetchPricingVariables = createAsyncThunk('pricingVariables/fetchPricingVariables', async () => {
  const response = await pricingVariablesApi.get();
  return response.data;
});

export const updatePricingVariables = createAsyncThunk(
  'pricingVariables/updatePricingVariables',
  async (variables: PricingVariables) => {
    const response = await pricingVariablesApi.update(variables);
    return response.data;
  }
);

const pricingVariablesSlice = createSlice({
  name: 'pricingVariables',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPricingVariables.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPricingVariables.fulfilled, (state, action) => {
        state.loading = false;
        state.variables = action.payload;
      })
      .addCase(fetchPricingVariables.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch pricing variables';
      })
      .addCase(updatePricingVariables.fulfilled, (state, action) => {
        state.variables = action.payload;
      });
  },
});

export default pricingVariablesSlice.reducer;
\`\`\`

# src/stores/jobsSlice.ts

\`\`\`ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { jobsApi, calculatePricing } from '../services/api';
import { Job, JobStage } from '../types/Job';
import { RootState } from './store';
import { PricingCalculation } from '../types/PricingCalculation';
// Remove the unused import
// import { AxiosError } from 'axios';

interface JobsState {
  jobs: Job[];
  currentJob: Job | null;
  isLoading: boolean;
  error: string | null;
  installAddress?: string;
}

const initialState: JobsState = {
  jobs: [],
  currentJob: null,
  isLoading: false,
  error: null,
  installAddress: '',
};

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await jobsApi.getAll();
  return response.data;
});

export const fetchJob = createAsyncThunk('jobs/fetchJob', async (id: string) => {
  const response = await jobsApi.getById(id);
  return response.data;
});

export const createJob = createAsyncThunk(
  'jobs/createJob',
  async (job: Job, { rejectWithValue }) => {
    try {
      const response = await jobsApi.create(job);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

export const updateJob = createAsyncThunk(
  'jobs/updateJob',
  async (job: Partial<Job>, { getState }) => {
    const state = getState() as RootState;
    const currentJob = state.jobs.currentJob;
    if (!currentJob) throw new Error('No current job');
    const updatedJob = { ...currentJob, ...job };
    const response = await jobsApi.update(updatedJob._id!, updatedJob);
    return response.data;
  }
);

export const updateCurrentJob = createAsyncThunk<Job, Partial<Job>, { state: RootState }>(
  'jobs/updateCurrentJob',
  async (jobData, { getState }) => {
    const state = getState();
    const currentJob = state.jobs.currentJob;
    if (!currentJob) throw new Error('No current job');
    return { ...currentJob, ...jobData };
  }
);

export const recalculatePricing = createAsyncThunk<PricingCalculation, void, { state: RootState }>(
  'jobs/recalculatePricing',
  async (_, { getState }) => {
    const state = getState();
    const currentJob = state.jobs.currentJob;
    if (!currentJob) throw new Error('No current job');
    const response = await calculatePricing(
      currentJob.rampConfiguration,
      currentJob.customerInfo.installAddress,
      process.env.REACT_APP_WAREHOUSE_ADDRESS || ''
    );
    return response.data;
  }
);

export const updateJobStage = createAsyncThunk(
  'jobs/updateJobStage',
  async ({ id, stage }: { id: string; stage: JobStage }) => {
    const response = await jobsApi.updateStage(id, stage);
    return response.data;
  }
);

export const deleteJob = createAsyncThunk('jobs/deleteJob', async (id: string) => {
  await jobsApi.delete(id);
  return id;
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setInstallAddress(state, action: PayloadAction<string>) {
      state.installAddress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      })
      .addCase(fetchJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentJob = action.payload;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.currentJob = action.payload;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.currentJob = action.payload;
      })
      .addCase(updateCurrentJob.fulfilled, (state, action) => {
        state.currentJob = action.payload;
      })
      .addCase(recalculatePricing.fulfilled, (state, action) => {
        if (state.currentJob) {
          state.currentJob.pricing = {
            ...state.currentJob.pricing,
            ...action.payload,
          };
        }
      })
      .addCase(recalculatePricing.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to recalculate pricing';
      })
      .addCase(updateJobStage.fulfilled, (state, action) => {
        if (state.currentJob) {
          state.currentJob.stage = action.payload.stage;
        }
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter(job => job._id !== action.payload);
        state.currentJob = null;
      });
  },
});

export const { setInstallAddress } = jobsSlice.actions;

export default jobsSlice.reducer;
\`\`\`

# src/services/emailService.ts

\`\`\`ts
// src/services/emailService.ts
import api from './api';

interface EmailOptions {
  to: string;
  subject: string;
  body: string;
}

export const sendEmail = async ({ to, subject, body }: EmailOptions) => {
  try {
    await api.post('/email/send', { to, subject, body });
  } catch (error) {
    throw new Error('Failed to send email');
  }
};

export const sendQuoteEmail = async (jobId: string, email: string) => {
  const quoteLink = `http://your-frontend.com/jobs/${jobId}/quote`;
  const subject = 'Your Ramp Rental Quote';
  const body = `
    <p>Dear Customer,</p>
    <p>Please review your ramp rental quote <a href="${quoteLink}">here</a>.</p>
    <p>Thank you!</p>
  `;
  await sendEmail({ to: email, subject, body });
};
\`\`\`

# src/services/api.ts

\`\`\`ts
// src/services/api.ts

import axios from 'axios';
import { Job, JobStage } from '../types/Job';
import { RentalRequest } from '../types/RentalRequest';
import { PricingVariables } from '../types/PricingVariables';
import { PricingCalculation } from '../types/PricingCalculation';
import { RampConfiguration } from '../types/Job';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const jobsApi = {
  getAll: () => api.get<Job[]>('/jobs'),
  getById: (id: string) => api.get<Job>(`/jobs/${id}`),
  create: (job: Partial<Job>) => api.post<Job>('/jobs', job),
  update: (id: string, data: Partial<Job>) => {
    console.log('Sending job update to backend:', { id, data });
    return api.put<Job>(`/jobs/${id}`, data).then(response => {
      console.log('Received response from backend:', response.data);
      return response;
    });
  },
  delete: (id: string) => api.delete(`/jobs/${id}`),
  sendQuote: (id: string) => api.post(`/jobs/${id}/send-quote`),
  updateStage: (id: string, stage: JobStage) => api.put(`/jobs/${id}/stage`, { stage }),
  calculatePricing: (rampConfiguration: RampConfiguration, installAddress: string, warehouseAddress: string) =>
    api.post<PricingCalculation>('/jobs/calculate-pricing', { rampConfiguration, installAddress, warehouseAddress }),
};

export const rentalRequestsApi = {
  getAll: () => api.get<RentalRequest[]>('/rental-requests'),
  getById: (id: string) => api.get<RentalRequest>(`/rental-requests/${id}`),
  create: (rentalRequest: Omit<RentalRequest, '_id' | 'status' | 'salesStage' | 'createdAt' | 'updatedAt'>) =>
    api.post<RentalRequest>('/rental-requests', rentalRequest),
  archive: (id: string) => api.post(`/rental-requests/${id}/archive`),
  delete: (id: string) => api.delete(`/rental-requests/${id}`),
  // New method to create a job from a rental request
  createJobFromRentalRequest: (id: string) => api.post<Job>(`/rental-requests/${id}/create-job`),
};

export const pricingVariablesApi = {
  get: () => api.get<PricingVariables>('/pricing-variables'),
  update: (variables: PricingVariables) => api.put<PricingVariables>('/pricing-variables', variables),
};

export const calculatePricing = (
  rampConfiguration: RampConfiguration,
  installAddress: string,
  warehouseAddress: string
) =>
  api.post<PricingCalculation>('/jobs/calculate-pricing', {
    rampConfiguration,
    installAddress,
    warehouseAddress,
  });

export default api;
\`\`\`

# src/hooks/usePricingCalculator.ts

\`\`\`ts
// src/hooks/usePricingCalculator.ts

import { useEffect, useState, useCallback } from 'react';
import { RampComponent } from '../types/Job';
import { PricingVariables } from '../types/PricingVariables';
import { pricingVariablesApi } from '../services/api';
import { loadGoogleMapsApi } from '../utils/loadGoogleMapsApi';

interface PricingDetails {
  deliveryFee: number;
  installFee: number;
  monthlyRate: number;
  upfrontFee: number; // Add this line
}

const usePricingCalculator = (components: RampComponent[], installAddress: string) => {
  const [pricingVariables, setPricingVariables] = useState<PricingVariables | null>(null);
  const [pricing, setPricing] = useState<PricingDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPricingVariables = async () => {
      try {
        const response = await pricingVariablesApi.get();
        setPricingVariables(response.data);
        console.log('Fetched Pricing Variables:', response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch pricing variables');
      } finally {
        setLoading(false);
      }
    };

    fetchPricingVariables();
  }, []);

  const calculateDeliveryFee = useCallback(async (
    origin: string,
    destination: string,
    pricingVariables: PricingVariables
  ): Promise<number> => {
    const service = new google.maps.DistanceMatrixService();
    
    return new Promise((resolve, reject) => {
      service.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [destination],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.IMPERIAL,
        },
        (response, status) => {
          if (status === google.maps.DistanceMatrixStatus.OK && response) {
            const distance = response.rows[0].elements[0].distance.value / 1609.34; // Convert meters to miles
            console.log('Calculated Distance (miles):', distance);
            const deliveryFee = pricingVariables.baseDeliveryFee + (distance * pricingVariables.deliveryFeePerMile);
            resolve(Math.round(deliveryFee)); // Round to the nearest dollar
          } else {
            reject(new Error('Failed to calculate distance'));
          }
        }
      );
    });
  }, []);

  useEffect(() => {
    if (components.length > 0 && pricingVariables && installAddress) {
      console.log('Components:', components);
      console.log('Install Address:', installAddress);

      const calculatePricingDetails = async (
        components: RampComponent[],
        pricingVariables: PricingVariables,
        installAddress: string
      ): Promise<PricingDetails> => {
        let totalLength = 0;
        let installFee = pricingVariables.baseInstallFee; // Start with base install fee
        let monthlyRate = 0;

        components.forEach((component) => {
          if (component.type === 'ramp' && component.size) {
            const length = parseInt(component.size.replace('ft', ''), 10);
            totalLength += length * component.quantity;
          }
          installFee += pricingVariables.installFeePerComponent * component.quantity;
        });

        monthlyRate = totalLength * pricingVariables.rentalRatePerFt;

        // Load Google Maps API
        await loadGoogleMapsApi(process.env.REACT_APP_MAP_API_KEY || '');

        // Calculate delivery fee using Google Distance Matrix API
        const deliveryFee = await calculateDeliveryFee(pricingVariables.warehouseAddress, installAddress, pricingVariables);

        console.log('Total Length:', totalLength);
        console.log('Install Fee:', installFee);
        console.log('Monthly Rate:', monthlyRate);
        console.log('Delivery Fee:', deliveryFee);

        // Calculate upfront fee
        const upfrontFee = deliveryFee + installFee;

        // Round all prices to the nearest dollar
        return {
          deliveryFee: Math.round(deliveryFee),
          installFee: Math.round(installFee),
          monthlyRate: Math.round(monthlyRate),
          upfrontFee: Math.round(upfrontFee) // Add this line
        };
      };

      calculatePricingDetails(components, pricingVariables, installAddress)
        .then(pricingDetails => {
          console.log('Calculated Pricing Details:', pricingDetails);
          setPricing(pricingDetails);
        })
        .catch(err => {
          console.error('Error calculating pricing details:', err);
          setError('Failed to calculate pricing details');
        });
    }
  }, [components, pricingVariables, installAddress, calculateDeliveryFee]);

  return { pricing, loading, error };
};

export default usePricingCalculator;
\`\`\`

# src/hooks/useInstallationSchedule.ts

\`\`\`ts
// src/hooks/useInstallationSchedule.ts

import { useState, useEffect } from 'react';
import { Schedule } from '../types/Job';
import dayjs from 'dayjs';

export const useInstallationSchedule = (initialSchedule?: Schedule) => {
  const [schedule, setSchedule] = useState<Schedule>({
    date: null,
    timeSlot: '',
  });

  useEffect(() => {
    if (initialSchedule) {
      setSchedule(initialSchedule);
    }
  }, [initialSchedule]);

  const updateSchedule = (field: keyof Schedule, value: any) => {
    setSchedule((prev: Schedule) => ({ ...prev, [field]: value }));
  };

  const getFormattedStartTime = () => {
    if (!schedule.date) return null;
    return dayjs(schedule.date).toDate();
  };

  const getFormattedEndTime = () => {
    const startTime = getFormattedStartTime();
    if (!startTime) return null;
    return dayjs(startTime).add(3, 'hour').toDate(); // Default duration to 3 hours
  };

  const isValidSchedule = () => {
    return schedule.date !== null && schedule.timeSlot !== '';
  };

  const getScheduleForBackend = (): Schedule => {
    return {
      ...schedule,
      date: schedule.date ? schedule.date : null,
    };
  };

  return {
    schedule,
    updateSchedule,
    getFormattedStartTime,
    getFormattedEndTime,
    isValidSchedule,
    getScheduleForBackend,
  };
};
\`\`\`

# src/hooks/index.ts

\`\`\`ts
// src/hooks/index.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../stores/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
\`\`\`

# src/contexts/ErrorContext.tsx

\`\`\`tsx
// src/contexts/ErrorContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface ErrorContextProps {
  error: string | null;
  setError: (error: string | null) => void;
}

export const ErrorContext = createContext<ErrorContextProps>({
  error: null,
  setError: () => {},
});

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [error, setError] = useState<string | null>(null);

  return <ErrorContext.Provider value={{ error, setError }}>{children}</ErrorContext.Provider>;
};
\`\`\`

# src/components/pages/SettingsPage.tsx

\`\`\`tsx
// src/components/pages/SettingsPage.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPricingVariables, updatePricingVariables } from '../../stores/pricingVariablesSlice';
import { PricingVariables } from '../../types/PricingVariables';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Typography, Button, TextField, Box } from '@mui/material';
import * as Yup from 'yup';

const PricingVariablesSchema = Yup.object().shape({
  warehouseAddress: Yup.string().required('Warehouse address is required'),
  baseDeliveryFee: Yup.number().required('Base delivery fee is required'),
  deliveryFeePerMile: Yup.number().required('Delivery fee per mile is required'),
  baseInstallFee: Yup.number().required('Base install fee is required'),
  installFeePerComponent: Yup.number().required('Install fee per component is required'),
  rentalRatePerFt: Yup.number().required('Rental rate per ft is required'),
});

const SettingsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { variables, loading } = useAppSelector((state) => state.pricingVariables);

  useEffect(() => {
    dispatch(fetchPricingVariables());
  }, [dispatch]);

  if (loading || !variables) {
    return (
      <Container className="flex justify-center items-center h-screen">
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  const handleSubmit = (values: PricingVariables) => {
    dispatch(updatePricingVariables(values));
  };

  return (
    <Container className="mt-8">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Formik
        initialValues={variables}
        validationSchema={PricingVariablesSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mb={2}>
              <Field
                name="warehouseAddress"
                as={TextField}
                label="Warehouse Address"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="warehouseAddress">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="baseDeliveryFee"
                as={TextField}
                label="Base Delivery Fee"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="baseDeliveryFee">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="deliveryFeePerMile"
                as={TextField}
                label="Delivery Fee Per Mile"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="deliveryFeePerMile">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="baseInstallFee"
                as={TextField}
                label="Base Install Fee"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="baseInstallFee">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="installFeePerComponent"
                as={TextField}
                label="Install Fee Per Component"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="installFeePerComponent">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="rentalRatePerFt"
                as={TextField}
                label="Rental Rate Per Ft"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="rentalRatePerFt">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Save Settings
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SettingsPage;
\`\`\`

# src/components/pages/RentalRequestsList.tsx

\`\`\`tsx
// src/components/pages/RentalRequestsList.tsx

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchRentalRequests } from '../../stores/rentalRequestsSlice';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
  Grid,
  Chip,
} from '@mui/material';
import { formatDate } from '../../utils/formatDate';

const RentalRequestsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rentalRequests, loading, error } = useAppSelector((state) => state.rentalRequests);

  useEffect(() => {
    dispatch(fetchRentalRequests());
  }, [dispatch]);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  // Sort rental requests by createdAt in descending order
  const sortedRequests = [...rentalRequests].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Rental Requests
      </Typography>
      <Grid container spacing={2}>
        {sortedRequests.map((request) => (
          <Grid item xs={12} sm={6} md={4} key={request._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {request.customerInfo.firstName} {request.customerInfo.lastName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {request.installAddress}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Received At: {formatDate(request.createdAt)}
                </Typography>
                <Chip
                  label={request.status}
                  color={request.status === 'pending' ? 'warning' : 'default'}
                  style={{ marginTop: '8px' }}
                />
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={`/rental-request/${request._id}`}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RentalRequestsList;
\`\`\`

# src/components/pages/RentalRequestDetails.tsx

\`\`\`tsx
// src/components/pages/RentalRequestDetails.tsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { rentalRequestsApi } from '../../services/api';
import { RentalRequest } from '../../types/RentalRequest';
import {
  Container,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Chip,
  Box,
} from '@mui/material';
import { formatDate } from '../../utils/formatDate';

const RentalRequestDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [rentalRequest, setRentalRequest] = useState<RentalRequest | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRentalRequest = async () => {
      try {
        const response = await rentalRequestsApi.getById(id!);
        setRentalRequest(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to load rental request');
      } finally {
        setIsLoading(false);
      }
    };
    fetchRentalRequest();
  }, [id]);

  const handleCreateJob = async () => {
    if (!rentalRequest) return;

    try {
      // Call the new API method to create a job from the rental request
      const response = await rentalRequestsApi.createJobFromRentalRequest(rentalRequest._id);
      // Navigate to the new job's detail page
      navigate(`/jobs/${response.data._id}`);
    } catch (err: any) {
      console.error('Failed to create job from rental request', err);
      setError(err.response?.data?.message || 'Failed to create job');
    }
  };

  if (isLoading) {
    return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error || !rentalRequest) {
    return (
      <Container style={{ marginTop: '16px' }}>
        <Typography variant="h6" color="error">
          {error || 'Rental request not found'}
        </Typography>
      </Container>
    );
  }

  return (
    <Container style={{ paddingBottom: '16px' }}>
      <Typography variant="h5" gutterBottom>
        Rental Request Details
      </Typography>

      <List disablePadding>
        {/* Customer Information */}
        <ListItem>
          <ListItemText
            primary="Customer Name"
            secondary={`${rentalRequest.customerInfo.firstName} ${rentalRequest.customerInfo.lastName}`}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Email" secondary={rentalRequest.customerInfo.email} />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Phone" secondary={rentalRequest.customerInfo.phone} />
        </ListItem>
        <Divider component="li" />

        {/* Installation Details */}
        <ListItem>
          <ListItemText primary="Install Address" secondary={rentalRequest.installAddress} />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Install Timeframe" secondary={rentalRequest.rampDetails.installTimeframe} />
        </ListItem>
        <Divider component="li" />

        {/* Ramp Details */}
        <ListItem>
          <ListItemText
            primary="Knows Ramp Length"
            secondary={rentalRequest.rampDetails.knowRampLength ? 'Yes' : 'No'}
          />
        </ListItem>
        <Divider component="li" />
        {rentalRequest.rampDetails.rampLength && (
          <>
            <ListItem>
              <ListItemText
                primary="Ramp Length"
                secondary={`${rentalRequest.rampDetails.rampLength} feet`}
              />
            </ListItem>
            <Divider component="li" />
          </>
        )}
        <ListItem>
          <ListItemText
            primary="Knows Rental Duration"
            secondary={rentalRequest.rampDetails.knowRentalDuration ? 'Yes' : 'No'}
          />
        </ListItem>
        <Divider component="li" />
        {rentalRequest.rampDetails.rentalDuration && (
          <>
            <ListItem>
              <ListItemText
                primary="Rental Duration"
                secondary={`${rentalRequest.rampDetails.rentalDuration} days`}
              />
            </ListItem>
            <Divider component="li" />
          </>
        )}

        {/* Mobility Aids */}
        <ListItem>
          <ListItemText primary="Mobility Aids" />
        </ListItem>
        <ListItem>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {rentalRequest.rampDetails.mobilityAids.map((aid, index) => (
              <Chip key={index} label={aid} />
            ))}
          </Box>
        </ListItem>
        <Divider component="li" />

        {/* Status and Sales Stage */}
        <ListItem>
          <ListItemText primary="Request Status" />
          <Chip
            label={rentalRequest.status.toUpperCase()}
            color={rentalRequest.status === 'approved' ? 'success' : 'default'}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Sales Stage" />
          <Chip label={rentalRequest.salesStage} />
        </ListItem>
        <Divider component="li" />

        {/* Dates */}
        <ListItem>
          <ListItemText primary="Created At" secondary={formatDate(rentalRequest.createdAt)} />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Last Updated" secondary={formatDate(rentalRequest.updatedAt)} />
        </ListItem>
      </List>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '16px' }}
        onClick={handleCreateJob}
        disabled={!!rentalRequest.jobId} // Disable button if job already created
      >
        {rentalRequest.jobId ? 'Job Already Created' : 'Create Job'}
      </Button>
    </Container>
  );
};

export default RentalRequestDetails;
\`\`\`

# src/components/pages/JobsList.tsx

\`\`\`tsx
import React, { useEffect, useState } from 'react';
import { jobsApi } from '../../services/api';
import { Job, JobStage } from '../../types/Job';
import {
  Container,
  Typography,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const JobsList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<JobStage | 'ALL'>('ALL');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await jobsApi.getAll();
        setJobs(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to load jobs');
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredAndSortedJobs = jobs
    .filter(job => filter === 'ALL' || job.stage === filter)
    .sort((a, b) => {
      const dateA = new Date(a.createdAt || '').getTime();
      const dateB = new Date(b.createdAt || '').getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Jobs List
      </Typography>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Filter by Stage</InputLabel>
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value as JobStage | 'ALL')}
            >
              <MenuItem value="ALL">All Stages</MenuItem>
              {Object.values(JobStage).map((stage) => (
                <MenuItem key={stage} value={stage}>
                  {stage}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Sort by Date</InputLabel>
            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            >
              <MenuItem value="asc">Oldest First</MenuItem>
              <MenuItem value="desc">Newest First</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {filteredAndSortedJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {job.customerInfo?.firstName} {job.customerInfo?.lastName}
                </Typography>
                <Typography color="textSecondary">
                  Address: {job.customerInfo?.installAddress}
                </Typography>
                <Typography color="textSecondary">
                  Created: {job.createdAt ? new Date(job.createdAt).toLocaleString() : 'N/A'}
                </Typography>
                <Typography color="textSecondary">
                  Stage: {job.stage}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => navigate(`/jobs/${job._id}`)}>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobsList;
\`\`\`

# src/components/pages/JobDetails.tsx

\`\`\`tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchJob, updateJobStage, deleteJob } from '../../stores/jobsSlice';
import { JobStage } from '../../types/Job';
import { 
  Container, Typography, Button, Paper, Grid, Box, Dialog, DialogActions, 
  DialogContent, DialogContentText, DialogTitle, CircularProgress, Snackbar 
} from '@mui/material';
import { Alert } from '@mui/material';

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentJob, isLoading, error } = useAppSelector((state) => state.jobs);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'error' | 'warning' | 'info' | 'success'>('error');

  useEffect(() => {
    if (id) {
      dispatch(fetchJob(id));
    }
  }, [dispatch, id]);

  const handleSendQuote = async () => {
    if (currentJob && currentJob._id) {
      try {
        await dispatch(updateJobStage({ id: currentJob._id, stage: JobStage.QUOTE_SENT })).unwrap();
        setSnackbarMessage('Quote sent successfully');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } catch (error) {
        setSnackbarMessage('Failed to send quote');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } else {
      setSnackbarMessage('Cannot send quote: Job ID is missing');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleEditJob = () => {
    if (currentJob && currentJob._id) {
      navigate(`/jobs/edit/${currentJob._id}`);
    } else {
      setSnackbarMessage('Cannot edit job: Job ID is missing');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleDeleteJob = async () => {
    if (currentJob && currentJob._id) {
      try {
        await dispatch(deleteJob(currentJob._id)).unwrap();
        navigate('/jobs');
      } catch (error) {
        setSnackbarMessage('Failed to delete job');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } else {
      setSnackbarMessage('Cannot delete job: Job ID is missing');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
    setDeleteDialogOpen(false);
  };

  const handleOpenDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (isLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error || !currentJob) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error || 'Job not found'}
        </Typography>
      </Container>
    );
  }

  const formatCurrency = (value: number | undefined) => 
    value !== undefined ? `$${value.toFixed(2)}` : 'N/A';

  const renderRampComponents = (components: Array<{type: string, size: string, quantity: number}>) => {
    return components.map((component, index) => (
      <Typography key={index}>
        {component.quantity} x {component.type} ({component.size})
      </Typography>
    ));
  };
  
  const formatDate = (date: string | null) => {
    if (!date) return 'Not set';
    return new Date(date).toLocaleString();
  };
  
  return (
    <Container>
      <Paper elevation={3} className="p-5 mt-5">
        <Typography variant="h4" gutterBottom>Job Details</Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Customer Information</Typography>
            <Typography>Name: {currentJob.customerInfo?.firstName} {currentJob.customerInfo?.lastName}</Typography>
            <Typography>Phone: {currentJob.customerInfo?.phone}</Typography>
            <Typography>Email: {currentJob.customerInfo?.email}</Typography>
            <Typography>Install Address: {currentJob.customerInfo?.installAddress}</Typography>
            <Typography>Mobility Aids: {currentJob.customerInfo?.mobilityAids?.join(', ') || 'None specified'}</Typography>
            <Typography>Notes: {currentJob.customerInfo?.notes || 'None'}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">Ramp Configuration</Typography>
            {currentJob.rampConfiguration?.components && renderRampComponents(currentJob.rampConfiguration.components)}
            <Typography>Total Length: {currentJob.rampConfiguration?.totalLength} ft</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">Pricing Details</Typography>
            <Typography>Delivery Fee: {formatCurrency(currentJob.pricing?.deliveryFee)}</Typography>
            <Typography>Install Fee: {formatCurrency(currentJob.pricing?.installFee)}</Typography>
            <Typography>Monthly Rate: {formatCurrency(currentJob.pricing?.monthlyRate)}</Typography>
            <Typography>Upfront Fee: {formatCurrency(currentJob.pricing?.upfrontFee)}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">Installation Schedule</Typography>
            <Typography>Date & Time: {formatDate(currentJob.installationSchedule?.date?.toString() || null)}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Job Details</Typography>
            <Typography>Job ID: {currentJob._id}</Typography>
            <Typography>Stage: {currentJob.stage}</Typography>
            <Typography>Created At: {formatDate(currentJob.createdAt || null)}</Typography>
            <Typography>Updated At: {formatDate(currentJob.updatedAt || null)}</Typography>
          </Grid>
        </Grid>

        <Box mt={3} display="flex" justifyContent="space-between">
          <Button variant="contained" color="primary" onClick={handleSendQuote}>
            Send Quote
          </Button>
          <Button variant="contained" color="secondary" onClick={handleEditJob}>
            Edit Job
          </Button>
          <Button variant="contained" color="error" onClick={handleOpenDeleteDialog}>
            Delete Job
          </Button>
        </Box>
      </Paper>

      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Job"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this job? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteJob} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default JobDetails;
\`\`\`

# src/components/pages/HomePage.tsx

\`\`\`tsx
// src/components/pages/HomePage.tsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchRentalRequests } from '../../stores/rentalRequestsSlice';
import { formatDate } from '../../utils/formatDate';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rentalRequests, loading, error } = useAppSelector((state) => state.rentalRequests);

  useEffect(() => {
    dispatch(fetchRentalRequests());
  }, [dispatch]);

  // Filter pending rental requests
  const pendingRequests = rentalRequests.filter((request) => request.status === 'pending');

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Same Day Ramps - Dashboard
      </Typography>
      <Button
        component={Link}
        to="/rental-requests"
        variant="contained"
        color="primary"
        style={{ marginRight: '1rem' }}
      >
        View All Rental Requests
      </Button>
      <Button
        component={Link}
        to="/jobs"
        variant="contained"
        color="primary"
        style={{ marginRight: '1rem' }}
      >
        View Jobs
      </Button>
      <Button component={Link} to="/settings" variant="contained" color="primary">
        Settings
      </Button>

      <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
        Pending Rental Requests
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      ) : pendingRequests.length === 0 ? (
        <Typography>No pending rental requests.</Typography>
      ) : (
        <Grid container spacing={2}>
          {pendingRequests.map((request) => (
            <Grid item xs={12} sm={6} md={4} key={request._id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    {request.customerInfo.firstName} {request.customerInfo.lastName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {request.installAddress}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Received At: {formatDate(request.createdAt)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    component={Link}
                    to={`/rental-request/${request._id}`}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default HomePage;
\`\`\`

# src/components/layout/MainLayout.tsx

\`\`\`tsx
// src/components/layout/MainLayout.tsx

import React from 'react';
import Navbar from '../common/Navbar';
import { Box } from '@mui/material';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box component="main" mt={8}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
\`\`\`

# src/components/jobs/SelectedComponents.tsx

\`\`\`tsx
// src/components/jobs/SelectedComponents.tsx

import React from 'react';
import { Box, Typography, IconButton, TextField, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { RampComponent } from '../../types/Job';

interface Props {
  components: RampComponent[];
  onRemove: (index: number) => void;
  onQuantityChange: (index: number, quantity: number) => void;
}

const SelectedComponents: React.FC<Props> = ({ components, onRemove, onQuantityChange }) => {
  return (
    <Box mt={2}>
      <Typography variant="subtitle1" gutterBottom>Selected Components</Typography>
      <List dense>
        {components.map((component, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={`${component.type} (${component.size})`}
            />
            <TextField
              type="number"
              size="small"
              InputProps={{ inputProps: { min: 1 } }}
              value={component.quantity}
              onChange={(e) => {
                const quantity = parseInt(e.target.value, 10) || 1;
                onQuantityChange(index, quantity);
              }}
              style={{ width: '60px', marginRight: '8px' }}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => onRemove(index)} size="small">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SelectedComponents;
\`\`\`

# src/components/jobs/RampConfigurationForm.tsx

\`\`\`tsx
// src/components/jobs/RampConfigurationForm.tsx

import React, { useMemo } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography, Box } from '@mui/material';
import { RampConfiguration, RampComponent } from '../../types/Job';
import ComponentSelector from './ComponentSelector';
import SelectedComponents from './SelectedComponents';

interface Props {
  onSubmit: (values: RampConfiguration) => void;
  onBack: () => void;
  data?: RampConfiguration;
  installAddress: string;
}

const RampConfigurationSchema = Yup.object().shape({
  components: Yup.array()
    .of(
      Yup.object().shape({
        type: Yup.string().oneOf(['ramp', 'landing']).required('Required'),
        size: Yup.string().required('Required'),
        quantity: Yup.number().required('Required').min(1),
      })
    )
    .min(1, 'At least one component is required'),
  totalLength: Yup.number()
    .required('Required')
    .min(1, 'Total length must be at least 1 foot'),
});

const RampConfigurationForm: React.FC<Props> = ({ onSubmit, onBack, data, installAddress }) => {
  const initialValues = useMemo(() => ({
    components: data?.components || [],
    totalLength: data?.totalLength || 0,
  }), [data]);

  const handleSubmit = (values: RampConfiguration) => {
    console.log('Submitting ramp configuration:', values);
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RampConfigurationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isValid, isSubmitting }) => (
        <Form>
          <Box sx={{ '& > *': { mb: 2 } }}>
            <Typography variant="h6">Ramp Configuration</Typography>

            <ComponentSelector
              addComponent={(type, size) => {
                const updatedComponents = addComponentHelper(values.components, type, size);
                setFieldValue('components', updatedComponents);
                setFieldValue('totalLength', calculateTotalLength(updatedComponents));
              }}
            />

            <SelectedComponents
              components={values.components}
              onRemove={(index) => {
                const newComponents = [...values.components];
                newComponents.splice(index, 1);
                setFieldValue('components', newComponents);
                setFieldValue('totalLength', calculateTotalLength(newComponents));
                console.log('Updated components after removal:', newComponents);
              }}
              onQuantityChange={(index, quantity) => {
                const newComponents = [...values.components];
                newComponents[index].quantity = quantity;
                setFieldValue('components', newComponents);
                setFieldValue('totalLength', calculateTotalLength(newComponents));
                console.log('Updated components after quantity change:', newComponents);
              }}
            />

            <Field
              name="totalLength"
              as={TextField}
              label="Total Ramp Length (ft)"
              type="number"
              fullWidth
              variant="outlined"
              InputProps={{ inputProps: { readOnly: true } }}
            />
            <ErrorMessage name="totalLength">
              {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
            </ErrorMessage>

            <Box display="flex" justifyContent="space-between">
              <Button variant="contained" color="secondary" onClick={onBack}>
                Back
              </Button>
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                Next
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

function addComponentHelper(components: RampComponent[], type: 'ramp' | 'landing', size: string): RampComponent[] {
  const existingIndex = components.findIndex(
    (component) => component.type === type && component.size === size
  );
  if (existingIndex >= 0) {
    const updatedComponents = [...components];
    updatedComponents[existingIndex].quantity += 1;
    return updatedComponents;
  } else {
    return [...components, { type, size, quantity: 1 }];
  }
}

function calculateTotalLength(components: RampComponent[]): number {
  return components.reduce((total, component) => {
    if (component.type === 'ramp' && component.size) {
      const length = parseInt(component.size.replace('ft', ''), 10);
      return total + length * component.quantity;
    }
    return total;
  }, 0);
}

export default RampConfigurationForm;
\`\`\`

# src/components/jobs/PricingForm.tsx

\`\`\`tsx
// src/components/jobs/PricingForm.tsx

import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { RampConfiguration, Pricing } from '../../types/Job';
import usePricingCalculator from '../../hooks/usePricingCalculator';
import PricingEditor from './PricingEditor';
import { useAppSelector } from '../../hooks';

interface Props {
  onSubmit: (values: Pricing) => void;
  onBack: () => void;
  data?: RampConfiguration;
  installAddress: string;
}

const PricingForm: React.FC<Props> = ({
  onSubmit,
  onBack,
  data,
  installAddress,
}) => {
  const currentJob = useAppSelector((state) => state.jobs.currentJob);
  const { pricing, loading, error } = usePricingCalculator(currentJob?.rampConfiguration.components || [], installAddress);
  const [extendedData, setExtendedData] = useState<Pricing>({
    deliveryFee: 0,
    installFee: 0,
    monthlyRate: 0,
    upfrontFee: 0,
  });

  useEffect(() => {
    if (pricing) {
      setExtendedData(prevData => ({
        ...prevData,
        ...pricing,
      }));
    }
  }, [pricing]);

  const handleSubmit = () => {
    console.log('Submitting pricing data:', extendedData);
    onSubmit(extendedData);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Pricing Details</Typography>
      <PricingEditor
        loading={loading}
        error={error}
        pricing={pricing}
        isEditingPricing={false}
        values={extendedData}
        setFieldValue={(field, value) => {
          setExtendedData(prevData => ({
            ...prevData,
            [field]: value,
          }));
        }}
      />
      <Box mt={3} display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PricingForm;
\`\`\`

# src/components/jobs/PricingEditor.tsx

\`\`\`tsx
import React from 'react';
import { TextField, Grid, Box } from '@mui/material';
import { Pricing } from '../../types/Job';

interface Props {
  loading: boolean;
  error: string | null;
  pricing: Pricing | null;
  isEditingPricing: boolean;
  values: Pricing;
  setFieldValue: (field: string, value: any) => void;
}

const PricingEditor: React.FC<Props> = ({
  loading,
  error,
  pricing,
  isEditingPricing,
  values,
  setFieldValue,
}) => {
  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (!pricing) {
    return null;
  }

  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <TextField
            name="deliveryFee"
            label="Delivery Fee"
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{ readOnly: !isEditingPricing }}
            value={isEditingPricing ? values.deliveryFee : pricing.deliveryFee}
            onChange={(e) => {
              if (isEditingPricing) {
                setFieldValue('deliveryFee', parseInt(e.target.value));
              }
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            name="installFee"
            label="Install Fee"
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{ readOnly: !isEditingPricing }}
            value={isEditingPricing ? values.installFee : pricing.installFee}
            onChange={(e) => {
              if (isEditingPricing) {
                setFieldValue('installFee', parseInt(e.target.value));
              }
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            name="upfrontFee"
            label="Upfront Fee"
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{ readOnly: !isEditingPricing }}
            value={isEditingPricing ? values.upfrontFee : pricing.upfrontFee}
            onChange={(e) => {
              if (isEditingPricing) {
                setFieldValue('upfrontFee', parseInt(e.target.value));
              }
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            name="monthlyRate"
            label="Rental Rate"
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{ readOnly: !isEditingPricing }}
            value={isEditingPricing ? values.monthlyRate : pricing.monthlyRate}
            onChange={(e) => {
              if (isEditingPricing) {
                setFieldValue('monthlyRate', parseInt(e.target.value));
              }
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingEditor;
\`\`\`

# src/components/jobs/JobSummary.tsx

\`\`\`tsx
// src/components/jobs/JobSummary.tsx

import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/store';

interface Props {
  onBack: () => void;
  onSubmit: () => void;
}

const JobSummary: React.FC<Props> = ({ onBack, onSubmit }) => {
  const currentJob = useSelector((state: RootState) => {
    const job = state.jobs.currentJob;
    console.log('Reading currentJob from store:', job);
    return job;
  });

  if (!currentJob) {
    return <Typography>No job data available</Typography>;
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Job Summary</Typography>
      
      <Box mb={3}>
        <Typography variant="subtitle1">Customer Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Name: {currentJob.customerInfo?.firstName} {currentJob.customerInfo?.lastName}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Phone: {currentJob.customerInfo?.phone}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Email: {currentJob.customerInfo?.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Address: {currentJob.customerInfo?.installAddress}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Mobility Aids: {currentJob.customerInfo?.mobilityAids?.join(', ') || 'None'}</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1">Ramp Configuration</Typography>
        <Grid container spacing={2}>
          {currentJob.rampConfiguration?.components.map((component, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant="body2">
                {component.quantity} x {component.type} ({component.size})
              </Typography>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="body2">Total Length: {currentJob.rampConfiguration?.totalLength} ft</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1">Pricing</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Delivery Fee: ${currentJob.pricing?.deliveryFee}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Install Fee: ${currentJob.pricing?.installFee}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Rental Rate: ${currentJob.pricing?.monthlyRate}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Upfront Fee: ${currentJob.pricing?.upfrontFee}</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Submit Job
        </Button>
      </Box>
    </Box>
  );
};

export default JobSummary;
\`\`\`

# src/components/jobs/JobCreationWizard.tsx

\`\`\`tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createJob, updateJob, fetchJob } from '../../stores/jobsSlice';
import { Container, Paper, Box, Stepper, Step, StepLabel, Typography, CircularProgress, Snackbar } from '@mui/material';
import CustomerInfoForm from './CustomerInfoForm';
import RampConfigurationForm from './RampConfigurationForm';
import PricingForm from './PricingForm';
import JobSummary from './JobSummary';
import { Job, JobStage, CustomerInfo, RampConfiguration, Pricing } from '../../types/Job';

const steps = ['Customer Information', 'Ramp Configuration', 'Pricing', 'Summary'];

const JobCreationWizard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentJob, isLoading, error } = useAppSelector((state) => state.jobs);

  const [currentStep, setCurrentStep] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [tempJob, setTempJob] = useState<Partial<Job> | null>(null);

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      dispatch(fetchJob(id));
    } else {
      // Initialize a temporary job object instead of creating one in the database
      setTempJob({ stage: JobStage.REQUESTED });
    }
  }, [dispatch, id]);

  const handleStepCompletion = async (stepData: Partial<Job>) => {
    if (isEditMode && currentJob && currentJob._id) {
      try {
        await dispatch(updateJob({ _id: currentJob._id, ...stepData })).unwrap();
        setCurrentStep((prevStep) => prevStep + 1);
      } catch (error) {
        console.error('Failed to update job:', error);
        setErrorMessage('Failed to update job. Please try again.');
      }
    } else {
      // Update the temporary job object
      setTempJob((prev) => ({ ...prev, ...stepData }));
      if (currentStep === 0) {
        // Customer info form is completed, now create the job in the database
        try {
          const newJob = await dispatch(createJob(tempJob as Job)).unwrap();
          setIsEditMode(true);
          // Update the current job with the newly created job
          if (newJob._id) {
            dispatch(fetchJob(newJob._id));
          } else {
            throw new Error('New job created without an ID');
          }
        } catch (error) {
          console.error('Failed to create job:', error);
          setErrorMessage('Failed to create job. Please try again.');
        }
      }
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (currentJob) {
      navigate(`/jobs/${currentJob._id}`);
    }
  };

  if (isLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  const jobData = isEditMode ? currentJob : tempJob;

  if (!jobData) {
    return (
      <Container>
        <Typography variant="h6">Initializing job...</Typography>
      </Container>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <CustomerInfoForm
            onSubmit={(values: CustomerInfo) => handleStepCompletion({ customerInfo: values })}
            data={jobData.customerInfo}
          />
        );
      case 1:
        return (
          <RampConfigurationForm
            onSubmit={(values: RampConfiguration) => handleStepCompletion({ rampConfiguration: values })}
            onBack={handleBack}
            data={jobData.rampConfiguration}
            installAddress={jobData.customerInfo?.installAddress || ''}
          />
        );
      case 2:
        return (
          <PricingForm
            onSubmit={(values: Pricing) => handleStepCompletion({ pricing: values })}
            onBack={handleBack}
            data={jobData.rampConfiguration}
            installAddress={jobData.customerInfo?.installAddress || ''}
          />
        );
      case 3:
        return (
          <JobSummary
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={4}>
        <Paper elevation={3}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              {isEditMode ? 'Edit Job' : 'Create New Job'}
            </Typography>
            <Stepper activeStep={currentStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box mt={4}>
              {renderStep()}
            </Box>
          </Box>
        </Paper>
      </Box>
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={() => setErrorMessage(null)}
        message={errorMessage}
      />
    </Container>
  );
};

export default JobCreationWizard;
\`\`\`

# src/components/jobs/CustomerInfoForm.tsx

\`\`\`tsx
// src/components/jobs/CustomerInfoForm.tsx

import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography } from '@mui/material';
import { CustomerInfo } from '../../types/Job';
import GoogleAddressAutofill from '../common/GoogleAddressAutofill';

interface Props {
  onSubmit: (values: CustomerInfo) => void;
  data?: CustomerInfo;
}

const CustomerInfoSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  installAddress: Yup.string().required('Required'),
  // Add validation for mobilityAids and notes if necessary
});

const CustomerInfoForm: React.FC<Props> = ({ onSubmit, data }) => {
  const initialValues: CustomerInfo = {
    firstName: data?.firstName || '',
    lastName: data?.lastName || '',
    phone: data?.phone || '',
    email: data?.email || '',
    installAddress: data?.installAddress || '',
    mobilityAids: data?.mobilityAids || [],
    notes: data?.notes || '',
  };

  const handleSubmit = (values: CustomerInfo, actions: FormikHelpers<CustomerInfo>) => {
    console.log('Submitting customer info:', values);
    onSubmit(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={CustomerInfoSchema} onSubmit={handleSubmit}>
      {({ isSubmitting, setFieldValue, values }) => (
        <Form>
          <Typography variant="h6">Customer Information</Typography>
          <Field name="firstName" as={TextField} label="First Name" fullWidth margin="normal" />
          <ErrorMessage name="firstName">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          <Field name="lastName" as={TextField} label="Last Name" fullWidth margin="normal" />
          <ErrorMessage name="lastName">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          <Field name="phone" as={TextField} label="Phone" fullWidth margin="normal" />
          <ErrorMessage name="phone">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          <Field name="email" as={TextField} label="Email" fullWidth margin="normal" />
          <ErrorMessage name="email">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          <GoogleAddressAutofill
            value={values.installAddress || ''}
            onChange={(value) => setFieldValue('installAddress', value)}
            label="Install Address"
            fullWidth
            margin="normal"
          />
          <ErrorMessage name="installAddress">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          {/* Mobility Aids and Notes can be added here */}

          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomerInfoForm;
\`\`\`

# src/components/jobs/ComponentSelector.tsx

\`\`\`tsx
import React from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';

interface Props {
  addComponent: (type: 'ramp' | 'landing', size: string) => void;
}

const ComponentSelector: React.FC<Props> = ({ addComponent }) => {
  const rampOptions = ['4ft', '5ft', '6ft', '7ft', '8ft'];
  const landingOptions = ['5x5ft', '5x4ft', '5x8ft'];

  return (
    <Box mt={2}>
      <Typography variant="subtitle1" gutterBottom>Add Components</Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle2">Ramps</Typography>
        </Grid>
        {rampOptions.map((option) => (
          <Grid item xs={4} sm={2} key={option}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              size="small"
              onClick={() => addComponent('ramp', option)}
            >
              {option}
            </Button>
          </Grid>
        ))}
        <Grid item xs={12} style={{ marginTop: '8px' }}>
          <Typography variant="subtitle2">Landings</Typography>
        </Grid>
        {landingOptions.map((option) => (
          <Grid item xs={4} key={option}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              size="small"
              onClick={() => addComponent('landing', option)}
            >
              {option}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ComponentSelector;
\`\`\`

# src/components/forms/RentalRequestForm.tsx

\`\`\`tsx
// src/components/forms/RentalRequestForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { rentalRequestsApi } from '../../services/api';
import { RentalRequest } from '../../types/RentalRequest';
import { Container, Button, Typography, TextField } from '@mui/material';

const RentalRequestSchema = Yup.object().shape({
  customerInfo: Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
  }),
  rampDetails: Yup.object().shape({
    knowRampLength: Yup.boolean().required(),
    rampLength: Yup.number().when('knowRampLength', {
      is: true,
      then: (schema) => schema.required('Ramp length is required'),
      otherwise: (schema) => schema.notRequired(),
    }),
    knowRentalDuration: Yup.boolean().required(),
    rentalDuration: Yup.number().when('knowRentalDuration', {
      is: true,
      then: (schema) => schema.required('Rental duration is required'),
      otherwise: (schema) => schema.notRequired(),
    }),
    installTimeframe: Yup.string().required('Install timeframe is required'),
    mobilityAids: Yup.array().of(Yup.string()),
  }),
  installAddress: Yup.string().required('Installation address is required'),
});

const RentalRequestForm: React.FC = () => {
  const initialValues: Omit<RentalRequest, '_id' | 'status' | 'salesStage' | 'createdAt' | 'updatedAt'> = {
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    rampDetails: {
      knowRampLength: false,
      rampLength: undefined,
      knowRentalDuration: false,
      rentalDuration: undefined,
      installTimeframe: '',
      mobilityAids: [],
    },
    installAddress: '',
  };

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting, resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    try {
      await rentalRequestsApi.create(values);
      resetForm();
      // Notify success
    } catch (error) {
      // Handle error
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Submit Rental Request</Typography>
      <Formik initialValues={initialValues} validationSchema={RentalRequestSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <h2>Customer Information</h2>
            <Field
              name="customerInfo.firstName"
              as={TextField}
              label="First Name"
              fullWidth
              margin="normal"
            />
            <ErrorMessage name="customerInfo.firstName">
              {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
            </ErrorMessage>

            {/* Repeat for other fields */}
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Submit Rental Request
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RentalRequestForm;
\`\`\`

# src/components/common/Navbar.tsx

\`\`\`tsx
// src/components/common/Navbar.tsx

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Rental Requests', path: '/rental-requests' },
    { text: 'Jobs', path: '/jobs' },
    { text: 'Create Job', path: '/jobs/new' },
    { text: 'Settings', path: '/settings' },
  ];

  // Get the current page title based on the path
  const currentRoute = menuItems.find((item) => item.path === location.pathname);
  const pageTitle = currentRoute ? currentRoute.text : 'Same Day Ramps';

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton edge="start" color="primary" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'left' }}>
                {pageTitle}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
                {pageTitle}
              </Typography>
              <Box>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    color="primary"
                    onClick={() => navigate(item.path)}
                    style={{ marginLeft: '1rem' }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <List style={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                  setDrawerOpen(false);
                }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
\`\`\`

# src/components/common/GoogleAddressAutofill.tsx

\`\`\`tsx
/// <reference types="google.maps" />

import React, { useRef, useEffect } from 'react';
import { TextField } from '@mui/material';
import { loadGoogleMapsApi } from '../../utils/loadGoogleMapsApi';

interface GoogleAddressAutofillProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
}

const GoogleAddressAutofill: React.FC<GoogleAddressAutofillProps> = ({ value, onChange, label, fullWidth = true, margin = 'normal' }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const initializeAutocomplete = async () => {
      try {
        await loadGoogleMapsApi(process.env.REACT_APP_MAP_API_KEY || '');
        if (!inputRef.current) return;

        const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
          types: ['address'],
          componentRestrictions: { country: 'us' }, // Restrict to US addresses
        });

        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (place.formatted_address) {
            onChange(place.formatted_address);
          }
        });
      } catch (error) {
        console.error('Failed to load Google Maps API', error);
      }
    };

    initializeAutocomplete();
  }, [onChange]);

  return (
    <TextField
      inputRef={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label={label}
      fullWidth={fullWidth}
      margin={margin}
    />
  );
};

export default GoogleAddressAutofill;
\`\`\`

# src/components/common/ErrorNotification.tsx

\`\`\`tsx
import React, { useContext } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';
import { Snackbar, Alert } from '@mui/material';

const ErrorNotification: React.FC = () => {
  const { error, setError } = useContext(ErrorContext);

  const handleClose = () => {
    setError(null);
  };

  return (
    <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default ErrorNotification;
\`\`\`


```

# README.md

```md
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

# src/theme.ts

```ts
// src/theme.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007AFF', // iOS blue color
    },
    background: {
      default: '#F9F9F9', // Light gray background
    },
    text: {
      primary: '#000000',
      secondary: '#8E8E93', // iOS secondary text color
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'SF Pro Text',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h6: {
      fontWeight: 600,
      fontSize: '17px',
      lineHeight: '22px',
    },
    body1: {
      fontSize: '17px',
      lineHeight: '22px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#F9F9F9',
          color: '#000000',
          boxShadow: 'none',
          borderBottom: '1px solid #C6C6C8',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '44px', // iOS Navbar height
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // iOS button style
        },
        contained: {
          boxShadow: 'none',
          backgroundColor: '#007AFF',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#005BB5',
          },
        },
        outlined: {
          borderColor: '#007AFF',
          color: '#007AFF',
          '&:hover': {
            borderColor: '#005BB5',
            color: '#005BB5',
            backgroundColor: 'rgba(0, 122, 255, 0.1)',
          },
        },
      },
    },
  },
});

export default theme;
```

# src/setupTests.ts

```ts
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

```

# src/reportWebVitals.ts

```ts
import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

# src/react-app-env.d.ts

```ts
/// <reference types="react-scripts" />

```

# src/logo.svg

This is a file of the type: SVG Image

# src/index.tsx

```tsx
// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import store from './stores/store';
import { Provider } from 'react-redux';
import { ErrorProvider } from './contexts/ErrorContext';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { CssBaseline } from '@mui/material';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Create root using ReactDOM.createRoot
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ErrorProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Resets default styling */}
            <App />
          </ThemeProvider>
        </ErrorProvider>
      </Provider>
    </React.StrictMode>
  );
}
```

# src/index.css

```css
/* src/index.css */

body {
  margin: 0;
  background-color: #F9F9F9;
}
```

# src/App.tsx

```tsx
// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import RentalRequestsList from './components/pages/RentalRequestsList';
import RentalRequestDetails from './components/pages/RentalRequestDetails';
import JobsList from './components/pages/JobsList';
import JobDetails from './components/pages/JobDetails';
import SettingsPage from './components/pages/SettingsPage';
import ErrorNotification from './components/common/ErrorNotification';
import JobCreationWizard from './components/jobs/JobCreationWizard';
import MainLayout from './components/layout/MainLayout';
import { CssBaseline } from '@mui/material';

const App: React.FC = () => (
  <Router>
    <CssBaseline />
    <ErrorNotification />
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rental-requests" element={<RentalRequestsList />} />
        <Route path="/rental-requests/:id" element={<RentalRequestDetails />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/jobs/new" element={<JobCreationWizard />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/jobs/edit/:id" element={<JobCreationWizard />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </MainLayout>
  </Router>
);

export default App;
```

# src/App.test.tsx

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

# src/App.css

```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

```

# public/robots.txt

```txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

```

# public/manifest.json

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

# public/logo512.png

This is a binary file of the type: Image

# public/logo192.png

This is a binary file of the type: Image

# public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script>
      const apiKey = process.env.REACT_APP_MAP_API_KEY;
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    </script>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```

# public/favicon.ico

This is a binary file of the type: Binary

# src/utils/loadGoogleMapsApi.ts

```ts
export const loadGoogleMapsApi = (apiKey: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = (error) => reject(error);
    document.head.appendChild(script);
  });
};
```

# src/utils/formatDate.ts

```ts
export const formatDate = (dateString: string, format: string = 'MM/DD/YYYY'): string => {
    const date = new Date(dateString);
    // Use date-fns or moment.js for formatting
    return date.toLocaleDateString(); // Simplified
  };
```

# src/types/RentalRequest.ts

```ts
// src/types/RentalRequest.ts
export enum SalesStage {
    RENTAL_REQUEST = 'RENTAL_REQUEST',
    RENTAL_REQUEST_RECEIVED = 'RENTAL_REQUEST_RECEIVED',
    // Add other stages as needed
  }
  
  export interface CustomerInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }
  
  export interface RampDetails {
    knowRampLength: boolean;
    rampLength?: number;
    knowRentalDuration: boolean;
    rentalDuration?: number;
    installTimeframe: string;
    mobilityAids: string[];
  }
  
  export interface RentalRequest {
    _id: string;
    customerInfo: CustomerInfo;
    rampDetails: RampDetails;
    installAddress: string;
    status: 'pending' | 'job created' | 'rejected';
    salesStage: SalesStage;
    customerId?: string;
    quoteId?: string;
    jobId?: string;
    createdAt: string;
    updatedAt: string;
  }
```

# src/types/PricingVariables.ts

```ts
// src/types/PricingVariables.ts
export interface PricingVariables {
    warehouseAddress: string;
    baseDeliveryFee: number;
    deliveryFeePerMile: number;
    baseInstallFee: number;
    installFeePerComponent: number;
    rentalRatePerFt: number;
  }
```

# src/types/PricingCalculation.ts

```ts
// src/types/PricingCalculation.ts
export interface PricingCalculation {
    deliveryFee: number;
    installFee: number;
    monthlyRate: number;
    discount: number;
    totalUpfront: number;
  }
```

# src/types/Job.ts

```ts
// src/types/Job.ts

export enum JobStage {
  REQUESTED = 'REQUESTED',
  CONTACTED = 'CONTACTED',
  QUOTE_SENT = 'QUOTE_SENT',
  QUOTE_ACCEPTED = 'QUOTE_ACCEPTED',
  PAID = 'PAID',
  SCHEDULED = 'SCHEDULED',
  INSTALLED = 'INSTALLED',
  REMOVAL_SCHEDULED = 'REMOVAL_SCHEDULED',
  REMOVED = 'REMOVED',
  COMPLETED = 'COMPLETED'
}

export interface RampComponent {
  type: 'ramp' | 'landing';
  size: string;
  quantity: number;
  width?: number; // Optional width for landings
}

export interface RampConfiguration {
  components: RampComponent[];
  totalLength: number;
  rentalDuration?: number; // Make rentalDuration optional
}

export interface Schedule {
  date: string | null; // Changed from Date to string
  timeSlot: string;
}

export enum QuoteStatus {
  NOT_SENT = 'NOT_SENT',
  SENT = 'SENT',
  PAID = 'PAID'
}

export enum AgreementStatus {
  NOT_SENT = 'NOT_SENT',
  SENT = 'SENT',
  SIGNED = 'SIGNED'
}

export interface Job {
  _id?: string; // Make _id optional
  stage: JobStage;
  customerInfo: CustomerInfo;
  rampConfiguration: RampConfiguration;
  pricing: {
    deliveryFee: number;
    installFee: number;
    monthlyRate: number;
    upfrontFee: number;
  };
  installationSchedule?: Schedule;
  removalSchedule?: Schedule;
  communicationLog?: Array<{
    date: string;
    type: 'email' | 'phone' | 'in-person' | 'system';
    notes: string;
  }>;
  createdAt?: string;
  updatedAt?: string;
  quotePaidOn?: string; // Add this line
  agreementSignedOn?: string; // Add this line
  quoteStatus: QuoteStatus; // Add this line
  agreementStatus: AgreementStatus; // Add this line
  stripeCustomerId?: string; // Add this line
  stripeInvoiceId?: string; // Add this line
  eSignaturesDocumentId?: string; // Add this line
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  installAddress: string;
  mobilityAids?: string[];
  notes?: string;
}

export interface Pricing {
  deliveryFee: number;
  installFee: number;
  monthlyRate: number;
  upfrontFee: number;
}
```

# src/stores/store.ts

```ts
// src/stores/store.ts
import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobsSlice';
import rentalRequestsReducer from './rentalRequestsSlice';
import pricingVariablesReducer from './pricingVariablesSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    rentalRequests: rentalRequestsReducer,
    pricingVariables: pricingVariablesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

```

# src/stores/rentalRequestsSlice.ts

```ts
// src/stores/rentalRequestsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RentalRequest } from '../types/RentalRequest';
import { rentalRequestsApi } from '../services/api';

interface RentalRequestsState {
  rentalRequests: RentalRequest[];
  loading: boolean;
  error: string | null;
}

const initialState: RentalRequestsState = {
  rentalRequests: [],
  loading: false,
  error: null,
};

export const fetchRentalRequests = createAsyncThunk('rentalRequests/fetchRentalRequests', async () => {
  const response = await rentalRequestsApi.getAll();
  return response.data;
});

// Other async thunks: createRentalRequest, archiveRentalRequest, deleteRentalRequest, etc.

const rentalRequestsSlice = createSlice({
  name: 'rentalRequests',
  initialState,
  reducers: {
    // Define synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRentalRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRentalRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.rentalRequests = action.payload;
      })
      .addCase(fetchRentalRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch rental requests';
      });
    // Handle other actions
  },
});

export default rentalRequestsSlice.reducer;
```

# src/stores/pricingVariablesSlice.ts

```ts
// src/stores/pricingVariablesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PricingVariables } from '../types/PricingVariables';
import { pricingVariablesApi } from '../services/api';

interface PricingVariablesState {
  variables: PricingVariables | null;
  loading: boolean;
  error: string | null;
}

const initialState: PricingVariablesState = {
  variables: null,
  loading: false,
  error: null,
};

export const fetchPricingVariables = createAsyncThunk('pricingVariables/fetchPricingVariables', async () => {
  const response = await pricingVariablesApi.get();
  return response.data;
});

export const updatePricingVariables = createAsyncThunk(
  'pricingVariables/updatePricingVariables',
  async (variables: PricingVariables) => {
    const response = await pricingVariablesApi.update(variables);
    return response.data;
  }
);

const pricingVariablesSlice = createSlice({
  name: 'pricingVariables',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPricingVariables.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPricingVariables.fulfilled, (state, action) => {
        state.loading = false;
        state.variables = action.payload;
      })
      .addCase(fetchPricingVariables.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch pricing variables';
      })
      .addCase(updatePricingVariables.fulfilled, (state, action) => {
        state.variables = action.payload;
      });
  },
});

export default pricingVariablesSlice.reducer;
```

# src/stores/jobsSlice.ts

```ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { jobsApi, calculatePricing } from '../services/api';
import { Job, JobStage, QuoteStatus, AgreementStatus } from '../types/Job';
import { RootState } from './store';
import { PricingCalculation } from '../types/PricingCalculation';
// Remove the unused import
// import { AxiosError } from 'axios';

interface JobsState {
  jobs: Job[];
  currentJob: Job | null;
  isLoading: boolean;
  error: string | null;
  installAddress?: string;
}

const initialState: JobsState = {
  jobs: [],
  currentJob: null,
  isLoading: false,
  error: null,
  installAddress: '',
};

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await jobsApi.getAll();
  return response.data;
});

export const fetchJob = createAsyncThunk('jobs/fetchJob', async (id: string) => {
  const response = await jobsApi.getById(id);
  return response.data;
});

export const createJob = createAsyncThunk(
  'jobs/createJob',
  async (job: Partial<Job>, { rejectWithValue }) => {
    try {
      const jobWithDefaults = {
        ...job,
        quoteStatus: job.quoteStatus || QuoteStatus.NOT_SENT,
        agreementStatus: job.agreementStatus || AgreementStatus.NOT_SENT,
      };
      const response = await jobsApi.create(jobWithDefaults);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

export const updateJob = createAsyncThunk(
  'jobs/updateJob',
  async (job: Partial<Job>, { getState }) => {
    const state = getState() as RootState;
    const currentJob = state.jobs.currentJob;
    if (!currentJob) throw new Error('No current job');
    const updatedJob = { ...currentJob, ...job };
    const response = await jobsApi.update(updatedJob._id!, updatedJob);
    return response.data;
  }
);

export const updateCurrentJob = createAsyncThunk<Job, Partial<Job>, { state: RootState }>(
  'jobs/updateCurrentJob',
  async (jobData, { getState }) => {
    const state = getState();
    const currentJob = state.jobs.currentJob;
    if (!currentJob) throw new Error('No current job');
    return { ...currentJob, ...jobData };
  }
);

export const recalculatePricing = createAsyncThunk<PricingCalculation, void, { state: RootState }>(
  'jobs/recalculatePricing',
  async (_, { getState }) => {
    const state = getState();
    const currentJob = state.jobs.currentJob;
    if (!currentJob) throw new Error('No current job');
    const response = await calculatePricing(
      currentJob.rampConfiguration,
      currentJob.customerInfo.installAddress,
      process.env.REACT_APP_WAREHOUSE_ADDRESS || ''
    );
    return response.data;
  }
);

export const updateJobStage = createAsyncThunk(
  'jobs/updateJobStage',
  async ({ id, stage }: { id: string; stage: JobStage }) => {
    const response = await jobsApi.updateStage(id, stage);
    return response.data;
  }
);

export const deleteJob = createAsyncThunk('jobs/deleteJob', async (id: string) => {
  await jobsApi.delete(id);
  return id;
});

export const initiateStripePayment = createAsyncThunk(
  'jobs/initiateStripePayment',
  async (jobId: string) => {
    const response = await jobsApi.initiateStripePayment(jobId);
    return response.data;
  }
);

export const initiateESignaturesSigning = createAsyncThunk(
  'jobs/initiateESignaturesSigning',
  async (jobId: string) => {
    const response = await jobsApi.initiateESignaturesSigning(jobId);
    return response.data;
  }
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setInstallAddress(state, action: PayloadAction<string>) {
      state.installAddress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      })
      .addCase(fetchJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentJob = action.payload;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.currentJob = action.payload;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.currentJob = action.payload;
      })
      .addCase(updateCurrentJob.fulfilled, (state, action) => {
        state.currentJob = action.payload;
      })
      .addCase(recalculatePricing.fulfilled, (state, action) => {
        if (state.currentJob) {
          state.currentJob.pricing = {
            ...state.currentJob.pricing,
            ...action.payload,
          };
        }
      })
      .addCase(recalculatePricing.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to recalculate pricing';
      })
      .addCase(updateJobStage.fulfilled, (state, action) => {
        if (state.currentJob) {
          state.currentJob.stage = action.payload.stage;
        }
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter(job => job._id !== action.payload);
        state.currentJob = null;
      })
      .addCase(initiateStripePayment.fulfilled, (state, action) => {
        // Handle successful payment initiation if needed
      })
      .addCase(initiateESignaturesSigning.fulfilled, (state, action) => {
        // Handle successful signing initiation if needed
      });
  },
});

export const { setInstallAddress } = jobsSlice.actions;

export default jobsSlice.reducer;
```

# src/services/emailService.ts

```ts
// src/services/emailService.ts
import api from './api';

interface EmailOptions {
  to: string;
  subject: string;
  body: string;
}

export const sendEmail = async ({ to, subject, body }: EmailOptions) => {
  try {
    await api.post('/email/send', { to, subject, body });
  } catch (error) {
    throw new Error('Failed to send email');
  }
};

export const sendQuoteEmail = async (jobId: string, email: string) => {
  const quoteLink = `http://your-frontend.com/jobs/${jobId}/quote`;
  const subject = 'Your Ramp Rental Quote';
  const body = `
    <p>Dear Customer,</p>
    <p>Please review your ramp rental quote <a href="${quoteLink}">here</a>.</p>
    <p>Thank you!</p>
  `;
  await sendEmail({ to: email, subject, body });
};
```

# src/services/api.ts

```ts
// src/services/api.ts

import axios from 'axios';
import { Job, JobStage, QuoteStatus, AgreementStatus } from '../types/Job';
import { RentalRequest } from '../types/RentalRequest';
import { PricingVariables } from '../types/PricingVariables';
import { PricingCalculation } from '../types/PricingCalculation';
import { RampConfiguration } from '../types/Job';

const USE_LOCAL_API = true; // Set this to false to use the production API

const API_BASE_URL = USE_LOCAL_API 
  ? 'http://localhost:3001/api'
  : (process.env.REACT_APP_API_BASE_URL || 'https://samedayramps-016e8e090b17.herokuapp.com/api');

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const jobsApi = {
  getAll: () => api.get<Job[]>('/jobs'),
  getById: (id: string) => api.get<Job>(`/jobs/${id}`),
  create: (job: Partial<Job>) => api.post<Job>('/jobs', {
    ...job,
    quoteStatus: job.quoteStatus || QuoteStatus.NOT_SENT,
    agreementStatus: job.agreementStatus || AgreementStatus.NOT_SENT,
  }),
  update: (id: string, data: Partial<Job>) => {
    console.log('Sending job update to backend:', { id, data });
    return api.put<Job>(`/jobs/${id}`, {
      ...data,
      quoteStatus: data.quoteStatus || QuoteStatus.NOT_SENT,
      agreementStatus: data.agreementStatus || AgreementStatus.NOT_SENT,
    }).then(response => {
      console.log('Received response from backend:', response.data);
      return response;
    });
  },
  delete: (id: string) => api.delete(`/jobs/${id}`),
  sendQuote: (id: string) => api.post(`/jobs/${id}/send-quote`),
  updateStage: (id: string, stage: JobStage) => api.put(`/jobs/${id}/stage`, { stage }),
  calculatePricing: (rampConfiguration: RampConfiguration, installAddress: string, warehouseAddress: string) =>
    api.post<PricingCalculation>('/jobs/calculate-pricing', { rampConfiguration, installAddress, warehouseAddress }),
  initiateStripePayment: (jobId: string) => api.post<{ clientSecret: string }>(`/jobs/${jobId}/initiate-payment`),
  initiateESignaturesSigning: (jobId: string) => api.post<{ signingUrl: string }>(`/jobs/${jobId}/initiate-signing`),
};

export const rentalRequestsApi = {
  getAll: () => api.get<RentalRequest[]>('/rental-requests'),
  getById: (id: string) => api.get<RentalRequest>(`/rental-requests/${id}`),
  create: (rentalRequest: Omit<RentalRequest, '_id' | 'status' | 'salesStage' | 'createdAt' | 'updatedAt'>) =>
    api.post<RentalRequest>('/rental-requests', rentalRequest),
  archive: (id: string) => api.post(`/rental-requests/${id}/archive`),
  delete: (id: string) => api.delete(`/rental-requests/${id}`),
  // New method to create a job from a rental request
  createJobFromRentalRequest: (id: string) => api.post<Job>(`/rental-requests/${id}/create-job`),
  updateStatus: (id: string, status: 'pending' | 'job created' | 'rejected') =>
    api.put<RentalRequest>(`/rental-requests/${id}/status`, { status }),
};

export const pricingVariablesApi = {
  get: () => api.get<PricingVariables>('/pricing-variables'),
  update: (variables: PricingVariables) => api.put<PricingVariables>('/pricing-variables', variables),
};

export const calculatePricing = (
  rampConfiguration: RampConfiguration,
  installAddress: string,
  warehouseAddress: string
) =>
  api.post<PricingCalculation>('/jobs/calculate-pricing', {
    rampConfiguration,
    installAddress,
    warehouseAddress,
  });

export default api;
```

# src/hooks/usePricingCalculator.ts

```ts
// src/hooks/usePricingCalculator.ts

import { useEffect, useState, useCallback } from 'react';
import { RampComponent } from '../types/Job';
import { PricingVariables } from '../types/PricingVariables';
import { pricingVariablesApi } from '../services/api';
import { loadGoogleMapsApi } from '../utils/loadGoogleMapsApi';

interface PricingDetails {
  deliveryFee: number;
  installFee: number;
  monthlyRate: number;
  upfrontFee: number; // Add this line
}

const usePricingCalculator = (components: RampComponent[], installAddress: string) => {
  const [pricingVariables, setPricingVariables] = useState<PricingVariables | null>(null);
  const [pricing, setPricing] = useState<PricingDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPricingVariables = async () => {
      try {
        const response = await pricingVariablesApi.get();
        setPricingVariables(response.data);
        console.log('Fetched Pricing Variables:', response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch pricing variables');
      } finally {
        setLoading(false);
      }
    };

    fetchPricingVariables();
  }, []);

  const calculateDeliveryFee = useCallback(async (
    origin: string,
    destination: string,
    pricingVariables: PricingVariables
  ): Promise<number> => {
    const service = new google.maps.DistanceMatrixService();
    
    return new Promise((resolve, reject) => {
      service.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [destination],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.IMPERIAL,
        },
        (response, status) => {
          if (status === google.maps.DistanceMatrixStatus.OK && response) {
            const distance = response.rows[0].elements[0].distance.value / 1609.34; // Convert meters to miles
            console.log('Calculated Distance (miles):', distance);
            const deliveryFee = pricingVariables.baseDeliveryFee + (distance * pricingVariables.deliveryFeePerMile);
            resolve(Math.round(deliveryFee)); // Round to the nearest dollar
          } else {
            reject(new Error('Failed to calculate distance'));
          }
        }
      );
    });
  }, []);

  useEffect(() => {
    if (components.length > 0 && pricingVariables && installAddress) {
      console.log('Components:', components);
      console.log('Install Address:', installAddress);

      const calculatePricingDetails = async (
        components: RampComponent[],
        pricingVariables: PricingVariables,
        installAddress: string
      ): Promise<PricingDetails> => {
        let totalLength = 0;
        let installFee = pricingVariables.baseInstallFee; // Start with base install fee
        let monthlyRate = 0;

        components.forEach((component) => {
          if (component.type === 'ramp' && component.size) {
            const length = parseInt(component.size.replace('ft', ''), 10);
            totalLength += length * component.quantity;
          }
          installFee += pricingVariables.installFeePerComponent * component.quantity;
        });

        monthlyRate = totalLength * pricingVariables.rentalRatePerFt;

        // Load Google Maps API
        await loadGoogleMapsApi(process.env.REACT_APP_MAP_API_KEY || '');

        // Calculate delivery fee using Google Distance Matrix API
        const deliveryFee = await calculateDeliveryFee(pricingVariables.warehouseAddress, installAddress, pricingVariables);

        console.log('Total Length:', totalLength);
        console.log('Install Fee:', installFee);
        console.log('Monthly Rate:', monthlyRate);
        console.log('Delivery Fee:', deliveryFee);

        // Calculate upfront fee
        const upfrontFee = deliveryFee + installFee;

        // Round all prices to the nearest dollar
        return {
          deliveryFee: Math.round(deliveryFee),
          installFee: Math.round(installFee),
          monthlyRate: Math.round(monthlyRate),
          upfrontFee: Math.round(upfrontFee) // Add this line
        };
      };

      calculatePricingDetails(components, pricingVariables, installAddress)
        .then(pricingDetails => {
          console.log('Calculated Pricing Details:', pricingDetails);
          setPricing(pricingDetails);
        })
        .catch(err => {
          console.error('Error calculating pricing details:', err);
          setError('Failed to calculate pricing details');
        });
    }
  }, [components, pricingVariables, installAddress, calculateDeliveryFee]);

  return { pricing, loading, error };
};

export default usePricingCalculator;
```

# src/hooks/useInstallationSchedule.ts

```ts
// src/hooks/useInstallationSchedule.ts

import { useState, useEffect } from 'react';
import { Schedule } from '../types/Job';
import dayjs from 'dayjs';

export const useInstallationSchedule = (initialSchedule?: Schedule) => {
  const [schedule, setSchedule] = useState<Schedule>({
    date: null,
    timeSlot: '',
  });

  useEffect(() => {
    if (initialSchedule) {
      setSchedule(initialSchedule);
    }
  }, [initialSchedule]);

  const updateSchedule = (field: keyof Schedule, value: any) => {
    setSchedule((prev: Schedule) => ({ ...prev, [field]: value }));
  };

  const getFormattedStartTime = () => {
    if (!schedule.date) return null;
    return dayjs(schedule.date).toDate();
  };

  const getFormattedEndTime = () => {
    const startTime = getFormattedStartTime();
    if (!startTime) return null;
    return dayjs(startTime).add(3, 'hour').toDate(); // Default duration to 3 hours
  };

  const isValidSchedule = () => {
    return schedule.date !== null && schedule.timeSlot !== '';
  };

  const getScheduleForBackend = (): Schedule => {
    return {
      ...schedule,
      date: schedule.date ? schedule.date : null,
    };
  };

  return {
    schedule,
    updateSchedule,
    getFormattedStartTime,
    getFormattedEndTime,
    isValidSchedule,
    getScheduleForBackend,
  };
};
```

# src/hooks/index.ts

```ts
// src/hooks/index.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../stores/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

# src/contexts/ErrorContext.tsx

```tsx
// src/contexts/ErrorContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface ErrorContextProps {
  error: string | null;
  setError: (error: string | null) => void;
}

export const ErrorContext = createContext<ErrorContextProps>({
  error: null,
  setError: () => {},
});

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [error, setError] = useState<string | null>(null);

  return <ErrorContext.Provider value={{ error, setError }}>{children}</ErrorContext.Provider>;
};
```

# src/components/stripe/PaymentInitiation.tsx

```tsx
import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { jobsApi } from '../../services/api';

interface Props {
  jobId: string;
}

const PaymentInitiation: React.FC<Props> = ({ jobId }) => {
  const [loading, setLoading] = useState(false);

  const handleInitiatePayment = async () => {
    setLoading(true);
    try {
      const response = await jobsApi.initiateStripePayment(jobId);
      // Here you would typically use the Stripe.js library to handle the payment
      // using the clientSecret returned from the backend
      console.log('Payment initiated:', response.data.clientSecret);
      // Redirect to Stripe Checkout or handle the payment flow
    } catch (error) {
      console.error('Failed to initiate payment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleInitiatePayment}
      disabled={loading}
    >
      {loading ? <CircularProgress size={24} /> : 'Initiate Payment'}
    </Button>
  );
};

export default PaymentInitiation;
```

# src/components/pages/SettingsPage.tsx

```tsx
// src/components/pages/SettingsPage.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPricingVariables, updatePricingVariables } from '../../stores/pricingVariablesSlice';
import { PricingVariables } from '../../types/PricingVariables';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Typography, Button, TextField, Box } from '@mui/material';
import * as Yup from 'yup';

const PricingVariablesSchema = Yup.object().shape({
  warehouseAddress: Yup.string().required('Warehouse address is required'),
  baseDeliveryFee: Yup.number().required('Base delivery fee is required'),
  deliveryFeePerMile: Yup.number().required('Delivery fee per mile is required'),
  baseInstallFee: Yup.number().required('Base install fee is required'),
  installFeePerComponent: Yup.number().required('Install fee per component is required'),
  rentalRatePerFt: Yup.number().required('Rental rate per ft is required'),
});

const SettingsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { variables, loading } = useAppSelector((state) => state.pricingVariables);

  useEffect(() => {
    dispatch(fetchPricingVariables());
  }, [dispatch]);

  if (loading || !variables) {
    return (
      <Container className="flex justify-center items-center h-screen">
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  const handleSubmit = (values: PricingVariables) => {
    dispatch(updatePricingVariables(values));
  };

  return (
    <Container className="mt-8">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Formik
        initialValues={variables}
        validationSchema={PricingVariablesSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mb={2}>
              <Field
                name="warehouseAddress"
                as={TextField}
                label="Warehouse Address"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="warehouseAddress">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="baseDeliveryFee"
                as={TextField}
                label="Base Delivery Fee"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="baseDeliveryFee">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="deliveryFeePerMile"
                as={TextField}
                label="Delivery Fee Per Mile"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="deliveryFeePerMile">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="baseInstallFee"
                as={TextField}
                label="Base Install Fee"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="baseInstallFee">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="installFeePerComponent"
                as={TextField}
                label="Install Fee Per Component"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="installFeePerComponent">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={2}>
              <Field
                name="rentalRatePerFt"
                as={TextField}
                label="Rental Rate Per Ft"
                type="number"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="rentalRatePerFt">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Save Settings
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SettingsPage;
```

# src/components/pages/RentalRequestsList.tsx

```tsx
// src/components/pages/RentalRequestsList.tsx

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchRentalRequests } from '../../stores/rentalRequestsSlice';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
  Grid,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';
import { formatDate } from '../../utils/formatDate';
import { RentalRequest } from '../../types/RentalRequest';

type SortField = 'createdAt' | 'customerName' | 'status';
type SortOrder = 'asc' | 'desc';

const RentalRequestsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rentalRequests, loading, error } = useAppSelector((state) => state.rentalRequests);

  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [statusFilter, setStatusFilter] = useState<string>('pending');

  useEffect(() => {
    dispatch(fetchRentalRequests());
  }, [dispatch]);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  const sortRequests = (requests: RentalRequest[]): RentalRequest[] => {
    return [...requests].sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'createdAt':
          comparison = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          break;
        case 'customerName':
          comparison = `${a.customerInfo.lastName} ${a.customerInfo.firstName}`.localeCompare(
            `${b.customerInfo.lastName} ${b.customerInfo.firstName}`
          );
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  };

  const filterRequests = (requests: RentalRequest[]): RentalRequest[] => {
    if (statusFilter === 'all') return [...requests];
    return requests.filter((request) => request.status === statusFilter);
  };

  const sortedAndFilteredRequests = sortRequests(filterRequests(rentalRequests));

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Rental Requests
      </Typography>
      <Box mb={2}>
        <FormControl variant="outlined" size="small" style={{ minWidth: 120, marginRight: 16 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortField}
            onChange={(e) => setSortField(e.target.value as SortField)}
            label="Sort By"
          >
            <MenuItem value="createdAt">Date</MenuItem>
            <MenuItem value="customerName">Customer Name</MenuItem>
            <MenuItem value="status">Status</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small" style={{ minWidth: 120, marginRight: 16 }}>
          <InputLabel>Order</InputLabel>
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            label="Order"
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small" style={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            label="Status"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="job created">Job Created</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2}>
        {sortedAndFilteredRequests.map((request) => (
          <Grid item xs={12} sm={6} md={4} key={request._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {request.customerInfo.lastName}, {request.customerInfo.firstName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {request.installAddress}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Received At: {formatDate(request.createdAt)}
                </Typography>
                <Chip
                  label={request.status}
                  color={
                    request.status === 'pending'
                      ? 'warning'
                      : request.status === 'job created'
                      ? 'success'
                      : 'error'
                  }
                  style={{ marginTop: '8px' }}
                />
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={`/rental-requests/${request._id}`}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RentalRequestsList;
```

# src/components/pages/RentalRequestDetails.tsx

```tsx
// src/components/pages/RentalRequestDetails.tsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { rentalRequestsApi } from '../../services/api';
import { RentalRequest } from '../../types/RentalRequest';
import {
  Container,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Chip,
  Box,
} from '@mui/material';
import { formatDate } from '../../utils/formatDate';

const RentalRequestDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [rentalRequest, setRentalRequest] = useState<RentalRequest | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRentalRequest = async () => {
      try {
        const response = await rentalRequestsApi.getById(id!);
        setRentalRequest(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to load rental request');
      } finally {
        setIsLoading(false);
      }
    };
    fetchRentalRequest();
  }, [id]);

  const handleCreateJob = async () => {
    if (!rentalRequest) return;

    try {
      await rentalRequestsApi.updateStatus(rentalRequest._id, 'job created');
      const response = await rentalRequestsApi.createJobFromRentalRequest(rentalRequest._id);
      navigate(`/jobs/${response.data._id}`);
    } catch (err: any) {
      console.error('Failed to create job from rental request', err);
      setError(err.response?.data?.message || 'Failed to create job');
    }
  };

  const handleRejectRequest = async () => {
    if (!rentalRequest) return;

    try {
      await rentalRequestsApi.updateStatus(rentalRequest._id, 'rejected');
      // Refresh the rental request data
      const response = await rentalRequestsApi.getById(rentalRequest._id);
      setRentalRequest(response.data);
    } catch (err: any) {
      console.error('Failed to reject rental request', err);
      setError(err.response?.data?.message || 'Failed to reject request');
    }
  };

  if (isLoading) {
    return (
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error || !rentalRequest) {
    return (
      <Container style={{ marginTop: '16px' }}>
        <Typography variant="h6" color="error">
          {error || 'Rental request not found'}
        </Typography>
      </Container>
    );
  }

  return (
    <Container style={{ paddingBottom: '16px' }}>
      <Typography variant="h5" gutterBottom>
        Rental Request Details
      </Typography>

      <List disablePadding>
        {/* Customer Information */}
        <ListItem>
          <ListItemText
            primary="Customer Name"
            secondary={`${rentalRequest.customerInfo.firstName} ${rentalRequest.customerInfo.lastName}`}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Email" secondary={rentalRequest.customerInfo.email} />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Phone" secondary={rentalRequest.customerInfo.phone} />
        </ListItem>
        <Divider component="li" />

        {/* Installation Details */}
        <ListItem>
          <ListItemText primary="Install Address" secondary={rentalRequest.installAddress} />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Install Timeframe" secondary={rentalRequest.rampDetails.installTimeframe} />
        </ListItem>
        <Divider component="li" />

        {/* Ramp Details */}
        <ListItem>
          <ListItemText
            primary="Knows Ramp Length"
            secondary={rentalRequest.rampDetails.knowRampLength ? 'Yes' : 'No'}
          />
        </ListItem>
        <Divider component="li" />
        {rentalRequest.rampDetails.rampLength && (
          <>
            <ListItem>
              <ListItemText
                primary="Ramp Length"
                secondary={`${rentalRequest.rampDetails.rampLength} feet`}
              />
            </ListItem>
            <Divider component="li" />
          </>
        )}
        <ListItem>
          <ListItemText
            primary="Knows Rental Duration"
            secondary={rentalRequest.rampDetails.knowRentalDuration ? 'Yes' : 'No'}
          />
        </ListItem>
        <Divider component="li" />
        {rentalRequest.rampDetails.rentalDuration && (
          <>
            <ListItem>
              <ListItemText
                primary="Rental Duration"
                secondary={`${rentalRequest.rampDetails.rentalDuration} days`}
              />
            </ListItem>
            <Divider component="li" />
          </>
        )}

        {/* Mobility Aids */}
        <ListItem>
          <ListItemText primary="Mobility Aids" />
        </ListItem>
        <ListItem>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {rentalRequest.rampDetails.mobilityAids.map((aid, index) => (
              <Chip key={index} label={aid} />
            ))}
          </Box>
        </ListItem>
        <Divider component="li" />

        {/* Status and Sales Stage */}
        <ListItem>
          <ListItemText primary="Request Status" />
          <Chip
            label={rentalRequest.status.toUpperCase()}
            color={
              rentalRequest.status === 'pending'
                ? 'warning'
                : rentalRequest.status === 'job created'
                ? 'success'
                : 'error'
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Sales Stage" />
          <Chip label={rentalRequest.salesStage} />
        </ListItem>
        <Divider component="li" />

        {/* Dates */}
        <ListItem>
          <ListItemText primary="Created At" secondary={formatDate(rentalRequest.createdAt)} />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Last Updated" secondary={formatDate(rentalRequest.updatedAt)} />
        </ListItem>
      </List>

      <Box mt={2} display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          color="primary"
          style={{ flex: 1, marginRight: '8px' }}
          onClick={handleCreateJob}
          disabled={rentalRequest.status !== 'pending'}
        >
          {rentalRequest.status === 'job created' ? 'Job Already Created' : 'Create Job'}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ flex: 1, marginLeft: '8px' }}
          onClick={handleRejectRequest}
          disabled={rentalRequest.status !== 'pending'}
        >
          Reject Request
        </Button>
      </Box>
    </Container>
  );
};

export default RentalRequestDetails;
```

# src/components/pages/JobsList.tsx

```tsx
import React, { useEffect, useState } from 'react';
import { jobsApi } from '../../services/api';
import { Job, JobStage } from '../../types/Job';
import {
  Container,
  Typography,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

type SortField = 'createdAt' | 'customerName' | 'stage';
type SortOrder = 'asc' | 'desc';

const JobsList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [stageFilter, setStageFilter] = useState<JobStage | 'ALL'>('ALL');
  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc'); // Changed to 'asc'
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await jobsApi.getAll();
        setJobs(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to load jobs');
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const sortJobs = (jobsToSort: Job[]): Job[] => {
    return [...jobsToSort].sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'createdAt':
          comparison = new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
          break;
        case 'customerName':
          comparison = `${a.customerInfo?.lastName} ${a.customerInfo?.firstName}`.localeCompare(
            `${b.customerInfo?.lastName} ${b.customerInfo?.firstName}`
          );
          break;
        case 'stage':
          comparison = a.stage.localeCompare(b.stage);
          break;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  };

  const filterJobs = (jobsToFilter: Job[]): Job[] => {
    if (stageFilter === 'ALL') return jobsToFilter;
    return jobsToFilter.filter((job) => job.stage === stageFilter);
  };

  const sortedAndFilteredJobs = sortJobs(filterJobs(jobs));

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Jobs List
      </Typography>
      <Box mb={2}>
        <FormControl variant="outlined" size="small" style={{ minWidth: 120, marginRight: 16 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortField}
            onChange={(e) => setSortField(e.target.value as SortField)}
            label="Sort By"
          >
            <MenuItem value="createdAt">Date</MenuItem>
            <MenuItem value="customerName">Customer Name</MenuItem>
            <MenuItem value="stage">Stage</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small" style={{ minWidth: 120, marginRight: 16 }}>
          <InputLabel>Order</InputLabel>
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            label="Order"
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small" style={{ minWidth: 120 }}>
          <InputLabel>Stage</InputLabel>
          <Select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value as JobStage | 'ALL')}
            label="Stage"
          >
            <MenuItem value="ALL">All Stages</MenuItem>
            {Object.values(JobStage).map((stage) => (
              <MenuItem key={stage} value={stage}>
                {stage}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3}>
        {sortedAndFilteredJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {job.customerInfo?.lastName}, {job.customerInfo?.firstName}
                </Typography>
                <Typography color="textSecondary">
                  Address: {job.customerInfo?.installAddress}
                </Typography>
                <Typography color="textSecondary">
                  Created: {job.createdAt ? new Date(job.createdAt).toLocaleString() : 'N/A'}
                </Typography>
                <Typography color="textSecondary">
                  Stage: {job.stage}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => navigate(`/jobs/${job._id}`)}>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobsList;
```

# src/components/pages/JobDetails.tsx

```tsx
// src/components/pages/JobDetails.tsx

import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchJob, updateJobStage, deleteJob, updateJob } from '../../stores/jobsSlice';
import { JobStage, Job, QuoteStatus, AgreementStatus } from '../../types/Job';
import {
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
  Snackbar,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from '@mui/material';
import PaymentInitiation from '../stripe/PaymentInitiation';
import DocumentSigning from '../eSignatures/DocumentSigning';

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentJob, isLoading, error } = useAppSelector((state) => state.jobs);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'error' | 'warning' | 'info' | 'success'>('error');

  // State for Editable Fields
  const [stage, setStage] = useState<JobStage | ''>('');
  const [quotePaidOn, setQuotePaidOn] = useState<string>('');
  const [agreementSignedOn, setAgreementSignedOn] = useState<string>('');
  const [quoteStatus, setQuoteStatus] = useState<QuoteStatus>(QuoteStatus.NOT_SENT);
  const [agreementStatus, setAgreementStatus] = useState<AgreementStatus>(AgreementStatus.NOT_SENT);

  // Fetch Job Details
  const fetchJobDetails = useCallback(async () => {
    if (id) {
      await dispatch(fetchJob(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    fetchJobDetails();
  }, [fetchJobDetails]);

  // Update Local State when Job Data is Fetched
  useEffect(() => {
    if (currentJob) {
      setStage(currentJob.stage);
      setQuotePaidOn(currentJob.quotePaidOn || '');
      setAgreementSignedOn(currentJob.agreementSignedOn || '');
      setQuoteStatus(currentJob.quoteStatus || QuoteStatus.NOT_SENT);
      setAgreementStatus(currentJob.agreementStatus || AgreementStatus.NOT_SENT);
    }
  }, [currentJob]);

  const handleSendQuote = async () => {
    if (currentJob && currentJob._id) {
      try {
        await dispatch(updateJobStage({ id: currentJob._id, stage: JobStage.QUOTE_SENT })).unwrap();
        setSnackbarMessage('Quote sent successfully');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } catch (error) {
        setSnackbarMessage('Failed to send quote');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } else {
      setSnackbarMessage('Cannot send quote: Job ID is missing');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleEditJob = () => {
    if (currentJob && currentJob._id) {
      navigate(`/jobs/edit/${currentJob._id}`);
    } else {
      setSnackbarMessage('Cannot edit job: Job ID is missing');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleDeleteJob = async () => {
    if (currentJob && currentJob._id) {
      try {
        await dispatch(deleteJob(currentJob._id)).unwrap();
        navigate('/jobs');
      } catch (error) {
        setSnackbarMessage('Failed to delete job');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    } else {
      setSnackbarMessage('Cannot delete job: Job ID is missing');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
    setDeleteDialogOpen(false);
  };

  const handleOpenDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  // Handle Save Changes for Stage, Dates, and Statuses
  const handleSaveChanges = async () => {
    if (!currentJob) return;

    const updatedData: Partial<Job> = {
      stage: stage || currentJob.stage,
      quotePaidOn: quotePaidOn || undefined,
      agreementSignedOn: agreementSignedOn || undefined,
      quoteStatus,
      agreementStatus,
    };

    try {
      await dispatch(updateJob({ _id: currentJob._id, ...updatedData })).unwrap();
      setSnackbarMessage('Job details updated successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (err: any) {
      setSnackbarMessage('Failed to update job details');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  if (isLoading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error || !currentJob) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error || 'Job not found'}
        </Typography>
      </Container>
    );
  }

  const formatCurrency = (value: number | undefined) => 
    value !== undefined ? `$${value.toFixed(2)}` : 'N/A';

  const renderRampComponents = (components: Array<{type: string, size: string, quantity: number}>) => {
    return components.map((component, index) => (
      <Typography key={index}>
        {component.quantity} x {component.type} ({component.size})
      </Typography>
    ));
  };

  const formatDate = (date: string | null) => {
    if (!date) return 'Not set';
    return new Date(date).toLocaleString();
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Job Details
        </Typography>

        <Grid container spacing={3}>
          {/* Customer Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Customer Information</Typography>
            <Typography>Name: {currentJob.customerInfo?.firstName} {currentJob.customerInfo?.lastName}</Typography>
            <Typography>Phone: {currentJob.customerInfo?.phone}</Typography>
            <Typography>Email: {currentJob.customerInfo?.email}</Typography>
            <Typography>Install Address: {currentJob.customerInfo?.installAddress}</Typography>
            <Typography>Mobility Aids: {currentJob.customerInfo?.mobilityAids?.join(', ') || 'None specified'}</Typography>
            <Typography>Notes: {currentJob.customerInfo?.notes || 'None'}</Typography>
          </Grid>

          {/* Ramp Configuration */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Ramp Configuration</Typography>
            {currentJob.rampConfiguration?.components && renderRampComponents(currentJob.rampConfiguration.components)}
            <Typography>Total Length: {currentJob.rampConfiguration?.totalLength} ft</Typography>
          </Grid>

          {/* Pricing Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Pricing Details</Typography>
            <Typography>Delivery Fee: {formatCurrency(currentJob.pricing?.deliveryFee)}</Typography>
            <Typography>Install Fee: {formatCurrency(currentJob.pricing?.installFee)}</Typography>
            <Typography>Monthly Rate: {formatCurrency(currentJob.pricing?.monthlyRate)}</Typography>
            <Typography>Upfront Fee: {formatCurrency(currentJob.pricing?.upfrontFee)}</Typography>
          </Grid>

          {/* Installation Schedule */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Installation Schedule</Typography>
            <Typography>Date & Time: {formatDate(currentJob.installationSchedule?.date || null)}</Typography>
          </Grid>

          {/* Job Details and Editable Fields */}
          <Grid item xs={12}>
            <Typography variant="h6">Job Information</Typography>
            <Grid container spacing={2}>
              {/* Job ID and Stage Selector */}
              <Grid item xs={12} md={4}>
                <Typography>Job ID: {currentJob._id}</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth variant="outlined" size="small">
                  <InputLabel>Stage</InputLabel>
                  <Select
                    label="Stage"
                    value={stage}
                    onChange={(e) => setStage(e.target.value as JobStage)}
                  >
                    {Object.values(JobStage).map((stageOption) => (
                      <MenuItem key={stageOption} value={stageOption}>
                        {stageOption.replace(/([A-Z])/g, ' $1').trim()}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* Quote and Agreement Status */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined" size="small">
                  <InputLabel>Quote Status</InputLabel>
                  <Select
                    value={quoteStatus}
                    onChange={(e) => setQuoteStatus(e.target.value as QuoteStatus)}
                    label="Quote Status"
                  >
                    {Object.values(QuoteStatus).map((status) => (
                      <MenuItem key={status} value={status}>
                        {status.replace(/_/g, ' ')}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined" size="small">
                  <InputLabel>Agreement Status</InputLabel>
                  <Select
                    value={agreementStatus}
                    onChange={(e) => setAgreementStatus(e.target.value as AgreementStatus)}
                    label="Agreement Status"
                  >
                    {Object.values(AgreementStatus).map((status) => (
                      <MenuItem key={status} value={status}>
                        {status.replace(/_/g, ' ')}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* Quote Paid On and Agreement Signed On */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Quote Paid On"
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={quotePaidOn}
                  onChange={(e) => setQuotePaidOn(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Agreement Signed On"
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={agreementSignedOn}
                  onChange={(e) => setAgreementSignedOn(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* New fields for Stripe and eSignatures */}
          <Grid item xs={12}>
            <Typography variant="h6">Payment and Document Information</Typography>
            <Typography>Stripe Customer ID: {currentJob.stripeCustomerId || 'Not set'}</Typography>
            <Typography>Stripe Invoice ID: {currentJob.stripeInvoiceId || 'Not set'}</Typography>
            <Typography>eSignatures Document ID: {currentJob.eSignaturesDocumentId || 'Not set'}</Typography>
          </Grid>

          {/* Buttons for initiating payment and document signing */}
          <Grid item xs={12}>
            <PaymentInitiation jobId={currentJob._id!} />
            <DocumentSigning jobId={currentJob._id!} />
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Button variant="contained" color="primary" onClick={handleSendQuote} sx={{ mr: 2 }}>
              Send Quote
            </Button>
            <Button variant="contained" color="secondary" onClick={handleEditJob} sx={{ mr: 2 }}>
              Edit Job
            </Button>
            <Button variant="contained" color="error" onClick={handleOpenDeleteDialog}>
              Delete Job
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" color="success" onClick={handleSaveChanges} disabled={!id}>
              Save Changes
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Job"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this job? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteJob} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Notifications */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default JobDetails;
```

# src/components/pages/HomePage.tsx

```tsx
// src/components/pages/HomePage.tsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchRentalRequests } from '../../stores/rentalRequestsSlice';
import { formatDate } from '../../utils/formatDate';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rentalRequests, loading, error } = useAppSelector((state) => state.rentalRequests);

  useEffect(() => {
    dispatch(fetchRentalRequests());
  }, [dispatch]);

  // Filter pending rental requests
  const pendingRequests = rentalRequests.filter((request) => request.status === 'pending');

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Same Day Ramps - Dashboard
      </Typography>
      <Button
        component={Link}
        to="/rental-requests"
        variant="contained"
        color="primary"
        style={{ marginRight: '1rem' }}
      >
        View All Rental Requests
      </Button>
      <Button
        component={Link}
        to="/jobs"
        variant="contained"
        color="primary"
        style={{ marginRight: '1rem' }}
      >
        View Jobs
      </Button>
      <Button component={Link} to="/settings" variant="contained" color="primary">
        Settings
      </Button>

      <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
        Pending Rental Requests
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      ) : pendingRequests.length === 0 ? (
        <Typography>No pending rental requests.</Typography>
      ) : (
        <Grid container spacing={2}>
          {pendingRequests.map((request) => (
            <Grid item xs={12} sm={6} md={4} key={request._id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    {request.customerInfo.firstName} {request.customerInfo.lastName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {request.installAddress}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Received At: {formatDate(request.createdAt)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    component={Link}
                    to={`/rental-request/${request._id}`}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default HomePage;
```

# src/components/layout/MainLayout.tsx

```tsx
// src/components/layout/MainLayout.tsx

import React from 'react';
import Navbar from '../common/Navbar';
import { Box } from '@mui/material';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box component="main" mt={8}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
```

# src/components/jobs/SelectedComponents.tsx

```tsx
// src/components/jobs/SelectedComponents.tsx

import React from 'react';
import { Box, Typography, IconButton, TextField, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { RampComponent } from '../../types/Job';

interface Props {
  components: RampComponent[];
  onRemove: (index: number) => void;
  onQuantityChange: (index: number, quantity: number) => void;
}

const SelectedComponents: React.FC<Props> = ({ components, onRemove, onQuantityChange }) => {
  return (
    <Box mt={2}>
      <Typography variant="subtitle1" gutterBottom>Selected Components</Typography>
      <List dense>
        {components.map((component, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={`${component.type} (${component.size})`}
            />
            <TextField
              type="number"
              size="small"
              InputProps={{ inputProps: { min: 1 } }}
              value={component.quantity}
              onChange={(e) => {
                const quantity = parseInt(e.target.value, 10) || 1;
                onQuantityChange(index, quantity);
              }}
              style={{ width: '60px', marginRight: '8px' }}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => onRemove(index)} size="small">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SelectedComponents;
```

# src/components/jobs/RampConfigurationForm.tsx

```tsx
// src/components/jobs/RampConfigurationForm.tsx

import React, { useMemo } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography, Box } from '@mui/material';
import { RampConfiguration, RampComponent } from '../../types/Job';
import ComponentSelector from './ComponentSelector';
import SelectedComponents from './SelectedComponents';

interface Props {
  onSubmit: (values: RampConfiguration) => void;
  onBack: () => void;
  data?: RampConfiguration;
  installAddress: string;
}

const RampConfigurationSchema = Yup.object().shape({
  components: Yup.array()
    .of(
      Yup.object().shape({
        type: Yup.string().oneOf(['ramp', 'landing']).required('Required'),
        size: Yup.string().required('Required'),
        quantity: Yup.number().required('Required').min(1),
      })
    )
    .min(1, 'At least one component is required'),
  totalLength: Yup.number()
    .required('Required')
    .min(1, 'Total length must be at least 1 foot'),
});

const RampConfigurationForm: React.FC<Props> = ({ onSubmit, onBack, data, installAddress }) => {
  const initialValues = useMemo(() => ({
    components: data?.components || [],
    totalLength: data?.totalLength || 0,
  }), [data]);

  const handleSubmit = (values: RampConfiguration) => {
    console.log('Submitting ramp configuration:', values);
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RampConfigurationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isValid, isSubmitting }) => (
        <Form>
          <Box sx={{ '& > *': { mb: 2 } }}>
            <Typography variant="h6">Ramp Configuration</Typography>

            <ComponentSelector
              addComponent={(type, size) => {
                const updatedComponents = addComponentHelper(values.components, type, size);
                setFieldValue('components', updatedComponents);
                setFieldValue('totalLength', calculateTotalLength(updatedComponents));
              }}
            />

            <SelectedComponents
              components={values.components}
              onRemove={(index) => {
                const newComponents = [...values.components];
                newComponents.splice(index, 1);
                setFieldValue('components', newComponents);
                setFieldValue('totalLength', calculateTotalLength(newComponents));
                console.log('Updated components after removal:', newComponents);
              }}
              onQuantityChange={(index, quantity) => {
                const newComponents = [...values.components];
                newComponents[index].quantity = quantity;
                setFieldValue('components', newComponents);
                setFieldValue('totalLength', calculateTotalLength(newComponents));
                console.log('Updated components after quantity change:', newComponents);
              }}
            />

            <Field
              name="totalLength"
              as={TextField}
              label="Total Ramp Length (ft)"
              type="number"
              fullWidth
              variant="outlined"
              InputProps={{ inputProps: { readOnly: true } }}
            />
            <ErrorMessage name="totalLength">
              {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
            </ErrorMessage>

            <Box display="flex" justifyContent="space-between">
              <Button variant="contained" color="secondary" onClick={onBack}>
                Back
              </Button>
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                Next
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

function addComponentHelper(components: RampComponent[], type: 'ramp' | 'landing', size: string): RampComponent[] {
  const existingIndex = components.findIndex(
    (component) => component.type === type && component.size === size
  );
  if (existingIndex >= 0) {
    const updatedComponents = [...components];
    updatedComponents[existingIndex].quantity += 1;
    return updatedComponents;
  } else {
    return [...components, { type, size, quantity: 1 }];
  }
}

function calculateTotalLength(components: RampComponent[]): number {
  return components.reduce((total, component) => {
    if (component.type === 'ramp' && component.size) {
      const length = parseInt(component.size.replace('ft', ''), 10);
      return total + length * component.quantity;
    }
    return total;
  }, 0);
}

export default RampConfigurationForm;
```

# src/components/jobs/PricingForm.tsx

```tsx
// src/components/jobs/PricingForm.tsx

import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { RampConfiguration, Pricing } from '../../types/Job';
import usePricingCalculator from '../../hooks/usePricingCalculator';
import PricingEditor from './PricingEditor';
import { useAppSelector } from '../../hooks';

interface Props {
  onSubmit: (values: Pricing) => void;
  onBack: () => void;
  data?: RampConfiguration;
  installAddress: string;
}

const PricingForm: React.FC<Props> = ({
  onSubmit,
  onBack,
  data,
  installAddress,
}) => {
  const currentJob = useAppSelector((state) => state.jobs.currentJob);
  const { pricing, loading, error } = usePricingCalculator(currentJob?.rampConfiguration.components || [], installAddress);
  const [extendedData, setExtendedData] = useState<Pricing>({
    deliveryFee: 0,
    installFee: 0,
    monthlyRate: 0,
    upfrontFee: 0,
  });

  useEffect(() => {
    if (pricing) {
      setExtendedData(prevData => ({
        ...prevData,
        ...pricing,
      }));
    }
  }, [pricing]);

  const handleSubmit = () => {
    console.log('Submitting pricing data:', extendedData);
    onSubmit(extendedData);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Pricing Details</Typography>
      <PricingEditor
        loading={loading}
        error={error}
        pricing={pricing}
        isEditingPricing={false}
        values={extendedData}
        setFieldValue={(field, value) => {
          setExtendedData(prevData => ({
            ...prevData,
            [field]: value,
          }));
        }}
      />
      <Box mt={3} display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PricingForm;
```

# src/components/jobs/PricingEditor.tsx

```tsx
import React from 'react';
import { TextField, Grid, Box } from '@mui/material';
import { Pricing } from '../../types/Job';

interface Props {
  loading: boolean;
  error: string | null;
  pricing: Pricing | null;
  isEditingPricing: boolean;
  values: Pricing;
  setFieldValue: (field: string, value: any) => void;
}

const PricingEditor: React.FC<Props> = ({
  loading,
  error,
  pricing,
  isEditingPricing,
  values,
  setFieldValue,
}) => {
  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (!pricing) {
    return null;
  }

  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <TextField
            name="deliveryFee"
            label="Delivery Fee"
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{ readOnly: !isEditingPricing }}
            value={isEditingPricing ? values.deliveryFee : pricing.deliveryFee}
            onChange={(e) => {
              if (isEditingPricing) {
                setFieldValue('deliveryFee', parseInt(e.target.value));
              }
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            name="installFee"
            label="Install Fee"
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{ readOnly: !isEditingPricing }}
            value={isEditingPricing ? values.installFee : pricing.installFee}
            onChange={(e) => {
              if (isEditingPricing) {
                setFieldValue('installFee', parseInt(e.target.value));
              }
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            name="upfrontFee"
            label="Upfront Fee"
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{ readOnly: !isEditingPricing }}
            value={isEditingPricing ? values.upfrontFee : pricing.upfrontFee}
            onChange={(e) => {
              if (isEditingPricing) {
                setFieldValue('upfrontFee', parseInt(e.target.value));
              }
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            name="monthlyRate"
            label="Rental Rate"
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{ readOnly: !isEditingPricing }}
            value={isEditingPricing ? values.monthlyRate : pricing.monthlyRate}
            onChange={(e) => {
              if (isEditingPricing) {
                setFieldValue('monthlyRate', parseInt(e.target.value));
              }
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingEditor;
```

# src/components/jobs/JobSummary.tsx

```tsx
// src/components/jobs/JobSummary.tsx

import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/store';

interface Props {
  onBack: () => void;
  onSubmit: () => void;
}

const JobSummary: React.FC<Props> = ({ onBack, onSubmit }) => {
  const currentJob = useSelector((state: RootState) => {
    const job = state.jobs.currentJob;
    console.log('Reading currentJob from store:', job);
    return job;
  });

  if (!currentJob) {
    return <Typography>No job data available</Typography>;
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Job Summary</Typography>
      
      <Box mb={3}>
        <Typography variant="subtitle1">Customer Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Name: {currentJob.customerInfo?.firstName} {currentJob.customerInfo?.lastName}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Phone: {currentJob.customerInfo?.phone}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Email: {currentJob.customerInfo?.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Address: {currentJob.customerInfo?.installAddress}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Mobility Aids: {currentJob.customerInfo?.mobilityAids?.join(', ') || 'None'}</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1">Ramp Configuration</Typography>
        <Grid container spacing={2}>
          {currentJob.rampConfiguration?.components.map((component, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant="body2">
                {component.quantity} x {component.type} ({component.size})
              </Typography>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="body2">Total Length: {currentJob.rampConfiguration?.totalLength} ft</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1">Pricing</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Delivery Fee: ${currentJob.pricing?.deliveryFee}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Install Fee: ${currentJob.pricing?.installFee}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Rental Rate: ${currentJob.pricing?.monthlyRate}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">Upfront Fee: ${currentJob.pricing?.upfrontFee}</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Submit Job
        </Button>
      </Box>
    </Box>
  );
};

export default JobSummary;
```

# src/components/jobs/JobCreationWizard.tsx

```tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createJob, updateJob, fetchJob } from '../../stores/jobsSlice';
import { Container, Paper, Box, Stepper, Step, StepLabel, Typography, CircularProgress, Snackbar } from '@mui/material';
import CustomerInfoForm from './CustomerInfoForm';
import RampConfigurationForm from './RampConfigurationForm';
import PricingForm from './PricingForm';
import JobSummary from './JobSummary';
import { Job, JobStage, CustomerInfo, RampConfiguration, Pricing } from '../../types/Job';

const steps = ['Customer Information', 'Ramp Configuration', 'Pricing', 'Summary'];

const JobCreationWizard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentJob, isLoading, error } = useAppSelector((state) => state.jobs);

  const [currentStep, setCurrentStep] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [tempJob, setTempJob] = useState<Partial<Job> | null>(null);

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      dispatch(fetchJob(id));
    } else {
      // Initialize a temporary job object instead of creating one in the database
      setTempJob({ stage: JobStage.REQUESTED });
    }
  }, [dispatch, id]);

  const handleStepCompletion = async (stepData: Partial<Job>) => {
    if (isEditMode && currentJob && currentJob._id) {
      try {
        await dispatch(updateJob({ _id: currentJob._id, ...stepData })).unwrap();
        setCurrentStep((prevStep) => prevStep + 1);
      } catch (error) {
        console.error('Failed to update job:', error);
        setErrorMessage('Failed to update job. Please try again.');
      }
    } else {
      // Update the temporary job object
      setTempJob((prev) => ({ ...prev, ...stepData }));
      if (currentStep === 0) {
        // Customer info form is completed, now create the job in the database
        try {
          const newJob = await dispatch(createJob(tempJob as Job)).unwrap();
          setIsEditMode(true);
          // Update the current job with the newly created job
          if (newJob._id) {
            dispatch(fetchJob(newJob._id));
          } else {
            throw new Error('New job created without an ID');
          }
        } catch (error) {
          console.error('Failed to create job:', error);
          setErrorMessage('Failed to create job. Please try again.');
        }
      }
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (currentJob) {
      navigate(`/jobs/${currentJob._id}`);
    }
  };

  if (isLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  const jobData = isEditMode ? currentJob : tempJob;

  if (!jobData) {
    return (
      <Container>
        <Typography variant="h6">Initializing job...</Typography>
      </Container>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <CustomerInfoForm
            onSubmit={(values: CustomerInfo) => handleStepCompletion({ customerInfo: values })}
            data={jobData.customerInfo}
          />
        );
      case 1:
        return (
          <RampConfigurationForm
            onSubmit={(values: RampConfiguration) => handleStepCompletion({ rampConfiguration: values })}
            onBack={handleBack}
            data={jobData.rampConfiguration}
            installAddress={jobData.customerInfo?.installAddress || ''}
          />
        );
      case 2:
        return (
          <PricingForm
            onSubmit={(values: Pricing) => handleStepCompletion({ pricing: values })}
            onBack={handleBack}
            data={jobData.rampConfiguration}
            installAddress={jobData.customerInfo?.installAddress || ''}
          />
        );
      case 3:
        return (
          <JobSummary
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={4}>
        <Paper elevation={3}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              {isEditMode ? 'Edit Job' : 'Create New Job'}
            </Typography>
            <Stepper activeStep={currentStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box mt={4}>
              {renderStep()}
            </Box>
          </Box>
        </Paper>
      </Box>
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={() => setErrorMessage(null)}
        message={errorMessage}
      />
    </Container>
  );
};

export default JobCreationWizard;
```

# src/components/jobs/CustomerInfoForm.tsx

```tsx
// src/components/jobs/CustomerInfoForm.tsx

import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography } from '@mui/material';
import { CustomerInfo } from '../../types/Job';
import GoogleAddressAutofill from '../common/GoogleAddressAutofill';

interface Props {
  onSubmit: (values: CustomerInfo) => void;
  data?: CustomerInfo;
}

const CustomerInfoSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  installAddress: Yup.string().required('Required'),
  // Add validation for mobilityAids and notes if necessary
});

const CustomerInfoForm: React.FC<Props> = ({ onSubmit, data }) => {
  const initialValues: CustomerInfo = {
    firstName: data?.firstName || '',
    lastName: data?.lastName || '',
    phone: data?.phone || '',
    email: data?.email || '',
    installAddress: data?.installAddress || '',
    mobilityAids: data?.mobilityAids || [],
    notes: data?.notes || '',
  };

  const handleSubmit = (values: CustomerInfo, actions: FormikHelpers<CustomerInfo>) => {
    console.log('Submitting customer info:', values);
    onSubmit(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={CustomerInfoSchema} onSubmit={handleSubmit}>
      {({ isSubmitting, setFieldValue, values }) => (
        <Form>
          <Typography variant="h6">Customer Information</Typography>
          <Field name="firstName" as={TextField} label="First Name" fullWidth margin="normal" />
          <ErrorMessage name="firstName">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          <Field name="lastName" as={TextField} label="Last Name" fullWidth margin="normal" />
          <ErrorMessage name="lastName">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          <Field name="phone" as={TextField} label="Phone" fullWidth margin="normal" />
          <ErrorMessage name="phone">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          <Field name="email" as={TextField} label="Email" fullWidth margin="normal" />
          <ErrorMessage name="email">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          <GoogleAddressAutofill
            value={values.installAddress || ''}
            onChange={(value) => setFieldValue('installAddress', value)}
            label="Install Address"
            fullWidth
            margin="normal"
          />
          <ErrorMessage name="installAddress">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>

          {/* Mobility Aids and Notes can be added here */}

          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomerInfoForm;
```

# src/components/jobs/ComponentSelector.tsx

```tsx
import React from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';

interface Props {
  addComponent: (type: 'ramp' | 'landing', size: string) => void;
}

const ComponentSelector: React.FC<Props> = ({ addComponent }) => {
  const rampOptions = ['4ft', '5ft', '6ft', '7ft', '8ft'];
  const landingOptions = ['5x5ft', '5x4ft', '5x8ft'];

  return (
    <Box mt={2}>
      <Typography variant="subtitle1" gutterBottom>Add Components</Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="subtitle2">Ramps</Typography>
        </Grid>
        {rampOptions.map((option) => (
          <Grid item xs={4} sm={2} key={option}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              size="small"
              onClick={() => addComponent('ramp', option)}
            >
              {option}
            </Button>
          </Grid>
        ))}
        <Grid item xs={12} style={{ marginTop: '8px' }}>
          <Typography variant="subtitle2">Landings</Typography>
        </Grid>
        {landingOptions.map((option) => (
          <Grid item xs={4} key={option}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              size="small"
              onClick={() => addComponent('landing', option)}
            >
              {option}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ComponentSelector;
```

# src/components/forms/RentalRequestForm.tsx

```tsx
// src/components/forms/RentalRequestForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { rentalRequestsApi } from '../../services/api';
import { RentalRequest } from '../../types/RentalRequest';
import { Container, Button, Typography, TextField } from '@mui/material';

const RentalRequestSchema = Yup.object().shape({
  customerInfo: Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
  }),
  rampDetails: Yup.object().shape({
    knowRampLength: Yup.boolean().required(),
    rampLength: Yup.number().when('knowRampLength', {
      is: true,
      then: (schema) => schema.required('Ramp length is required'),
      otherwise: (schema) => schema.notRequired(),
    }),
    knowRentalDuration: Yup.boolean().required(),
    rentalDuration: Yup.number().when('knowRentalDuration', {
      is: true,
      then: (schema) => schema.required('Rental duration is required'),
      otherwise: (schema) => schema.notRequired(),
    }),
    installTimeframe: Yup.string().required('Install timeframe is required'),
    mobilityAids: Yup.array().of(Yup.string()),
  }),
  installAddress: Yup.string().required('Installation address is required'),
});

const RentalRequestForm: React.FC = () => {
  const initialValues: Omit<RentalRequest, '_id' | 'status' | 'salesStage' | 'createdAt' | 'updatedAt'> = {
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    rampDetails: {
      knowRampLength: false,
      rampLength: undefined,
      knowRentalDuration: false,
      rentalDuration: undefined,
      installTimeframe: '',
      mobilityAids: [],
    },
    installAddress: '',
  };

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting, resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    try {
      await rentalRequestsApi.create(values);
      resetForm();
      // Notify success
    } catch (error) {
      // Handle error
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Submit Rental Request</Typography>
      <Formik initialValues={initialValues} validationSchema={RentalRequestSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <h2>Customer Information</h2>
            <Field
              name="customerInfo.firstName"
              as={TextField}
              label="First Name"
              fullWidth
              margin="normal"
            />
            <ErrorMessage name="customerInfo.firstName">
              {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
            </ErrorMessage>

            {/* Repeat for other fields */}
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Submit Rental Request
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RentalRequestForm;
```

# src/components/eSignatures/DocumentSigning.tsx

```tsx
import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { jobsApi } from '../../services/api';

interface Props {
  jobId: string;
}

const DocumentSigning: React.FC<Props> = ({ jobId }) => {
  const [loading, setLoading] = useState(false);

  const handleInitiateSigning = async () => {
    setLoading(true);
    try {
      const response = await jobsApi.initiateESignaturesSigning(jobId);
      // Redirect the user to the signing URL
      window.location.href = response.data.signingUrl;
    } catch (error) {
      console.error('Failed to initiate document signing:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleInitiateSigning}
      disabled={loading}
    >
      {loading ? <CircularProgress size={24} /> : 'Sign Document'}
    </Button>
  );
};

export default DocumentSigning;
```

# src/components/common/Navbar.tsx

```tsx
// src/components/common/Navbar.tsx

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Rental Requests', path: '/rental-requests' },
    { text: 'Jobs', path: '/jobs' },
    { text: 'Create Job', path: '/jobs/new' },
    { text: 'Settings', path: '/settings' },
  ];

  // Get the current page title based on the path
  const currentRoute = menuItems.find((item) => item.path === location.pathname);
  const pageTitle = currentRoute ? currentRoute.text : 'Same Day Ramps';

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton edge="start" color="primary" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'left' }}>
                {pageTitle}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
                {pageTitle}
              </Typography>
              <Box>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    color="primary"
                    onClick={() => navigate(item.path)}
                    style={{ marginLeft: '1rem' }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <List style={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                  setDrawerOpen(false);
                }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
```

# src/components/common/GoogleAddressAutofill.tsx

```tsx
/// <reference types="google.maps" />

import React, { useRef, useEffect } from 'react';
import { TextField } from '@mui/material';
import { loadGoogleMapsApi } from '../../utils/loadGoogleMapsApi';

interface GoogleAddressAutofillProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
}

const GoogleAddressAutofill: React.FC<GoogleAddressAutofillProps> = ({ value, onChange, label, fullWidth = true, margin = 'normal' }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const initializeAutocomplete = async () => {
      try {
        await loadGoogleMapsApi(process.env.REACT_APP_MAP_API_KEY || '');
        if (!inputRef.current) return;

        const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
          types: ['address'],
          componentRestrictions: { country: 'us' }, // Restrict to US addresses
        });

        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (place.formatted_address) {
            onChange(place.formatted_address);
          }
        });
      } catch (error) {
        console.error('Failed to load Google Maps API', error);
      }
    };

    initializeAutocomplete();
  }, [onChange]);

  return (
    <TextField
      inputRef={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label={label}
      fullWidth={fullWidth}
      margin={margin}
    />
  );
};

export default GoogleAddressAutofill;
```

# src/components/common/ErrorNotification.tsx

```tsx
import React, { useContext } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';
import { Snackbar, Alert } from '@mui/material';

const ErrorNotification: React.FC = () => {
  const { error, setError } = useContext(ErrorContext);

  const handleClose = () => {
    setError(null);
  };

  return (
    <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default ErrorNotification;
```

