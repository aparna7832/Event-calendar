# Event-calendar
A simple calendar App to display scheduled events' details

The calendar has the follwing views:
1. Month View
2. Week View
3. Day View
4. List of Events in a Week
5. List of Events in a Day

The given API POST link was used to get the calendar ID which was then used to get the list of events' details to be populated in the calendar

The current version of the application do not save any events to the database as the given POST endpoint could not be used to save new events. 

For the sake of the feature, I have triggered an event listener on the calendar to add events by prompting the user to fill the mandatory fields. 
In the future, when the endpoint for POST request is known, we can add a button to add new events and save the created events using the POST endpoint.

Popover: 
Double Clicking a calendar cell will open a popover dialog to display the selected event's title and the short description. This popover will be removed when the month is changed. 

