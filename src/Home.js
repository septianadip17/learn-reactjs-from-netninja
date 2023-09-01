import { useState, useEffect } from "react";
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIspending] = useState(true);
    const [error, setError] = useState(null);

    // const [name, setName] = useState('mario')

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource')
                }
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIspending(false);
                setError(null);
            })
            .catch(err => {
                setIspending(false)
                setError(err.message)
            })
        }, 1000)
    }, []);

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/> */}
            {/* <button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p> */}
        </div>
    );
}

export default Home;



// //USING STATE
// import { useState } from "react";

// const Home = () => {
//     const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25);

//     const handleClick = () => {
//         setName('luigi');
//         setAge(30);
//     }

//     return (
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{ name } is { age } years old</p>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }

// export default Home;

////CLICK EVENTS
// const Home = () => {

//     const handleClick = (e) => {
//         console.log('hello, ninjas', e)
//     }

//     const handleClickAgain = (name, e) => {
//         console.log('hello ' + name, e.target);
//     }

//     return (
//         <div className="home">
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click me</button>
//             <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
//         </div>
//     );
// }

// export default Home;