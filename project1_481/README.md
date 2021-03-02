**TOPIC**

Food Insecurity Among MD College Students 
Index all of the food pantries within Maryland Universities and colleges, their student intake, and identify what services they provide their students.  This will help other food pantries with new methods or ideas for increased usage of their pantry. Detail the differences between types of institution, public, private, community college, to differentiate what resources they provide their students. Learn how pantries have adapted to meet students’ needs during COVID and what Retrievers Essentials can do to adopt some of those methods, ensuring they are sustainable for the post COVID era.

**DATA** 

The data below are series of shapefiles containing Maryland's higher education institutions. This will provide the preliminary base for research on which institutions provided a food pantry or food resources to their students, and then conducting futher analysis on the operations of individua food pantries among Maryland colleges and universities. Through an impact survey, I was able to gain data representative of approximately 30% of all Maryland insitutions with a food pantry. Data includes the best operational practices for each site, how many clients they serve, how they quantify food and time donated, and how COVID-19 impacted their ability to operate as normal, and continue servicing their communities. The continuation of my data and map analyses will include comparisons of varying socioeconomic factors within the state, and how as a result, each region has to service and operate in different ways to meet the needs of their clients.  

ArcGIS Online, MD iMAP: Maryland Education Facilities - Higher Education (Public Two Year) 2019,  https://opendata.maryland.gov/Education/MD-iMAP-Maryland-Education-Facilities-Higher-Educa/bwdz-rgcj

ArcGIS Online, MD iMAP: Maryland Education Facilities - Higher Education (Private Four Year), 2019. https://opendata.maryland.gov/Education/MD-iMAP-Maryland-Education-Facilities-Higher-Educa/ejcy-gama

ArcGIS Online, MD iMAP: Maryland Education Facilities - Higher Education (Private Two Year), 2019. https://opendata.maryland.gov/Education/MD-iMAP-Maryland-Education-Facilities-Higher-Educa/hhju-9ctd

ArcGIS Online, MD iMAP: Maryland Education Facilities - Higher Education (Public Four Year), 2019. https://opendata.maryland.gov/Education/MD-iMAP-Maryland-Education-Facilities-Higher-Educa/p733-7wzs

Johns Hopkins University; Center for a Livable Future, % Food Insecure 2017, 2017. https://data-clf.hub.arcgis.com/datasets/1d070188731c4e1eba4eb486619edfd1_449?geometry=-80.757%2C37.310%2C-73.780%2C40.306

Johns Hopkins University; Center for a Livable Future, 200% Federal Poverty Level 2014-2018, 2018. https://data-clf.hub.arcgis.com/datasets/16cf6aa531bf46f79384da68b56b7175_457?geometry=-80.767%2C37.331%2C-73.791%2C40.325


**TRANSFORMATIONS OR SUBSETS** 

From initial shapefile points, select by attributes to create maps specific to type of insitution
Create shapefile from Excel sheet
Buffer Zones for shapefile points
Field Calculator for statistical analyses

**ANALYSIS** 

Our data collection began with established shapefiles of Maryland institutions found from the Maryland open data portal. Shapefiles included four-year public institutions, four-year private institutions, two-year public institutions, and two-year private institutions. A shapefile from the same source containing Maryland statistical neighborhoods was used to define Maryland state and County boundaries. 
We then did our own research to find which institutions had food pantries. This was found by searching individual school websites to find the presence of a food pantry, support of an outside pantry, and contact for the person responsible for the pantry. Once we had all this information, we made a list of all Maryland institutions, their pantry status, and a contact for any active pantries a school might have. This list was then able to be appended to our shapefiles for further analysis. With these data we created maps using ArcGIS to display a map showing all institutions classified by type, and a map showing only institutions with an active food pantry, and institutions that support an outside food pantry, also classified by type. We were then able to use simple statistics to find percentages of institutions that provide access to a food pantry. We continued our initial analysis by downloading shapefiles from Johns Hopkins Center for a Liveable Future that covered poverty-related issues within Maryland, so we could hopefully draw a connection between food insecurity and poverty trends within Maryland, and the availability of a food pantry for college students in and around those areas. 
The next step of our analysis involved surveying the operators of the food pantries around Maryland colleges to find information about how their operations have been affected by the coronavirus pandemic. Using the contacts found in our research step, we emailed 24 pantry heads, receiving responses from 10 of them. This was a survey sample and was therefore subject to response and non-response bias. The survey included questions relating to regular operation of the pantry, such as size of student body, volume of pantry use, and type of products available. It also included questions relating to COVID-19 impact, such as change in scale of operation and use, change of products available, and change of delivery methods for products. These data were then used to take simple statistics and create visualizations on the impacts the pandemic has had on Maryland school food pantries.

**OUTPUTS** 

MAP SERIES A:
Index all of the food pantries within Maryland Universities
Include what services they provide
Create a radius of reasonable walking/public transportation distance and what resources are within those areas.
Include their student intake and their current goals for the academic year, detailing their best practices and why it works for their pantry
Will probably have to do interviews of pantry heads unless that information is already available
*standardized surveys helping to categorize services 
This will help other food pantries with new methods or ideas for increased usage of their pantry.

Integrate other resources such as shelters, pantries, etc. in Maryland that are also available to students if they are not near their university.
Easier to illustrate and identify areas within Maryland that lack access to specific resources and what needs still must be met.
Create different maps based on the resources available. One map for Maryland Shelters, one for food pantries, clothing drives/pickup etc.
See which parts of Maryland are lacking in aid and what types of aid

Collect population data of UMBC students and which counties they live in/originate from.  (If possible)
Correlate that data to which counties have been most affected by COVID-19 through COVID spikes, job loss, loss of healthcare, population deaths, and population that has recovered from COVID to see long-term healthcare needs for those counties, within the college age group 18-24*. 
Possibly from that data we can then see how UMBC students specifically have been impacted by COVID and how their needs are changing.
Then we can do campaign based off of these statistics directly from campus that shows how UMBC students have been affected and the relief that Retrievers Essentials can provide them
