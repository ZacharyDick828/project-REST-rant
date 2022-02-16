# Project REST-Rant

REST-Rant is an app where users can review restaurants

As a passionate food-lover and web-developer, I need an app that provides a space to read and write reviews on restaurants so I can assess the food options I have around me. 


| Method     | Path | Purpose     |
| :---        |    :----:   |          ---: |
| GET        | /       | Homepage  |
| GET   | /places        | Places index page      |
| POST   |  /places |   Create new place    |
| GET   |  /places/new |   Form page for creating a new place    |
| GET   |  /places/:id |   Details about a particular place   |
| PUT   |  /places/:id |   Update a particular place    |
| GET   |  /places/:id/edit |   Form page for editing an existing place    |
| Delete   |  /places/:id |   Delete a particular place    |
| POST   |  /places/:id/rant |   Create a rant (comment) about a particular place    |
| Delete   |  /places/:id/rantld |   Delete a rant (comment) about a particular place    |
| GET   |  * |   404 page (matches any route not deined above)    |