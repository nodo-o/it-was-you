import { MIYUKI, KURAMOCHI, NABE, NAO, UMEMIYA, AMAHISA } from './profiles.js';

const ichigun = {
     title:'Players',
        players: [
            MIYUKI,
            KURAMOCHI,
            AMAHISA,
            UMEMIYA,
            { name: 'LHP | Ise Nobuyuki',
                role: 'Pitcher | 4rd year | Osaka',
                details: 'Throws Left',
                edu: 'Management, School of Commerce, Meiji University | Osaka Toin High School',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: 'CF | Mino Atsushi',
                role: 'Center Fielder | 4rd year | Tokyo',
                details: 'Throws Right, Bats Right',
                edu: 'Management, School of Commerce, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: '1B | Aso Orochi',
                role: '1st Baseman | 4rd year | Tokyo',
                details: 'Throws Right, Bats Right',
                edu: 'Information and Communication, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: '2B | Mori Satoru',
                role: '2nd Baseman | 4rd year | Tokyo',
                details: 'Throws Right, Bats Left',
                edu: 'Management, School of Commerce, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: '3B | Ooto Keiji',
                role: '3rd Baseman | 4rd year | Tokyo',
                details: 'Throws Right, Bats Right',
                edu: 'Management, School of Commerce, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: 'LF | Nagata Jiro',
                role: 'Left Fielder | 2nd year | Tokyo',
                details: 'Throws Left, Bats Left',
                edu: 'Management, School of Commerce, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: 'RF | Okada Hajime',
                role: 'Right Fielder | 2nd year | Tokyo',
                details: 'Throws Right, Bats Right',
                edu: 'Management, School of Commerce, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: 'C | Masu Shinichirou',
                role: 'Catcher | 4rd year | Tokyo',
                details: 'Throws Right, Bats Left',
                edu: 'Management, School of Commerce, Meiji University | Seikou Academy High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: 'C | Imamura Yoshio',
                role: 'Catcher | 2nd year | Tokyo',
                details: 'Throws Right, Bats Right',
                edu: 'Management, School of Commerce, Meiji University | Seikou Academy High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },

        ]};

const coaches =
    {title: 'Coaches',
        players: [
            { name: 'Shimono Ken',
                role: 'Head Coach | Director',
                details: '',
                edu: '',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: 'Suzuki Hideo',
                role: 'Bullpen Coach',
                details: '',
                edu: '',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: 'Namashita Tatsuji',
                role: 'Batters Coach',
                details: '',
                edu: '',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: 'Yamamoto Susumu',
                role: 'Bullpen Coach',
                details: '',
                edu: '',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: 'Akagi Satoshi',
                role: 'Physical Therapist',
                details: '',
                edu: '',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: 'Tanaka Ryo',
                role: 'Manager Director',
                details: '',
                edu: '',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
        ]};

const managers = {
        title: 'Managers',
        players: [
            NABE,
            NAO,
            { name: 'Adachi Mi',
                role: 'Analyst & Student Coach | 4th year | Iwate',
                details: '',
                edu: 'Business, School of Commerce, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Nao.JPG'
            },
            { name: 'Asahi Sadao',
                role: 'Analyst & Student Coach | 4th year | Tokyo',
                details: '',
                edu: 'Information and Communication, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Nao.JPG'
            },
            { name: 'Ueno Ken',
                role: 'Chief Manager | 4th year | Tokyo',
                details: '',
                edu: 'Information and Communication, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Nao.JPG'
            },
            { name: 'Nii Michi',
                role: 'Analyst & Student Coach | 2nd year | Sendai',
                details: '',
                edu: 'Information Science, Engineering, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Nao.JPG'
            }

        ]};

export const MEIJI = {
    title: 'Meiji',
    groups: {
        ichigun: ichigun,
        managers: managers,
        coaches: coaches
    }};

const npb = {
    title:'NPB',
    players: [
        { name: 'LHP | Sawamura Eijun',
            role: 'Pitcher | Nagano Prefecture',
            details: 'Throws Left',
            edu: 'Seidou High School ',
            affiliation: 'Orix Buffaloes',
            photo:'/Eijun.PNG'
        },
        { name: 'C | Takigawa Chris Yuu',
            role: 'Catcher | Tokyo',
            details: 'Throws Right, Bats Left',
            edu: 'Keio University | Seidou High School ',
            affiliation: 'Orix Buffaloes',
            photo:'/Chris.JPG'
        } ]
};

const uni = {
    title:'University',
    players: [
        { name: 'C | Miyuki Kazuya',
            role: 'Catcher | 3rd year | Tokyo',
            details: 'Throws Right, Bats Left',
            edu: 'Management, School of Commerce, Meiji University | Seidou High School ',
            affiliation: 'Tokyo Six University Baseball Federation',
            photo:'/Miyuki.PNG'
        }]
};

const main_p = {
};

const other = {
    title:'Other',
    players: [
        { name: 'C | Miyuki Kazuya',
            role: 'Catcher | 3rd year | Tokyo',
            details: 'Throws Right, Bats Left',
            edu: 'Management, School of Commerce, Meiji University | Seidou High School ',
            affiliation: 'Tokyo Six University Baseball Federation',
            photo:'/Miyuki.PNG'
        }]
};

export const SEIDOU ={
    title: 'Ex-Seidou',
    groups: {
        npb: npb,
        university: uni,
        other: other
    }}

export const MAIN ={
    title: 'Main Characters',
    players: [KURAMOCHI,MIYUKI]
    }
