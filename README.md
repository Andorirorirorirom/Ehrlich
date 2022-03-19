# Ehrlich
 A simple backend program for image management

This is a Test Project written as an assessment for Ehrlich IT Services



## API Endpoints

### `GET /images` 

-this will get 5 random image urls from pexel.com and place it on a shared server(cloudinary)
-no parameters needed. Optional 'limit' parameter to input how many images the system will get(Hard Limit = 10)

### `GET /images/:id`

-get a specific url/image based on the given Id

### `PATCH /images/:id`

-this will replace an entry with a url on the body
 needed parameters
`JSON
{
 "url": "image.com",
 "hits": "2"
}
`

### `POST /images`

-this will create a new image that the user provided by the url:

`JSON
{
 "url": "image.com"
}
`

### `DELETE /images/:id`

-this will change the status of a file into 'Inactive (I)' so the users wont be able to see it






