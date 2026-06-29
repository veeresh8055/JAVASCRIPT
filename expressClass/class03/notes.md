# Node js 
 ```
 nodejs is a opensource , cross platform and the run timme environment for the js to run the js without the browser 

```
### characteresticts of node js 
* by using node js we can build high scalable application
* we can create our own server 
*  we can develop real time chat application 
* it provides high speed and performance 
 
 # os module 
 ```
 os module is a built in module of nodejs 
 which we used to communicate with the operating system 
 we can get the information like userInfo , release date and architecture of  os etc 

 methods of os module 

 const os = require('os');

 os.userInfo() // user information 
 os.cpus()  // cpu information 
 os.release() // release details 
 os.totalmem() // total memory 
 os.freemem() // free memory 
 os.arch() // architecture of os 
 etc 
 ```

 # url module 
 ```
 url module is a nodejs builtin module 
by using the url modle we can create parse and manipulate the urls 
and we can get the data of protocol , hostname port pathname quesies etc 

const url = require('url')

// new modern class for urls --> URL 
const url = new URL(' http://localhost:3000/login?username=veeresh&password=1234 ')

url.protocol 
url.href 
url.hostname
url.port 
url.search
url.searchParams

url.searchParams :-
   to get the data present inside this key we have to use methods like 
   1.get() 2.set() 3.hash() 4.delete() etc 
   url.searchParams.get('value')
   url.searchparams.set('oldVal' , "newValue")

```

# http module 
```
 hyper text transfer protocol 
 it is one of the nodejs built in module and we no need to  install this module we just import the module by givng the require('moduleName')

 http  is a stateless that means  it doesnt hold the data from the previous request it trate the every request as the new request 

 http is mainly use to create  a server 

 // creating a server using http 

 const http = require('http')

 http.createServer( (req,res)=>{
    res.end('server created by using http method ')
 })
.listen(3000 , (err) =>{
    console.log('server created in port 3000')
})

// routing 
const http = require('http')

htt.createServer( (req,res)=>{
    if(req.url=="/" || req.url=="/home"){
        res.end('Home page ')
    }else if(req.url == '/about' ){
        res.end('About Page ')
    }else if(req.url=="/login"){
        res.end('Login Page ')
    }else{
        res.end('Page Not Found')
    }
})

```
# path module 
```
path modle is a nodejs built in module
we use path module to work with fs and folders to join get the path 

like joining the folder and files 
getting the directory name filename 

const path = require(''path)
__dirname    --> current directory absolute path
__filename   --> current file absolute path 

// base name of file and folder 
path.basename(__dirname)
path.basename(__filename)

// extension name of folder and file 
path.extname(__dirname)
path.extname(__filename)

//  joining the folders  --> relative path 
path.join('node' , 'express' , 'path.js')
// here if we give  / for getting the relative path its not effect it 
path.join('node','/express','path.js')

// resolve
path.resolve('')



 # Express 
 * express is a nodejs webframework 
 * 