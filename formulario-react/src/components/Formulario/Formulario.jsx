import "./Formulario.css";

const Formulario = () => {
  return (
    <div>
        <form>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Nome" />
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Formulario