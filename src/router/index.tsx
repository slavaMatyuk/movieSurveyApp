import React, { FC, ReactElement } from 'react';
import { Route, unstable_HistoryRouter as Router, Routes, Navigate } from 'react-router-dom';
import { Navigator } from '@services/navigatorService';
import { AppWrapper } from '@components/AppWrapper';
import { RouteNames } from '@constants/routeNames';
import { Main } from '@pages/Main';
import { Result } from '@pages/Result';

export const AppRouter: FC = (): ReactElement => (
  <Router history={Navigator.history}>
    <AppWrapper>
      <Routes>
        <Route path={RouteNames.MAIN} element={<Main />} />
        <Route path={RouteNames.RESULT} element={<Result />} />
        <Route path={RouteNames.ANY} element={<Navigate to={RouteNames.MAIN} />} />
      </Routes>
    </AppWrapper>
  </Router>
);
