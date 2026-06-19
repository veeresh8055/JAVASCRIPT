## modules 
### 2.third party modules 
* thirtd party odules are nothing but the modules which are not present in node js by default
* this modules are also called as external modules 
* if we need work or use with the third party modules then we must install them by using ' npm '

### command to install 
 ```js
 npm i/install moduleName

//example 
npm i mongodb 
npm i express
 ```

### npm 
* npm stands for node package manager according to node js 
* it is one of the old software directory  
* it is an opensource and free of cost 
* it contains almost 3.1 million packages of node js 

* note :- In the current industry , npm no longer refers to node package manager because nowadays it is managing multiple packages of different technologies 

### package.json
* this file is like heart of every nodejs project 
* it acts like manifest file of the project 
* it contains the meta data of the project 
* it is essential to understand package.json file to work with node js 
* it will automatically created the movement when we install third party modules along with node modules folder 

#### ways to create package.json 
* 1. Implicit way :- npm init -y [y -> saying yes to all the questions ] 
   * in this way the complete information of the project will taken automatically form thhe current folder like package name description , author , keywords etc.. 
* 2. Explicit way :- npm init 
   * in explicit way all the details of the project like name, description keywords etc.. will be provided manually by the programmer/user 
   
### 3.BuiltIn modules 
* built in modules are nothing but the modules which are present in nodejs by default 
* these modules are also called as core modules 
* these modules are loadded automatically  when the node js starts process 
* these are already present in nodejs so need to install them separately and we just have to import them by using " require('moduleName' ) "
* ex: fs , os , http , path 

### OS ( operating system )
* it is one of the built in modules 
* it is mainly used to know te complete information of operaign system 
```js 
const os = require('os')

os
os.cpus() (cpu cores)
os.freemem()/(1024/1024/1024)
os.totalmem()/(1024*1024*1024)
os.userInfo()
os.type
os.release()
os.version()

```