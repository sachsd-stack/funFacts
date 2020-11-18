import React, { Component } from 'react'
import AOS from '../img/AoS.png'
import KOS from '../img/KoS.png'
import QOS from '../img/QoS.png'
import JOS from '../img/JoS.png'
import TENOS from '../img/10oS.png'
import TWOOH from '../img/2oH.png'
import SEVENOD from '../img/7oD.png'
import FIVEOC from '../img/5oC.png'
import KINGOH from '../img/KoH.png'
import THREEOC from '../img/3oC.png'
import JOH from '../img/JoH.png'
import EIGHTOS from '../img/8oS.png'
import TENOD from '../img/10oD.png'
import QOD from '../img/QoD.png'
import TWOOC from '../img/2oC.png'

const cards = {
    card1: [
        TWOOH,
        TENOS,
        SEVENOD
    ],
    card2: [
        FIVEOC,
        JOS,
        KINGOH
    ],
    card3: [
        THREEOC,
        QOS,
        JOH
    ],
    card4: [
        EIGHTOS,
        KOS,
        TENOD
    ],
    card5: [
        QOD,
        AOS,
        TWOOC
    ]
};

class CardDisplay extends Component {
    
    constructor(props) {
        super(props);
        const idxStart = 0;
        this.state = {
          index: idxStart,
        };
      }
    
      getNextIndex(idx) {
        if (idx >= cards.card1.length - 1) {
          return 0;
        }
        return idx + 1;
      }
    
      setIndexes(idx) {
        this.setState({
          index: idx,
        });
      }
    
      componentDidMount() {        
        setInterval(() => {
          // on
          setTimeout(() => {
            this.setIndexes(this.getNextIndex(this.state.index));
          }, 500); // same delay as in the css transition here
    
        }, 4000); // next slide delay
      }

    render() {
        return (
            <div className="cardContainer">
                {/* <img id="card1" src={TENOS}/>
                <img id="card2" src={JOS}/>
                <img id="card3" src={QOS}/>
                <img id="card4" src={KOS}/>
                <img id="card5" src={AOS}/> */}
                <img id="card1" src={cards.card1[this.state.index]} alt=""/>
                <img id="card2" src={cards.card2[this.state.index]} alt=""/>
                <img id="card3" src={cards.card3[this.state.index]} alt=""/>
                <img id="card4" src={cards.card4[this.state.index]} alt=""/>
                <img id="card5" src={cards.card5[this.state.index]} alt=""/>
            </div>
        )
    }
}

export default CardDisplay
