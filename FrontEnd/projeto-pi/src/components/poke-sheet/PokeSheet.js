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
            <div className='sheetBox'>
            {/* POKEMON DO USUÁRIO */}
              <div className='pokeData'>
                <div>
                  <label><h1>HP</h1><HPviewer/></label>
                  <label><p>INICIATIVA</p><Iviewer/></label>
                  <label><p>PRECISÃO</p><Pviewer/></label>
                </div>
                <div>
                  <label><h1>LEVEL</h1><Lviewer/></label>
                  <label><h1>EXP</h1><EXPinput/></label>
                </div>
              </div>
              <div class="rowle">
                <div class='primarySkills'>
                  <div>
                    <h1>FORÇA<PSkills/></h1>
                    <label><p>RESISTÊNCIA</p><Gradual/></label>
                  </div>
                  <div>
                    <h1>DESTREZA<PSkills/></h1>
                    <label><p>MANEIRISMO</p><Gradual/></label>
                  </div>
                  <div>
                    <h1>VITALIDADE<PSkills/></h1>
                    <label><p>BELEZA</p><Gradual/></label>
                  </div>
                  <div>
                    <h1>PECULIARIDADE<PSkills/></h1>
                    <label><p>FOFURA</p><Gradual/></label>
                  </div>
                  <div>
                    <h1>PERCEPÇÃO<PSkills/></h1>
                    <label><p>INTELIGÊNCIA</p><Gradual/></label>
                  </div>
                </div>
                <div class='secondarySkills'>
                  <div class="shelf">
                    <h1>COMBATE<SSkills/></h1>
                    <p>LUTA<HabiLevel/></p>
                    <p>CANALIZAR<HabiLevel/></p>
                    <p>EVASÃO<HabiLevel/></p>
                    <p>MARCIAL<HabiLevel/></p>
                  </div>
                  <div class="shelf">
                    <h1>SOBREVIVÊNCIA<SSkills/></h1>
                    <p>ALERTA<HabiLevel/></p>
                    <p>ATLETICO<HabiLevel/></p>
                    <p>NATUREZA<HabiLevel/></p>
                    <p>FURTIVIDADE<HabiLevel/></p>
                  </div>
                  <div class="shelf">
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