import React from 'react';

function Hello({color, name, isSpecial}){
    return (
        <div style={{color:color}}>
            { isSpecial ? <b>*</b> : null }
            {name} Hello React! 
        </div> 
    )
}
Hello.defaultProps = {
    name: 'No'
}
export default Hello;