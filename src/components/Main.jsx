import data from '../../public/data'
import Card from './Card'
import style from './main.module.css'

function Main() {
  return (
    <div>
        <main>
            <section className='container'>
                <div className={style.ota2}>
                <h2>Products</h2>
                <button>Move All To Bag</button>
                </div>
                <div className={style.ota36}>
                  {data.map((m,i)=>{
                    return <Card key={i} rasm={m.img} nomi={m.name} narx={m.price}></Card>
                  })}
                </div>
            </section>
        </main>
    </div>
  )
}

export default Main