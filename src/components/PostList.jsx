import useFetch from "../hooks/useFetch";

const PostList = () => {

    //https:/ / jsonplaceholder.typicode.com / posts

    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {data?.map((post) => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div >
    )
}

export default PostList;