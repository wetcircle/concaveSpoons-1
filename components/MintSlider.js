import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function MintSlider() {
    const marks = {
        0: <strong>0 🥄</strong>,
        10: '1 🥄',
        20: '2 🥄',
        30: '3 🥄',
        40: '4 🥄',
        50: '5 🥄',
        60: '6 🥄',
        70: '7 🥄',
        80: '8 🥄',
        90: '9 🥄',
        100: {
          style: {
            color: 'red',
          },
          label: <strong>10 🥄</strong>,
        },
      };

    return (
        <div className="space-y-10 text-center">
            <Slider min={0} marks={marks} step={null} defaultValue={0} />
            <button className="border-2 py-2 px-4">Mint 🥄</button>
        </div>
    )
}

export default MintSlider
