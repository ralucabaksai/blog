import React, { Component } from "react";
import BloglistItem from "./BloglistItem";
import PaginationHelper from "./PaginationHelper";

class Blogpage extends Component {
  state = { posts: [], currentPage: 1, postsPerPage: 5 };
  componentDidMount() {
<<<<<<< HEAD
    fetch("https://jsonplaceholder.typicode.com/posts")
=======
    fetch("https://rest.vedinas.ro/posts?")
>>>>>>> d8192f205f042a7406a9353e17b3c041b0c11a93
      .then((response) => response.json())
      .then((posts) => {
        this.setState({ posts });
      });
  }
  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };
  render() {
    const { posts, currentPage, postsPerPage } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    // console.log(posts);
    const blogList = currentPosts.map((blogPost) => {
      return <BloglistItem key={blogPost.id} post={blogPost} />;
    });
    return (
      <section className='container mt-4'>
        <h1 className='text-primary md-3'>MyBlog</h1>
        {blogList}
        <PaginationHelper
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={this.paginate}
        />
      </section>
    );
  }
}

export default Blogpage;
