const ichigun = {
     title:'Ichi-gun',
        players: [
            { name: 'C | Miyuki Kazuya',
                role: 'Catcher | 3rd year | Tokyo',
                details: 'Throws Right, Bats Left',
                edu: 'Management, School of Commerce, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Miyuki.PNG'
            },
            { name: 'SS | Kuramochi Youichi',
                role: 'Shortstop | 3rd year | Ohara, Chiba Prefecture',
                details: 'Throws Right, Bats Left/Right',
                edu: 'Creative Business, School of Commerce, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Mochi.JPG'
            },
            { name: 'RHP | Amahisa Kousei',
                role: 'Pitcher | 3rd year | Tokyo',
                details: 'Throws Right',
                edu: 'School of Information and Communication, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },
            { name: 'RHP | Umemiya Seiichi',
                role: 'Pitcher | 3rd year | Tokyo',
                details: 'Throws Right',
                edu: 'Management, School of Commerce, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Amahisa.JPG'
            },

        ]};

const nigun = {
    title:'Ni-gun',
        players: [
            { name: 'Miyuki Kazuya', role: 'Catcher', details: '3rd year | Pretty Boy', photo:'/Miyuki.PNG'},
            { name: 'Kuramochi Youichi', role: 'Shortstop', details: '3rd year | Pretty Boy', photo:'/Mochi.JPG'}
            // More characters...
        ]};

const coaches =
    {title: 'Coaches',
        players: [
            { name: 'Suzuki', position: 'Bullpen Coach' },
            { name: 'Yamamoto', position: 'Trainer' }
        ]};

const managers = {
        title: 'Managers',
        players: [
            { name: 'Watanabe Hisashi',
                role: 'Analyst & Student Coach | 3rd year | Kanegawa',
                details: '/',
                edu: 'Management, School of Commerce, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Nabe.JPG'
            },
            { name: 'Matsubara Nao',
                role: 'Analyst & Student Coach | 3rd year | Tokyo',
                details: '/',
                edu: 'Management, School of Commerce, Meiji University | Seidou High School ',
                affiliation: 'Tokyo Six University Baseball Federation',
                photo:'/Nao.JPG'
            },
        ]};

export const MEIJI = {
    title: 'Meiji',
    groups: {
        ichigun: ichigun,
        nigun: nigun,
        managers: managers,
        coaches: coaches
    }};

const npb = {
    title:'NPB',
    players: [
        { name: 'C | Miyuki Kazuya',
            role: 'Catcher | 3rd year | Tokyo',
            details: 'Throws Right, Bats Left',
            edu: 'Management, School of Commerce, Meiji University | Seidou High School ',
            affiliation: 'Tokyo Six University Baseball Federation',
            photo:'/Miyuki.PNG'
        }]
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
