import styles from './card.module.css'

function Card(props) {
  return (
    <div>
        <div className={styles.ota}>
            <div className={styles.card}>
                <img src={props.rasm} alt="asd" />
                <span>-35%</span>
                <button>Add To Cart</button>
                <h3>{props.nomi}</h3>
                <p>${props.narx}</p>
            </div>
        </div>
    </div>
  )
}

export default Card