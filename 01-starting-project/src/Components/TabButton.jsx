// export default function TabButton(props){
//     return(
//         <li><button>{props.children}</button></li>
//     )
// }

//using destructuring of the props variable you can just call out the children properties of the props
// uses curly braces {children}

// onSelect is a function that we are passing for our onClick handler. 
// Because we are passing it in as a prop, means that it is coming from outside of this component
export default function TabButton({ children, onSelect }) {
  
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  )
}
