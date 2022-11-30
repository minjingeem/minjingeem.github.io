import React, { useState } from 'react'
import "../services/services.css";

const WorkItems = ({item}) => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        <span className="services__button" onClick={() => toggleTab(1)}>
                    View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
        </span>

        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                
                <h3 className="services__modal-title">{item.title}</h3>
                <p className="services__modal-description">
                    {item.description}
                </p>

                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">{item.desc1}</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">{item.desc2}</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">{item.desc3}</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">{item.desc4}</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">{item.desc5}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    
  )
}

export default WorkItems