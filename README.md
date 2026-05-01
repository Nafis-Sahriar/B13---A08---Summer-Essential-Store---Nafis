## Summer Essentials Store
Welcome to the Summer Essentials Store! A store where you will find all the essentials for a perfect summer. From trendy items to must-have accessories, we have everything you need to make your summer experience Unforgottable.


## Click Here - [Live Link](https://b13-a08-summer-essential-store-nafi.vercel.app/)


### Features

- Browse a wide range of summer essentials, including clothing, accessories, and more.
- User authentication with registration and login functionality.
- Responsive design for seamless shopping on any device.
- Login with Google for a quick and convenient shopping experience.
- Cart functionality to keep track of your selected items.
- Toast notifications for successful actions and error handling.

### Technologies and NPM Packages Used

- React : I have used some react hooks such as useState and useContext to manage state and context for cart functionality.
- Next.js : Used Next.js for server-side rendering and implemented app router for navigation between pages.
- Tailwind CSS : Tailwind CSS for styling the application and making it responsive.
- React Icons : To add icons for better user experience and visual appeal.
- React Toastify : For displaying toast notifications for successful actions and error handling.
- Better Auth : For user authentication and registration functionality via email and password.
- React Hook Form : For handling form validation and submission in the registration and login forms.
- Hero UI & DaisyUI : For pre-built UI components 
- React Fast Marquee : For creating a scrolling marquee effect on the homepage to show new arrivals. 
- Gravity Icons : For adding more icons to the application and enhancing the visual appeal.
- Google Cloud Console : Registration and Sign in with google Implemented through Better Auth Google authentication for a quick and convenient login and registration experience.
- Canva : To Design Banner and Logo
- Vercel : For hosting the application and making it accessible online.
- NextJS Proxy : For handling access in different pages and components after log in and registration, before log in and registration, and also for cart functionality.
- JSON data File : For Storing product locally, updated with live link of vercel later on to make it work in live link as well.
- MongoDB : For Storing user data after registration , Currently this is the only use of MongoDB in this project. 
- ImageBB : For Hosting Images - Json Data file contains image links from ImageBB.
- Animate.css  : For addding animations, Currently used in Navbar, Banner and Product page. 



## Sections of the Application

- Sticky Navbar : Contains links to Home, Products, About, My Profile and Cart. It will show a profile icon with real image if the user registers via gmail or inputs valid image url, else it will show the first character of the users name with a welcome message. Also initially it will have Sign in , Sign Up Button , If user logs in, There will be only sign out button . On the left side of navbar, there is a logo of Summer Essentials. 
- Home Page : Here you will be able to see our banner , a scrolling marquee showing new arrivals, Top 3 products , Summer Tips, Top Brands and Product Guide. 
- Products Page : In this page you will find all the products . 
- Product Details Page : THis page provides detailed information about a specific product, including image, title, price, description, stock availability etc. and also two button. One button for Adding to card which functionality will be developed later and anotehr one is View Other Products which will take you to the products page again .
- Cart Page : After clicking add to cart button in products page or from home page, you will be able to see the products you have added to your cart in this page. Also the item count will be shown in the navbar's cart icon.
- Sign In Page : This page contains a form and a button for direct google sign in . Also you can navigate between Sign in and Register page via short link underneath the input fields. 
- Register Page : To Register, You can also use direct google sign up .
- Contact Page : There will be a text only , you can contact me from footer and About Us page's Links. 
- Terms and Conditions Page : Static page, will be written later. 
- About Us Page : This page contains information about the store, and also some links to contact the developer. 
- Footer : A simple footer with About , Contact , Terms link and also some social media links. 

- My Profile Page : In this page, user will see his own profile, and also there is a button Edit Profile to edit the profile information . Currently edit profile only supports editing name and image .


## Challenges Faced and Solutions
- 1. While implementing Google Authentication, Temporarily I pasted the Client id and secret code in my readme file, which caused a fatal github push issue. To solve this, I tried to remove the file from git history, removed the data from readme, but it was not fixing. I never faced this issue before, so I created another github repository and pushed the code with updated readme file without the client id and secret code. 

- key learning : Should never paste any sensitive info in public places, Always have to use environment variables and .env file.


- 2. Add to cart Functionality : Could not implement the add to cart functionality from product details page, I will do it after my semester Final exam.

## Upcoming Features

- Implementing Add to Cart functionality from product details page and home page.
- Category based product Filtering in products page. 
- Search functionality in product page. 
- Multiple Product selection in cart, and the cart card will show the total item count and total price beside each. 
- Implementing Layout in products page.
- Adding "Review" section in product details page.
- Email verification after registration and before login.
- Password reset functionality.
- By Checking out, user will be redirected to a order summary with detaled product information , quantity, total price and button for their order, This page will include real date and time of the order. 
- A new route will be added as "Summer Sale" where users will find all the products that are on sale with discounted price.
- Sign in with Facebook will be added as another option for authentication and registration.
- User Registration Form will gave more input fields such as phone number, address etc. Following this, the "My Profile" page will also be updated . 

- To be continued....


## Conclusion
The Summer Essentials Store is a comprehensive e-commerce application that provides users with a variety of summer products , user authentication and registration functionality developed mainly with Next JS, React and Tailwind CSS and Better Auth for authentication . 


© Nafis Sahriar - May'26



 