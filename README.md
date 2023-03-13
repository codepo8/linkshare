# Linkshare

A GitHub pages layout to show your links and make it easy to copy them for social sharing

See it in action at https://codepo8.github.io/linkshare/

## Customising to your needs

1. Rename the title in the `index.md` document to your title.

2. The `_links` folder contains all links that will be shown here. If you want a new category, create a new file copying the template or one of the others. Links need to be lists in markdown format. You also need to change the settings on the top:

* `title` is the title that will be added to the head of the document and show up in the browser tab
* `name` is the name of the link to the collection of links in the index page
* `permalink` is the name of the file that will get generated (this is to avoid having /repo/links/link.html URLs)

Leave the `template` setting as is. 

To remove a category, delete the file. 

## Customising the copy template

By default, the copied content will be in the following format when you click the copy button:

👉🏼 „Chris Heilmann's Blog”

🔗 https://christianheilmann.com

💬 Lots of web development news since 2005!

If you want to change this, edit the `sharetemplate.html` file in the `_includes` folder.

* `$LINKTEXT` will get replaced with the text inside the link
* `$URL` will get replaced with the URL
* `$TEXT` will get replaced with the text following the link in your lists

## Changing the look and feel 

You can do this by editing the `styles.css` file for all the layout bits. All the colours for dark and light mode are defined in `dark-theme.css` and `light-theme.css`.

Pull requests and issues welcome!

