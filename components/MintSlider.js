import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

function MintSlider(props) {
    const [sliderValue, setSliderValue] = useState(1);
    
    const handleChange = (sliderValues) => {
        setSliderValue(sliderValues/10);
        console.log(sliderValues/10);
    };
    
    const marks = {
        10: <strong>1</strong>,
        20: '2',
        30: '3',
        40: '4',
        50: '5',
        60: '6',
        70: '7',
        80: '8',
        90: '9',
        100: {
            style: {
                color: 'green',
            },
            label: <strong>10</strong>,
        },
    };

    return (
        <div className="space-y-10 text-center">
            <Slider min={10} marks={marks} step={null} defaultValue={0}
                onChange={handleChange}
                trackStyle={[{ backgroundColor: '#FFF5BD' }]}
                handleStyle={[{ backgroundColor: '#FFF5BD' }]}
                railStyle={{ backgroundColor: 'black' }}
            />
            <button onClick={() => props.updateMint(props.currentMint+sliderValue)} className="border-2 py-2 px-4">Mint</button>
        </div>
    )
}

export default MintSlider
