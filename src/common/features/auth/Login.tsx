import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid2 } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { useLogin } from '../lib/useLogin';

export type LoginData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const Login = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const formik = useLogin();

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Grid2 container justifyContent={'center'} component="div">
      <Grid2 justifyContent="center" component="div">
        <FormControl>
          <FormLabel>
            <p>
              To log in get registered
              <a href={'https://social-network.samuraijs.com/'} target={'_blank'} rel="noreferrer">
                here
              </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>
          </FormLabel>
          <form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <TextField
                label="Email"
                margin="normal"
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
                {...formik.getFieldProps('email')}
              />

              <TextField
                type="password"
                label="Password"
                margin="normal"
                error={formik.touched.password && !!formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
                {...formik.getFieldProps('password')}
              />

              <FormControlLabel
                label={'Remember me'}
                control={
                  <Checkbox
                    name="rememberMe"
                    checked={formik.values.rememberMe}
                    onChange={formik.handleChange}
                  />
                }
              />
              <Button type={'submit'} variant={'contained'} color={'primary'}>
                Login
              </Button>
            </FormGroup>
          </form>
        </FormControl>
      </Grid2>
    </Grid2>
  );
};
