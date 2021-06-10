# Question 6
I am going to test the architecture mentioned in the question 6 with the following approach :

First of all I have to define the levels of testing that needs to be perform on this system, I will take in consideration four major levels:  Unit Testing, Integration Testing ,System Testing and UI Testing:

## Unit Testing 
Is the most robust level of the testing because it has the need to check the correct functionality of each method  (code - based method). There are different types of Unit Testing but the most common are the next ones:
1. Black Box Testing (Example): I know I need a User Management module (for the payments with paypal), so I need a login method (it also could be also a microservice) where I can send my credentials and get back a valid token
2. White Box Testing (Example): The Backend needs to establish communication between an API or SDK (paypal) so I already know what are the expected responses, I can test what happen if  we miss communication with paypal, if  the token is expired, if we miss some user validations all does kinds of testing

## Integration Testing 
Is the type of testing that validates the correct behavior of the modules (microservices) communicating between them. Is less robust than Unit Testing but it is also more expensive. Now speaking about the approach that I going to take for the system is the Big bang approach, I suites really well our architecture since is a small system, some examples of integration testing I can think are:
1. Mobile app (device-front end) successfully login into the system (uses BE & BD) and then buy something and pay with paypal
2. WebSite  (laptop-FE) successfully login into the system (uses BE & BD) and change some settings of the user
3. Mobile app (device-front end) successfully login into the system (uses BE & BD) and fails in the paypal payment (expected error handling)

## System Testing
Is the type of testing to evaluate that system fits the corresponding requirements, there are different types of system testing but for this system we can focus on the following ones:
1. Load Testing: It stresses some component/microservice to check how it works with that unexpected amount of load. I can think of the login-module, what would be the behavior if we receive 1000 requests at the same time. If we find some missfunctionallity we can fix it at time.
2. Performance Testing: We need to verify that the system fits the expected requirements in terms of response times, reliability of the modules. If the system is based on AWS we can check there the metrics  of the lambdas, bds or services including the FE (website) which is also a microservice that we can check differents kind of metrics

## UI Testing
Is the type of testing  to check the  aspects of any software that a user will come into contact with.  This usually means testing the visual elements to verify that they are functioning according to requirements. I can think of some TC that will fit this level (login component)
1.User enter valid user and password
2. User enter valid user but invalid password
3. User reset the password
4. Empty fields and click on the login button