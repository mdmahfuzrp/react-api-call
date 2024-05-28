### Say Goodbye to Api Headaches: <br> Effortless Api Call With [react-api-call](https://reactapicall.vercel.app)

<img src="https://i.ibb.co/2Whc6GS/react-api-call.png" alt="drawing"/>

#

#### Install react-api-call:

```javascript
npm i react-api-call
```

#

### You can follow this steps for your usecase.

##### Get Method:

```javascript
import { useGetMethod } from "react-api-call";

const App = () => {
  const { isLoading, refetch, response } = useGetMethod({
    apiUrl: "example/api/v1/users",
    token: "your-token",
    tokenType: "Bearer",
    headersConfig: {
      "Content-type": "application/json",
    },
  });

  console.log(response);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
```

##### Submit Method:

```javascript
import { useSubmitMethod } from "react-api-call";

const App = () => {
  const { handleSubmit, isLoading } = useSubmitMethod({
    token: "your-token",
    tokenType: "Bearer",
    headersConfig: {
      "Content-type": "application/json",
    },
  });

  const handlePostStatus = async () => {
    const postData = {
      name: "John Smith",
      status: true,
    };

    const { error, response } = await handleSubmit({
      url: "example/api/v1/users",
      data: postData,
    });

    console.log(error, response);
  };
  return (
    <div>
      <button onClick={handlePostStatus}>Add Status</button>
    </div>
  );
};

export default App;
```

##### Delete Method:

```javascript
import { useDeleteMethod } from "react-api-call";

const App = () => {
  const { handleDelete, isDeleting } = useDeleteMethod({
    token: "your-token",
    headersConfig: {
      "Content-type": "application/json",
    },
    tokenType: "Bearer",
  });

  const handleDeleteStatus = async () => {
    const apiUrl = "example.com/status/1";
    await handleDelete({ url: apiUrl });
  };
  return (
    <div>
      <button onClick={handleDeleteStatus}>Delete</button>
    </div>
  );
};

export default App;
```

### Now it's time for manage your cookies

##### Set Cookies:

```javascript
import { useCookies } from "react-api-call";

const App = () => {
  const { setCookies } = useCookies();

  const handleSetCookies = () => {
    // in set cookies you need to pass: name, value, expires in day
    setCookies("admin-token", token, 7);
  };
  return (
    <div>
      <button onClick={handleSetCookies}>Set Token</button>
    </div>
  );
};

export default App;
```

##### Get Cookies:

```javascript
import { useCookies } from "react-api-call";

const App = () => {
  const { getCookies } = useCookies();

  const handleGetCookies = () => {
    // for get cookies value, you need to pass "name" only
    getCookies("admin-token");
  };
  return (
    <div>
      <button onClick={handleGetCookies}>Get Token</button>
    </div>
  );
};

export default App;
```

##### Delete Cookies:

```javascript
import { useCookies } from "react-api-call";

const App = () => {
  const { deleteCookie } = useCookies();

  const handleDeleteCookies = () => {
    // for delete cookies you need to pass: "name" only
    deleteCookie("admin-token");
  };
  return (
    <div>
      <button onClick={handleDeleteCookies}>Delete Token</button>
    </div>
  );
};

export default App;
```

#

### List of parameters, that you can pass if needed:

| Parameters      | Description                                                                                                                                                                                                                                       | Usecase                                              | Status   | Type       | Default Value    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------- | ---------- | ---------------- |
| `token`         | If you need to pass token in your api calls then you can pass this otherwise not.                                                                                                                                                                 | `useGetMethod`, `useSubmitMethod`, `useDeleteMethod` | Optional | `string`   | null             |
| `tokenType`     | Default tokenType is `Bearer` but if you need to change, then you can pass this parameters with value.                                                                                                                                            | `useGetMethod`, `useSubmitMethod`, `useDeleteMethod` | Optional | `string`   | Bearer           |
| `headersConfig` | Default is application/json but if needed you change pass this with values.                                                                                                                                                                       | `useGetMethod`, `useSubmitMethod`, `useDeleteMethod` | Optional | `object`   | application/json |
| `apiUrl`        | Pass your api url in useGetMethod Hooks.                                                                                                                                                                                                          | `useGetMethod`                                       | Required | `string`   | null             |
| `onError`       | After a submit or delete request, (errors) if you need to show error then you can pass a function in this parameters, and you also get error response in your function what you have pass in this parameters.                                     | `useSubmitMethod`, `useDeleteMethod`                 | Optional | `function` | null             |
| `onSuccess`     | After a submit or delete request, (success) if you need to show success or showing a alert or something then you can pass a function in this parameters, and you also get success response in your function what you have pass in this parameter. | `useSubmitMethod`, `useDeleteMethod`                 | Optional | `function` | null             |
| `refetch`       | If after submit or delete you need to refetch or call some api then you can pass function in this parameters.                                                                                                                                     | `useSubmitMethod`, `useDeleteMethod`                 | Optional | `function` | null             |
| `method`        | For submit request default method is `post` and for delete request default method is `delete` so if you need to change you can pass this parameters with your methods.                                                                            | `useSubmitMethod`, `useDeleteMethod`                 | Optional | `string`   | post & delete    |

### Contribution From Your End

If you have confidence to contribute in this package, YOU ARE WELCOME.

#### Todo

- Component mount unmount loading handle for get api
- Cache in for 5 minutes

##### Author

<img src="https://i.ibb.co/qkphPNz/mdmahfuzrp.png/0/1697224322908?e=1721865600&v=beta&t=0O5OSlO5Fq5mET8ZQLIdfuC3MkixqOInG7UDefTKuWY" alt="drawing" style="width:150px; border-radius:10px;"/>

```
MD MAHFUZ RP
Software Engineer & Tech Entrepreneur
Developer & Creator of @react-api-call
```

<div align="left">
<a href="https://fb.com/mdmahfuzrp" target="_blank"><img align="center" src="https://i.ibb.co/6bbvqCG/facebook-256x256.png" alt="mdmahfuzrp" height="30" width="30" /></a>
<a href="https://instagram.com/mdmahfuzrp" target="_blank"><img align="center" src="https://i.ibb.co/tX0CDxd/instagram-256x256.png" alt="mdmahfuzrp" height="30" width="30" /></a>
<a href="https://twitter.com/mdmahfuzrp" target="_blank"><img align="center" src="https://i.ibb.co/9VDdfFG/twitter-256x256.png" height="30" width="30" /></a>
<a href="https://www.linkedin.com/in/mdmahfuzrp" target="_blank"><img align="center" src="https://i.ibb.co/FgZy8DM/linkedin-original-256x256.png" height="30" width="30" /></a>
<a href="https://stackoverflow.com/users/22882309/md-mahfuz-rp" target="_blank"><img align="center" src="https://i.ibb.co/HH9b9jP/stack-overflow-logo-AC73-FF9063-seeklogo-com.png" height="30" width="30" /></a>
