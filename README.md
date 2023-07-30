ok so Reddit clone - Reddot

we need to have subreddits

we need to have the main page.

in the main page when the user is not logged in, we'll have a bunch of random posts from various subreddits.
user wont have the ability to write or interact with posts/comments.

once the user is loggeged in the main page will include posts from subreddits they have subscribed to.
it will also include a submit form which will let them write a text post or a picture post or both, and upload it to a 
subreddit they have subscribed to.

if the user is a new account, we will ask them to choose a bunch of subbredits that they like.
which means we need to create a bunch of subbredits with random content.


the structure of the firestore should be:

Reddot --> subreddits ->> posts

and also

Reddot --> users --> their data.







then the display algorithm for unconeccted people is display posts form all of the subreddits 1 by 1

for connected user have a home and explore tabs.

display for connected user is diplay all the posts from their chosen subreddits 1 by 1


stucture of a post:


subreddit: which subredit was it posted to || user that posted the post || when did they post
title: title text || tag (discussion, question ...)
img?
data: some text
likes: number
coments: object[]

share and save buttons.



remains to be done: 

    correct url rendering:

    on website render, I should get all of the posts saved to pinia. then on click, or url type, i should render the post using the correct url. meaning take the /:id and look for it in pinia, and once found, render it.



    need to migrate all the data to firebase. To do that need to figure out how to get pictures from firestore and connect them to the posts.






