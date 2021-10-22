// JSX
const rezult = 5 * 43;

const App = (
    <div className='container'>
        <h3 className='something'>We love music</h3>

        <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='d-flex'>

            <div className='title'>
                <p>Name</p>
                <img src="logo.jpg" alt="Logo" />
            </div>
            <div className='title'>
                <p>Name</p>
                <img src="logo.jpg" alt="Logo" />
            </div>
            <div className='title'>
                <p>Name</p>
                <img src="logo.jpg" alt="Logo" />
            </div>
        </div>
        <h1>Tour Dates</h1>
        <div className='second'>

            <div className='title'>
                <img src="newyork.jpg" alt="Logo" />
                <div class='card'>
                    <p>NEW YORK</p>
                    <p>Fri 27 Nov 2016</p>
                    <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                </div>
                <button></button>

            </div>
            <div className='title'>

                <img src="pics/paris.jpg" alt="Logo" />
                <div className='card'>
                    <p>Paris</p>
                    <p>Sat 28 Nov 2017</p>
                    <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                </div>
                <button></button>
            </div>
            <div className='title'>

                <img src="sanfran.jpg" alt="Logo" />
                <div className='card'>
                    <p>San Francisco</p>
                    <p>Fri 15 Nov 2018</p>
                    <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                </div>
                <button></button>
            </div>

        </div>
    </div>



);

ReactDOM.render(App, document.getElementById('root'));


