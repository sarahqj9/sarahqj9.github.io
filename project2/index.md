

# Food Insecurity Map Breakdown

This page walkthroughs the steps and processes required to complete the map products utilized in my ["Food Insecurity On Maryland College Campuses"]((https://sarahqj9.github.io/food_insecurity), that focuses on addressing the increasing rates of students who experience food insecurity at one point their educational career. I am a Maryland resident, and wanted to address this issue on a local scale, so focused on the institutions within my state, and what food resources or pantries they may have available on their campus, what those pantries look like and how they operate. The maps on that site are just one part of a larger research project where I take a look at disparities between resources on different types of institutions, along with surveying campus food pantry directors on how their pantries run along with how the onset of the COVID-19 pandemic affected their ability to provide resources, how they had to adapt, and what their pantries look like now to continue to serve the needs of their community.  

## Gathering the Data 

The first step to most projects, including this one, is to complete a review of the data available. As I am concerned with food pantries specifically on Maryland college campuses, I need to find data that has Maryland counties, Maryland colleges & institutions, and a completed resource list of all the colleges and universities that do or do not have a food pantry or food resources available. 

**Colleges & Higher Education Institutions in Maryland**

[ArcGIS Online, MD iMAP: Maryland Education Facilities - Higher Education (Public Two Year) 2019](https://opendata.maryland.gov/Education/MD-iMAP-Maryland-Education-Facilities-Higher-Educa/bwdz-rgcj)

[ArcGIS Online, MD iMAP: Maryland Education Facilities - Higher Education (Private Four Year), 2019](https://opendata.maryland.gov/Education/MD-iMAP-Maryland-Education-Facilities-Higher-Educa/ejcy-gama)

[ArcGIS Online, MD iMAP: Maryland Education Facilities - Higher Education (Private Two Year), 2019](https://opendata.maryland.gov/Education/MD-iMAP-Maryland-Education-Facilities-Higher-Educa/hhju-9ctd)

[ArcGIS Online, MD iMAP: Maryland Education Facilities - Higher Education (Public Four Year), 2019](https://opendata.maryland.gov/Education/MD-iMAP-Maryland-Education-Facilities-Higher-Educa/p733-7wzs)

**MD County Boundaries**

[ArcGIS Online, MD iMAP: Maryland Physical Boundaries - County Boundaries](https://data.imap.maryland.gov/datasets/4c172f80b626490ea2cff7b699febedb_1?geometry=-79.875%2C38.076%2C-74.662%2C39.574)

**Johns Hopkins University; Center for a Livable Future**

[Johns Hopkins University; Center for a Livable Future, % Food Insecure 2017](https://data-clf.hub.arcgis.com/datasets/1d070188731c4e1eba4eb486619edfd1_449?geometry=-80.757%2C37.310%2C-73.780%2C40.306)

[Johns Hopkins University; Center for a Livable Future, Food Bank and Pantry Sites 2018](https://data-clf.hub.arcgis.com/datasets/243b35ee3fd54c5284d406d459a05db8_247?geometry=-79.839%2C38.124%2C-74.626%2C39.621)

**MD College Food Pantries**

When researching food pantries on campus, I promptly realized no dataset existed and had to gather that data myself, with the help of three classmates, Nacere Mohamed Samassi, Jake Lahoff, and Timothy Patterson. 

We created a master Excel sheet *"all_schoolsexcel"* and exported the Metadata for the *"Public 2 Year",* *"Public 4 Year", "Private 2 Year", Private 4 Year"* shapefiles into **.csv** files. 

Copying only the pertinent fields; you can keep as much data as you want, however for our purposes we need the *"ID", "Name", "Latitude", "Longitude"* and any other location data available.

Within *"all_schoolsexcel"*, we created four fields labeled:
* *"Pantry"* = with **Y** or **N** values
* *"Type"* for a *"Public 2 Year(2p)", "Public 4 Year(4p)", "Private 2 Year(2i)", "Private 4 Year(4i)"*
* *"Program_Name"* if *"Pantry"* = **Y**, then list the program or pantry name
* *"Site"* is for an online website associated with information on the institutional food pantry. 

After the reserach had been completed, and the Excel sheet filled out, close the file and enter QGIS. Add the .CSV file as a Comma Delimited Layer. Under *Layers* right-click the layer and **export** the file into an **ESRI Shapefile**. That created the main dataset that will be utilized for our geospatial and statistical analyses. 

## Creating the Maps

Now that we have all of our necessary data, we can add the other layers we need. Bring in the *"Maryland Physical Boundaries"* Shapefile as a base layer.

### Institutions By Type

Go to the **Symbology** for the *"finalpantryshapefile.shp"* and create the next two maps by changing the *Value* to *"Type"* and merging and relabeling the label name as appropriate. 

<img src="images/Food_Insecurity/publicvprivate_urcad.PNG"/>

<img src="images/Food_Insecurity/2yearv4year_urcad.PNG"/>

Change the *Value* to *"Pantry"* and categorize based on the **Y** or **N** responses.

<img src="images/Food_Insecurity/foodpantry_urcad.PNG"/>

### Bivariate Map: Food Insecurity Rates Compared to Number of Campus Food Pantries

Utilizing a bivariate map allows for the direct comparison of two different variables. Since we are hoping to find any trends between existing food insecurity rates to the amount of food resources available to identify areas that may be underserved. 

Following this [BNHR Bivariate choropleth maps in QGIS

Add the *"% Food Insecure 2017"* shapefile layer and symbolize the percent values. I chose to use five classes here, but for the purposes of bivariate mapping, we are going to use 3 classes. Utilize what breaks work best for you, however I would ensure that the data you are representing does not show a bias. 

<img src="images/Food_Insecurity/justfoodinsecurity.PNG"/>


The map above illustrates the percent population of each county that experiences varying rates of Food Insecurity.

<img src="images/Food_Insecurity/PantryCount_PerCounty.PNG"/>

<img src="images/Food_Insecurity/Presentation1.PNG"/>

The second variable displayed is the number of institutions in MD that do have a food pantry.

<img src="images/Food_Insecurity/JHUpantrysites.PNG"/>

<img src="images/Food_Insecurity/institutiontypes.PNG"/>
