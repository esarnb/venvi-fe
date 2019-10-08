<h1 align="center">
    <img src="public/inv_venvi.png" alt="Logo" width="50%"></a>
</h1>
<h2 align="center">
A Decoupled MERN Stack Web Application for Consumer Car Reviews and Marketplace.
    

[Link to Deployment](https://phillipchang.github.io/venvi-fe/)

</h2>


# Description
**VENVI** is a web app where users can find and submit user reviews for specific models of cars, as well as buy and sell cars. This app takes a different approach from the commonly seen critical reviews from cars, user reviews are also an important factor in influencing purchading decisions and we provide that. 

This app is built with React. The app is decoupled; the front end GitHub page can be found [here](https://github.com/PhillipChang/venvi-fe), while the back end page can be found [here](https://github.com/chloezhouny/venvi-be).

# The App
<img src="public/images/2019-08-29_16-43-36.gif" alt="website gif"></a>

# Features
* Search for car reviews based on make, model, and year
* View and create user reviews for a specific car model
* View average rating for a specific car model
* Login via Google
* Sell vehicles by inputting VIN, mileagee, and asking price
* Buy vehicles by searching for make, model, and year
* Mark vehicle listings as favorites
* View your listings and favorites on user profile page

## Logic
<hr>

### Getting Started

* Software Requirements
    * Node.js
    * MySQL
    * Passport.js
        * Generation of own Google Client ID and Secret
    * AWS S3 Buckets
        * Generation of own AWS buckets API keys, bucket name and secret access

<b>*** It is important to keep all API Keys and secret access confidential through the storage of keys in a .env file and securing upload of .env in a .gitignore file.</b>

 * Installing all node packages
    * >Initialize terminal and execute npm i to install all necessary node packages

### Deployment

#### Front-end Deployment
* Since this is a decoupled app, the deployment of front-end is done through github-pages [Instructions to deploy](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages)

#### Back-end Deployment
* After successful installation of npm packages, deployment is done on Heroku for free.
* Be sure to include access keys, api keys and other secrets on Heroku's Config settings.

# Technologies Used
* HTML
* CSS
* JavaScript
* React.js
* Node.js
* Three.js
* Passport.js
* React Materialize
* Material UI
* Ant Design
* Axios
* gh-pages


# Authors
* Chloe Zhou | [GitHub Page](https://github.com/chloezhouny)
* Alfred Chan | [GitHub Page](https://github.com/b0bland)
* Phillip Chang | [GitHub Page](https://github.com/PhillipChang)
* Esar Behlum | [GitHub Page](https://github.com/esarnb)
