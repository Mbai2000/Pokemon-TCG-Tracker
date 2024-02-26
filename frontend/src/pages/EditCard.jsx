import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Select from 'react-select'
import { useSnackbar } from 'notistack';

const options = [
    {
        label: 'Base Set Series',
        options: [
            { value: 'Base Set', label: 'Base Set'},
            { value: 'Wizards of the Coast Promos', label: 'Wizards of the Coast Promos'},
            { value: 'Jungle', label: 'Jungle'},
            { value: 'Fossil', label: 'Fossil'},
            { value: 'Base Set 2', label: 'Base Set 2'},
            { value: 'Team Rocket', label: 'Team Rocket'},
        ]
    },
    {
        label: 'Gym Heroes Series',
        options: [
            { value: 'Gym Heroes', label: 'Gym Heroes'},
            { value: 'Gym Challenge', label: 'Gym Challenge'},
        ]
    },
    {
        label: 'Topps Chrome Series',
        options: [    
            { value: 'Topps Series 1', label: 'Topps Series 1'},
            { value: 'Topps Series 2', label: 'Topps Series 2'},
            { value: 'Topps Series 3', label: 'Topps Series 3'},
        ]
    },
    {
        label: 'Neo Genesis Series',
        options: [    
            { value: 'Neo Genesis', label: 'Neo Genesis'},
            { value: 'Southern Islands', label: 'Southern Islands'},
            { value: 'Neo Discovery', label: 'Neo Discovery'},
            { value: 'Neo Revelation', label: 'Neo Revelation'},
            { value: 'Neo Destiny', label: 'Neo Destiny'},
        ]
    },
    {
        label: 'Legendary Collection Series',
        options: [    
            { value: 'Legendary Collection', label: 'Legendary Collection'},
        ]
    },
    {
        label: 'e-Card Series',
        options: [    
            { value: 'Expedition Base Set', label: 'Expedition Base Set'},
            { value: 'Best of Game', label: 'Best of Game'},
            { value: 'Aquapolis', label: 'Aquapolis'},
            { value: 'Skyridge', label: 'Skyridge'},
        ]
    },
    {
        label: 'EX Ruby and Sapphire Series',
        options: [    
            { value: 'EX Ruby & Sapphire', label: 'EX Ruby & Sapphire'},
            { value: 'EX Sandstorm', label: 'EX Sandstorm'},
            { value: 'EX Dragon', label: 'EX Dragon'},
            { value: 'EX Team Magma vs Team Aqua', label: 'EX Team Magma vs Team Aqua'},
            { value: 'EX Hidden Legends', label: 'EX Hidden Legends'},
            { value: 'EX FireRed & LeafGreen', label: 'EX FireRed & LeafGreen'},
            { value: 'EX Team Rocket Returns', label: 'EX Team Rocket Returns'},
            { value: 'EX Deoxys', label: 'EX Deoxys'},
            { value: 'EX Emerald', label: 'EX Emerald'},
            { value: 'EX Unseen Forces', label: 'EX Unseen Forces'},
            { value: 'EX Unseen Forces Unown Collection', label: 'EX Unseen Forces Unown Collection'},
            { value: 'EX Delta Species', label: 'EX Delta Species'},
            { value: 'EX Legend Maker', label: 'EX Legend Maker'},
            { value: 'EX Holon Phantoms', label: 'EX Holon Phantoms'},
            { value: 'EX Crystal Guardians', label: 'EX Crystal Guardians'},
            { value: 'EX Dragon Frontiers', label: 'EX Dragon Frontiers'},
            { value: 'EX Power Keepers', label: 'EX Power Keepers'},
        ]
    },
    {
        label: 'Poké Card Creator Pack',
        options: [    
            { value: 'Poké Card Creator Pack', label: 'Poké Card Creator Pack'},
        ]
    },
    {
        label: 'POP Series',
        options: [    
            { value: 'POP Series 1', label: 'POP Series 1'},
            { value: 'POP Series 2', label: 'POP Series 2'},
            { value: 'POP Series 3', label: 'POP Series 3'},
            { value: 'POP Series 4', label: 'POP Series 4'},
            { value: 'POP Series 5', label: 'POP Series 5'},
            { value: 'POP Series 6', label: 'POP Series 6'},
            { value: 'POP Series 7', label: 'POP Series 7'},
            { value: 'POP Series 8', label: 'POP Series 8'},
            { value: 'POP Series 9', label: 'POP Series 9'},    
            { value: 'Poké Card Creator Pack', label: 'Poké Card Creator Pack'},
        ]
    },
    {
        label: 'Nintendo Promos',
        options: [    
            { value: 'Nintendo Promos', label: 'Nintendo Promos'},
        ]
    },
    {
        label: 'Diamond & Pearl Series',
        options: [    
            { value: 'Diamond & Pearl', label: 'Diamond & Pearl'},
            { value: 'Diamond & Pearl Black Star Promos', label: 'Diamond & Pearl Black Star Promos'},
            { value: 'Mysterious Treasures', label: 'Mysterious Treasures'},
            { value: 'Secret Wonders', label: 'Secret Wonders'},
            { value: 'Great Encounters', label: 'Great Encounters'},
            { value: 'Majestic Dawn', label: 'Majestic Dawn'},
            { value: 'Legends Awakened', label: 'Legends Awakened'},
            { value: 'Stormfront', label: 'Stormfront'},
        ]
    },
    {
        label: 'Platinum Series',
        options: [    
            { value: 'Platinum', label: 'Platinum'},
            { value: 'Rising Rivals', label: 'Rising Rivals'},
            { value: 'Rising Rivals', label: 'Rising Rivals'},
            { value: 'POP Series 3', label: 'POP Series 3'},
            { value: 'POP Series 3', label: 'POP Series 3'},
    ]
    },
    {
        label: 'Platinum Series',
        options: [    
            { value: 'Platinum', label: 'Platinum'},
            { value: 'Rising Rivals', label: 'Rising Rivals'},
            { value: 'Rising Rivals', label: 'Rising Rivals'},
            { value: 'POP Series 3', label: 'POP Series 3'},
            { value: 'POP Series 3', label: 'POP Series 3'},
    ]
    },
    {
        label: 'HeartGold SoulSilver Series',
        options: [    
            { value: 'HeartGold & SoulSilver Black Star Promos', label: 'HeartGold & SoulSilver Black Star Promos'},
            { value: 'HeartGold & SoulSilver', label: 'HeartGold & SoulSilver'},
            { value: 'Unleashed', label: 'Unleashed'},
            { value: 'Undaunted', label: 'Undaunted'},
            { value: 'Triumphant', label: 'Triumphant'},
    ]
    },
    {
        label: 'Call of Legends Series',
        options: [    
            { value: 'Call of Legends', label: 'Call of Legends'},
    ]
    },
    {
        label: "McDonald's Collection", //Come Back
        options: [    
            { value: "McDonald's Collection (2011)", label: "McDonald's Collection (2011)"},
            { value: "McDonald's Collection (2012)", label: "McDonald's Collection (2012)"},
            { value: "McDonald's Collection (2013)", label: "McDonald's Collection (2013)"},
            { value: "McDonald's Collection (2014)", label: "McDonald's Collection (2014)"},
            { value: "McDonald's Collection (2015)", label: "McDonald's Collection (2015)"},
            { value: "McDonald's Collection (2016)", label: "McDonald's Collection (2016)"},
            { value: "McDonald's Collection (2017)", label: "McDonald's Collection (2017)"},
            { value: "McDonald's Collection (2018)", label: "McDonald's Collection (2018)"},
            { value: "McDonald's Collection (2019)", label: "McDonald's Collection (2019)"},
            { value: "McDonald's Collection (2021)/McDonald's 25th Anniversary", label: "McDonald's Collection (2021)/McDonald's 25th Anniversary"},
            { value: "McDonald's Match Battle", label: "McDonald's Match Battle"},
            { value: "McDonald's Match Battle 2023", label: "McDonald's Match Battle 2023"},
    ]
    },
    {
        label: 'Black & White Series',
        options: [                
            { value: 'Black & White Black Star Promos', label: 'Black & White Black Star Promos'},
            { value: 'Black & White', label: 'Black & White'},
            { value: 'Noble Victories', label: 'Noble Victories'},
            { value: 'Next Destinies', label: 'Next Destinies'},
            { value: 'Dark Explorers', label: 'Dark Explorers'},
            { value: 'Dragons Exalted', label: 'Dragons Exalted'},
            { value: 'Dragon Vault', label: 'Dragon Vault'},
            { value: 'Boundaries Crossed', label: 'Boundaries Crossed'},
            { value: 'Plasma Storm', label: 'Plasma Storm'},
            { value: 'Plasma Freeze', label: 'Plasma Freeze'},
            { value: 'Plasma Blast', label: 'Plasma Blast'},
            { value: 'Legendary Treasures', label: 'Legendary Treasures'},
            { value: 'Radiant Collection', label: 'Radiant Collection'},
    ]
    },
    {
        label: 'XY Series',
        options: [                
            { value: 'XY Black Star Promos', label: 'XY Black Star Promos'},
            { value: 'Kalos Starter Set', label: 'Kalos Starter Set'},
            { value: 'XY', label: 'XY'},
            { value: 'Flashfire', label: 'Flashfire'},
            { value: 'Furious Fists', label: 'Furious Fists'},
            { value: 'Phantom Forces', label: 'Phantom Forces'},
            { value: 'Primal Clash', label: 'Primal Clash'},
            { value: 'Double Crisis', label: 'Double Crisis'},
            { value: 'Roaring Skies', label: 'Roaring Skies'},
            { value: 'Ancient Origins', label: 'Ancient Origins'},
            { value: 'BREAKthrough', label: 'BREAKthrough'},
            { value: 'BREAKpoint', label: 'BREAKpoint'},
            { value: 'Generations', label: 'Generations'},
            { value: 'Fates Collide', label: 'Fates Collide'},
            { value: 'Steam Siege', label: 'Steam Siege'},
            { value: 'Evolutions', label: 'Evolutions'},
    ]
    },
    {
        label: 'Sun & Moon Series',
        options: [                
            { value: 'Sun & Moon Black Star Promos', label: 'Sun & Moon Black Star Promos'},
            { value: 'Sun & Moon', label: 'Sun & Moon'},
            { value: 'Guardians Rising', label: 'Guardians Rising'},
            { value: 'Burning Shadows', label: 'Burning Shadows'},
            { value: 'Shining Legends', label: 'Shining Legends'},
            { value: 'Crimson Invasion', label: 'Crimson Invasion'},
            { value: 'Ultra Prism', label: 'Ultra Prism'},
            { value: 'Forbidden Light', label: 'Forbidden Light'},
            { value: 'Celestial Storm', label: 'Celestial Storm'},
            { value: 'Dragon Majesty', label: 'Dragon Majesty'},
            { value: 'Lost Thunder', label: 'Lost Thunder'},
            { value: 'Team Up', label: 'Team Up'},
            { value: 'Unbroken Bonds', label: 'Unbroken Bonds'},            
            { value: 'Detective Pikachu', label: 'Detective Pikachu'},
            { value: 'Unified Minds', label: 'Unified Minds'},
            { value: 'Hidden Fates', label: 'Hidden Fates'},
            { value: 'Cosmic Eclipse', label: 'Cosmic Eclipse'},
    ]
    },
    {
        label: 'Sword & Shield Series',
        options: [                
            { value: 'Sword & Shield Black Star Promos', label: 'Sword & Shield Black Star Promos'},
            { value: 'Sword & Shield', label: 'Sword & Shield'},
            { value: 'Rebel Clash', label: 'Rebel Clash'},
            { value: 'Darkness Ablaze', label: 'Darkness Ablaze'},
            { value: 'Pokémon Futsal', label: 'Pokémon Futsal'},
            { value: "Champion's Path", label: "Champion's Path"},
            { value: 'Vivid Voltage', label: 'Vivid Voltage'},
            { value: 'Shining Fates', label: 'Shining Fates'},
            { value: 'Battle Styles', label: 'Battle Styles'},
            { value: 'Chilling Reign', label: 'Chilling Reign'},
            { value: 'Evolving Skies', label: 'Evolving Skies'},
            { value: 'Celebrations', label: 'Celebrations'},
            { value: 'Fusion Strike', label: 'Fusion Strike'},    
            { value: 'Brilliant Stars', label: 'Brilliant Stars'},       
            { value: 'Brilliant Stars - Trainer Gallery', label: 'Brilliant Stars - Trainer Gallery'},               
            { value: 'Astral Radiance', label: 'Astral Radiance'},
            { value: 'Astral Radiance - Trainer Gallery', label: 'Astral Radiance - Trainer Gallery'},
            { value: 'Pokémon GO', label: 'Pokémon GO'},
            { value: 'Trick or Trade', label: 'Trick or Trade'},
            { value: 'Lost Origin', label: 'Lost Origin'},
            { value: 'Lost Origin - Trainer Gallery', label: 'Lost Origin - Trainer Gallery'},
            { value: 'Silver Tempest', label: 'Silver Tempest'},
            { value: 'Silver Tempest - Trainer Gallery', label: 'Silver Tempest - Trainer Gallery'},
            { value: 'Crown Zenith', label: 'Crown Zenith'},
            { value: 'Crown Zenith - Galarian Gallery', label: 'Crown Zenith - Galarian Gallery'},
    ]
    },
    {
        label: 'Scarlet & Violet Series',
        options: [                
            { value: 'Scarlet & Violet Black Star Promos', label: 'Scarlet & Violet Black Star Promos'},
            { value: 'Scarlet & Violet', label: 'Scarlet & Violet'},
            { value: 'Paldea Evolved', label: 'Paldea Evolved'},
            { value: 'Obsidian Flames', label: 'Obsidian Flames'},
            { value: 'Trick or Trade 2023', label: 'Trick or Trade 2023'},
            { value: 'Scarlet & Violet - 151', label: 'Scarlet & Violet - 151'},
            { value: 'Paradox Rift', label: 'Paradox Rift'},
            { value: 'Paldean Fates', label: 'Paldean Fates'},
            { value: 'Temporal Forces', label: 'Temporal Forces'},
    ]
    },
];

const EditCard = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [set, setSet] = useState('');
    const [image, setImage] = useState('');
    const [market, setMarket] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();

    let handleChangeSet = (e) => {
        setSet(e.value)
    }

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:8888/cards/${id}`)
        .then((response) => {
            setName(response.data.name);
            setNumber(response.data.number);
            setSet(response.data.set);
            setImage(response.data.image);
            setMarket(response.data.market);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            alert('An error has occured');
            console.log(error);
        });
    }, [])
    const handleEditCard = () => {
        const data = {
            name,
            number,
            set,
            image,
            market,
        };
        setLoading(true);
        axios.put(`http://localhost:8888/cards/${id}`, data)
        .then(() => {
            setLoading(false);
            enqueueSnackbar('Card Changed', { variant: 'success' });
            navigate('/');
        })
        .catch((error) => {
            setLoading(false);
            enqueueSnackbar('Card Change Error', { variant: 'error' });
            console.log(error);
        });
    }
    
    return (
        <div className = 'p-4 mx-auto'>
            <h1 className = 'text-3xl my-4 dark:text-white'>Edit Card</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto'>
                <div className='my-1'>
                    <label className='text-xl mr-4 text-gray-500 dark:text-white'>Name</label>
                    <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-1 w-full dark:bg-slate-800 dark:text-white'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500 dark:text-white'>Number</label>
                    <input
                    type='text'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-1 w-full dark:bg-slate-800 dark:text-white'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500 dark:text-white'>Set</label>
                    <Select
                    options={options}
                    onChange={handleChangeSet} 
                    className='border-2 border-gray-500 px-4 py-1 w-full dark:bg-slate-800'
                    isSearchable={true}>
                    </Select>
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500 dark:text-white'>Image</label>
                    <input
                    type='text'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-1 w-full dark:bg-slate-800 dark:text-white'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500 dark:text-white'>Market Price</label>
                    <input
                    type='text'
                    value={market}
                    onChange={(e) => setMarket(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-1 w-full dark:bg-slate-800 dark:text-white'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-3' onClick={handleEditCard}>
                    Edit
                </button>
            </div>
        </div>
    )
};


export default EditCard