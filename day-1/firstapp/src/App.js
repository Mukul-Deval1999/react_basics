import Card from './Cards';
import React from 'react'
import Sdata from './Sdata';


const App = () => {
    return (
        <div>
            <h1 className='heading_style'>List of Top 5 Netflix series</h1>
            <Card Sname={Sdata[0].Sname}
                imgsrc={Sdata[0].imgsrc}
                title={Sdata[0].title}


            />
            <Card Sname={Sdata[1].Sname}
                imgsrc={Sdata[1].imgsrc}
                title={Sdata[1].title}

            />
            <Card
                Sname={Sdata[2].Sname}
                imgsrc={Sdata[2].imgsrc}
                title={Sdata[2].title}

            />
            <Card Sname={Sdata[3].Sname}
                imgsrc={Sdata[3].imgsrc}
                title={Sdata[3].title}

            />
        </div>

    )
}

export default App