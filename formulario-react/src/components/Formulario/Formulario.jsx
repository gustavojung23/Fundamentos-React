import { useState } from "react";
import "./Formulario.css";

const Formulario = ({user}) => {

    //VARIÁVEL CONSOLE
    var isLog = true;

    // GERENCIAMENTO DE DADOS
    const [name, setName] = useState( user ? user.name : "");
    const [email, setEmail] = useState( user ? user.email : "");
    const [bio, setBio] = useState();
    const [role, setRole] = useState();

    //DETECTAR INPUT NAME
    const handleName = (e) => {
        setName(e.target.value);
    };

    //ENVIO DE FORMULÁRIO
    const handleSubmit = (e) => {
        e.preventDefault();

        if(isLog) {
            console.log(name);
            console.log(email);
            console.log(bio);
            console.log(role);
        }

        //LIMPAR FORMULÁRIO
        setName("");
        setEmail("");
        setBio("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* FORM PADRÃO */}
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Nome" onChange={handleName} value={name}/>

                {/* LABEL ENVOLVENDO O INPUT */}
                <label>
                    <span>E-mail:</span>
                    {/* DETECTAR INPUT INLINE */}
                    <input type="email" name="email" placeholder="Digite seu E-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>

                {/* TEXT AREA */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição" onChange={(e) => (setBio(e.target.value))} value={bio}></textarea>
                </label>

                {/* SELECT */}
                <label>
                    <span>Função</span>
                    <select name="role" onChange={(e) => (setRole(e.target.value))}>
                        <option value="Administrador">Adminitrador</option>
                        <option value="Editor">Editor</option>
                        <option value="Gerente">Gerente</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Formulario