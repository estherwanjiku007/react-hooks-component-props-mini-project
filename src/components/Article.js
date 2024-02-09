import React from "react"
function Article({title,date,preview}){
    console.log(title,date,preview)
    return(
      <article>
        <h3>{title}</h3>        
        {date && date.length>=1 ? <small>{date}</small>:<small>January 1, 1970</small>}
        <p>{preview}</p> 
    
          </article>
    )
    }
export default Article