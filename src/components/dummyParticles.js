import React, { Component } from 'react';
import Particles from 'react-particles-js';

class DummyParticles extends Component {
    render() {
        return (
            <div className="particle-container">
                <Particles 
                        params={{
                            "particles": {
                                
                                "number": {
                                    "value": 160
                                },
                                "density":{
                                    "enable":true,
                                    "value_area":800
                                },
                                "color":{
                                  "value": "#ffffff"
                                },
                                "shape":{
                                  "type":"circle","stroke":{"width":0,"color":"#000000"},
                                "polygon":{
                                  "nb_sides":5
                                },
                                "opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},
                                "size": {
                                  "value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}
                                },
                                "line_linked":{"enable_auto":false,"distance":1,"color":"#000000","opacity":0.01,"width":1
                                },
                                "move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},
                               
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": false,
                                        "mode": "bubble"
                                    },
                                    "modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true
                                }
                            }
                        }


                        style={{
                                width: "150px",
                                height: "200px",
                                background: `#000000` 
                         }}
                      />
            </div>
        )
    }
}

export default DummyParticles;