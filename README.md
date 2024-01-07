<img src="https://res.cloudinary.com/dbjrx698c/image/upload/v1704611347/logo_w4vxp0.png" width="100" height="100" style="display: block; margin: 0 auto;">

# react-chat-bottom-pin

This is a fork of `react-bottom-scroll`

## Installation

```bash
npm install react-chat-bottom-pin
```

## Upgrade

```bash
npm install react-chat-bottom-pin@latest
```

## Usage

use the component to wrap the content which you want to scroll to the bottom

```jsx
import { ScrollWrapper } from "react-chat-bottom-pin";
import "react-chat-bottom-pin/dist/styles.css";

const topCallback = () => {
  // callback to load new content at the top of the wrapper. eg loading more chat at the top
  console.log("Reached top of container");
};

const bottomCallback = () => {
  //callback to handle reaching bottom of the page eg. setting read status to true
  console.log("Reached bottom of container");
};

<ScrollWrapper
  minScroll={100}
  smoothBehavior
  topCallback={topCallback}
  bottomCallback={bottomCallback}
>
  {content}
</ScrollWrapper>;
```

here contents can be a list of div's or any other html elements.

**Props**

| Property       | Type     | Default                                   | Description                                                                                                                                                  |
| -------------- | -------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| minScroll      | number   | null                                      | minimum scroll from bottom in pixels that should stop autoscroll to bottom if content is changed.                                                            |
| smoothBehavior | boolean  | false                                     | if smoothBehavior is true scrollBehavior is set to smooth                                                                                                    |
| topCallback    | function | null                                      | callback function that will be triggered once content is scrolled to top of the wrapper. Eg. can be used to load more content on reaching top of the wrapper. |
| bottomCallback | function | null                                      | callback function that will be triggered once content is scrolled to bottom of the wrapper. Eg. can be used to set read status of chat to true or false.      |
