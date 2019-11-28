import React, { useState, useEffect } from 'react';
import axios from "axios";

async function getPosts() {

	const baseUrl = 'http://localhost:5555';

	return await axios.get(`${baseUrl}/post/list`);
}

const handleLoadData = (setState) => {
	const loadPosts = async () => {
		try {
			await getPosts().then((posts) => {
				const { data } = posts;

				setState({ data: data})
			});
		} catch (err) {
	
			setState({ data: { error: err }, loading: false });
		}
	};

	setTimeout(() => {
		loadPosts();
	}, 1000);
};

const LatestPosts = (props) => {
	const [ state, setState ] = useState({ data: {}, loading: true });

	const { data, loading } = state;

	useEffect(() => {
		handleLoadData(setState);
	}, [setState]);

	if (loading) {
		return <h3>Loading data</h3>;
	} else {
		if (!data) {
			return <h3>Error, post not found</h3>;
		} else {
			if (data.error) {
				return <h1>Error while loading post</h1>;
			} else {
				return (
					<div className="main">
						{ data.map(post =>
							<div key={post._id}>{ post.title }</div>
						) }
					</div>
				);
			}
		}
	}
}

export default LatestPosts;
