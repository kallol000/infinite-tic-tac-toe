import { player } from "./types"

export function checkWinner(inputs:player[]) : boolean{
    if ( winningCondition( inputs, 0, 1, 2 ) ) {
        return true
    }
    if ( winningCondition( inputs, 3, 4, 5 ) ) {
        return true
    }
    if ( winningCondition( inputs, 6, 7, 8 ) ) {
        return true
    }
    if ( winningCondition( inputs, 0, 3, 6 ) ) {
        return true
    }
    if ( winningCondition( inputs, 1, 4, 7 ) ) {
        return true
    }
    if ( winningCondition( inputs, 2, 5, 8 ) ) {
        return true
    }
    if ( winningCondition( inputs, 0, 4, 8 ) ) {
        return true
    }
    if ( winningCondition( inputs, 2, 4, 6 ) ) {
        return true
    }

    return false
}


export function winningCondition( inputs : player[], ind1 : number, ind2 : number, ind3 : number ) : boolean {
    if ( inputs[ ind1 ].value === inputs[ ind2 ].value && inputs[ ind2 ].value === inputs[ ind3 ].value && inputs[ ind1 ].value !== null && inputs[ ind2 ].value !== null && inputs[ ind3 ].value !== null ) {
        return true
    }
    return false
}

// export checkWinner