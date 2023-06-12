import React from 'react';
import './pokeSheet.css';
import PSkills from "./level-skills/primary-skills/PSkills.js";
import Gradual from "./level-skills/gradualities/Gradual.js";
import SSkills from "./level-skills/secondary-skills/SSkills.js";
import HabiLevel from "./level-skills/habilities/HabiLevel.js";
import EXPinput from "./exp-input/EXPinput";
import Lviewer from "./viewers/level-viewer/Lviewer";
import HPviewer from "./viewers/hp-viewer/HPviewer";
import Pviewer from "./viewers/precision-viewer/Pviewer";
import Iviewer from "./viewers/initiative-viewer/Iviewer";

// import Rating from '../../components/rating';


const PokeSheet = () => {
    return (
      <div className="container">
            {/* POKEMON DO USUÁRIO */}
            <div className='sheetBox'>
              <div className='pokeData'>
                <h1>HP <HPviewer/></h1>
                <p>INICIATIVA <Iviewer/></p>
                <p>PRECISÃO <Pviewer/></p>
                <h1>LEVEL <Lviewer/></h1>
                <h1>EXP <EXPinput/></h1>
              </div>
                <div className='primarySkills'>
                  <div>
                    <h1>FORÇA<PSkills/></h1>
                    <p>RESISTÊNCIA<Gradual/></p>
                  </div>
                  <div>
                    <h1>DESTREZA<PSkills/></h1>
                    <p>MANEIRISMO<Gradual/></p>
                  </div>
                  <div>
                    <h1>VITALIDADE<PSkills/></h1>
                    <p>BELEZA<Gradual/></p>
                  </div>
                  <div>
                    <h1>PECULIARIDADE<PSkills/></h1>
                    <p>FOFURA<Gradual/></p>
                  </div>
                  <div>
                    <h1>PERCEPÇÃO<PSkills/></h1>
                    <p>INTELIGÊNCIA<Gradual/></p>
                  </div>
                </div>
                <div className='secondarySkills'>
                  <div>
                    <h1>COMBATE<SSkills/></h1>
                    <p>LUTA<HabiLevel/></p>
                    <p>CANALIZAR<HabiLevel/></p>
                    <p>EVASÃO<HabiLevel/></p>
                    <p>MARCIAL<HabiLevel/></p>
                  </div>
                  <div>
                    <h1>SOBREVIVÊNCIA<SSkills/></h1>
                    <p>ALERTA<HabiLevel/></p>
                    <p>ATLETICO<HabiLevel/></p>
                    <p>NATUREZA<HabiLevel/></p>
                    <p>FURTIVIDADE<HabiLevel/></p>
                  </div>
                  <div>
                    <h1>CONCURSO<SSkills/></h1>
                    <p>FACINANTE<HabiLevel/></p>
                    <p>ETIQUETA<HabiLevel/></p>
                    <p>INTIMIDAR<HabiLevel/></p>
                    <p>PERFORMANCE<HabiLevel/></p>
                  </div>
                </div>
            </div>
      </div>
    );
};

export default PokeSheet;