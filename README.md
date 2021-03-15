# angular-tutorial
# Angular 8 - Release may 8(Update Angular Framework, CLI and material)
1. Differential Loading - Aiutomatically make your angular apps more performs
2. Two Bundles are created - a. One bundle for ES6(Support new browser) b. another bundle for ES5(Support old browser)
3. Bundles size are reduced 7% to 20% based on modern java script features
4. Dynamic load for lazy loads
5. IVV -Rendering Engine - Translating template and component into HTML and jvav script that the brpwser can iunderstand (Still not a stable this feature)
6. ng new project name --enable-ivy
7. Bazel - Build tool - enable in next release
# Breaking Changes in angular 8
1. Should be used Typescript version 3.4
2. Node version 12 and above
3. Deprecated HttpModule and Http Service, we use HttpClientModule and HttpService

# update angular cli
1. npm uninstall -g @angular/cli
2. npm cache verify
3. npm install -g @angular/cli@latest


# Angular 6.0.0
Synchronize the major version number of
# 1. Angular Framework

1. animation related code import from <- @angular/core - before angular 6
2. animation related code import from <- @angular/animation - in angular 6
3. removed <template> tag - we use in angular <ng-template>tage
4 Service Class - > define service class in providers in app.module and give Injectable() in service class - Angular 5
                 - > remove service class in providers in app.module and give Injectable({providedIn:'root'}) in service class - Angular 6
5. ngModelChange

# 2. Angular CLI
1. ng update<package>
2. ng add @anggular/material and add new capability
3. Its support multiple project within single page

# 3. Angular Material + CDK
1. ng generate @angular/material:material-nav --name=my-nav ----->generate new navication menu page
2. ng generate @angular/material:material-dashboard --name=my-dashboard ----->generate new dashboard
3. ng generate @angular/material:material-table --name=my-table ----->generate new table with apgination

# Angular 5 to Angular 6 Steps
update.angular.io
1. install latest version node js
2. npm install -g @angular/cli
3. npm install @angular/cli
4. npm update @angular/cli
5. npm update @angular/code
6. npm update @angular/material


# History
2010 - Angular Js,
2016 - Angular Version 2
2016 DEC- Angular Version 4
2017 NOV - Angular Version 5

# What and Why ?
Framework to build client side application
Great for SPAs

# Modular Approach
Re-useable code
Developemnet Quicker and Easier
Unit Testable
Google + Microsoft


# Installion Steps
1. Node
2. NPM
3. Angular CLI
4. Test Editor like VS Code

# Path setting
C:\Users\admin\AppData\Roaming\npm

#Commands:
1. node -v
2. npm -v
3. npm install -g @angular/cli
4. ng new project-name
5. cd project-name
6. ng serve
7. ng -v
8. ng generate component new-component-name
9. if ng command is not workinf, run the following commabd 
10. Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
11. ng analytics project off
12. ng g s EmployeeService
