import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function MintSlider() {
    const style = { color: "#FFF5BD" };
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
                color: 'red',
            },
            label: <strong>10</strong>,
        },
    };

    return (
        <div className="space-y-10 text-center">
            <Slider min={10} marks={marks} step={null} defaultValue={0}
                trackStyle={[{ backgroundColor: '#FFF5BD' }]}
                handleStyle={[{ backgroundColor: '#FFF5BD' }]}
                railStyle={{ backgroundColor: 'black' }}
            />
            <button className="border-2 py-2 px-4">Mint 🥄</button>
        </div>
    )
}

export default MintSlider
