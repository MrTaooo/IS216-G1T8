<div align="center"> 
    <a href="#"></a>
        <img alt="" src="" style="background-color: #E3F2FD; width='10px' height='10px'"/>
    </a>
    <h1>
    IS216: G1T8
    <br>
    📍 TravelSG 📍
    </h1>
</div>



**Members:**
<ol>

<li> Lin Tao 01397431 | tao.lin.2021@scis.smu.edu.sg </li>

<li> Lew Zhen Yuan Jordan 01390623 | jordan.lew.2021@scis.smu.edu.sg </li>

<li >Low Xuanli 01433223 | xuanli.low.2021@scis.smu.edu.sg</li>

<li> Goh Chee Kiat 01385960 | ckgoh.2021@scis.smu.edu.sg </li>

<li> Chua Yee Tong Sharon 01429770 | sharon.chua.2021@scis.smu.edu.sg </li>

</ol>



## Project Overview 🎯 ##
Tourists, who are unfamiliar with Singapore, may face difficulties in navigating around the country and they may spend the bulk of their days finding information to plan their journey. This may diminish their traveling experience and affect the likelihood of them returning to Singapore.

After doing extensive market research, we found that there are existing applications to enhance tourists' traveling experience. However, these existing applications only target specific aspects of the traveling experience. They either target transportation or attraction site recommendations. As such, users will have to toggle between different applications to satisfy their travel needs.

Hence, we want to provide tourists with a one-stop travel application that enhances tourists' traveling experience by offering:
1. Site Recommendations
2. Navigation Assistance
3. Travel Planner




## How to Install and Run Our Web Application (for Users) 🤓 ##

### Before You Proceed Please Have the Following Installed/Prepared (Prerequisites) 📚: 
* Visual Studio Code (VSC), If you don't have it installed, you can download by clicking [here](https://code.visualstudio.com/)
* Google Chrome as our developer browser, If you don't have it installed you can download by clicking [here](https://www.google.com/intl/en_sg/chrome/)
* Vue.js with npm, If you don't have it installed you can install it by running "npm install -g @vue/cli" in VSC Terminal
* WAMP/MAMP, If you don't have it installed, you can install by following these videos [here for WAMP](https://www.youtube.com/watch?v=XsZAPw_KyhQ&t=1s) or [here for MAMP](https://www.youtube.com/watch?v=rN7JOs34akU)
* A Google Account, If you don't have one, you can register by clicking [here](https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fwww.google.com%2F&hl=en&dsh=S1392577627%3A1635680191747896&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp)

### Are You READY to LAUNCH TravelSG?! 😙
1. Download our source code folder by clicking [here](https://github.com/MrTaooo/IS216-G1T8/blob/main/README.md) and unzip it into a new folder such as TravelSG under the root folder i.e. (/wamp64/www/TravelSG/) of wamp64 or (/Applications/htdocs/TravelSG/) for MAMP.
2. Launch VSC Terminal and "change directory" to (/wamp64/www/TravelSG/) for wamp64 or (/Applications/htdocs/TravelSG/) for MAMP 
3. Run "npm run serve" to launch our web application
    >If "/node_modules/.bin/vue-cli-service: Permission denied" error is surfaced, run the following code "rm -rf node_modules/
npm install"

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### As TravelSG is currently running using our firebase configs, in order to change certain firebase logic OR host your own TravelSG app please continue from step 4 onwards
```
1. To create host TravelSG on your own firebase account, go to Google Firebase by clicking [here](https://console.firebase.google.com/) and click create a project.
2. Enter your project name and create your firebase project accordingly!
3. On the left hand side of the navigation bar, click on the cogwheel next to Project Overview and click Project settings!
4. Under "Your apps" click on "</>" to start a firebase web app!
5. Register your web app as shown!
6. Once you have successfully registered, copy the config and replace our current config inside main.js and firebase.js with your own config.
```

#### Enabling User Authentication 🔐
```
1. Click on Build under Project categories on the left side menu, and click on Authentication to set up user authentication.
2. Select a sign-in method and enable it. For TravelSG, we have used Email/Password and Google authentication.
```

#### Enabling RealTime Database 🧑🏻‍💻
```
1. Click on RealTime Database under Project shortcuts on the left side menu, and click on Create Database.
2. Select your Realtime Database location and click "Next", followed by clicking the radio button "Start in test mode".
```

## TravelSG Walk-through 🚶🏻‍♀️ ##
1. Users may plan to visit Singapore and they are in the process of planning their itinerary or users may currently be in Singapore
2. User goes on to TravelSG
3. User lands on About page
4. Users can click on the Registration/Login buttons in the About page
5. User will be redirected to Registration/Login page
6. Upon successful login/register, user is redirected to Home page
7. User can then navigate to:
    - Trip Planner
    - Navigation
    - MRT Map
    - Bus Arrival
    - Profile


## Demo ##
Our application could be accessed at: ___________________

### Dummy Account for Professors ###
> To skip registration, you may use this account: <br>
> Sign in via manual input<br>
> Email: dummyacc@gmail.com<br>
> Password: TravelSg123<br>


***Create an account***

* Register manually with Email and Password or Register with Google, which will automatically create a TravelSG account for you


***Log Into Your Account***

* Log In manually with Email and Password or Sign In with Google

## Functionalities ##
1. ### Trip Planner ### 
    [Planner Page]
    - Add places of interest into itinerary plan based on desired dates

2. ### Navigation ###
    [Navigation Page]
    - Shows fastest route to a point of interest
    - Spin the wheel for a randomized location to helps user make a choice between their top two categories in the event there is a sudden change in their itinerary plan

3. ### MRT Map ### 
    [MRT Map Page]
    - Shows MRT and LRT train stations on an Interactive Leaflet map with custom markers
    - Links to a static MRT map image from Land Transport Authority (LTA) Singapore
    - Links to SMRT website for user to find out the change of operating hours during festive periods

4. ### Bus Arrival ###
    [Bus Page]
    - Shows current location 
    - Shows nearby bus stops and time till next few buses  

4. ### Local Discovery ###
    [Home Page]
    - Uncover interesting and iconic spots in Singapore
    - Find different & exciting new activities  

5. ### Profile (Firebase Real-Time Database) ###
    - User's information such as their itinerary plans are saved and stored into Firebase so that whenever they log in, they get to access their saved itineraries in the Profile page.



## Sub-repository
We have a separate repository for the MRT Map page of the web application.
https://github.com/scyt01/Train-Stations-in-Singapore


## Acknowledgements and references ##
This section is dedicated to these individuals whom our project have reference or adapted codes from:
1. Google Maps JavaScript API Direction Service documentation (https://developers.google.com/maps/documentation/javascript/directions)
2. Firebase Back to the Basics (https://www.youtube.com/watch?v=q5J5ho7YUhA&t=713s)
3. Vue 3 and Firebase Authentication (https://www.youtube.com/watch?v=xceR7mrrXsA)
4. Bootstrap 5 documentation (https://getbootstrap.com/docs/5.2/getting-started/introduction/)
5. Getting started with Firebase for the web – Firebase Fundamentals (https://www.youtube.com/watch?v=rQvOAnNvcNQ)
6. Leaflet GeoJSON map example (https://leafletjs.com/examples/geojson/)
7. Leaflet Markers with custom icons map example (https://leafletjs.com/examples/custom-icons/)
8. Getting started with Firebase Authentication on the web - Firebase Fundamentals (https://www.youtube.com/watch?v=rbuSx1yEgV8&t=66s)
9. Upload Large Files in GitHub | Easy Method (https://www.youtube.com/watch?v=C8rUGJouiQI)
10. W3School HTML iframe tag documentation (https://www.w3schools.com/tags/tag_iframe.ASP)
11. Trip Planner javascript (https://www.youtube.com/watch?v=OMIgWU1E2eQ)
12. DataMall API (https://datamall.lta.gov.sg/content/dam/datamall/datasets/LTA_DataMall_API_User_Guide.pdf)
13. Creating a GitHub Pages site (https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

We are grateful to these individuals who have helped us in our project.
