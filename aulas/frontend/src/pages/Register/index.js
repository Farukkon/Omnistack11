import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

import Logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post('/ongs', {
        name,
        email,
        whatsapp,
        cidade,
        uf,
      });
      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (e) {
      alert(`${(name, email, whatsapp, cidade, uf)}`);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={Logo} alt="" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua
            ONG.
          </p>
          <Link to="/">
            <FiArrowLeft size="16" color="#e02410" />
            Voltar para o logon
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Nome da ONG"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Whatsapp"
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              required
              type="text"
              placeholder="Cidade"
              onChange={(e) => setCidade(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="UF"
              maxLength="2"
              onChange={(e) => setUf(e.target.value)}
              style={{ width: 80, marginLeft: 8 }}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
