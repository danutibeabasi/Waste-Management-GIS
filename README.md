# Waste Management WebGIS Application

A comprehensive web-based geographic information system (WebGIS) for waste management built using MapServer, PostgreSQL with PostGIS extension, Node.js, Express.js, Pug, and OpenLayers.

## Prerequisites

Ensure you have the following software installed:

- MapServer
- PostgreSQL (with PostGIS extension)
- Node.js and npm
- OpenLayers (usually as an npm package)

## Installation and Setup

### 1. Clone the Repository

For both Windows and Xubuntu:

```
git clone https://github.com/danutibeabasi/Waste-Management-GIS.git
cd Waste-Management-GIS
```
### 2. Database Setup

Xubuntu:

2.1. Install PostgreSQL and PostGIS:
```
sudo apt-get update
sudo apt-get install postgresql postgis
```
Windows:

2.1. Install PostgreSQL with the PostGIS extension using the official installer available at the [PostgreSQL download page](https://www.postgresql.org/download/windows/).

2.2. Restore the provided database dump (both systems):

Navigate to the directory where the database dumps are located in the repository:

```
cd path_to_directory_with_database_dumps_in_repository/
```
Restore the databases:

```
pg_restore -U postgres -h localhost -p 5432 -d IntegratedWasteManagementDB MAIN-IntegratedWasteManagementDB.sql
pg_restore -U postgres -h localhost -p 5432 -d wastemanagementdb wastemanagementdb.sql
```
### 3. MapServer Configuration
Ensure MapServer is correctly installed and configured. Your MapServer configuration files should define the layers and other settings for the GIS. Refer to the official documentation for installation on [Windows](https://mapserver.org/installation/win32.html) and [Linux (Xubuntu)](https://mapserver.org/installation/unix.html).

### 4. Node.js Application Setup
4.1. Install the required Node.js packages:

```
npm install
```
### 5. Running the Application
Start the Node.js server:
```
npm start
```
Your application should now be running at http://localhost:3000/

## Contributing
For contributions, please create a new branch, make your updates, and submit a pull request.


## MIT License

Copyright (c) 2023 Dan utibeabasi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
