export const avatars = [
    {
        id: 0,
        src: new URL('./../assets/images/avatars/afrodita.png', import.meta.url).href,
    },
    {
        id: 1,
        src: new URL('./../assets/images/avatars/apollon.png', import.meta.url).href,
    },
    {
        id: 2,
        src: new URL('./../assets/images/avatars/demetra.png', import.meta.url).href,
    },
    {
        id: 3,
        src: new URL('./../assets/images/avatars/gera.png', import.meta.url).href,
    },
    {
        id: 4,
        src: new URL('./../assets/images/avatars/poseidon.png', import.meta.url).href,
    },
    {
        id: 5,
        src: new URL('./../assets/images/avatars/zevs.png', import.meta.url).href,
    },
    {
        id: 6,
        src: new URL('./../assets/images/avatars/herakl.png', import.meta.url).href,
    },
    {
        id: 7,
        src: new URL('./../assets/images/avatars/helios.png', import.meta.url).href,
    }
]

export const enemies = [
    {
        id: 0,
        name: 'Kentavr',
        health: 100,
        attack: 20,
        critChance: 20,
        critMultiplier: 1.5,
        attackCount: 1,
        blockCount: 3,
        src: new URL('./../assets/images/enemies/kentavr.png', import.meta.url).href,
    },
    {
        id: 1,
        name: 'Meduza',
        health: 130,
        attack: 8,
        critChance: 30,
        critMultiplier: 1,
        attackCount: 3,
        blockCount: 2,
        src: new URL('./../assets/images/enemies/meduza.png', import.meta.url).href,
    },
    {
        id: 2,
        name: 'Ziklop',
        health: 200,
        attack: 5,
        critChance: 50,
        critMultiplier: 2,
        attackCount: 1,
        blockCount: 3,
        src: new URL('./../assets/images/enemies/ziklop.png', import.meta.url).href,
    },
    {
        id: 3,
        name: 'Lion',
        health: 80,
        attack: 20,
        critChance: 30,
        critMultiplier: 1.5,
        attackCount: 2,
        blockCount: 2,
        src: new URL('./../assets/images/enemies/lion.png', import.meta.url).href,
    },
];

export const zones = ["head", "neck", "body", "belly", "legs"];
