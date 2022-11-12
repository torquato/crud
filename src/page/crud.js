import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Crud() {

  // const navigate = useNavigate();
  const [idAuto, setIdAuto] = useState(1);

  const userDefault = { id: idAuto, social: { instagram: true, orkut: false, facebook: false } };

  const [user, setUser] = useState(userDefault);

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
  function inc() {
    
    setIdAuto(idAuto => idAuto + 1);
    console.log(idAuto);
  }

  function enviar() {
    // navigate("/");

    // console.log(user);
    // console.log(idAuto);
    setUsers([...users, user]);
    inc();
    setUser({ ...userDefault, id: idAuto + 1 });
    // console.log(user);
    // console.log(idAuto);
  }

  function editar(u) {
    setUser(u);
    console.log(u);
  }

  function deletar(u) {
    setUsers(users.filter(us => us.id !== u.id));
  }

  return (
    <div >
      <div>
        <form onSubmit={handlerSubmit}>

          <h2>Usuário</h2>

          <div >
            <label >
              Id:
              <input type="number" name='id' onChange={changeValue} value={user.id || 1} disabled />
            </label>
          </div>
          <div >
            <label >
              Nome:
              <input type="text" name='nome' onChange={changeValue} value={user.nome || ''} />
            </label>
          </div>
          <div >
            <label >
              Login:
              <input type="text" name='login' onChange={changeValue} value={user.login || ''} />
            </label>
          </div>
          <div >
            <label >
              Senha:
              <input type="password" name='senha' onChange={changeValue} value={user.senha || ''} />
            </label>
          </div>

          <div >
            <label >
              Liguagem:
              <select name="linguagem" onChange={changeValue} value={user.linguagem || ''} >
                <option value="Java">Java</option>
                <option value="C">C</option>
                <option value="Php">Php</option>
              </select>
            </label>
          </div>
          <div >
            Bebida Preferida:
            <div>
              <label><input type="radio" name='bebida' onChange={changeValue} value="cafe" checked={user.bebida === 'cafe'} />Café</label>
              <label><input type="radio" name='bebida' onChange={changeValue} value="cha" checked={user.bebida === 'cha'} />Chá</label>
            </div>
          </div>
          <div >
            Rede Social:
            <div>
              <label><input type="checkbox" name='social' onChange={changeValue} value="instagram" checked={user.social && user.social.instagram} />Instagram</label>
              <label><input type="checkbox" name='social' onChange={changeValue} value="facebook" checked={user.social && user.social.facebook} />Facebook</label>
              <label><input type="checkbox" name='social' onChange={changeValue} value="orkut" checked={user.social && user.social.orkut} />Orkut</label>
            </div>
          </div>
          <div >
            Descrição
            <textarea name="descricao" onChange={changeValue} value={user.descricao || ''}></textarea>
          </div>
          <div >
            <button type="button" onClick={() => enviar()}>Enviar</button>
          </div>
          <div >
            <button type="button" onClick={() => inc()}>INC</button>
          </div>
          <div >
            Objeto Atual:
            <span>{JSON.stringify(user)}</span>
          </div>
        </form>
        <div >
          Listagem:
          <table>
            <thead>
              <tr>
                <th>Objeto</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
            </thead>

            <tbody>
              {users.map(u => (

                <tr key={u.id}>
                  <td>{JSON.stringify(u)}</td>
                  <td><button type="button" onClick={() => editar(u)}>Editar</button></td>
                  <td><button type="button" onClick={() => deletar(u)}>Deletar</button></td>
                </tr>

              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div >
  );
}

export default Crud;