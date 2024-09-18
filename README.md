# Repo Card

The Repo Card is a component created in `maincontent.tsx` that displays information about a repository. It is designed to provide a visually appealing and informative summary of the repository's key details.
Screenshot of Card expanded
![alt text](https://github.com/Mugwash/ExpandableRepositoryCardReactMUI/blob/main/screenshots/Screenshot%20opened.png?raw=true)
Screenshot of Card Collapsed
![alt text](https://github.com/Mugwash/ExpandableRepositoryCardReactMUI/blob/main/screenshots/Screenshot%20pre%20collapse.png?raw=true)


## Usage

To use the Repo Card component, follow these steps:

1. Import the `RepoCard` component from `maincontent.tsx` into your desired file.
2. Pass the necessary props to the `RepoCard` component, such as the repository name, description, commit message, patch and AI summary.
3. Render the `RepoCard` component in your desired location within your application.

## Props

The Repo Card component accepts the following props:

img:
    tag:
    title:
    description:
    commit: [{
      messageTop:
      messageRemainder:
      patchData:
      theGist
    }],
    repoData: [{ name: avatar:  mostRecentCommitDate:  }],

## Example

Here's an example of how you can use the Repo Card component:

```jsx
import React from 'react';
import RepoCard from './maincontent';
const cardData = [
  {
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Engineering',
    title: 'Repository Title',
    description: 'Repository description Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    commit: [{
      messageTop: 'fix: resolve issue with user authentication',
      messageRemainder: 'Fixed a bug where users were unable to log in due to a missing token validation step.',
      patchData: '--- a/src/auth.js\n+++ b/src/auth.js\n@@ -10,6 +10,7 @@ import { useHistory } from "react-router-dom";\n import { useAuth } from "./context/auth";\n import { useToasts } from "react-toast-notifications";\n import { useMutation } from "@apollo/client";\n+import { validateToken } from "./utils";\n\n const Login = () => {\n   const { setAuthTokens } = useAuth();\n',
      theGist: 'This commit fixes a critical issue in the user authentication process. Previously, users were unable to log in because the system did not validate their tokens. The patch adds a token validation step to ensure that only users with valid tokens can access the system. This change enhances the security and reliability of the authentication mechanism.'
    },],
    repoData: [{ name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg', mostRecentCommitDate: 'July 14, 2021' }],
  }]

const App = () => {
    return (
        <div>
            <h1>My Awesome Repository</h1>
            <RepoData repoData={cardData[0].repoData} />
            <CommitData commitData={[cardData[0].commit[0]]} />
        </div>
    );
};

export default App;
```

This will render the Repo Card component with the specified repository details.
