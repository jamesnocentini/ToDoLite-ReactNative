## ToDo Lite for React Native

A shared todo app to show how to use Couchbase Lite in a React Native app and sync the documents with Sync Gateway.

![](http://cl.ly/image/3Y3u3j0g3e3o/screenshot.png)

## Building & Running The Demo App

1. Clone or download this repository.
2. Download the Couchbase Lite iOS SDK from [here](http://www.couchbase.com/nosql-databases/downloads#Couchbase\_Mobile) and drag `CouchbaseLite.framework` and `CouchbaseLiteListener.framework` in the `Frameworks` folder of this repository.
3. Install the React Native command line tools:

	```bash
	npm install -g react-native-cli
	```

4. Install the Node.js modules:

	```bash
	npm install
	```

5. Open `todolite.xcodeproj` in Xcode and hit run.

## Setting up Sync Gateway

Download Sync Gateway and unzip the file: 

> http://www.couchbase.com/nosql-databases/downloads#Couchbase\_Mobile

Start Sync Gateway with the config file in the root of the repository:

	$ ~/Downloads/couchbase-sync-gateway/bin/sync_gateway

Open the Admin Dashboard to monitor the documents that were saved to Sync Gateway.

	http://localhost:4985/_admin/