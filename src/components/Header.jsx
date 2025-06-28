import head from './header.module.css'

function Header() {
  return (
    <div>
        <header className='container'>
            <div className={head.ota}>
                <h1>Exclusive</h1>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </nav>
                <div className={head.element}>
                    <input type="text" placeholder='What are you looking for?'/>
                    <i class="fa-solid fa-magnifying-glass" id='i'></i>
                    
                </div>
            </div>
            <hr />
        </header>
    </div>
  )
}

export default Header