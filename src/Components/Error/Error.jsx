import styles from './error.module.css'

export const Error = () => {
  return (
    <div className={styles.error}>
      <h1>Error 404</h1>
      <p>No se encuentra lo que estas buscando</p>
    </div>
  )
}
