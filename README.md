# Project REST-Rant

REST-Rant is an app where users can review restaurants

## Wireframes

### users:

- Add/Delete/Update Restaurant Information
- Review and Comment on Restaurants
- Ability to Interact with Each Page and Form
- Tag reviews with name instead of using an account

### What I need:

- add and delete locations
- post, update and delete comments
- add pictures to locations
- add star rating with reviews

## Languages/Tools

- Express/Node.js
- CSS
- React/JSX

## Routes

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

## Database

### Places

|   Field | Type    |
| :---    | :----:   |  
|   _id    |   Object ID   |
|   name    |   String   |
|   city    |   String   |
|   state    |   String   |
|   cuisines    |   String   |
|   pic    |   String   |

### Rants

|   Field | Type    |
| :---    | :----:   |  
|   _id    |   Object ID   |
|   place_id    |   ref(places) Object_id   |
|   rant    |   Boolean   |
|   rating    |   Number   |
|   comment    |   String   |
|   reviewer    |   String   |

## CSS

### Color Scheme

|   COLORS    |
| :---  |
|   #4B7F52 |
|   #DCBF85 |
|   #E5625E |