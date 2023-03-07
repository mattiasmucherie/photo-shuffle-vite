Exercise on fetching data from an API and storing it to state, and sending state data down to a component with props. In this exercise, you will learn to work with state and props in React, and to make a simple API call.

## Task 1: Setting up the component

1. In `App.jsx`, create a state `imageUrl` with the initial value of `null`. This state will be used to store the URL of the image we want to display.
1. Send a prop called `imageUrl` with our state `imageUrl` to the component `PhotoViewer.jsx`. This component will be used to display the image.
1. In `App.jsx`, only render the `PhotoViewer` component if the state `imageUrl` is not `null`. Otherwise, render the `PhotoViewer` component with the `imageUrl` prop set to the state `imageUrl`.

## Task 2: Updating the PhotoViewer component

1. In `PhotoViewer.jsx`, accept the `imageUrl` prop.
1. Use the `imageUrl` prop to set the `src` attribute of the `img` element.
1. If you want to check that the rendering works, set the default value of the `imageUrl` to https://via.placeholder.com/600/92c952 instead of null.

## Task 3: Fetching data from an API

- In `App.jsx`, use the `useEffect` hook to make an API call to `https://jsonplaceholder.typicode.com/photos/1`.
- After parsing the response to JSON, you should have an object that looks like this:

  ```json
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  }
  ```

  Set the `url` property to the `imageUrl` state.

- If everything is done correctly, you should now be able to see the image.

## Bonus Task

In this bonus task, you will rename the imageUrl state to image, and set the default state to include the URL and description of the image.

1. Rename the `imageUrl` state to `image` in `App.jsx`.
1. Update the default state in the `useState` hook to the following:

```javascript
{
  url: "",
  description: "",
};
```

And display the `description` (which corresponds to the `title` in the API) under the image.

Image Api
https://jsonplaceholder.typicode.com
https://jsonplaceholder.typicode.com/photos/{imageId}
