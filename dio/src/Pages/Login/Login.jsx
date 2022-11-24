import { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';

export class Login extends Component {

  render() {
    return (
        <Link to='/'>
            <Button title='Voltar'/>
        </Link>
    )
  }
}

export default Login;
