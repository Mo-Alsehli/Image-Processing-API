# Image-Processing-API
### This Is The First Project In The Advanced Back-end Track With Udacity

# Endpint
#### /api/images/preview/?filename=<image_name>
Method: get URL Params: height and width - the height or width of the image in pixels Query Param: filename - the specific image you are requesting.

#### For example: `localhost:3000/api/images/preview/?filename=fjord`

For example: `localhost:3000/api/images/resize/?width=300&height=300&filename=fjord`
### Available Image Names Options
1.encenadaport
2.fjord
3.icelandwaterfall
4.palmtunnel
5.santamonica
## Functionality
User can query endpoint using various params and queries to retrieve an image with a specified height and width.
#### All images requested will be saved to disk.

## Built With:
#### Node.js / Express.js
#### Typescript
#### Jasmine Unit Testing Framwork
#### Sharp Liberary
