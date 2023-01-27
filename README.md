# fundU-assignment

## cloning
 clone this repo and install all dependencies of both frontend and backend the run backend with `npm run dev` in one terminal and `npm run start` on frontend on other terminal.
 live version of this site: [Link](https://fundu112.netlify.app/)

## Frontend
- Homepage which have all the posts with sorting and pagination
- Login where user can login with both normal username password and google authentication
- Singup - user can singup here
- profile - private route which only a sinedin user can access and only their post will show

## Backend
### apis
  - Users
    - /users/singleuser for internal use
    - /users/signup to signup 
    - /users/login will login with username and password
    
  - Posts
    - /posts/allposts returns all the post with totalPages
    - /posts/myposts returns all the post of loggedin user
    
  - comments
    - /comments/ will take post_id with query parameter and returns all the comments with that post_id
    
