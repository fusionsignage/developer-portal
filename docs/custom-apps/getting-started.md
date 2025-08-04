---
sidebar_position: 2
description: Use our template or DIY!
---
# Getting started

## Use our template

Coming soon!

## Do it yourself

The only mandatory requirements of the zip file is the `config.xml` file in the root of the zip and an `index.html` file to render the content.
You can use any framework you wish, from Angular to React to plain old HTML and JavaScript. As long as the zip file you upload
has a `config.xml` file and an `index.html` file you're good to go!

Here is a minimal `config.xml` file you can bundle alongside your content. 

```xml
<?xml version="1.0"?>
<widget xmlns="http://www.w3.org/ns/widgets" id="my-widget" version="1.0.0">
  <name>My Widget</name>
  <author>Fusion Signage</author>
  <content src="index.html"/>
</widget>
```

### Example zip structure

Your `.zip` file could look something like this:

```
my-widget.zip
    config.xml
    index.html
    bundle.js
    bundle.css
```
