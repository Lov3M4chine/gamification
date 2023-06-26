import './styles.css';
import { addFooterEventListeners, addProgressBarEventListeners } from './EventListeners.js';
import { hideProgressBarOnOverlap } from './ProgreeBarOverlapCheck';


let experienceNeeded = [];
let experienceGrantedPerMinute = [];
let creditsGrantedPerMinute = [];

function calculateExperienceForEachLevel() {
    let experienceNeededCounter = 0;
    for (let i = 1; i < 11; i++) {
        let calculateExperienceNeeded = (i * 1000) * 1.5;
        experienceGrantedPerMinute.push((calculateExperienceNeeded / 100) / 60);
        experienceNeededCounter += calculateExperienceNeeded;
        experienceNeeded.push(experienceNeededCounter);

    }
    console.log(experienceNeeded);
    console.log(experienceGrantedPerMinute);
}

function calculateCreditsForEachLevel() {
    experienceGrantedPerMinute.forEach((experienceGrantedPerMinue) => {
        creditsGrantedPerMinute.push(experienceGrantedPerMinue * 4);
    });
    console.log(creditsGrantedPerMinute);
}

function createNewPlayer() {
    class Player {
        constructor(name) {
            this.name = name;
            this.experience = 0;
            this.credits = 100;
            this.equipment = {};
            this.inventory = {};
            this.skills = {};
        }
    }
}

addFooterEventListeners();
hideProgressBarOnOverlap();
addProgressBarEventListeners();
