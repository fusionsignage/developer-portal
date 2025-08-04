---
sidebar_position: 3
description: How to prepare your config file.
---
# Configuration

Your custom app only needs a `config.xml` to work on Fusion Signage devices. Let's review the format.

## The `config.xml` file

The config file format is based on the [W3C Packaged Web Apps format](https://www.w3.org/TR/widgets/#configuration-document), although only certain elements are currently supported. 

A minimal `config.xml` file will look like this:

```xml
<?xml version="1.0"?>
<widget xmlns="http://www.w3.org/ns/widgets" 
  xmlns:fs="http://www.fusionsignage.com.au/widgets" 
  id="your_unique_id" 
  version="0.0.1" 
  fs:duration="30"
  width="1920" 
  height="1080">
    <!-- The name of your custom app -->
    <name>My Custom Application</name>    
    <!-- The start page for the application -->
    <content src="index.html" />
</widget>
```

### Required elements and attributes

| XPath                    | Description                                                                                                                                                           | 
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/widget[@id]`           | The unique identifier of your content in Fusion Signage. Widgets with the same unique identifier will be overridden in the future, but for now this value is ignored. |
| `/widget[@version]`      | The version of your content. This is currently ignored by Fusion Signage but may be used in future.                                                                   |
| `/widget/[@fs:duration]` | The duration **in seconds** of your content. This will be the amount of time your content will display on a screen. If not provided this will default to 10 seconds.  |
| `/widget[@width]`        | The width in pixels of your content - e.g. 1920. This should match your screen dimensions. If not provided this will default to 1920.                                 |
| `/widget[@height]`       | The height in pixels of your content - e.g. 1080. This should match your screen dimensions. If not provided this will default to 1080.                                |
| `/widget/name`           | The name of your content. This will be displayed in the Fusion Signage content management system.                                                                     |
| `/widget/content`        | The root file of your HTML content. Fusion Signage currently only supports this element having the value index.html in the root of your zip file.                     |