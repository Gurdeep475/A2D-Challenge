# A2D-Challenge

Jobs CRUD Operation API

# How to Setup the Server
1. Clone the repository
2. setup your mongodb uri in a .env file as MONGO_URI=your_mongo_uri
3. run command npm install
4. run command npm start

# How to Authenticate
1. Create a new user
2. Login with the new user
3. Get the token from the response
4. Set the token in the Authorization header as Bearer <token> for every request

# Authenication API
1. /auth/login - POST - Login with username and password
2. /auth/register - POST - Register a new user
3. /auth/changepassword - POST - Change password for a user using the token


# List of API's that are available for CRUD operations on Job Database

1. /api/v1/alljobs/ - GET - List of Jobs
2. /api/v1/job/:id - GET - Job Details
3. /api/v1/job/:id - PUT - Update Job Details
4. /api/v1/job/:id - DELETE - Delete Job Details
5. /api/v1/job/ - POST - Create Job Details
6. /api/v1/job/user/:id - Get Job Details by user Id
7. /api/v1/job/user/:id/:jobId - Get Job Details by user Id and Job Id
