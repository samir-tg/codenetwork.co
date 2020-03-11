[![Netlify Status](https://api.netlify.com/api/v1/badges/49e57a7e-487a-49ee-8811-7605def1c266/deploy-status)](https://app.netlify.com/sites/codenetwork/deploys)

# Official Website

Here you can contribute to codenetwork.co

## Technical Details

This website is build with [gatsbyjs](https://gatsbyjs.org), and hosted off [netlify](https://netlify.com). It is recommened you look at gatsby docs before contributing to this repo :). If there are any features that requires netlify config please get into contact with [Joshua Inglis](jt.inglis@outlook.com)

## Local Development

1. install [node](https://nodejs.org/en/)
2. Clone this repo
3. Install dependancies | `npm install`
4. run local build with | `npm start`

### On Windows

Follow this tutorial to get the project building on Windows:

https://www.gatsbyjs.org/docs/gatsby-on-windows/

If you experience build errors, a `docker-compose.yml` file is included to enable virtualized development through docker

You can run it with:

```bash
docker-compose up develop
```

Be patient when running it for the first time as it runs an npm install to your current directory,
but for some reason does not display the installation commands as its running - can take up to 10 minutes.

## Contributing

If you are unsure about how to create pull reqeust, look at this for guidance https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
