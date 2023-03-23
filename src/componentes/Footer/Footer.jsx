import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="text-white text-left text-lg-start bg-primary">

                <div className="container  pt-2 pb-2 ml-1 pl-0">

                    <div className="row mt-2">

                        <div className="col-lg-12 col-md-12 mb-2 md-0">
                            <h5 className="text-uppercase mb-2">Acerca de Kingual Education</h5>

                            <p>
                                Somos una institución educativa que busca acortar las fronteras del mundo,
                                capacitándote en idiomas! Cómunicate con nosotros por nuestras redes.
                            </p>

                        </div>

                        <div className="row mt-2">

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                                    <li className="mb-3">
                                        <span className="fa-li"><i className="fas fa-envelope"></i></span><span
                                            className="ms-2">kingualeducation@kged.net</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+549 351 802
                                            0674
                                        </span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-lg-12 col-md-12 mb-4 mb-md-0 d-flex justify-content-evenly">


                            <a href="https://m.facebook.com/Kingual-Education-102834582206961/"
                                className="btn btn-primary btn-lg btn-floating " target="_blank"
                                data-bs-toggle="Facebook" data-bs-placement="bottom" data-bs-title="Facebook"> <i
                                    className="fab fa-facebook fa-2xl"></i></a>


                            <a href="https://www.instagram.com/kingual.education/"
                                className="btn btn-primary btn-lg btn-floating " target="_blank"
                                data-bs-toggle="Instagram" data-bs-placement="bottom" data-bs-title="Instagram">
                                <i className="fab fa-instagram fa-2xl"></i></a>


                            <a href="https://www.tiktok.com/@kingualeducation" className="btn btn-primary btn-floating btn-lg "
                                target="_blank" data-bs-toggle="TikTok" data-bs-placement="bottom" data-bs-title="TikTok" tooltip="tiktok">
                                <i className="fa-brands fa-tiktok fa-2xl"></i></a>


                        </div>
                    </div>
                </div>



                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2023 -
                    <a className="text-white" href="http://www.kingual.com.ar">Kingual Education®</a> -
                    <a className="text-white" href="http://www.desafioIT.com.ar"> Developed by DesafioIT®</a>
                </div>

            </div>
        </footer>
    )
}

export default Footer