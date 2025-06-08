Logic for the Role Based Access 

There are 3 user types.

1. Manager (Ability to grant CRUD access as User. Includes the same CRUD ccess).

2. Users (CRUD access but no management ability)

3. Public (No Database access)

   

## Basic workflow

### Authorized Emails Form: Used by the manager to enter an email address authorized for signup. 

- Needs ability to access or remove access based on email address

- Any time after the email is in the authorized emails table the user may sign up

### Signup Form. (mostly done?)

- If possible, confirm the email address is authorized before sending the verification request email


### Login Form (done?)

- When someone logs in, a lookup must be done before granting access.

- Profile form should be created for the user to enter such things as Name and phone number?


### It may be desirable to have a flag that can open or close access to the Sign up page. 

- (One solution would be to open the signup page whenever there is an email in the table that is not associated with an entry in the auth.users table)
