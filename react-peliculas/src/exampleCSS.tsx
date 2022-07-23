
import AppCss from './App.module.css'

export default function ExampleCSS() {
    const cuadroAzul = {
        backgroundColor: 'blue',
        height: '50px',
        width: '50px',
        marginLeft: '1rem'
    }

    const subtitulo = "Este es un subtitulo";
    const duplicar = (valor: number) => valor * 2;
    const imageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png";

    return (
        <>
            <div className='cuadraroRojo'></div>
            <div style={cuadroAzul}></div>
            <h3 style={{ color: 'blue' }}>{subtitulo.toUpperCase()}</h3>
            <h4>El doble de 3 es {duplicar(3)}</h4>

            <h4 className={AppCss.color}>App.module.css</h4>
            <img alt="Logo React" src={imageURL}></img>
            <div>
                <input type="checkbox" checked={true} />Este es un checkbox
            </div>
        </>
    )
}