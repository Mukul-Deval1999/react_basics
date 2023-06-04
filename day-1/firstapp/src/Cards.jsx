import react from 'react';
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
                        <h4>{props.rating}</h4>
                        <a href="" target='_blank'>
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>);
}
export default Card;
