# _Currency exchange_

#### Authored by _**Liliia Kryvelova https://github.com/liliia87/project6.git**_

## _This application organizes a currency exchange. A user can choose which currency it should be converted to and then type in an amount (in U.S. dollars). The application will make an API call to the exchange rate API and display conversion results._

#### Technologies Used
* Html
* JQuery
* JavaScript
* Jest 
* Bootstrap
* Jquery
* popper.js

#### Description:
  * The user can enter an amount (in U.S. dollars) and then specify another currency. Then user would be able to see the total amount they entered in converted currency;
  * User can convert U.S. currency into 5 other types of currency;
  * Application will return an Error message if application will not get a response (any message not a 200 OK);
  * If the query response doesn't include that particular currency, the application will return a notification that states the currency in question doesn't exist.

## Setup/Installation Requirements:

#### Clone this git repo on your local computer
  * For clonning: use button Clone -> from repository.
  * Copy the clone command (SSH format or HTTPS). From a terminal on your local computer, use command `cd` to find the directory where you want to clone this repository.
  * Type the command `git clone <URL copied in previous step>`. If you clone successfully , a new sub-directory appears on your local computer.
  * For working with project, install "npm module" inside the working folder: `npm install`.
  * After successful installation, run command `npm run build` for building project.
  * When it's built type `npm run start` to start the project.
 
 For correct work of an app, it is necessary to create a file with name(.env) and type there a correct API_KEY.  
 Example: API_KEY = 2d049c999d2b853cd33f4936

## Known Bugs
* For now, there are no known bugs.

## License
_contact lilia.krivelyova@gmail.com_
