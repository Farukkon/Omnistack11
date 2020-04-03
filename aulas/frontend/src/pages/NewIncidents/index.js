import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

import api from '../../services/api';
import './styles.css';

export default function NewIncidents() {
  const ongID = localStorage.getItem('ongID');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  async function handleIncidents(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };
    try {
      await api.post('/incidents', data, {
        headers: {
          authorization: ongID,
        },
      });
      history.push('/profile');
    } catch (err) {
      alert('Não foi possivel cadastrar o caso, tente novamente.');
    }
  }
  return (
    <div className="incidents-container">
      <div className="content">
        <section>
          <img src={Logo} alt="" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link to="/">
            <FiArrowLeft color="#e02410" size="18" />
            Voltar para a home
          </Link>
        </section>
        <form onSubmit={handleIncidents}>
          <input
            type="text"
            placeholder="Título do caso"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição do caso"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Valor em reais"
            onChange={(e) => setValue(e.target.value.replace(',', '.'))}
          />
          <div className="button-group">
            <Link to="/profile" className="button cancel">
              Cancelar
            </Link>
            <button type="submit" className="button">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
