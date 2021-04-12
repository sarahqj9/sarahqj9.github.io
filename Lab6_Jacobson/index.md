
# Effects of Poverty on Undergraduate and Graduate Enrollment in Maryland 
#### Analysis on the changes between the years of 2015 and 2019 on the total number of enrolled undergraduate and graduate students in Maryland and the percentage of those students who were at or below the federal poverty level during the same period. 

#### Initial Steps: R Studio Notebook & TidyCensus
Before completing analysis in QGIS, data must be downloaded through RStudio using the TidyCensus package to download census data, with an API key, in a shapefile format that we can then utilize for geospatial analysis. 

**Step 1: Setup**

Install the following (if needed) and run:

* tidycensus
* tidyverse
* sf

Tidycensus settings: Follow the following script to ensure packages downloaded have proper settings

>     options(tigris_class = "sf")
>  
>     options(tigris_use_cache = TRUE)

Go to (https://api.census.gov/data/key_signup.html) to retrieve a Census API Key to be able to download census data and enter the following script to use your key to unlock access to data. 

>     census_api_key("___")

**Step 2: Retrieve Data**

In order to download census data using tidycensus,we must use the `get_acs` command, specifying exactly which population and housing variables we want to work with. [The Data Dictionary from Social Explorer](https://www.socialexplorer.com/data/ACS2019_5yr/metadata/?ds=ACS19_5yr) will allow you to explore and decide which variables you want to work with. 

You will have to download four different shapefiles to represent our two variables, and the change over time. 

Beginning with the total number of college and undergraduate students enrolled in 2015 and 2019, and using the `get_acs` command to clearly indicate which level geography and which variables are needed. Repeat this script, modifying it as needed for the correct titles of shapefiles, variables, years, and geography levels. 

>     md_college_2019 <- get_acs(geography = "county", 
> 
>         variables = c("total_pop" = "B14001_001",
> 
>                       "total_enrolled" = "B14001_002", # Total population over 3 who are enrolled in school
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

Once the shapefiles have been downloaded for the total enrollment for 2015, and the number of undergraduate and graduate students who are at or below the federal poverty level for years 2015 and 2019 at a county level, we must guide the shapefile to the appropriate folder to access it. It is important when working with several datasets and shapefiles, that we label and organize folders and paths clearly. Once the folders are prepared, use **st_write** to download the shapefile with the data. Our main folder will be titled Lab6, with no spaces to keep the path from breaking. These datasets will then further be filed under "RStudioProducts/RawData" to indicate that they were retrieved through RStudio and are raw data shapefiles from the notebook. 

>     md_college_2019 <- st_write(md_college_2019,("C:/Users/poppa/Documents/UMBC_School_Stuff/GES486/Lab6/RStudioProducts/md_college_2019.shp")) # download the shapefile with the data
>     

After downloading that data to folder, you can save your code, and quit your RStudio Notebook, enetering QGIS.

**Step 3: QGIS Statistical Analyses**

In order to find the difference between the two years, we must first find the total number of enrolled undergraduate and graduate students in Maryland for the years 2015 and 2019, from our previously downloaded shapefiles. 

#### Total number of enrolled college students

* Add **md_college_2019** and **md_college_2015** vector layers
* Open attribute table and begin editing
* Select field calculator and find the sum of the total undergraduate students and total graduate students, placing the calculations into a new field. 
* Complete for both

The next step would be to find the difference bewtween the years 2019 and 2015.

#### Find the Difference

* Complete a **join by attribute field** selecting the year 2019 as the Input layer and 2015 as the overlay. 
* Select just the sum total of the overlay to be carried over to the 2019 attribute table, to prevent cluttering.
* Once join is complete, open the attribute table of the joined file. 
* Begin editing and open the field calculator. 
* Subtract the 2015 total from the 2019 total to find the difference. 

This completes our first variable and we can see whether there is a decrease, little to no change, or an increase in total enrolled. Now we must find the percent of all undergrad and graduate students enrolled who are also at or below the federal povery level. In order to find the difference between the percent of students at or below the federal poverty level, we have to find how many students out of the total number are experiencing it in each year first. 

#### % at or Below the Federal Poverty Level for Each Year

* Open the **mdpoverty_2019** and **mdpoverty_2015** shapefiles 
* Convert all 4 shapefiles to a CSV sheet by exporting it, and open it in Excel.
* For the mdpoverty shapefiles, you must find the total number of students as seen in the first step above. 
* Copy the total enrolled students from the **md_college_2019** and **md_college_2015** layers onto the **mdpoverty_2019** and **mdpoverty_2015** files matching by year. 
* Divide the data on number of students at or below federal poverty level over the total number of enrolled students and multiply by 100 to receive the percentage of students at or below the federal level for each year. 

##### Find the Difference in %

* Subtract the 2015 percentages found from the 2019 percentages to find the difference.

Do all of these calculations on a single Excel sheet, with well named titles for each section so you are aware of what each field value represents. Once completed, save and exit the sheet, returning to QGIS, and adding the sheet as a CSV Layer. You can complete another **join by attribute field** using an appropriate shapefile and field value to join the difference in % to the original shapefile. 

**Step 4: Symbology & Classification**

The symbology and classification of our two maps represent the total number of students and % at the federal poverty level, and so are very important to make clear and understandable. 

#### Symbology

* Open up property layers and find symbology 
* Select your difference data that you have for both variables to be displayed with only three data classes. These will be divided into three sections:
  * The negative: areas that saw a decrease in enrollment and/or percent at or below the federal poverty level from 2015 to 2019
  * Little to no change: approximately 10% of the maximum or minimum value from the point of 0 to display areas that have experienced very little change over the 5 year period. 
  * The positive: areas that saw an increase in enrollment and/or percent at or below the federal poverty level from 2015 to 2019
* You can use [this article](https://bnhr.xyz/2019/09/15/bivariate-choropleths-in-qgis.html) as a reference for how to set up the bivariate map display
* By following the article above, you should have a bivariate map displaying the increase, decrease, or little to no change of both the total number of undergraduate and graduate students and the percent of those students that are at or below the federal poverty level. 

Use the map print layout to label your bivariate map legend and title your map for public viewing. 

### Results

<img src="images/lab6bivariatemap.png"/>

Beginning in the lower left corner, a pale yellow indicates the counties that have experienced both a decrease in total # of undergraduate and graduate students enrolled, and a decrease in the percent of students that are at or below the federal poverty level. As the table extends to the right, it illustrates the counties that experience little to no change in the percent of students, and then all the way to the right is areas that experienced an increase. On the left, extending upward, the legend illustrates the total number of graduate and undergraduate students enrolled in Maryland. As the two sections begin to overlap, depending on the location of the square, we are able to identify counties that may be experiencing both an increase or decrease in either variable over time, and if done over more period of time, can allow us to draw a trend between the two variables. 

#### [My Directory](https://github.com/sarahqj9/sarahqj9.github.io/tree/master/lab_6)

Feel free to explore [my personal directory](https://github.com/sarahqj9/sarahqj9.github.io/tree/master/lab_6) that holds all of the files and products created during this process. As mentioned, each file is organized with specific datasets. 

**CSVFiles**: All Excel files created during the process

**QGISProduct**: All files created as a product of the raw data files, or the CSV files. Also includes final map image and layout. Includes anything that has to do with QGIS and will be further organized for specific datasets.

**RStudioProducts**: The RStudio Notebook file and HTML, along with the Raw Data folder holding the original files used for the project. 

