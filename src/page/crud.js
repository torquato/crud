import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Crud() {

  // const navigate = useNavigate();

  const [user, setUser] = useState({ social: { instagram: true, orkut: false, facebook: false } });

  const [users, setUsers] = useState([]);

  const changeValue = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckBox = type === 'checkbox';

    const data = user[name] || {};
    if (isCheckBox) {
      data[value] = checked;
    }

    const newValue = isCheckBox ? data : value;
    setUser({ ...user, [name]: newValue });
    // console.log(name, value);
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }
  function enviar() {
    // navigate("/");
    setUsers([...users, user]);
    console.log(user);
  }

  return (
    <main className="container">
      <div className="formSt">
        <form onSubmit={handlerSubmit}>

          <h2>Usuário</h2>

          <div className="row">
            <label >
              Nome:
              <input type="text" name='nome' onChange={changeValue} value={user.nome || ''} />
            </label>
          </div>
          <div className="row">
            <label >
              Login:
              <input type="text" name='login' onChange={changeValue} value={user.login || ''} />
            </label>
          </div>
          <div className="row">
            <label >
              Senha:
              <input type="password" name='senha' onChange={changeValue} value={user.senha || ''} />
            </label>
          </div>

          <div className="row">
            <label >
              Liguagem:
              <select name="linguagem" onChange={changeValue} value={user.linguagem || ''} >
                <option value="Java">Java</option>
                <option value="C">C</option>
                <option value="Php">Php</option>
              </select>
            </label>
          </div>
          <div className="row">
            Bebida Preferida:
            <div>
              <label><input type="radio" name='bebida' onChange={changeValue} value="cafe" checked={user.bebida === 'cafe'} />Café</label>
              <label><input type="radio" name='bebida' onChange={changeValue} value="cha" checked={user.bebida === 'cha'} />Chá</label>
            </div>
          </div>
          <div className="row">
            Rede Social:
            <div>
              <label><input type="checkbox" name='social' onChange={changeValue} value="instagram" checked={user.social && user.social.instagram} />Instagram</label>
              <label><input type="checkbox" name='social' onChange={changeValue} value="facebook" checked={user.social && user.social.facebook} />Facebook</label>
              <label><input type="checkbox" name='social' onChange={changeValue} value="orkut" checked={user.social && user.social.orkut} />Orkut</label>
            </div>
          </div>
          <div className="row">
            Descrição
            <textarea name="descricao" onChange={changeValue} value={user.descricao || ''}></textarea>
          </div>

          <button type="button" onClick={() => enviar()}>Enviar</button>
          <div>{JSON.stringify(user)}</div>
        </form>
        <div className='row'>
          Listagem:

          {users.map(u => (
            <p>{JSON.stringify(u)}</p>
          ))}

        </div>

      </div>
    </main >
  );
}

export default Crud;