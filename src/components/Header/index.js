import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/img/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <Profile>
          <div>
            <strong>Roberto Souza</strong>
            <Link to="/profile">Meu Perfil</Link>
          </div>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="Roberto Souza"
          />
        </Profile>
      </Content>
    </Container>
  );
}
