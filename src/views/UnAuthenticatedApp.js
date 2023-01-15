import Button from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './UnAuthenticatedApp.module.scss';

const UnAuthenticatedApp = () => {
  const auth = useAuth();
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(auth.signIn)} className={styles.formWrapper}>
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

export default UnAuthenticatedApp;
