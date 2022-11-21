import React, { Component } from "react";
import "aos/dist/aos.css";


class Model extends Component {
  

  render() {
    let modelStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
    }
    return (
      <div  className="modal show fade" style={modelStyle}>
        <div  className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title align-content-center">{this.props.title} <span className="role"> ({this.props.role})</span></h5>
              <button
                type="button"
                className="btn-close btn-close-white" onClick={this.props.hide}
              ></button>
            </div>
            <div className="modal-body">
              <p>{this.props.desc}</p>
              <p className="title-vid">Gameplay</p>
              <iframe style={{borderRadius: '20px', padding: '10px'}} width="450" height="315" src={this.props.vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Model;
