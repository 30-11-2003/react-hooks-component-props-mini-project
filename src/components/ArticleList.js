import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList(){
    return(
        <main>

        {blogData.posts}
        </main>
    )
}
export default ArticleList;