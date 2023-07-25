import React from 'react'


export function Interview(props) {
    

    return (
        <>
           <div  id={props.id} className="section" 
           style={{ background : `${props.obj.bgimg}` }}>
           <h2>{ props.h2 }</h2>
           <ul>
          {
             props.obj.content.map((v, i) =>{

                return(
                    <li key={i}>
                        <h3>{v.Q}</h3>
                        <div>{v.A}</div>
                    </li>
                )

             })

          }
          </ul>

        </div>  
        </>
    )
}
