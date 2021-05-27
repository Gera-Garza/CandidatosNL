import React from 'react'
import './CandidatoPerfil.css'
const CandidatoPerfil = () => {
    return (
        <div className="container candidatoPerfilContainer">
        <div className="row">
            <div className="col-sm-3">
                <img src="http://via.placeholder.com/175x200" alt="" srcset="" />
            </div>
            <div className="col-sm">
                <div>
                    <nav className="candidatoPerfilNav">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Propuestas</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Historial y logros</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Noticias</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active text-left" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu magna elementum, congue purus sit amet, eleifend lorem. Aliquam efficitur, tellus feugiat pharetra sodales, tortor libero tincidunt tellus, in semper erat diam vel sem. Quisque sed molestie est. Pellentesque consequat, nunc eu scelerisque faucibus, dui neque sollicitudin metus, nec hendrerit ante augue non ipsum. Maecenas accumsan in diam pharetra accumsan. Aliquam vitae pulvinar risus. Pellentesque et metus sagittis, luctus tortor id, tempus tellus. Morbi imperdiet efficitur placerat. Ut elementum cursus lectus nec sagittis. Sed faucibus mollis ultrices. Fusce quis elit enim. Integer consequat interdum velit eu mattis. Cras malesuada placerat pellentesque.
                </div>
                        <div className="tab-pane fade text-left" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu magna elementum, congue purus sit amet, eleifend lorem. Aliquam efficitur, tellus feugiat pharetra sodales, tortor libero tincidunt tellus, in semper erat diam vel sem. Quisque sed molestie est. Pellentesque consequat, nunc eu scelerisque faucibus, dui neque sollicitudin metus, nec hendrerit ante augue non ipsum. Maecenas accumsan in diam pharetra accumsan. Aliquam vitae pulvinar risus. Pellentesque et metus sagittis, luctus tortor id, tempus tellus. Morbi imperdiet efficitur placerat. Ut elementum cursus lectus nec sagittis. Sed faucibus mollis ultrices. Fusce quis elit enim. Integer consequat interdum velit eu mattis. Cras malesuada placerat pellentesque.
                </div>
                        <div className="tab-pane fade text-left" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu magna elementum, congue purus sit amet, eleifend lorem. Aliquam efficitur, tellus feugiat pharetra sodales, tortor libero tincidunt tellus, in semper erat diam vel sem. Quisque sed molestie est. Pellentesque consequat, nunc eu scelerisque faucibus, dui neque sollicitudin metus, nec hendrerit ante augue non ipsum. Maecenas accumsan in diam pharetra accumsan. Aliquam vitae pulvinar risus. Pellentesque et metus sagittis, luctus tortor id, tempus tellus. Morbi imperdiet efficitur placerat. Ut elementum cursus lectus nec sagittis. Sed faucibus mollis ultrices. Fusce quis elit enim. Integer consequat interdum velit eu mattis. Cras malesuada placerat pellentesque.
                </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CandidatoPerfil
