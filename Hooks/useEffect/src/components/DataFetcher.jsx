import React, { useEffect, useState } from 'react'

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })

    }, [])

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {!loading && (
                <ul style={styles.list}>
                    {data.map((post) => (
                        <li key={post.id} style={styles.listItem}>
                            <h3 style={styles.title}>{post.title}</h3>
                            <p style={styles.body}>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

const styles = {
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        marginBottom: '1rem',
        padding: '1rem',
        backgroundColor: '#fff',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
        margin: 0,
        fontSize: '1.2rem',
        color: '#333',
    },
    body: {
        margin: '0.5rem 0 0',
        color: '#666',
    },
};

export default DataFetcher