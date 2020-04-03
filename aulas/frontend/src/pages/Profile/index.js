import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';

import api from '../../services/api';
import './styles.css';

export default function Profile() {
  const [ongName, setOngName] = useState('');

  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function loadData() {
      const id = localStorage.getItem('ongID');
      const name = localStorage.getItem('ongName');
      setOngName(name);
      const response = await api.get('/profile', {
        headers: {
          authorization: id,
        },
      });
      setIncidents(response.data);
      if (!id) {
        alert('Não conseguimos achar uma ONG com esse ID');
        history.push('/');
      }
    }
    loadData();
  }, []);

  function logOut() {
    localStorage.removeItem('ongID');
    localStorage.removeItem('ongName');
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={Logo} alt="" />
        <span>Bem vinda, {ongName}</span>

        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>
        <button onClick={logOut} className="button">
          <FiPower size="18" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>Descrição</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
                incident.value
              )}
            </p>

            <button type="button">
              <FiTrash2 size="20" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
