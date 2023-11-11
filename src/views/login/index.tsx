import './login.css'
export default function Login(){
    return(
        <div className='container'>
            <h1>Tela de Login</h1>

            <input type="text" placeholder='Email' />
            <input type="Password" placeholder='*********' />

            <button>Entrar</button>
        </div>
    )
}