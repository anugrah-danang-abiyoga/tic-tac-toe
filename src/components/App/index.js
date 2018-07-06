import React from 'react'
import styled from 'styled-components'

import { Board, Square } from '..'

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`
StyledApp.displayName = 'StyledApp'

export default function App () {
  return (
    <StyledApp>
      <Board>
        <Square index={0} player='x' />
        <Square index={1} player='o' />
        <Square index={2} player='x' />
        <Square index={3} player='o' />
        <Square index={4} player='x' />
        <Square index={5} player='o' />
        <Square index={6} player='x' />
        <Square index={7} player='o' />
        <Square index={8} player='x' />
      </Board>
    </StyledApp>
  )
}

// import React from 'react'
// import styled from 'styled-components'

// import { Board } from '..'

// const StyledApp = styled.div`
//   display: grid;
//   font-family: 'Verdana', sans-serif;
//   grid-template-areas: 'board';
//   height: 100vh;
//   margin: 0;
//   padding: 0;
//   width: 100vw;
// `
// StyledApp.displayName = 'StyledApp'

// export default function App () {
//   return (
//     <StyledApp>
//     <Board>
//     <div>
//         <div>
//             <div>0</div>
//             <div>1</div>
//             <div>2</div>
//             <div>3</div>
//             <div>4</div>
//             <div>5</div>
//             <div>6</div>
//             <div>7</div>
//             <div>8</div>
//         </div>
//     </div>
//     </Board>
//     </StyledApp>
//   )
// }
