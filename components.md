# DATA

## Data layer

- List of quotes:

- Quote text: string
- Author: string
- Date created: date
- Image url: string

## Data modifications

- Load quotes to quotes list
- Delete a quote from quotes list
- Add a quote to quotes list
- Modify quote properties.

# COMPONENTS

## App

- Shows layout component
- Shows header component

## Layout

- Shows the header.
- Shows quote list component
- Shows a button to create a quote.
- List of quotes
- Receives a list of quotes
- Shows a list of quotes.
- Shows a quote card.
- Sends a quote card component for every quote in the list of quotes.

## Quote (card)

- Receives a quote.
- Receives delete quote action.
- Receives modify quote action.
- Shows the quote text and author in a heading.
- Shows the image of the quote (if available).
- Shows the date the quote was created.
- Shows a quote card.
- Shows button to delete quote
- Shows button to modify quote
- Sends button icon to delete to button component
- Sends button icon to modify to button component
- Sends delete action to button component
- Sends modify action to button component

## Header

- Shows logo
- Shows Login/logout button
- Shows Home button
- Shows My list button

## Form

- Receives the add quote action.
- Shows inputs to receive data to create a quote (quote text, author, date created, image url).
- Shows a button to submit data.
- On submit, executes the received add quote action.
- On submit, executes the received modify quote action.

## Button

- Receives an icon
- Receives an action.
- Shows the icon inside the button.
- On click submits the received action.

## Quote Detail Component

- Receives a quote object
- Shows the quote text in a large font
- Shows the author name and a small bio, if available
- Shows the tags associated with the quote, if available
- Shows the date the quote was added or last modified
- Allows the user to edit the quote text, author, bio, and tags
- Shows a button to save changes to the quote
- Shows a button to delete the quote
