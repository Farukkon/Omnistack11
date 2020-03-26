import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';

import api from '../../services/api';
import './styles.css';

export default function Profile() {
  const ongID = localStorage.getItem('ongID');
  const ongName = localStorage.getItem('ongName');

  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  useState(async () => {
    api.get('/profile', {
      headers:{
        authorization: ongID
      }
    }).then(response => {
      setIncidents(response.data);
    }).catch(err =>{
      alert('Não foi possivel achar uma ONG com esse ID');
      history.push('/');
    });
  });


  return (
    <div className="profile-container">
      <header>
        <img src={Logo} alt=""/>
        <span>Bem vinda, {ongName}</span>

        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>
        <button className="button">
          <FiPower size="18"/>
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(incident =>(
          <li key={incident.id}>
          <strong>CASO:</strong>
          <p>{incident.title}</p>

          <strong>Descrição</strong>
          <p>{incident.description}</p>

          <strong>Valor:</strong>
          <p>{`R$${incident.value}`}</p>
          
          <button type="button"><FiTrash2 size="20"/></button>
        </li>
        ))}
      </ul>
    </div>
  );
}
