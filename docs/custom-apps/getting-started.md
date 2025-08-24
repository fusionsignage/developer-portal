---
sidebar_position: 2
description: Use our template or DIY!
---
# Getting started

:::info

Custom apps are not activated by default. If you would like to use custom apps then please reach out to support@fusionsignage.com.au
and request that we enable custom apps on your account.

:::

A custom app is a zip file with the file name extension `.wgt` that can be uploaded into Fusion Signage and published to screens.

If you know how to build websites or code in JavaScript then you know how to create a custom app. 

## Start from a template

Coming soon!

## Do it yourself

You've built your HTML application, and now you're ready to upload it into Fusion Signage. All you have to do is produce a `.wgt` file.

The only mandatory requirements of the `.wgt` file is the `config.xml` file in the root of the zip and an `index.html` file to render the content.
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

Your `.wgt` file should look something like this:

```
my-widget.wgt
    config.xml
    index.html
    bundle.js
    bundle.css
```
