import google_play from "../../assests/images/LoginPage/google_play.png"
import styles from "./LoginPage.module.sass"
import React, {useState} from "react";

export default function LoginPage({onLogin}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [resetPasswordMode, setResetPasswordMode] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const [resetCode, setResetCode] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleResetPassword = () => {
    };

    const handleResetSubmit = () => {
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email && password) {
          onLogin(email);
        }
    };

    return(
        <div className={styles.loginPage}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.login_logo}>
                        <div className={styles.log_logo}></div>
                        <h1>Muras</h1>
                    </div>
                    <div className={styles.login_title}>
                        <h1>Добро пожаловать! </h1>
                        <p>Войдите, чтобы бесплатно читать великие произведения кыргызских писателей на нашем сайте.</p>
                    </div>
                    <div className={styles.login_buttons}>
                        <a href=""><button  className={styles.reg_button}>Регистрация</button></a>
                        <a href=""><button  className={styles.log_button}>Вход</button></a>
                    </div>
                    {resetPasswordMode ? (
                        <div className={styles.login_form}>
                            <form>
                                <input type="text" placeholder="E-mail" id="email" value={resetEmail} onChange={(e) => setResetCode(e.target.value)} className={styles.email_input} required/>
                                <input type="number" id="code" value={resetCode} onChange={(e) => setResetCode(e.target.value)} required/>
                                <p className={styles.cancel} onClick={() => setResetPasswordMode(false)}>Отменить</p>
                            </form>
                        </div>
                    ) : (
                            <div>
                                <div className={styles.login_form}>
                                    <form onSubmit={handleSubmit}>
                                        <input type="text" placeholder="E-mail" autoComplete="off" id="email" value={email} onChange={handleEmailChange} className={styles.email_input} required/>
                                        <input type="password" placeholder="Пароль" autoComplete="off" id="password" value={password} onChange={handlePasswordChange} className={styles.pass_input} required/>
                                    </form>
                                </div>
                                <button className={styles.enter_button}>Войти</button>
                                <div className={styles.pass_forgot}><p>Вы забыли пароль?</p> <a href="#"><span onClick={() => setResetPasswordMode(true)}>Восстановить</span></a></div>
                            </div>
                    )}
                </div>
                <div className={styles.right}>
                    <h1>Читайте книги великих кыргызских писателей на нашем сайте или скачайте приложение   “Мурас” в Google Play бесплатно.</h1>
                    <a href="#"><img src={google_play} alt=""/></a>
                </div>
            </div>
        </div>
    )
}