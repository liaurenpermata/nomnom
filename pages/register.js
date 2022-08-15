import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation } from 'react-query'
import { registerUser } from '../components/api/api';

const register = () => {

    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const registerUserMutation = useMutation(['/loginUser'], registerUser)

    const submitRegister = async(e) => {
        e.preventDefault;
        registerUserMutation.mutate({ username: username, password: password, role: role})
        setUsername('')
        setPassword('')
        setRole('')
    }

    if(registerUserMutation.isSuccess){
        router.push('/')
    }

  return (
    <div className={styles.main}>
        <h1 className={styles.tile}>Hi! Sign Up Here!</h1>

        <form className={styles.card}>
            <input value={username} placeholder='Username' type="text" className={styles.input} onChange={(e) => setUsername(e.target.value)}/>
            <input value={password} placeholder='Password' type="password" className={styles.input} onChange={(e) => setPassword(e.target.value)}/>
            <input value={role} placeholder='Role' type="text" className={styles.input} onChange={(e) => setRole(e.target.value)}/>

            <div>
                <button type='button' className={styles.button} onClick={submitRegister}>Register</button>
            </div>


            <div className={styles.error}>
                {registerUserMutation.error ? registerUserMutation.error.message : ""}
            </div>
        </form>

        <div className={styles.info}>
            <p>Have an account yet? <Link href="/"><a className={styles.link}>Sign In</a></Link></p>
        </div>
    </div>
  )
}

export default register