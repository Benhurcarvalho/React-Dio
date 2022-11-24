import { Component } from 'react'
import { Link } from 'react-router-dom';

export class Login extends Component {

  render() {
    return (
        <Link to='/'>
        <button>Voltar</button>
        </Link>
    )
  }
}

export default Login;
