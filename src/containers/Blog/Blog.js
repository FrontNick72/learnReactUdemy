import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

import classes from './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: {
            status: false,
            text: ''
        }
    }
    
    componentDidMount() {
        axios
            .get('/posts')
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });

                this.setState({ posts: updatedPosts});                               
            })
            .catch(error => {
                console.error('What you doing, man?', error);
                this.setState({ error: { status: true, text: error } });
            });
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    }

    render () {
        let posts = <p style={{textAlign: 'center', color: 'red'}}>Something went wrong!</p>;

        if (!this.state.error.status) {
            posts = this.state.posts.map((post) => {
                return <Post 
                            key={post.id}                        
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>
            });
        }

        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;