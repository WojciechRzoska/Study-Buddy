import React from 'react';
import styles from './Root.module.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import { useError } from 'hooks/useError';
import Notes from './Notes';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Navigate to="/group" />} />
          <Route path="/group" element={<Dashboard />}>
            <Route path=":id" element={<Dashboard />} />
          </Route>
          <Route path="/notes" element={<Notes />}></Route>
        </Routes>
      </div>
    </MainTemplate>
  );
};

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <FormField label="login" name="login" id="login" {...register('login')} />
      <FormField
        label="password"
        name="password"
        id="password"
        type="password"
        {...register('password')}
      />
      <Button type="submit">Sign in</Button>
    </form>
  );
};
const Root = () => {
  const auth = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
