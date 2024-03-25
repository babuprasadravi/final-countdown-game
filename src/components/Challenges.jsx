import { useRef, useState } from "react"
 import ResultModal from "./ResultModal"

export default function Challenges({title , challengeTime}){
    const timer = useRef()
    const dialog = useRef()

    const [timeRemaining , setTimeRemaining] = useState(challengeTime*1000);

    const isActive = timeRemaining > 0 && timeRemaining < challengeTime*1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    const resetTime = () => {
        setTimeRemaining(challengeTime*1000)
    }

    function handleStart(){
     timer.current = setInterval( () => { 
            setTimeRemaining(prevValue =>  prevValue - 10)
        }, 10)
    }

    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }

    return(
        <>
        <ResultModal ref={dialog} targetTime = {challengeTime} timeRemaining={timeRemaining} resetTime={resetTime} />
        <section className="challenge">
            <h2>
                {title}
            </h2>
            <p className="challenge-time">
                {challengeTime} second{challengeTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={isActive ? handleStop : handleStart } >
                    {isActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={isActive ? 'active' : undefined }>
                {isActive ?  'Time is Running ...' : 'Timer Inactive'} 
            </p>
        </section>

        </>
    )
}