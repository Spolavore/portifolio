import { useState } from "react"
import Title from "../Title"
import styles from './styles.module.css'
import emailjs from '@emailjs/browser';
export default function Contato(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')


    const [styleInvalid, setStyleInvalid] = useState(null)

    function sendEmail(e){
        e.preventDefault()
 
        if(nome === '' || email === '' || assunto === ''){
            setStyleInvalid({border: '2px solid red'})
            alert('Preencha todos os campos')
            return;
        }
        const templateParams = {
            from_name: nome,
            message: assunto,
            email: email
        }
        emailjs.send("service_4nba2dm", "template_wqc47fu", templateParams, "MeMdCYDeUs9coBz5I")
        .then((response) => {
            alert("Email Enviado")
            setNome('')
            setEmail('')
            setAssunto('')
        }, (err) => alert('Erro ao enviar email'))
    }
    return(
        <>
        <div id="contato" style={{height: "100px", backgroundColor: 'white'}}></div>
        <div className={styles.container} >
            <Title title={'Contato'} color={'black'}/>

            <div className={styles.contato}>
                <p>Gostou de algo e gostaria de me contactar? Mande uma mensagem para mim :&#41;</p>
                <form onSubmit={sendEmail}>
                <div className={styles.inputList}>
                    <input placeholder="Digite seu nome"  style={styleInvalid} value={nome} onChange={(e)=> setNome(e.target.value)}></input>
                    <input type="email" placeholder="Digite seu email"  style={styleInvalid} value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                    <textarea placeholder="Assunto" style={styleInvalid} value={assunto} onChange={(e)=> setAssunto(e.target.value)}></textarea>
    
                    <button>Enviar</button>
                </div>
                </form>
            </div>
        </div>
        </>
    )
}