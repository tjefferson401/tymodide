var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="pyparsing.data";var REMOTE_PACKAGE_BASE="pyparsing.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","pyparsing",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/pyparsing","diagram",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","pyparsing-3.0.6-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:208358,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1619,3058,4156,5239,6486,7829,9007,10356,11025,11966,13230,14296,15655,16911,18511,19701,20862,22085,23382,24540,25654,26887,28154,29433,30878,31944,33223,34241,35081,36114,37204,38325,39644,40936,42310,43508,44498,45782,47065,48273,49054,50042,50773,51344,52571,53577,54582,55763,56943,58202,59382,60279,61492,62551,63821,64886,66031,67257,67944,69127,70258,71404,72786,73738,74457,75381,76754,77905,78934,79997,80877,81917,83211,84420,85547,86603,87524,88565,89415,90377,91526,92543,93627,94785,95849,96965,98021,99069,100258,101148,102249,103205,104208,105392,106609,107956,109147,110574,111627,112812,114090,115339,116590,117658,119069,120093,121405,122379,123398,124661,125852,127148,128294,129534,130848,132126,133409,134778,135681,136888,138193,139546,140860,141949,143364,144613,145950,147338,148669,149962,150945,152014,153320,154666,155952,157114,158250,159450,160609,161986,163175,164269,165080,166239,167336,168346,169516,170628,171881,172996,173759,174971,176194,177041,177881,178926,179955,181026,182154,183293,184206,184994,185785,186901,187956,188902,190121,191573,192890,194296,195506,196702,197842,198959,200251,201360,202277,203446,204710,206143,207277,208272],sizes:[1619,1439,1098,1083,1247,1343,1178,1349,669,941,1264,1066,1359,1256,1600,1190,1161,1223,1297,1158,1114,1233,1267,1279,1445,1066,1279,1018,840,1033,1090,1121,1319,1292,1374,1198,990,1284,1283,1208,781,988,731,571,1227,1006,1005,1181,1180,1259,1180,897,1213,1059,1270,1065,1145,1226,687,1183,1131,1146,1382,952,719,924,1373,1151,1029,1063,880,1040,1294,1209,1127,1056,921,1041,850,962,1149,1017,1084,1158,1064,1116,1056,1048,1189,890,1101,956,1003,1184,1217,1347,1191,1427,1053,1185,1278,1249,1251,1068,1411,1024,1312,974,1019,1263,1191,1296,1146,1240,1314,1278,1283,1369,903,1207,1305,1353,1314,1089,1415,1249,1337,1388,1331,1293,983,1069,1306,1346,1286,1162,1136,1200,1159,1377,1189,1094,811,1159,1097,1010,1170,1112,1253,1115,763,1212,1223,847,840,1045,1029,1071,1128,1139,913,788,791,1116,1055,946,1219,1452,1317,1406,1210,1196,1140,1117,1292,1109,917,1169,1264,1433,1134,995,86],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_pyparsing.data")}Module["addRunDependency"]("datafile_pyparsing.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/pyparsing/__init__.py",start:0,end:9095,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing/actions.py",start:9095,end:15524,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing/common.py",start:15524,end:28460,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing/core.py",start:28460,end:239187,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing/exceptions.py",start:239187,end:248217,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing/helpers.py",start:248217,end:286098,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing/results.py",start:286098,end:311393,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing/testing.py",start:311393,end:324781,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing/unicode.py",start:324781,end:335160,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing/util.py",start:335160,end:341894,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing/diagram/__init__.py",start:341894,end:364030,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing/diagram/template.jinja2",start:364030,end:364619,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing-3.0.6-py3.9.egg-info/PKG-INFO",start:364619,end:368711,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing-3.0.6-py3.9.egg-info/SOURCES.txt",start:368711,end:372805,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing-3.0.6-py3.9.egg-info/dependency_links.txt",start:372805,end:372806,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing-3.0.6-py3.9.egg-info/requires.txt",start:372806,end:372843,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing-3.0.6-py3.9.egg-info/top_level.txt",start:372843,end:372853,audio:0}],remote_package_size:212454,package_uuid:"47406a00-13ec-4dfd-ab57-ca7f8a369fec"})})();