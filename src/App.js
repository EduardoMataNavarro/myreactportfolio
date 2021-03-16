import React from 'react';
import projects from './data/projects.json';

function App() {


  return (
    <div className="App min-vh-100">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="w-75 m-auto">
              <h3 className="text-center mt-4 header-text">Hola! Soy Eduardo!</h3>
              <p className="header-text mt-4 text-center">
                Soy un programador recién graduado de Lic. en Multimedia y animación digital.
                <br />
                Tengo rol principal es el de backend, conoce mis proyectos!
              </p>
            </div>
          </div>
          <div className="row">
            <hr />
            <div className="container-fluid">
              <div className="row justify-content-center">
                {
                  projects &&
                  projects.map((project, idx) => {
                    return (
                      <div className="col-sm-6 col-md-4 col-lg-3" key={idx}>
                        <div class="card mt-4" >
                          <img src={project.image} class="card-img-top" style={{ maxHeight: '200px', objectFit: 'contain' }} alt="..." />
                          <div class="card-body">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <h5 class="card-title text-center mb-3">{project.name}</h5>
                            </a>
                            <p class="card-text">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
