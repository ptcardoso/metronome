import React, {useState, useEffect} from 'react'
import {Input} from '../../components/forms/inputs'
import {Button} from '../../components/forms/buttons'
import Hat1 from '../../media/sound/hat1.wav'
import Hat2 from '../../media/sound/hat2.wav'

export default function() {
    const [beatsPerMinute, setBeatsPerMinute] = useState(120)
    const [isPlaying, setIsPlaying] = useState(false)
    const [beepCount, setBeepCount] = useState(0)

    useEffect(() => {
        const beepTimeout = setTimeout(() => {
            if (isPlaying) {
                const newBeepCount = beepCount + 1
                if (newBeepCount % 4) {
                    const beep = new Audio(Hat1)
                    beep.play()
                } else {
                    const beep = new Audio(Hat2)
                    beep.play()
                }
                setBeepCount(newBeepCount % 4)
            }
        }, 60/beatsPerMinute*1000)
        return () => clearTimeout(beepTimeout)
    })

    function handleBeatsPerMinuteChange(evt) {
        setIsPlaying(false)
        setBeepCount(0)
        setBeatsPerMinute(evt.target.value)
    }

    function handleButtonClick() {
        setIsPlaying(!isPlaying)
        setBeepCount(0)
    }

    return (
        <>  
            <Input className='bpm-input' value={beatsPerMinute} onChange={handleBeatsPerMinuteChange}/>
            <div className='controls'>
                <Button onClick={handleButtonClick}>
                    {isPlaying ? 'Stop' : 'Start'}
                </Button>
            </div>
        </>
    )
}
