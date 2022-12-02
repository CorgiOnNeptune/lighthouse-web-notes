# REST

`REST` is a set of conventions and common practices in web development. Specifically when dealing with access and manipulation of *resources* over [`HTTP`](/Week_2/networking.md#http).

For example, the GitHub API is *RESTful*. It can be used to manage resources such as `Users`, `Repos`, `Commits`, `Gists`, and so forth. Each resource can be accessed using an API endpoint (which is simply a URL).

 - REST API endpoints reflect relationships between objects.
 - e.g. *commits* belong to a *repo*, which belongs to an *owner*(user).

`GET /repos/:owner/:repo/commits`

REST follows a similar structure of HTTP methods following **CRUD:** (Create, Read, Update, Delete)
***
[Using HTTP Methods for RESTful Services](https://www.restapitutorial.com/lessons/httpmethods.html)
***

**BREAD** is similar to **CRUD**, but splits *Read* into *Browse* and *Read*.
| **Action** | **Application** | **Description**                    | **HTTP Method** |   |
|------------|-----------------|------------------------------------|-----------------|---|
| Browse     | collection      | browse the collection              | GET             |   |
| Read       | member          | read a member of the collection    | GET             |   |
| Edit       | member          | edit a member of the collection    | PUT / PATCH     |   |
| Add        | collection      | add a new member to the collection | POST            |   |
| Delete     | member          | delete a member of the collection  | DELETE          |   |

***

&nbsp;
## RESTful Routing Conventions
e.g. working with a resource named `user`.

### GET `/users`
 * Retrieves the collection of users.
 * Renders a representation of the collection.

### POST `/users`
 * Creates a new user using the provided request body.
 * Redirects to a route where the new user can be viewed.

### GET `/users/:id`
 * Retrieves the user with the specified id.
 * Renders a representation of the user.
 * Responds with a `404` if the user doesn't exist.

### PUT `/users/:id`
 * Updates a specific user using the provided request body.
 * May redirect to or render representation of user.
 * Responds with a `404` if the user doesn't exist.

### PUT `/users/:id`
 * Deletes a specific user.
 * May redirect to the index of the collection.
 * Responds with a `404` if the user doesn't exist.

## More Routes
These are two extra routes that are typical to provide HTML pages that contain forms the user can interact with to tuse "create" or "edit" resource routes.

### GET `/users/new`
 * Renders a form that collects information about a new user.
 * The form submits a POST request to the collection path `/users`.

### GET `/users/:id/edit`
 * Renders a form that collects information for altering a user.
 * The form sumbits a PUT request to the user's pahth `/users/:id`.
 * Responds with a `404` if the user doesn't exist.
