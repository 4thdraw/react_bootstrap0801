import React from 'react'

export function Skill(props) {
    

    return (
        <>
           <div  id={props.id} className="section">
           <h2>{ props.title.h2 }</h2>
           <div>
            {
                props.title.p.map((v, i)=>{
                    return(
                        <p>{v}</p>
                    )

                })
            }
           </div>
          {/* Add your content for section 2 */}
        </div> 
        </>
    )
}
