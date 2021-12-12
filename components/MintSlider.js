import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState, useEffect } from 'react';
let web3 = require('web3');

function MintSlider(props) {
    const [sliderValue, setSliderValue] = useState(1);
    
    const handleChange = (sliderValues) => {
        setSliderValue(sliderValues / 10);
    };

    async function mint(value, srcAddress, contractAddress){
        let w3 = new web3(ethereum);
        let contract = new w3.eth.Contract(props.contractInfo["ABI"], contractAddress);

        let mintPrice = props.isPublicMintActive ? 0.02 : 0;

        const _price = w3.utils.toWei((value * mintPrice).toString());
        const _contractMethod = props.isPublicMintActive ? contract.methods.mint(value) : contract.methods.mintColorsBatch(props.tokenList.slice(-value));

        let tx = {
            from: srcAddress,
            to : contractAddress,
            data : _contractMethod.encodeABI(),
            nonce: "0x00",
            value: w3.utils.numberToHex(_price)
        }
        const gasEstimate = await _contractMethod.estimateGas(tx).catch((err) => alert(err['message']));   // improved gas estimation as suggested by wetcircle
        if (gasEstimate == undefined) {return false};                                           // Terminates the function upon error
        tx = {
            ...tx,
            gas: parseInt(1.2 * gasEstimate).toString()
        };

        let txHash = ethereum.request({
            method: 'eth_sendTransaction',
            params: [tx],
        }).then((hash) => {
            props.updateMint(parseInt(props.currentMint) + value);
            console.log(hash)
        }).catch((err) => console.log(err))

        return txHash
    }

    function getMarks(max){
        let object = {};
        if (max > 25) {max = 25};
        for (let i = 1; i <= max; i++) {
            object[i*10] = {
                style: {
                    width:"10px",
                },
                label: i.toString()
            }
        }
        return object;
    }

    return (
        <div className="space-y-10 text-center">
            <div className="w-[150px] md:w-[auto]">
                {props.numToken > 1 && <Slider min={10} max={(props.numToken <= 25 ? props.numToken * 10 : 250)} marks={getMarks(props.numToken)} step={null} defaultValue={0}
                    onChange={handleChange}
                    trackStyle={[{ backgroundColor: '#FFF5BD' }]}
                    handleStyle={[{ backgroundColor: '#FFF5BD' }]}
                    railStyle={{ backgroundColor: 'black' }}
                />}
            </div>
            <button disabled={!props.verified} onClick={() => mint(sliderValue, props.mintAddress, props.contractInfo["ADDRESS"])} className={props.verified ? "border-2 py-2 px-8" : "border-2 py-2 px-8 opacity-20"}>Mint</button>
        </div>
    )
}

export default MintSlider
