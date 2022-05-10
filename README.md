# Tech-Blogger-Site
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
The Tech Blogger Site is a full stack website for posting and reading blog posts on the latest and greatest tech developments. It operates as one might expect a blog site to operate, allowing registered users to post content and comment on the posts of other users or their own.


## Table of Contents

* [Usage](#usage)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Author](#author)
* [License](#license)


## Usage

Users interact with the Tech Blogger Site through webpages served up from the app's back end. At the top of each page is a header with three links: one to the homepage, one to the user's dashboard, and a login state modifier that allows the user to log in, log out, or sign up, depending on whether the user is currently logged in or not.

The homepage displays posts from all users, with the title of each post linking to a page that displays only that post but also all of the comments on that post. In the single post page, registered users are invited to submit comments that are added bwlow the original post. The dashboard page displays all of the registered user's posts with optional buttons to edit or delete them. There is also a button that takes the user to a page where a new blog post can be entered. The login page, which can be reached from the header or by navigating to a page that requires registration, has a simple form control for users to either log in with an existing account or sign up for a new account.


## Features

* Allows users to create and upload topical text content to a back end database
  * Full roster of create, read, update, and delete actions
* Automatically redirects unauthorized users to login page for convienience
* Comments organized under posts for easy flow-of-discussion
* Login session that expires automatically after a set time
  ```JS
  cookie:
  {
    maxAge: 900000, // 15 minutes
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  }
  ```


## Technologies Used

* JavaScript
  * Express.js
  * mysql2
  * Sequelize
  * bcrypt
  * dotenv
  * express-session
  * connect-session-sequelize
* Node.js
* SQL
* Handlebars


## Author

John Netzel
* [Portfolio](https://commiedog.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/john-netzel-481112129/)
* [GitHub](https://github.com/CommieDog)


## License
&copy; 2022 John Netzel. All Rights Reserved. Licenced under the terms of the MIT License.
