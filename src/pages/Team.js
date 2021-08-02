import React, { Component } from 'react';
import Card from './CardUI';


import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';




class Team extends Component {
    render() {
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card imgsrc={img1} title="Sana Riahi" parag="Email:sana.riahi@wyplay.com
                                                                    Tel:98654741
                                                                    Adresse:Ariana" />
                    </div>
                    <div className='col-md-4'>
                    <Card imgsrc={img2} title="Nada Romdhani" parag="Email:nada.romdhani@wyplay.com
                                                                     Tel:98620791 
                                                                     Adresse:Sousse"/>
                    </div>
                    <div className='col-md-4'>
                    <Card imgsrc={img3} title="Ahmed Dridi" parag="Email:ahmed.dridi@wyplay.com
                                                                   Tel:98932145
                                                                   Adresse:Bizerte"/>
                    </div>
                </div>
            </div>

        );
    }
}


export default Team;
