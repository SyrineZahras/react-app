import React, { Component } from 'react';
import Card from './CardUI';


import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';


const Teams = [
    {
        title: "Sana Riahi",
        email: "sana.riahi@wyplay.com",
        tel: "98-654-741",
        address: "Ariana",
        img: img1
    },
    {
        title: "Nada Romdhani",
        email: "sana.riahi@wyplay.com",
        tel: "98-250-644",
        address: "Sousse",
        img: img2
    },
    {
        title: "Ahmed Dridi",
        email: "sana.riahi@wyplay.com",
        tel: "98-984-127",
        address: "Bizert",
        img: img3
    }
]


class Team extends Component {
    render() {
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    {Teams.map((item, index) =>{
                        return <div className='col-md-4' key={index}>
                                    <Card imgsrc={item.img} title={item.title} parag={<div > Email: {item.email} <br></br>Tel: {item.tel} <br></br>Adresse: {item.address}</div>} />
                                </div>
                    })}
                    {/*<div className='col-md-4'>
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
                    </div>*/}
                </div>
            </div>

        );
    }
}


export default Team;
