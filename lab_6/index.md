
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

Tidycensus settings: Follow the following script to ensure packages downloaded have proper settings

>     options(tigris_class = "sf")
>  
>     options(tigris_use_cache = TRUE)

Go to (https://api.census.gov/data/key_signup.html) to retrieve a Census API Key to be able to download census data and enter the following script to use your key to unlock access to data. 

>     census_api_key("___")

**Step 2: Retrieve Data**

In order to download census data using tidycensus,we must use the `get_acs` command, specifying exactly which population and housing variables we want to work with. [The Data Dictionary from Social Explorer](https://www.socialexplorer.com/data/ACS2019_5yr/metadata/?ds=ACS19_5yr) will allow you to explore and decide which variables you want to work with. 

You will have to download four different shapefiles to represent our two variables, and the change over time. 

Beginning with the total number of college and undergraduate students enrolled in 2015 and 2019, and using the `get_acs` command to clearly indicate which level geography and which variables are needed.

>     md_college_2019 <- get_acs(geography = "tract", 
> 
>         variables = c("total_pop" = "B14001_001",
> 
>                       "total_enrolled" = "B14001_002", # Total population over 3 who are >enrolled in school
>                   
>                       "undergrad_pop" = "B14001_008", # Total enrolled in undergraduate
>                   
>                       "grad_pop" = "B14001_009" # Total enrolled in graduate or professional
>                   ), 
>         year = 2019,
>     
>         survey = "acs5",
>     
>         state = c(24), 
>     
>         geometry = TRUE, # download the shapefile with the data
>     
>         output = "wide") # need this
>     
