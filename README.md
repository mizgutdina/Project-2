## Project 2 | Team 4 | Chicago Beach Conditions

---

**City of Chicago Data**

**Source Data:**

* Selected a dataset, available in json format through an API call that pulls data from a City of Chicago model that predict E. coli levels by beach.
* [City of Chicago Data Portal: Beach E. coli Predictions](https://data.cityofchicago.org/Parks-Recreation/Beach-E-coli-Predictions/xvsz-3xcj)
* [Chicago API, powered by Socrata](https://dev.socrata.com/foundry/data.cityofchicago.org/xvsz-3xcj)

![Chicago Data Portal | Beach E. coli Predictions](screenshots/predictions_dataset.png)

---

**MongoDB & Data Table**

* Database using MongoDB and Python (led by Diane)
  * Features: Multiple collections for each available dataset
  * Challenges: Using the collections and variables in JavaScript, ended up creating local json files and locations to use in chart and map.
  * Successes:
    ![MongoDB](screenshots/data_table.png)
  *

---

#### **Plotly & Dashboard**

* Chart using Plotly and JavaScript (led by Alex)
  * Features: Dropdown filter by beach; Highlights when bacteria counts reach dangerous levels; Displays current weather
  * Challenges: Incorporating dropdown menu to automatically update chart; trimming data down to reasonable size to plot
  * Successes: Flexible plots that fit well on the web page; Filtering JSON arrays using forEach;  
    ![Plotly Dashboard](screenshots/dashboard_weather_tooltip.png)

---

#### **Leaflet & Map**

* Map using Leaflet and JavaScript (led by Medina)
  * *Features: Markers for each beach with popup Info*
  * Challenges:
  * Successes:
    ![Leaflet Map](screenshots/map.png)

---

**HTML Design**

* Website Design using HTML and JavaScript (created by Nabiha)
  * *Features: Bootstrap
  * Challenges: Navbar, integrating js files 
  * Successes: Design
    ![Website Design](screenshots/website.png)
