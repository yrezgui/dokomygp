![Doko My GP](screenshot-multi.png "Doko My GP")

# Doko My GP

Mobile app to search a general practitioner in England.
I created it using:
- [ReactJS](http://facebook.github.io/react/) for managing the different components of the App
- [Import.io](https://import.io/) for the API data (scraped from the [NHS](http://www.nhs.uk/) website)
- [Building Blocks](http://buildingfirefoxos.com/) for the GUI


## Getting started
Run these commands in your terminal in the directory of the cloned repository:

```
npm install
bower install
```

If you don't have Gulp already installed, execute this command :
```
npm install -g gulp
```

And finally this command to have your automatic build:
```
gulp default
gulp watch
```

You need a HTTP server to serve your files. I will certainly add an express instance soon. For now, you can use this command (which is useful for a quick HTTP server) :
```
python -m SimpleHTTPServer
```

Don't forget to run it in the root folder of the project. Enjoy :smiley:
