// import React from 'react'
//
// interface IChildComponent {
//     style?: React.CSSProperties
// }
//
// export const Child = (props: IChildComponent) => {
//     const style = props.style || {}
//     return <div style={
//         background: 'white',
//         ...style
//     }>
//
//     </div>
// }
//
// export const Parent = () => {
//     return <div>
//         {[1,2,3,4,5].map(() => {
//             return <Child style={{background: 'white'}/>
//         })}
//     </div>
// }