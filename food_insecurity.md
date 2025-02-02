# Food Insecurity on Maryland College Campuses

## **INTRODUCTION** 
 
  In collaboration with the UMBC food pantry, Retriever Essentials, I am conducting geospatial analyses and generating an online webmap that assesses the pervasive issue of food insecurity among Maryland college students to recommend how institutional food pantries can implement operational best practices to effectively meet student need during the COVID-19 pandemic. Current research states that approximately one-third of all students at two- and four- year institutions face food and housing insecurity while earning a degree. Through geospatial analysis on food and poverty rates in Maryland, my research illustrates the connection seen between food insecurity rates to the number of institutions, based on their location and institution type, are most likely to provide food resources to their students. We identified campus pantry points-of-contact, and conducted a semi-structured survey to understand campus pantry operations and services in more detail, along with assessing how analyses on how COVID-19 has impacted a pantry’s ability to provide the resources needed by their students. Retriever Essentials and I plan to utilize the data as part of a comprehensive effort to assess the availability of food and basic needs resources on Maryland college campuses, and what campuses can do to better connect students with these resources.

## DATA 

  The data below are series of shapefiles containing Maryland's higher education institutions. This will provide the preliminary base for research on which institutions provided a food pantry or food resources to their students, and then conducting further analysis on the operations of individual food pantries among Maryland colleges and universities. Through an impact survey, I was able to gain data representative of approximately 30% of all Maryland institutions with a food pantry. Data includes the best operational practices for each site, how many clients they serve, how they quantify food and time donated, and how COVID-19 impacted their ability to operate as normal, and continue servicing their communities. The continuation of my data and map analyses will include comparisons of varying economic factors within the state, and how as a result, each region has to service and operate in different ways to meet the needs of their clients.

[ArcGIS Online, MD iMAP: Maryland Education Facilities - Higher Education (Public Two Year) 2019](https://opendata.maryland.gov/Education/MD-iMAP-Maryland-Education-Facilities-Higher-Educa/bwdz-rgcj)

[ArcGIS Online, MD iMAP: Maryland Education Facilities - Higher Education (Private Four Year), 2019](https://opendata.maryland.gov/Education/MD-iMAP-Maryland-Education-Facilities-Higher-Educa/ejcy-gama)

[ArcGIS Online, MD iMAP: Maryland Education Facilities - Higher Education (Private Two Year), 2019](https://opendata.maryland.gov/Education/MD-iMAP-Maryland-Education-Facilities-Higher-Educa/hhju-9ctd)

[ArcGIS Online, MD iMAP: Maryland Education Facilities - Higher Education (Public Four Year), 2019](https://opendata.maryland.gov/Education/MD-iMAP-Maryland-Education-Facilities-Higher-Educa/p733-7wzs)

[Johns Hopkins University; Center for a Livable Future, % Food Insecure 2017](https://data-clf.hub.arcgis.com/datasets/1d070188731c4e1eba4eb486619edfd1_449?geometry=-80.757%2C37.310%2C-73.780%2C40.306)

## METHODS & TRANSFORMATIONS

Methods for completing this study involved secondary data collection of existing datasets and research on institutions in MD.  Working with three peers, primary data was collected on college institutions in Maryland to find if they did have a pantry, and if so finding a point of contact and resource information for  those food pantries. I then created a survey that gathered information on pantry best practices, which are the primary and “preferred” methods that individual food pantries utilize to operate,and the impacts of COVID-19 on their pantry. An initial analysis of the primary data collected was done to create a statistical breakdown of the institution types surveyed. Geospatial analysis was then conducted, a form of data analysis that maps data through the combination of geographic data to spatial, temporal, or demographic data. The text to the right lists a few of the basic operations and steps it took to take the original MD institution datasets, or shapefiles as they are referred to in GIS, and combining and updating them to reflect the current accredited colleges and universities in md, along with adding the primary data collected on food pantry sites. The geospatial analysis portion of this project is still ongoing. We then completed the survey analysis, creating a series of graphics and statistical analysis that illustrate the services provided by food pantries, and the impacts of COVID-19 on their operations. 

* Convert downloaded datasets from MD iMAP into CSV layer through Export
* Combine all institution types in Excel, updating outdated college list and ensuring the list is specific to colleges and universities.
* Append data food pantry availability on campus and resource websites to CSV sheet.
* Add updated CSV to QGIS, exporting it to a shapefile
* From shapefile points, select by attributes to create maps specific to type of insitution
* Field Calculator for statistical analyses on percentages and statistical analysis

## ANALYSIS

Data collection began in Fall 2020, with established shapefiles of Maryland institutions found from the Maryland open data portal. Shapefiles included four-year public institutions, four-year private institutions, two-year public institutions, and two-year private institutions. A shapefile from the same source containing Maryland statistical neighborhoods was used to define Maryland state and County boundaries. This allowed us to have an initial list of universities and colleges within Maryland to research.

We conducted extensive online research by taking the identified institutions and researching individual school websites to find the presence of a food pantry, support of an outside pantry, and contact for the person responsible for the pantry. Once we had this information, we updated the list of all Maryland institutions, their pantry status, and a contact for any active pantries a school might have. This list was then able to be appended to our shapefiles for further analysis. With this data we created maps using QGIS to display all Maryland institutions classified by type; those being public or private, and four-year or two-year institutions. Maps were also produced to display only institutions with an active food pantry, or institutions that support an outside food pantry, further classified by type in the results section. We were then able to use simple statistics to find percentages of institutions that provide access to a food pantry. We continued our initial analysis by downloading shapefiles from Johns Hopkins Center for a Liveable Future that covered poverty-related issues within Maryland, so we could hopefully draw a connection between food insecurity and poverty trends within Maryland, and the coorelation between the availability of a food pantry for college students in and around those areas. 

The next step of our analysis involved surveying the operators of the food pantries around Maryland colleges to find information about how their operations have been affected by the coronavirus pandemic. Using the contacts found in our research step, we emailed a survey developed specifically to understand the day to day operations pre- and post-COVID in order to understand how operations were before and after the pandemic. In total, out of the 33 insitutions, we received 14 survey responses and as was an optional survey, it is therefore subject to response and non-response bias. This data is what we will be using to conduct further analysis on best practices for food pantries, series of maps detailing the connection between food insecurity and college, along with an online, interactive map that students will be able to use to quickly access their school's food resources and pantry information. 

## RESEARCH OUTPUTS

### Colleges and Institutions in Maryland: How does college intersect with food insecurity?

  When considering institution type, and how to best categorize the colleges to better understand the connections between being a student and being food insecure, we found it best to consider schools in two aspects: are they a four-year or two-year institution, and are they private or public? These categories are important to consider, as certain institutions will better service and be accessible to different types of populations. According to the [National Center for Education Statistics](https://nces.ed.gov/fastfacts/display.asp?id=76), in the United States between the 2007-08 and 2017-18 educational years, prices for undergraduate degrees at public institutions rose by 31% with an average cost of $20,000 a year, and cost of tuition rose 23% with an average cost of $40,000 a year. Another study done by [Georgetown University](https://cew.georgetown.edu/cew-reports/americas-divided-recovery/) found that roughly 65% of people in the workforce have obtained some postsecondary education, with Bachelor's degree holders earning 57% of all wages. People choose to get degrees because of better wages, benefits, and increased opportunities for employment. However, the cost is great, especially when moving beyond two-year, public universities where the average cost of tuition is approximately $5,000 a year. 
  
  The cost of tuition often dictates which type of student, depending on their wealth and resources, will be able to afford pursuing a postsecondary education. Considering how various socioeconomic factors play into the services and aid that institutions provide their students is crucial when discussing how stress from college courses and paying for tuition intersect with stressors for those experiencing poverty or food insecurity and the effects it can have on a person's physical, emotional, and mental health.   
 
 ### Colleges and Institutions in Maryland: Map Breakdown  
 
 There are 53 institutions and colleges represented in these maps, although several have various campuses and may be displayed in the map as well. There are 13 public, four-year universities, 23 private, four-year universities, 16 two-year public colleges, and one two-year private college.

<img src="images/Food_Insecurity/publicvprivate_urcad.png"/>

 There are 13 public, four-year universities, 23 private, four-year universities, 16 two-year public colleges, and one two-year private college. Private universities and colleges make up 45% of all MD higher education institutions, with public schools making up the other 55%. 

<img src="images/Food_Insecurity/2yearv4year_urcad.png"/>

  32% of institutions are two-year colleges, with four-year institutions making up the other 68%. Further analysis shows that 2% of institutions are both private, and two-year institutions, 30% are public, two-year institutions, 43% are private, four-year institutions, and 25% are public, four-year institutions. 

<img src="images/Food_Insecurity/foodpantry_urcad.png"/>

  The map above illustrates which campuses provide food pantries or food resources to their students and staff. Approximately 62% of all Maryland institutions provide a food pantry, while 38% of all institutions do not currently provide a food pantry. All sixteen public, 2-year institutions provided a food pantry, making up 49% of all institutions with food pantries. Public, four-year universities make up one third of all universities with food pantries at 33%, and private, four-year universities make up 18%. Currently there are no private, two-year institutions that provide a food pantry. 


### Colleges with Food Pantries vs. Food Insecurity in Maryland

This allows us to quantify the relationship that exists between the location of an institution and the demographics of the people nearest to them who are likely to attend those institutions and may be within the population in that county experiencing food insecurity. 

<img src="images/Food_Insecurity/Presentation1.png"/>

### Interactive WebMap

To aid graduate and undergraduate college students in MD, I have created an interactive, online webmap that allows students to search for their institution, and if it does have a pantry, clicking on the name will highlight the symbol representing their institution. once the symbol is selected a pop-up box will appear, Listing the institution name, the name of Food Pantry Program, and the website link to the food pantry site. This site is also still being developed, and additional information regarding who has access to the pantry, and how clients gain access will be provided, so clients can easily identify what resources are available to them on their campus, and how to access it. The link is listed in the comment section so feel free to explore and share the site. 

### **[Colleges with Food Pantries and Food Resources](https://umbc-ges.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=413ce4d02e464320b20dcee1798c0879)**

[<img src="images/Food_Insecurity/onlinemap.JPG"/>](https://umbc-ges.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=413ce4d02e464320b20dcee1798c0879)
   
## Conclusions & Future Steps

Food insecurity among college students, while an incredibly common experience, was rarely discussed in broader circles until recently. With the rising rates of overall food insecurity, increasing disparities in wealth and income between gender, race, and ethinicities, and systematic forces actively working to oppress already marginalized communities it is crucial to see how those socioeconomig factors then tie into who has access to higher education. Considering how crucial a postsecondary education in current society is, and Bachelor's degrees slowly but surely becoming the bare minimum for someone in the work force, it is incredibly disparaging to see the tuition prices climb year after year, making it less and less possible for people trapped in cycles of generational and systemic forces to gain access to educational and vocational spaces which continues the cycle of oppression and exploitation. 

The best way to counteract these oppressive forces is to give power and agency directly back to the people, to provide them with the basic needs that every human deserves to have, in a nation that waste thousands upon thousands of food a year while tens of millions are in poverty. This work is meant to be a resource for students and clients of food pantries with the interactive webmap, but also as a resource for food pantry directors and organizers to find other pantries to connect to, have data to present to illustrate the importance of the work, and how difficult it is to sustain without continued support. 

My extended research project includes a survey where I hear from pantry directors and how their pantries have had to respond to the COVID-19 Pandemic and all of the restrictions it brought on. Despite the challenges, most pantries continue to run and have adopted several methods for safely distributing goods to clients. Several of these pantries provide other programs to support the student in all aspects of their health & well being, and ensure they connect to longstanding support networks along with meeting some of their basic needs.

The main point I hope to make with this work is to stress the importance of community in times of hurt and pain. Nobody deserves to go hungry because they are trying to get an education, or for any reason, period. 
   
   
### **Want to see how I did it all? [Check this page out for a detailed breakdown.](https://sarahqj9.github.io/project2/index)**










For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).
