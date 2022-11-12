import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Crudhook() {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);

  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);

  function onSubmit(data) {
    console.log(data);
    let idInc = counter + 1;
    setCounter(idInc);
    data = { ...data, id: idInc }

    setUsers([...users, data]);
  }

  function editar(u) {
    // setUser(u);
    console.log(u);
  }

  function deletar(u) {
    setUsers(users.filter(us => us.id !== u.id));
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <h2>Usuário</h2>

          <div >
            <label >
              Id:
              <input type="number" {...register("id")} disabled />
            </label>
          </div>
          <div >
            <label >
              Nome:
              <input type="text" {...register("nome", { required: true, maxLength: 20 })} />
              {errors.nome?.type === 'required' && "Nome é obrigatorio"}
              {errors.nome?.type === "maxLength" && (<p>Nome só pode conter até 20 caracteres</p>)}
            </label>
          </div>
          <div >
            <label >
              Login:
              <input type="text" {...register("login")} />
            </label>
          </div>
          <div >
            <label >
              Senha:
              <input type="password" {...register("senha")} />
            </label>
          </div>

          <div >
            <label >
              Liguagem:
              <select {...register("linguagem")}   >
                <option value="Java">Java</option>
                <option value="C">C</option>
                <option value="Php">Php</option>
              </select>
            </label>
          </div>
          <div >
            Bebida Preferida:
            <div>
              <label><input type="radio" {...register("bebida")} value="cafe" />Café</label>
              <label><input type="radio" {...register("bebida")} value="cha" />Chá</label>
            </div>
          </div>
          <div >
            Rede Social:
            <div>
              <label><input type="checkbox" {...register("social")} value="instagram" />Instagram</label>
              <label><input type="checkbox" {...register("social")} value="facebook" />Facebook</label>
              <label><input type="checkbox" {...register("social")} value="orkut" />Orkut</label>
            </div>
          </div>
          <div >
            Descrição
            <textarea {...register("descricao")}></textarea>
          </div>
          <div >
            <button type="submit">Enviar</button>
          </div>
          <div >
            Objeto Atual:
            <span>{JSON.stringify(getValues())}</span>
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
  )
}

export default Crudhook;



