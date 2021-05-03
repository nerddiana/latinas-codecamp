let tweets = [{
	author: "Diana 1",
	text: "Lorem ipsum dolor sit amet",
	likes: 10
}, {
	author: "Diana 2",
	text: "Lorem ipsum dolor sit amet",
	likes: 20
}, {
	author: "Diana 3",
	text: "Lorem ipsum dolor sit amet",
	likes: 1
}];

let feed = document.getElementById("feed");

tweets.forEach((tweet) => {
	let tweetEl = document.createElement("div");
	tweetEl.className = "tweet";

	let authorEl = document.createElement("h4");
	authorEl.innerText = tweet.author;

	let textEl = document.createElement("p");
	textEl.innerText = tweet.text;

	let likesEl = document.createElement("div");
	likesEl.className = "likes";

	let likesParagraphEl = document.createElement("p");
	likesParagraphEl.innerText = tweet.likes;

	let likesButtonEl = document.createElement("button");
	likesButtonEl.innerText = "Like";

	tweetEl.appendChild(authorEl);
	tweetEl.appendChild(textEl);
	likesEl.appendChild(likesParagraphEl);
	likesEl.appendChild(likesButtonEl);	
	tweetEl.appendChild(likesEl);
	feed.appendChild(tweetEl);
});

console.log('feed: ', feed);