import React from "react"
import Article from "./Article"
function ArticleList({posts}){
    console.log(posts)
  return(
    <div>
    <main>
      {posts.map((post)=>(
        <Article title={post.title}
        date={post.date} key={post.id}
         preview={post.preview}/>
      ))}
      </main>
      </div>
  )
      }
    export default ArticleList