import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startAppAction } from '@store/actions/startApp';
import { isAppReadySelector } from '@store/selectors/startApp';
import { AppRouter } from './router';
import * as Styled from './App.styles';

const App: FC = () => {
  const dispatch = useDispatch();
  const isAppReady = useSelector(isAppReadySelector);

  useEffect(() => {
    dispatch(startAppAction.request());
  }, [dispatch]);
  return (
    <>
      <Styled.GlobalStyles />
      {isAppReady && <AppRouter />}
    </>
  );
};

export default App;
