var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="python-dateutil.data";var REMOTE_PACKAGE_BASE="python-dateutil.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","dateutil",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/dateutil","parser",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/dateutil","tz",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/dateutil","zoneinfo",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","python_dateutil-2.8.2-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:326007,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1372,2834,4242,5632,6601,7642,8492,9576,10170,11108,11869,12474,13260,14092,15488,16646,17676,18669,19851,21197,22280,23464,24652,25425,26345,27097,27942,28941,30001,30946,31676,32516,33335,34550,35883,36876,37728,38683,39683,40626,41781,42810,43855,44945,45940,46694,47700,49022,50442,51919,52976,53752,54877,56025,56994,57911,59046,59932,61103,62309,63469,64312,65271,66321,67314,68146,69297,70541,71693,72813,73996,75244,76484,77373,78156,79019,79967,81403,82610,83689,84724,85850,87014,88249,89568,90776,92006,92965,94163,95194,96329,97711,98893,100127,101230,102147,103381,104744,105837,106996,108132,109180,110294,111478,112566,113811,114873,115951,117388,118398,119576,120844,121982,122782,123540,124652,125932,126915,127702,128803,130182,131591,133013,134140,135308,136630,137967,139155,140561,141907,143174,145009,147062,149110,151153,153206,155194,157246,159294,161342,163389,165444,167497,169554,171602,173650,175707,177755,179803,181851,183899,185947,187995,190043,192091,194139,196187,198239,200287,202335,204383,206431,208485,210531,212579,214627,216675,218723,220771,222819,224875,226927,228983,231039,233087,235135,237183,239231,241279,243327,245384,247432,249480,251528,253576,255627,257680,259728,261783,263694,265742,267794,269842,271898,273953,276004,278059,280107,282150,284198,286246,288302,290350,292398,294455,296503,298551,300599,302655,304703,306760,308815,310863,312919,314967,317015,318691,320190,321096,322497,323956,325364],sizes:[1372,1462,1408,1390,969,1041,850,1084,594,938,761,605,786,832,1396,1158,1030,993,1182,1346,1083,1184,1188,773,920,752,845,999,1060,945,730,840,819,1215,1333,993,852,955,1e3,943,1155,1029,1045,1090,995,754,1006,1322,1420,1477,1057,776,1125,1148,969,917,1135,886,1171,1206,1160,843,959,1050,993,832,1151,1244,1152,1120,1183,1248,1240,889,783,863,948,1436,1207,1079,1035,1126,1164,1235,1319,1208,1230,959,1198,1031,1135,1382,1182,1234,1103,917,1234,1363,1093,1159,1136,1048,1114,1184,1088,1245,1062,1078,1437,1010,1178,1268,1138,800,758,1112,1280,983,787,1101,1379,1409,1422,1127,1168,1322,1337,1188,1406,1346,1267,1835,2053,2048,2043,2053,1988,2052,2048,2048,2047,2055,2053,2057,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2052,2048,2048,2048,2048,2054,2046,2048,2048,2048,2048,2048,2048,2056,2052,2056,2056,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2051,2053,2048,2055,1911,2048,2052,2048,2056,2055,2051,2055,2048,2043,2048,2048,2056,2048,2048,2057,2048,2048,2048,2056,2048,2057,2055,2048,2056,2048,2048,1676,1499,906,1401,1459,1408,643],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_python-dateutil.data")}Module["addRunDependency"]("datafile_python-dateutil.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/dateutil/__init__.py",start:0,end:222,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/_common.py",start:222,end:1154,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/_version.py",start:1154,end:1296,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/easter.py",start:1296,end:3974,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/relativedelta.py",start:3974,end:28878,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/rrule.py",start:28878,end:95434,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/tzwin.py",start:95434,end:95493,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/utils.py",start:95493,end:97458,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/parser/__init__.py",start:97458,end:99224,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/parser/_parser.py",start:99224,end:158020,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/parser/isoparser.py",start:158020,end:171267,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/tz/__init__.py",start:171267,end:171711,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/tz/_common.py",start:171711,end:184688,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/tz/_factories.py",start:184688,end:187257,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/tz/tz.py",start:187257,end:250114,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/tz/win.py",start:250114,end:263049,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/zoneinfo/__init__.py",start:263049,end:268938,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/zoneinfo/dateutil-zoneinfo.tar.gz",start:268938,end:443332,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/zoneinfo/rebuild.py",start:443332,end:445724,audio:0},{filename:"/lib/python3.9/site-packages/python_dateutil-2.8.2-py3.9.egg-info/PKG-INFO",start:445724,end:453915,audio:0},{filename:"/lib/python3.9/site-packages/python_dateutil-2.8.2-py3.9.egg-info/SOURCES.txt",start:453915,end:456072,audio:0},{filename:"/lib/python3.9/site-packages/python_dateutil-2.8.2-py3.9.egg-info/dependency_links.txt",start:456072,end:456073,audio:0},{filename:"/lib/python3.9/site-packages/python_dateutil-2.8.2-py3.9.egg-info/requires.txt",start:456073,end:456082,audio:0},{filename:"/lib/python3.9/site-packages/python_dateutil-2.8.2-py3.9.egg-info/top_level.txt",start:456082,end:456091,audio:0},{filename:"/lib/python3.9/site-packages/python_dateutil-2.8.2-py3.9.egg-info/zip-safe",start:456091,end:456092,audio:0}],remote_package_size:330103,package_uuid:"f9f17b9c-9f84-43dc-b02f-5124109485dd"})})();