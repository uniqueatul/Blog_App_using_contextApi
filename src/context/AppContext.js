//  import { createContext, useState } from "react";
// import { baseUrl } from "../baseUrl";



//  export const AppContext = createContext();

//     export function AppcontextProvider({ children }) {
//  const [loading , setloading] = useState(false);
//  const [posts , setposts] = useState([]);
//  const [page , setpage] = useState(1);
//  const [totalpages , settotalpages] = useState(null);

//  async function fetchBlogPost(page=1) {
//     setloading(true);
//     let url = `${baseUrl}?page=${page}`;
//     try {
//         const result = await fetch(url);
//         const data = await result.json();
//         console.log(data);
//         setpage(data.page);
//     } catch(error) {
//         console.log("error in fetching data", error);
//         setpage(1);
//     } finally {
//         setloading(false);
//     }


//     function handlePageChange(page){
//         setpage(page);
//         fetchBlogPost(page);    
//     }
    


//  }



//   const value ={
//     posts,
//     setposts,
//     loading,
//     setloading,
//     page,
//     setpage,
//     totalpages, 
//     settotalpages
//   };

//   return  
//     <AppContext.Provider value={value}>
//         {children}
//     </AppContext.Provider>;
  
// }

 
 
 



import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// Step 1: Create Context (the "box")
export const AppContext = createContext();

// Step 2: Create Provider
export function AppcontextProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  const [page, setpage] = useState(1);
  const [totalpages, settotalpages] = useState(null);

  // Fetch posts from API
  async function fetchBlogPost(page = 1) {
    setloading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);

      setpage(data.page);
      setposts(data.posts || []); // store posts
      settotalpages(data.totalPages || 1); // store total pages
    } catch (error) {
      console.log("Error in fetching data", error);
      setpage(1);
    } finally {
      setloading(false);
    }
  }

  // Change page
  function handlePageChange(newPage) {
    setpage(newPage);
    fetchBlogPost(newPage);
  }

  // Values to share with all children
  const value = {
    posts,
    setposts,
    loading,
    setloading,
    page,
    setpage,
    totalpages,
    settotalpages,
    fetchBlogPost,
    handlePageChange,
  };

 
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

