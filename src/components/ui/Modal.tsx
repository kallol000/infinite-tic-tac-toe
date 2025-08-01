import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "./dialog"
import { Button } from "./button"
// import {}
export default function Modal( { winner, handleReset }: { winner: number | null, handleReset: () => void } ) {
    
    return (
        <div className="fixed bg-gray-700/50 backdrop-blur-sm h-screen w-full z-1">
            <Dialog defaultOpen >
                <DialogContent className="flex flex-col items-center justify-center gap-[2rem] p-10" onInteractOutside={(event) => event.preventDefault()}>
                        <DialogTitle className="text-2xl" >Player { winner } Wins!</DialogTitle>
                        <Button onClick={handleReset}>Reset</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}