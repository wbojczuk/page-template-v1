<h1>Shopify for page template v1</h1>
<h3>Instructions:</h3>

1. Paste this repo's contents into a page-template-v1 project.
2. Copy file contents marked with (copy-to) to the corresponding file in the page-template-v1 project.
3. Install the npm packages listed inside "npm pkgs to install.txt"
4. In layout.tsx import and put <AppWrapper elems={<>ALL ELEM CONTENT HERE <Cart /></>} />
5. On shopify.com in your store go to settings>Apps and sales channels>Develop Apps>Create an App, and fill in the details
6. Next in the app window, go to Configuration>Storefront API integration>Configure, and allow all access.
7. Click "Install App", then get the API key, put the key in the .env.local file in the project, and fill in the store URL in the .env.local file in the project.


<h3>To Set Infinite Stock:</h3>

1. Set Quantity on Shopify to 0,
2. Set Inventory to "Not Tracked"
