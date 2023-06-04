import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

import './index.css';

function Card(props) {
    console.log(props);
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt="myPic" className='card__img' />
                    <div className='card__info'>
                        <span className="card__category">{props.title}</span>
                        <h3 className="card__title">{props.Sname}</h3>
                        <a href="" target='_blank'>
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>);
}

ReactDOM.render(
    <>
        <h1 className='heading_style'>List of Top 5 Netflix Series in 2020</h1>
        <Card imgsrc="https://res.klook.com/image/upload/q_85/c_fill,w_750/v1640140560/blog/vsss72njiq5g0o41m7dh.jpg"
            title="A Netflix Original Series"
            Sname="Money Heist "
        />
        <Card imgsrc="https://upload.wikimedia.org/wikipedia/en/a/a1/CAT_20022-Non-free-rational.jpg"
            title="A Netflix Original Series"
            Sname="CAT" />
        <Card imgsrc="https://assets.teenvogue.com/photos/6436c21b4ea1fdd79f2d6c94/1:1/w_1259,h_1259,c_limit/StrangerThings_S3_Illustrated_Vertical_FINAL_RGB_Digital__EN.jpg"
            title="A Netflix Original Series"
            Sname="Stranger Things " />
 <Card imgsrc="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/07/06/Pictures/_aff9a9dc-812d-11e8-9920-75f90a7836bc.JPG"
            title="A Netflix Original Series"
            Sname="Sacred Games" />

    </>
    , document.getElementById("root"));
