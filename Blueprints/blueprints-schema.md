<h1 align="center">blueprints structure and schemna: </h1>
each JSON object include a list of components as a first level items\
each item has 4 fields:\
page: number of page it belongs to\
styles: css rules\
children: nested components\
params: a list of parameters, it's different depending on the component

## params:
* button: 
    - role: 
        1) page: if button switches active page
        2) menu: if button open menu component
        3) sidebar: if button opens sidebar
    - target: id of relevant component
* imagebutton:
    - source: image source
    - role: 
        1) page: if button switches active page
        2) menu: if button open menu component
        3) sidebar: if button opens sidebar
    - target: id of relevant component
* header:
    - structure: 3 arrays for left center and right each has a button/title/image/imagebutton    
