
# Effects of Poverty on Undergraduate and Graduate Enrollment in Maryland 
#### Analysis on the changes between the years of 2015 and 2019 on the total number of enrolled undergraduate and graduate students in Maryland and the percentage of those students who were at or below the federal poverty level during the same period. 

#### Initial Steps: R Studio Notebook & TidyCensus
Before completing analysis in QGIS, data must be downloaded through RStudio using the TidyCensus package to download census data, with an API key, in a shapefile format that we can then utilize for geospatial analysis. 

**Step 1: Setup**

Install the following (if needed) and run:

* tidycensus
* tidyverse
* sf

<img src="images/lab6bivariatemap.png"/>

Tidycensus settings: Follow the following script to ensure packages download have proper settings

> options(tigris_class = "sf")
> 
> options(tigris_use_cache = TRUE)

Go to (https://api.census.gov/data/key_signup.html) to retrieve a Census API Key to be able to download census data and enter the following script to use your key to unlock access to data. 

> census_api_key("___")

**Step 2: Retrieve Data**


