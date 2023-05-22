
# Speedy Mini

This is a full stack website where you can creat account, add toy, viw your own added toys,  edit details of your added toys and also can delete them. You can also view toys added by other users added but cant modify or delete them. 


## Demo

Insert gif or link to demo

https://speedy-mini.web.app/

## Features

- Sign In By Email Password
- Sign in by google and git hub
- Sign Up
- Add toy
- edit, view and delete own toy
- view others toy
- view toys details
- private route
- fireabse auth



## API Reference

#### Get all items

```http
  GET https://ill-plum-goshawk-kit.cyclic.app/alltoy
```



#### Get item

```http
  GET https://ill-plum-goshawk-kit.cyclic.app/details/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get my toys

```http
  GET https://ill-plum-goshawk-kit.cyclic.app/mytoys?email=${email}&sort=${sort}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. User Email |
| `sort`      | `number` | 1 for ascending order and -1 for descending order |

#### Get toys by category

```http
  GET https://ill-plum-goshawk-kit.cyclic.app/toysbycat/${cat}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cat`      | `string` | **Required**. category of toy |


#### Get toys with pagination

```http
  GET https://ill-plum-goshawk-kit.cyclic.app/mytoywithlim?limit=${limit}&page=${page}&email=${email}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `limit`      | `integer` | **Required**.  items per page |
| `page`      | `integer` | **Required**.  page number |
| `email`      | `string` | **Required**.  user email |




#### search toy

```http
  GET https://ill-plum-goshawk-kit.cyclic.app/search?search=${text}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `text`      | `string` | **Required**.  keyword of category |

#### delete toy

```http
  GET https://ill-plum-goshawk-kit.cyclic.app/deletetoy/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.  id of item |

#### Update toy

```http
  GET https://ill-plum-goshawk-kit.cyclic.app/updatetoy
```
pass all updated info with id in body of post request

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`VITE_APIKEY`
`VITE_AUTHDOMAIN`
`VITE_PROJECTID`
`VITE_STORAGEBUCKET`
`VITE_MESSAGINGSENDERID`
`VITE_APPID`

## Installation

Install speedy mini with npm

```bash
  npm i
  npm run dev
```
    
## Deployment

To deploy this project run

```bash
  firebase init
```

```bash
  npm run build
```

```bash
  firebase deploy
```




## License

[Shazzad Hossen](https://www.facebook.com/sboy.showrav)


![Author Image](https://lh3.googleusercontent.com/a/AGNmyxbFv_beda4o65xNRZbCXuA-2VZvoLMXG0oNIIQJ=s96-c)


## 🚀 About Me
I'm a full stack developer...

