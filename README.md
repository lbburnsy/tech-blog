# Tech-Blog
A full stack heroku deployed application that functions as a CMS style tech blog.
## Table of Contents
- [Deployment](#deployment)
- [Installation](#installation)
- [Visuals](#visuals)
- [License](#license)
- [Authors](#authors)
## Deployment
This app is deployed on Heroku, and is available for complete use [here](https://safe-castle-63309.herokuapp.com/). It can also be run locally directly out of this repository. If you would like to go that route, please visit the installation section below.
## Installation
This app requires several commands to correctly run. To begin, from your command line in the root folder of your app, install the dependencies needed. Run:
```
npm install
```
Following this, you will need to initialize your database. To do this, follow these prompts to enter MySQL, and create your database.
```
1. mysql -u root -p (enter your password)
2. DROP DATABASE IF EXISTS techblog_db;
3. CREATE DATABASE techblog_db;
```
Now that your database is created, you will need to populate it with data. To do this, run:
```
npm run seed
```
Lastly, to begin your server, simply run: 
```
npm start
```
## Visuals
![Demo](./Assets/homepage.png)
![Demo](./Assets/dashboard.png)
![Demo](./Assets/login.png)
## License
This project is licensed under the MIT license. Please visit [the license file](https://github.com/lbburnsy/note-taker/blob/main/LICENSE) for more info.
## Authors
[Luc Burns](https://github.com/lbburnsy)