# Slack clone

<!-- describe your project -->

---

## Setup

<!-- what code do you need just to open the project? this might include:
  - boilerplate code (https://brandlitic.com/what-is-boilerplate-code/)
  - loading program data
  - rendering the initial user interface
-->

- Create and setup Strapi repo to manage data.
- Pre-load sample data to render.
- Create and setup React repo to manage UI.

---

## Users can see all channels

This will be developed on the branch '1-channel-list'.

<!-- each issue created from this section will have the `for: Users can see all channels` label -->

> "As a user I can see all current channels/conversations I am a port of so I can follow the conversation/info."

### logic: Users can see all channels

- Create a function that refreshes the content of the list every certain period of time or every time a new channel is added.
  - [ ] the function must be exported from '.../logic/update-channel-list.js'.
  - [ ] the function must be imported to the main app container.

### Interface: Users can see all channels

- Create a component that renders all existing channels.
  - [ ] create the component 'ChannelList.jsx'.
  - [ ] list should be a 'ul' element.
  - [ ] every channel should be a 'li' element.
  - [ ] there is a CSS file for this component called 'ChannelList.css'.

## Users can add new channel

This will be developed on the branch '2-add-channel'.

<!-- each issue created from this section will have the `for: Users can add new channel -->

> "As a user I can create new channels/conversations so I can address different topics with different people."


<!-- describe the tasks to build this user story
  these will have the `type: logic` label, for example
  not all projects will have all types of tasks
  and these are not the only possible types, just some suggestions
-->

### Logic: Users can add new channel

- Create api call to create new channel object.
  - [ ] some checkboxes for this task

### Interface: Users can add new channel

- Create an 'Add channel' button.
  - [ ] there is a button to create a new channel at the end of the channel's list.

### Interaction: Users can add new channel

- User can give the new channel a name
  - [ ] on click, user can type the name of the new channel and confirm it.

## Users can see other users messages

This will be developed on the branch '3-messages'.

<!-- each issue created from this section will have the `for: Users can see other users messages` label -->

> "As a user I can see the author of each message so I can follow the conversation and the info provided by each participant."

<!-- write any extra notes or description -->

<!-- describe the tasks to build this user story
  these will have the `type: logic` label, for example
  not all projects will have all types of tasks
  and these are not the only possible types, just some suggestions
-->

### Interface: Users can see other users messages

- Each message is preceded by the username of its author.
  - [ ] the username of the author of each message is displayed on top of it in a different font style

## Users can see the time and date when a message was sent

This will be developed on the branch '4-message-time'.

<!-- each issue created from this section will have the `for: Users can see the time and date when a message was sent` label -->

> "As a user I can see the author of each message so I can follow the conversation and the info provided by each participant."

### Interface: Users can see the time a message was sent

- Each message has date information
  - [ ] the time each message was created at is displayed on top of each message
  - [ ] it uses a different font-style than the message and the username of the author

## Users can send messages

This will be developed on the branch '5-send-messages'.

<!-- each issue created from this section will have the `for: Users can send messages` label -->

> "As a user I can send messages to interact with other users."

<!-- write any extra notes or description -->

<!-- describe the tasks to build this user story
  these will have the `type: logic` label, for example
  not all projects will have all types of tasks
  and these are not the only possible types, just some suggestions
-->

### Logic: Users can send messages

- Each message is stored as data
  - [ ] there is an api call that created a message object in the data base

### Interface: Users can send messages

- There is a text box and a button to send messages
  - [ ] create a text box to input the body of the message
  - [ ] create a 'Send' button

### Interaction: user story

- Send message on click
  - [ ] 'Send' button sends message on click which updates the UI
  
## Users can set their username

This will be developed on the branch '6-user-name'.

<!-- each issue created from this section will have the `for: Users can set their username` label -->

> "As a user I can set my own username so others can identify me and I can identify others throughout the conversation."

<!-- write any extra notes or description -->

<!-- describe the tasks to build this user story
  these will have the `type: logic` label, for example
  not all projects will have all types of tasks
  and these are not the only possible types, just some suggestions
-->

### Interface: Users can set their username

- User creates their username on load
  - [ ] after loading the page's content there is pop-up asking to create the user's name

### Logic: Users can set their username

- Each user is stored in the data base
  - [ ] there is an api call that creates a user object
