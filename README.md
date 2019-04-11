# Semya


## Description

Fill in your family tree with what you already know, and let the network fill in the gaps! 


## User Stories

- **Front Page:**  
At the home page, the user wil lsee several articles regarding genealogy : how to investigate, some tricks and shared experiences
He'll also be able to log in and sigh up
Will also contain a tutorial

-  **Signup/Login/Logout::**<br/>As an anon I can sign up/log in the platform so that I can start my own tree. 

- **Mytree**:<br/>The page will only display a tree (1 individual at the begining (the user himself or the person he wants to start with)).
<br/>
The tree will grow as long as user inserts new individuals
<br/>Each individual in the tree will have a small "console" to add a parent, a child or a partner.

- **Home:**<br/>This page will display all notifiactions (connections request), general stats (you have X amount of related person in you tree), will show other users account to connect with if notifications got approved.

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault


## Backlog

**Match individuals that could be the same person** 
<br> 
If a user creates a parent simimlar enough to a parent existing in another tree - both users receive a notification notifying it might be the same individual.
<br> _Similarity of at least 90%, date of birth in a rage of 365 days._

**Individuals in the tree:**<br/>
User can click on any member on his tree to see biographical information.  (historical events, biographical events)
- Upload pictures 
- Upload documents (birth/death certificates)
- Link data's from Wikipedia occuring during his lifetime (main events at 20/30/40 years old)

**Homepage:**
- User can see his own profile, update picture, and contact information.
- user can see notifications received
  
# Client

## Pages

| url | public | Functionality |
|-----|-------|---------------|
| `/` | true | Front Page|
| `/signup` | true | Signup page |
| `/login` | true | login page |
| `/home` | false | home page |
| `/home/myprofile` | false | user profile
| `/home/findmatches`| false | user can manage notification <br>or launch a search to find matches
|`/home/discover`| false | Discover other users and get in touch with them
| `/mytree` | false | Shows the tree |
|`/mytree/bio`| false | Shows the biographical details 

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous

# Server

## Models

User model

```
Email - String // required & unique
Password - String // required
Id - String // required
First Name - String // required
Second First Name - String
Last Name - String // required
Second Last Name - String
```

Individual

```
Id : String // required
First Name - String // required
Second First Name - String
Last Name - String // required
Second Last Name - String
gender : String // required
Date of birth : Date
Place of birth : String
GotMarried : Bolean
DateOfMariage : Date
PlaceOfMariage : String
PlaceOfDeath : String
DateOfDeath : Date 
Parents : [id, id] 
Profession : String
Partner : [id]

```

## API Endpoints (backend routes)

## API routes:

### auth
|Method|Route|Functionality|
|---|---|---|
|GET| / | Renders the Front Page
|GET|api/auth/me|Check session status|
|POST|api/auth/signup|Log in user to app and set user to session (Body: username, password)|
|POST|api/auth/login|Register user to app and set user to session (Body: username, password)|
|POST|api/auth/logout|Log out user from app and remove session|
|GET| /api/mytree | Renders the famaily tree of the user
|POST |/api/mytree | Redirects to /api/mytree
|GET | mytree/bio/id | Renders biographical details of an individual from the tree|
|POST| mytree/bio/id | Redirects to mytree/bio/
|GET | /api/home | Renders the home page of an user
|GET| /api/home/myprofile| Render user's profile
|POST| /api/home/myprofile| Redirects to /api/home/myprofile
|GET| /api/home/findmatches| Render user's notifications of matches or let's them lancuh a searsh for matches
|POST| /api/home/findmatches| Redirects to //api/home/findmatches
|GET| /api/home/socialize| Render other existing users
|POST| /api/home/socialize| Redirects to /api/home/socialize


## Links

### Trello

[Board](https://trello.com/b/eljtbfFm/semya)

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/ChristopheP96/Semya---FrontEnd)

[Server repository Link](https://github.com/ChristopheP96/Semya---API)

[Deploy Link Backend](http://heroku.com) To be deployed

[Deploy Link Frontend]() To be deployed

### Slides

[Slides Link](https://docs.google.com/presentation/d/1EmxYyWHjn8xdyNRBCBe-seNJuOGMbkbhc7dPZqKEdWw/edit#slide=id.p)
