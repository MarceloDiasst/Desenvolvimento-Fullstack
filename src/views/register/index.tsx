import css from './register.module.css'

export default function register() {

        return (
            <div className={css.container}>
                <h1>Cadsatro View</h1>

                <form>
                    <input type="text" placeholder='Nome' />
                    <input type="text" placeholder='' />
                    <input type="text" placeholder='' />
                </form>
            </div>
        )
}