"use client"

import { useState, useEffect, ReactNode, ChangeEvent } from "react";
import Box from "../components/ui/Box";
import { player } from "./utils/types";
import { checkWinner } from "./utils/helperfns";
import { Queue } from "./utils/dataStructures";
import { motion } from "motion/react"
import Modal from "../components/ui/Modal"
import { Button } from "@/components/ui/button";



export default function Home() {

  const [ boxes, setBoxes ] = useState<ReactNode[] | []>( [] )
  const [ currentPlayer, setCurrentPlayer ] = useState<number>( 1 )
  const [ inputs, setInputs ] = useState<player[]>( new Array( 9 ).fill( { value: null, disabled: false, showText: null } ) )
  const [ queue, setQueue ] = useState<Queue>( new Queue() )
  const [ winner, setWinner ] = useState<number | null>( null )
  


  const handleClick = ( event: React.MouseEvent<HTMLInputElement>, index: number ) => {

    queue.enque( index )

    if ( queue.getLength() > 6 ) {
      const eliminatedIndex = queue.deque()!
      console.log(eliminatedIndex)

      setInputs( prev => {
        const updatedInput = prev
        updatedInput[ eliminatedIndex ] = { value: null, disabled: false, showText: null}
        return updatedInput
      })
    }

    setCurrentPlayer( prev => prev === 1 ? 2 : 1)
    
    setInputs( prev => {
      const updatedInput = prev
      updatedInput[ index ] = {value: currentPlayer, disabled: true, showText: currentPlayer === 1 ? "X" : "O"}
      return updatedInput
    })
    
  }  

  function handleReset(): void {
    setCurrentPlayer(prev => 1)
    setWinner( null )
    setInputs( prev => new Array( 9 ).fill( { value: null, disabled: false, showText: null } ) )
    setQueue(prev => new Queue())
  }
  
  useEffect( () => {
    setBoxes( prev => inputs.map( ( item, index ) =>
      <Box
        key={ index }
        name={ index.toString() }
        text = {item.showText}
        disabled={ item.disabled }
        value={ item.value }
        handleClick={ ( event ) => handleClick( event, index ) } />
    ) )
  }, [ inputs, currentPlayer ] )
  
  useEffect( () => {
    if ( checkWinner( inputs ) ) {
      setWinner( currentPlayer === 1 ? 2 : currentPlayer === 2 ? 1 : null )
      
    }
  }, [ inputs, currentPlayer ] )
  
  console.log(currentPlayer, winner)

  return (
    <div className="relative bg-gradient-to-br from-zinc-600 to-zinc-900 h-screen">

    <Button variant="destructive" onClick={handleReset} className="fixed bottom-[4rem] md:top-[4rem] right-[4rem]">Reset</Button>
      {winner && <Modal winner={ winner } handleReset = {handleReset} /> } 
      
    <motion.div
        initial={ { scale: 0 } }
        animate={ { scale: 1 } }
        transition={ {
            duration: 0.5,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
        }}  
      >
      
        <div className=" flex flex-col gap-[4rem] items-center p-[3rem] z-0"> 
          <h1 className="text-4xl sm:text-5xl font-extrabold ">Infinite Tic Tac Toe</h1>
          <div className="grid grid-cols-3 gap-4">
            { boxes }
          </div>
          <div className="px-[2rem] py-[1rem] text-sm sm:text-2xl font-semibold border border-stone-50/80 border-4 text-foreground  rounded-sm">
            {`Player ${ currentPlayer }'s turn`}
          </div>

        </div>
      </motion.div>
    </div>
  );
}