---
sidebar_position: 1
description: Introduction to deploying custom content on Fusion Signage.
---
# Introduction

A **Custom App** is an HTML-based application developed by you that can be played on your screens alongside other content like videos, images, and Designs. 
Custom apps run natively on the device and continue to play even without an internet connection.

Custom Apps use the [W3C packaged web application](https://www.w3.org/TR/widgets/#widget-packages) standard. 
They are simply a zip file with the `.wgt` extension that contains all the files required to play your custom content, 
such as HTML files, JavaScript files, CSS files, videos, and images.

The only other thing your zip file needs is a `config.xml` file that helps Fusion Signage understand how to unzip and play your content.

## Why create a Custom App

Fusion Signage allows customers to upload videos, images, embed websites, embed Power BI dashboards, and design your own content using our Designer WYSIWYG editor.

Even so, some customers may have their own development team (or be a developer themselves) and want full control over their content. 
That's where our custom app framework comes into the picture.

## Use cases

Custom apps can be used to extend the capabilities of your Fusion Signage device to display any content you want. 

* Create a private internal dashboard that uses your own APIs to securely display business information to your employees.
* Develop an interactive way-finding Kiosk.
* Embed content you've created using a third-party website creator.

## Examples

* [Menuzen](https://www.menuzen.com/) uses our custom apps framework to generate and upload menus built using their menu designer.
