import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { API_URL } from "../../../config";
import { Alert } from "react-bootstrap";
import Loader from "../../common/Loader/Loader";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/dataRedux";
import { Navigate } from "react-router-dom";

const Login = () => {

  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ login, password })
    };

    setStatus('loading');
    fetch(`${API_URL}/auth/login`, options)
      .then(res => {
        if (res.status === 200) {
          setStatus('success');
          dispatch(logIn({ login }));
        } else if (res.status === 400) {
          setStatus('clientError');
        } else {
          setStatus('serverError');
        }
      })
      .catch(err => {
        setStatus('serverError');
      });
  };

  if (status === 'success') return <Navigate to='/' />
  return (
    <Form className='col-12 col-sm-3 mx-auto' onSubmit={handleSubmit}>

      <h1 className='my-4'>Sign in</h1>

      { status === 'serverError' && (
        <Alert variant='danger'>
          <Alert.Heading>Something went wrong...</Alert.Heading>
          <p>Unexpected error... Try again!</p>
        </Alert>
      )}

      { status === 'clientError' && (
        <Alert variant='danger'>
          <Alert.Heading>Incorrect data</Alert.Heading>
          <p>Login or password are incorrect...</p>
        </Alert>
      )}

      { status === 'loading' && (
        <Loader />
      )}

      <Form.Group className='mb-3' controlId='formLogin'>
        <Form.Label>Login</Form.Label>
        <Form.Control type='text' value={login} onChange={e=> setLogin(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' value={password} onChange={e=> setPassword(e.target.value)} />
      </Form.Group>

      <Button variant='secondary' type='submit'>
        Sign in
      </Button>

    </Form>
  );
};

export default Login;