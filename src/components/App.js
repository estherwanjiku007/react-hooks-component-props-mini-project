import React from "react";
import blogData from "../data/blog";

console.log(blogData.name);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );  
}
function Header({name}){
  console.log(name)
return(
  <h1>{name}</h1>
)
}
function About({image,about}){
  console.log(image,about)
 
return(
  <aside>
    {image && image.length>1?<img src={image} alt="blog logo"/>:<img src={"https://via.placeholder.com/215"} alt="blog logo"/>}
    <p>{about}</p>
  </aside>
)
}
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
function Article({title,date,preview}){
console.log(title,date,preview)
return(
  <article>
    <h3>{title}</h3>
    <small>{date}</small>
    <p>{preview}</p> 

      </article>
)
}

export default App;
