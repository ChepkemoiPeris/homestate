import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <div className="container-fluid">
        <nav>
            <ul className="footer-menu">
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        Company
                    </a>
                </li>
                <li>
                    <a href="#">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#">
                        Blog
                    </a>
                </li>
            </ul>
            <p className="copyright text-center">
                ©
                <script>
                    document.write(new Date().getFullYear())
                </script>
                <a href="http://www.creative-tim.com">Peris</a>, made with love 
            </p>
        </nav>
    </div>
</footer>
  )
}

export default Footer