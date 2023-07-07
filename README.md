# RevoU Week 4 Assignment

Adds custom domain to your netlify site.

## Assignment Information

1. I reworked my last week assignment to make it looks more modern with similar concept of [warframe website](https://warframe.com) as reference.

2. Google font is used in this project, with Poppins Sans-Serif as main font used.

3. Header section are made using Grid, with 5x5 size. pages are divided 4x5 for content and 1x5 for image

4. I used Transition for button hover and Animation for loading screen.

### Advanced Information

1. I managed to get 100 on both Accessibility, Best Practice, and SEO by the time of writing. It's solved by adding "aria-label" properties on links and other "invisible" elements.

2. Day and Night mode is made by hiding checkbox and adding bunch of transition magic to make it FEEL like sliding buttons.

### Additional information

if Smooth Scrolling doesnt work, you can try enabling it by following [this tutorial](https://www.majorgeeks.com/content/page/how_to_enable_or_disable_smooth_scrolling_in_google_chrome.html#:~:text=If%20your%20Google%20Chrome%20seems,on%20the%20bottom-right%20corner.)

Media query are optimized for 1440px and 425px, with small adjustment at 1024px and 768px.

!important is used for screen above 426px to fix Mobile's burger menu sometimes hides navbar when transitioned to larger screen size.

### Deploy Link

https://adriantori.my.id

## Sign-up to Netlify

assuming you already have GitHub account:

1. Go to netlify.com 

2. Click Log in

3. Log in with GitHub

4. Authorize access for netlify.com

### Connect to Github

1. Go to Team overview menu, click Add new site, Import an existing project
   
   ![github login](Assets\Images\Readme\2023-07-07-11-16-10-image.png)

2. Click GitHub

3. Pick a repository you want to add
   
   ![github repo](Assets\Images\Readme\2023-07-07-11-17-41-image.png)

4. Scroll down, Deploy Site

### Auto Deploy

Once you deploy the site, it will be automatically refreshed when you Push things to your GitHub.

## Buying Domain

1. Go to your favorite domain site (in this case I'm using Domainesia.com)

2. Type your domain name you want, click "Cari Domain", click "Daftarkan Domain"
   
   ![domainesia](Assets\Images\Readme\2023-07-07-11-58-47-image.png)

3. Click "Masukkan Troli" and follow the instruction for payment option

4. Once payment is made, you can now use your Domain in the next step

## Setting up Cloudflare

1. Go to "dash.cloudflare.com", click Sign up, follow the instruction and confirm your email

2. Login using the account you just made

3. Click "Add a site" button on the right-side of the web page

4. Enter your site name, click Add site

5. Scroll down and click Free, then Continue

6. Copy Nameserver 1 & 2, later you'll need this to overwrite your domain Nameserver
   
   ![cloudflare nameserver](Assets\Images\Readme\2023-07-07-12-10-25-image.png)

7. Go to your domain provider, click Domains -> your Domain Name
   
   ![domainesia select domain](Assets\Images\Readme\2023-07-07-12-05-28-image.png)

8. click Nameservers, and paste Nameservers provided by Cloudflare
   
   ![domainesia change nameserver](Assets\Images\Readme\2023-07-07-12-06-30-image.png)

### Setting DNS

1. go to your cloudflare account, click your website name -> DNS -> Records, click Add record
   
   ![cloudflare dns record](Assets\Images\Readme\2023-07-07-12-18-05-image.png)

2. Enter "Type: CNAME, Name: @, IPv4 address: your Netlify.app link (i.e website.netlify.app)"

3. Enter "Type: CNAME, Name: www, IPv4 address: your Domain name (i.e domain.site)"

## Connecting Domain in Netlify

1. Login to your Netlify account, then click your deployed website.

2. go to Site overview -> Domain settings
   
   ![netlify domain](Assets\Images\Readme\2023-07-07-12-13-08-image.png)

3. Click Add domain alias, type your domain name, click Add domain
   
   ![netlify domain name](Assets\Images\Readme\2023-07-07-12-14-28-image.png)

4. Wait for awhile and your site is ready to be used
