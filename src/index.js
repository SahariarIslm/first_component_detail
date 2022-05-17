import React from 'react'
import ReactDOM from 'react-dom';

// Dumb component/stateless functional component
// always returns JSX

function Greeting(){
    return (
            <div>
                <h1>This is Sahariar and this is my first component1</h1>
            </div>
           );
}
// const Greeting = () => {
//     return React.createElement
//     (
//         'div',
//         {},
//         React.createElement('h1',{},'hello world2')
//     );
// }
ReactDOM.render(<Greeting/>,document.getElementById('root'));
 