import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { loginUser } from '../components/api/api'
import { useMutation } from 'react-query'

export default function Home() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUserMutation = useMutation(['/loginUser'], loginUser)

  const submitLogin = async(e) => {
      e.preventDefault;
      loginUserMutation.mutate({ username: username, password: password})
      setUsername('')
      setPassword('')
  }

  if(loginUserMutation.isSuccess){
    router.push('/user/category')
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
          <h1 className={styles.tile}>Hi! Sign In Here!</h1>

          <form className={styles.card}>
              <input placeholder='Username' type="text" className={styles.input} onChange={(e) => setUsername(e.target.value)}/>
              <input placeholder='Password' type="password" className={styles.input} onChange={(e) => setPassword(e.target.value)}/>

              <div>
                  <button type='button' className={styles.button} onClick={submitLogin}>Login</button>
              </div>

              <div className={styles.error}>
                  {loginUserMutation.error ? loginUserMutation.error.message:""}
              </div>
          </form>

          <div className={styles.info}>
            <p>Don't have an account? <Link href="/register"><a className={styles.link}>Sign Up</a></Link></p>
        </div>
      </div>
    </div>
  )
}
