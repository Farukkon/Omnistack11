import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [ongID, setOngID] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('/sessions', {
        id: ongID,
      });

      localStorage.setItem('ongID', ongID);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      console.log(err);
      alert('Não foi possivel Logar, verifique o ID');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            type="text"
            className="ong_id"
            placeholder="ID da sua ONG"
            onChange={(e) => setOngID(e.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>
          <Link to="/register">
            <FiLogIn size="16" color="#e02410" />
            Não sou cadastrado
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="" />
    </div>
  );
}
