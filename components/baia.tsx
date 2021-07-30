import styles from '../styles/Baia.module.scss';

const Baia = (props) => {
  return (<div style={{ gridRow: props.gridRow, gridColumn: props.gridColumn }} className={`${styles.baia} ${props.left ? styles['baia--left'] : styles['baia--right']}`}>
            <div className={`${styles.individuo} ${props.left ? styles['individuo--left'] : ''} ${props.nome === '' ? styles['individuo--invisible'] : ''}`}>
                {!props.left && <div className={`${styles.profile} ${props.nome === '' ? styles['profile--invisible'] : ''}`}><p className={styles['profile__text']}>{props.inicial}</p></div>}
                <p className={styles.individuo__name}>{props.nome}</p>
                {props.left && <div className={`${styles.profile} ${props.nome === '' ? styles['profile--invisible'] : styles['profile--left']}`}><p className={styles['profile__text']}>{props.inicial}</p></div>}
                <div className={styles.hover}>Additional Info</div>
              </div>
          </div>);
}

export default Baia;