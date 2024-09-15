import {
    MIYUKI,
    KURAMOCHI,
    UMEMIYA,
    AMAHISA,
    ISE,
    ASO,
    MINO,
    OKADA,
    IMAMURA,
    MORI,
    OOTO, NAGATA, MASU
} from './assets/profile_players.js';
import {CHRIS, HARUICHI, RYOUSUKE, SAWAMURA, TETSU} from "./assets/profile_seidou";
import {CARLOS, MEI, SANADA} from "./assets/profile_others";
import {AKAGI, NAMASHITA, SHIMONO, SUZUKI, TANAKA, YAMAMOTO} from "./assets/profile_coaches";
import {ADACHI, ASAHI, NABE, NAO, NASHITA, NII, UENO, AKEMI} from "./assets/profile_managers";

const ichigun = {
     title: 'players',
        players: [MIYUKI, KURAMOCHI, AMAHISA, UMEMIYA, ISE, MINO, ASO, MORI, OOTO, NAGATA, OKADA, MASU, IMAMURA]};

const coaches = {title: 'coaches',
        players: [ SHIMONO, TANAKA, SUZUKI, NAMASHITA, YAMAMOTO, AKAGI]};

const managers = {
        title: 'managers',
        players: [NABE, NAO, ADACHI, UENO, ASAHI, AKEMI, NASHITA, NII]};

export const MEIJI = {
    title: 'meiji',
    groups: {
        ichigun: ichigun,
        managers: managers,
        coaches: coaches
    }};

export const OTHERS ={
    title: 'others',
    players: [MEI,SANADA,CARLOS]
}

export const SEIDO ={
    title: 'ex-seidou',
    players: [SAWAMURA, CHRIS, TETSU, RYOUSUKE, HARUICHI]
}

export const MAIN ={
    title: '♥︎',
    players: [KURAMOCHI,MIYUKI]
    }
