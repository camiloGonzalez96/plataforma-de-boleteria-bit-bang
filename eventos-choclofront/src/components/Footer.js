import React from 'react'


function Footer() {
    return (
        <>
       
            <footer className="bg-dark text-center text-white " style={{bottom:"0"}}>
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-twitter"></i
                            ></a>                    

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>

                    </section>

                </div>

                <div className="text-center p-3" >
                    © 2021 Copyright:
                     <p className="text-white">Eventos Choclo</p>
                </div>

            </footer>
        </>
  )
 }

export default Footer
