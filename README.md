# My Daily PDF

- consumer-facing news and productivity tool
- customized reports delivered via email 
- users define their report - each is unique!


## Packages

### React Web (`packages/client`) [DEMO MODE]

**REGISTER: single-page, multi-step signup form**
  - next button on Step 5 submits to mongoDb
    - one bson to User collection,
    - one bson to Reports collection,
  -  updates db:main/search/config.json
  - Step 6 shows report preview and Stripe buttons
  - (Stripe handles payment), returns to ACCOUNT pg

**ACCOUNT: [work in progress]**
  - edit user details
  - edit report details 
    - add report

**LOGIN**
 - once account is created, can log in to accts pg


## Express Server (`packages/server`)  
- connects React/MongoDb/Stripe

## Services (`services-*`)

**WEB-SCRAPER**
  - retrieves web data based on lists in search/config.json
  - uses both APIs and Selenium
  - stores data to Mongo

**REPORT-TO-PRINTABLE**
  - after data is gathered for day...
  - for each client, each report...
  - use report settings/input to lookup updated data from Mongo
  - save as Printable.json that can be looped by Handlebars

**PRINTER**
  - accepts Printable.json, passes through Handlebars
  - output PDF

**SENDER**
  - gathers PDFs for each client 
  - sends as email attachment
  - resets PRINT/SEND cycle

**TIMER**
  - runs the scraper script once per day


** BACKUP TEST 04-88-2024 v2 **