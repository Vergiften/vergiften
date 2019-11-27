(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <h1>毕业设计管理系统demo版</h1><hr width=\"200\"><br>\n</header>\n<div>\n  <nav>\n    <a routerLink='/college' >学校管理</a>\n    <a routerLink='/teacher'>教师管理</a>\n    <a routerLink='/department'>专业管理</a>\n    <a routerLink='/degree'>学位管理</a>\n    <a routerLink='/profTitle'>职位管理</a>\n  </nav>\n  <section><router-outlet></router-outlet></section>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/degree/add.component.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/degree/add.component.html ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>添加新学位</h2>\n<div>\n  <span>请输入以下信息： </span><br>\n  <label>学位编号:</label> <input #degreeNo /><br>\n  <label>学位名称:</label> <input #degreeName /><br>\n  <label>备注:</label> <textarea #degreeRemarks></textarea>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(degreeName.value,degreeNo.value,degreeRemarks.value)\">保存</button>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/degree/degree.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/degree/degree.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/addDegree\"><button > 添加学位</button></a>\n<table class=\"tablelist\">\n  <tr><th>序号</th><th>编号</th><th>学位名称</th><th>备注</th><th>操作</th></tr>\n  <tr *ngFor=\"let degree of degrees\" class=\"badge\">\n    <td>{{degree.id}}</td>\n    <td>{{degree.no}}</td>\n    <td>{{degree.description}}</td>\n    <td>{{degree.remarks}}</td>\n    <td> <a routerLink=\"/updateDegree/{{degree.id}}\"><button>修改</button></a><button (click)=\"delete(degree)\">删除</button></td>\n  </tr>\n</table>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/degree/update.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/degree/update.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"degree\">\n  <h2>学院信息修改</h2><br>\n  <div><span>序号: </span>{{degree.id}}</div>\n  <div>\n    <label>学院编号: </label> <input [(ngModel)]=\"degree.no\" /><br>\n    <label>学院名称: </label> <input [(ngModel)]=\"degree.description\"/><br>\n    <label>备 注: </label> <textarea [(ngModel)]=\"degree.remarks\" ></textarea>\n  </div>\n  <button (click)=\"goBack()\">返回</button>\n  <button (click)=\"save()\">保存</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/add-dep.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/department/add-dep.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h2>添加新专业</h2>\n  <span>请输入以下信息： </span><br>\n  <label>专业编号:</label> <input #depNo /><br>\n  <label>专业名称:</label> <input #depName /><br>\n  <label>所属学院:</label>\n  <select [(ngModel)]=\"school\" (change)=\" getDepSch(school.id)\" ><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let school of colleges\" [ngValue]=\"school\">{{school.description}}</option>\n  </select><br>\n  <label>备注:</label> <textarea #departmentRemarks></textarea>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(depName.value,depNo.value,this.school,departmentRemarks.value)\">保存</button>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/department.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/department/department.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/addDep\"><button > 添加专业</button></a>\n<table class=\"tablelist\">\n  <tr><th>序号</th><th>编号</th><th>专业名称</th><th>所属学院</th><th>备注</th><th>操作</th></tr>\n  <tr *ngFor=\"let department of departments\" class=\"badge\">\n    <td>{{department.id}}</td>\n    <td>{{department.no}}</td>\n    <td>{{department.description}}</td>\n    <td><label *ngIf=\"department.school\"> {{department.school.description}}</label></td>\n    <td>{{department.remarks}}</td>\n    <td> <a routerLink=\"/updateDep/{{department.id}}\"><button>修改</button></a><button (click)=\"delete(department)\">删除</button></td>\n  </tr>\n</table>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/update-dep.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/department/update-dep.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"department\">\n  <h2>修改专业</h2>\n  <span>所选专业信息： </span><br>\n  <label>专业编号:</label> <input  [(ngModel)]=\"department.no\" /><br>\n  <label>专业名称:</label> <input [(ngModel)]=\"department.description\" /><br>\n  <label>所属学院:</label>  <!--   ngModel用于将文本框与变量进行双向绑定。ngValue支持对象，value仅支持字符串-->\n  <select [(ngModel)]=\"department.school\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let school of colleges\" [ngValue]=\"school\">{{school.description}}</option>\n  </select><br>\n  <label class=\"remark\">备 注:</label> <textarea [(ngModel)]=\"department.remarks\" ></textarea>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save()\">保存</button>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profTitle/add-prof-title.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profTitle/add-prof-title.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>添加新职位</h2>\n<div>\n  <span>请输入以下信息： </span><br>\n  <label>职位编号:</label> <input #collegeNo /><br>\n  <label>职位名称:</label> <input #collegeName /><br>\n  <label>备注:</label> <textarea #collegeRemarks></textarea>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(collegeName.value,collegeNo.value,collegeRemarks.value)\">保存</button>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profTitle/prof-title.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profTitle/prof-title.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/addProfTitle\"><button > 添加职位</button></a>\n<table class=\"tablelist\">\n  <tr><th>序号</th><th>编号</th><th>职位名称</th><th>备注</th><th>操作</th></tr>\n  <tr *ngFor=\"let profTitle of profTitles\" class=\"badge\">\n    <td>{{profTitle.id}}</td>\n    <td>{{profTitle.no}}</td>\n    <td>{{profTitle.description}}</td>\n    <td>{{profTitle.remarks}}</td>\n    <td> <a routerLink=\"/updateProfTitle/{{profTitle.id}}\"><button>修改</button></a>\n      <button (click)=\"delete(profTitle)\">删除</button></td>\n  </tr>\n</table>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profTitle/update-prof-title.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profTitle/update-prof-title.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"profTitle\">\n  <h2>职位信息修改</h2><br>\n  <div><span>序号: </span>{{profTitle.id}}</div>\n  <div>\n    <label>职位编号: </label> <input [(ngModel)]=\"profTitle.no\" /><br>\n    <label>职位名称: </label> <input [(ngModel)]=\"profTitle.description\"/><br>\n    <label>备 注: </label> <textarea [(ngModel)]=\"profTitle.remarks\" ></textarea>\n  </div>\n  <button (click)=\"goBack()\">返回</button>\n  <button (click)=\"save()\">保存</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/school/add-college.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/school/add-college.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>添加新学院</h2>\n<div>\n  <span>请输入以下信息： </span><br>\n  <label>学院编号:</label> <input #collegeNo /><br>\n  <label>学院名称:</label> <input #collegeName /><br>\n  <label>备注:</label> <textarea #collegeRemarks></textarea>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(collegeName.value,collegeNo.value,collegeRemarks.value)\">保存</button>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/school/college.component.html": 
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/school/college.component.html ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/addCollege\"><button > 添加学院</button></a>\n<table class=\"tablelist\">\n  <tr><th>序号</th><th>编号</th><th>学院名称</th><th>备注</th><th>操作</th></tr>\n  <tr *ngFor=\"let college of colleges\" class=\"badge\">\n    <td>{{college.id}}</td>\n    <td>{{college.no}}</td>\n    <td>{{college.description}}</td>\n    <td>{{college.remarks}}</td>\n    <td> <a routerLink=\"/updateCollege/{{college.id}}\"><button>修改</button></a>\n      <button (click)=\"delete(college)\">删除</button></td>\n  </tr>\n</table>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/school/update-college.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/school/update-college.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"college\">\r\n  <h2>学院信息修改</h2><br>\r\n  <div><span>序号: </span>{{college.id}}</div>\r\n  <div>\r\n    <label>学院编号: </label> <input [(ngModel)]=college.no /><br>\r\n    <label>学院名称: </label> <input [(ngModel)]=college.description><br>\r\n    <label>备 注: </label> <textarea [(ngModel)]=college.remarks ></textarea>\r\n  </div>\r\n  <button (click)=\"goBack()\">返回</button>\r\n  <button (click)=\"save()\">保存</button>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/add-teacher.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/add-teacher.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h2>添加新教师</h2>\n  <label>教师编号:</label> <input #teacherNo />*<br>\n  <label>教师姓名:</label> <input #teacherName />*<br>\n  <label>当前职位:</label>\n  <select [(ngModel)]=\"title\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let title of titles\" [ngValue]=\"title\">{{title.description}}</option>\n  </select><br>\n  <label>最高学位:</label>\n  <select [(ngModel)]=\"degree\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let degree of degrees\" [ngValue]=\"degree\">{{degree.description}}</option>\n  </select><br>\n  <label>所属学院:</label>\n  <select [(ngModel)]=\"school\" (change)=\" getDepSch(school.id)\" ><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let school of schools\" [ngValue]=\"school\">{{school.description}}</option>\n  </select><br>\n  <label>所属专业:</label>\n  <select [(ngModel)]=\"department\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let department of departments\" [ngValue]=\"department\">{{department.description}}</option>\n  </select><br>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(teacherName.value,teacherNo.value,this.title,this.degree,this.department)\">保存</button>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/teacher.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/teacher.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/addTeacher\"><button > 添加老师</button></a>\n<table class=\"tablelist\">\n  <tr><th>序号</th><th>编号</th><th>教师姓名</th><th>职称</th><th>最高学位</th><th>所在专业</th><th>操作</th></tr>\n  <tr *ngFor=\"let teacher of teachers\" class=\"badge\">\n    <td>{{teacher.id}}</td>\n    <td>{{teacher.no}}</td>\n    <td>{{teacher.name}}</td>\n    <td><label *ngIf=\"teacher.title\"> {{teacher.title.description}}</label></td>\n    <td><label *ngIf=\"teacher.degree\"> {{teacher.degree.description}}</label></td>\n    <td><label *ngIf=\"teacher.department\"> {{teacher.department.description}}</label></td>\n    <td> <a routerLink=\"/updateTeacher/{{teacher.id}}\"><button>修改</button></a><button (click)=\"delete(teacher)\">删除</button></td>\n  </tr>\n</table>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/update-teacher.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/update-teacher.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"teacher\">\n  <h2>修改教师</h2>\n  <label>教师编号:</label> <input [(ngModel)]=teacher.no /><br>\n  <label>教师姓名:</label> <input [(ngModel)]=teacher.name /><br>\n  <label>当前职称:</label>\n  <select [(ngModel)]=\"teacher.title\" [compareWith]=\"compareFn\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let title of titles\" [ngValue]=\"title\">{{title.description}}</option>\n  </select><br>\n  <label>最高学位:</label>\n  <select [(ngModel)]=\"teacher.degree\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let degree of degrees\" [ngValue]=\"degree\">{{degree.description}}</option>\n  </select><br>\n  <label>所属学院:</label>\n  <select [(ngModel)]=\"teacher.department.school\" [compareWith]=\"compareFn\" (change)=\"getDepSch(teacher.department.school.id)\">\n    <option *ngFor=\"let school of schools\" [ngValue]=\"school\">{{school.description}}</option>\n  </select><br>\n  <label>所属专业:</label>\n  <select [(ngModel)]=\"teacher.department\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let department of departments\" [ngValue]=\"department\">{{department.description}}</option>\n  </select>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save()\">保存</button>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _school_add_college_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school/add-college.component */ "./src/app/school/add-college.component.ts");
            /* harmony import */ var _school_update_college_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./school/update-college.component */ "./src/app/school/update-college.component.ts");
            /* harmony import */ var _school_college_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./school/college.component */ "./src/app/school/college.component.ts");
            /* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/teacher/teacher.component.ts");
            /* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./department/department.component */ "./src/app/department/department.component.ts");
            /* harmony import */ var _department_add_dep_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./department/add-dep.component */ "./src/app/department/add-dep.component.ts");
            /* harmony import */ var _department_update_dep_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./department/update-dep.component */ "./src/app/department/update-dep.component.ts");
            /* harmony import */ var _teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teacher/add-teacher.component */ "./src/app/teacher/add-teacher.component.ts");
            /* harmony import */ var _degree_degree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./degree/degree.component */ "./src/app/degree/degree.component.ts");
            /* harmony import */ var _degree_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./degree/add.component */ "./src/app/degree/add.component.ts");
            /* harmony import */ var _degree_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./degree/update.component */ "./src/app/degree/update.component.ts");
            /* harmony import */ var _teacher_update_teacher_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./teacher/update-teacher.component */ "./src/app/teacher/update-teacher.component.ts");
            /* harmony import */ var _profTitle_prof_title_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profTitle/prof-title.component */ "./src/app/profTitle/prof-title.component.ts");
            /* harmony import */ var _profTitle_add_prof_title_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profTitle/add-prof-title.component */ "./src/app/profTitle/add-prof-title.component.ts");
            /* harmony import */ var _profTitle_update_prof_title_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profTitle/update-prof-title.component */ "./src/app/profTitle/update-prof-title.component.ts");
            var routes = [
                /*-----------------------college-------------------------------------------*/
                { path: '', redirectTo: '/college', pathMatch: 'full' },
                { path: 'college', component: _school_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"] },
                { path: 'addCollege', component: _school_add_college_component__WEBPACK_IMPORTED_MODULE_3__["AddCollegeComponent"] },
                { path: 'updateCollege/:id', component: _school_update_college_component__WEBPACK_IMPORTED_MODULE_4__["UpdateCollegeComponent"] },
                /*--------------------------department--------------------------------------*/
                { path: 'addDep', component: _department_add_dep_component__WEBPACK_IMPORTED_MODULE_8__["AddDepComponent"] },
                { path: 'department', component: _department_department_component__WEBPACK_IMPORTED_MODULE_7__["DepartmentComponent"] },
                { path: 'updateDep/:id', component: _department_update_dep_component__WEBPACK_IMPORTED_MODULE_9__["UpdateDepComponent"] },
                /*---------------------------teacher---------------------------------------*/
                { path: 'teacher', component: _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__["TeacherComponent"] },
                { path: 'addTeacher', component: _teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_10__["AddTeacherComponent"] },
                { path: 'updateTeacher/:id', component: _teacher_update_teacher_component__WEBPACK_IMPORTED_MODULE_14__["UpdateTeacherComponent"] },
                /*---------------------------degree----------------------------------------*/
                { path: 'degree', component: _degree_degree_component__WEBPACK_IMPORTED_MODULE_11__["DegreeComponent"] },
                { path: 'addDegree', component: _degree_add_component__WEBPACK_IMPORTED_MODULE_12__["AddComponent"] },
                { path: 'updateDegree/:id', component: _degree_update_component__WEBPACK_IMPORTED_MODULE_13__["UpdateComponent"] },
                /*-----------------------------profTitle-----------------------------------------*/
                { path: 'profTitle', component: _profTitle_prof_title_component__WEBPACK_IMPORTED_MODULE_15__["ProfTitleComponent"] },
                { path: 'addProfTitle', component: _profTitle_add_prof_title_component__WEBPACK_IMPORTED_MODULE_16__["AddProfTitleComponent"] },
                { path: 'updateProfTitle/:id', component: _profTitle_update_prof_title_component__WEBPACK_IMPORTED_MODULE_17__["UpdateProfTitleComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* AppComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.2em;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nheader{border-bottom:solid 3px #eeeeff}\r\nnav{width:200px; height:800px; border-right:solid 3px #eeeeff; float:left; }\r\nsection{float:right; width: 70%;}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin: 10px;\r\n  display: block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #334953;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\na,input{ margin-right:10px;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEMsSUFBSSxXQUFXLEVBQUUsWUFBWSxFQUFFLDhCQUE4QixFQUFFLFVBQVUsRUFBRTtBQUMzRSxRQUFRLFdBQVcsRUFBRSxVQUFVLENBQUM7QUFDaEM7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBLFNBQVMsaUJBQWlCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbmgyIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcbmhlYWRlcntib3JkZXItYm90dG9tOnNvbGlkIDNweCAjZWVlZWZmfVxyXG5uYXZ7d2lkdGg6MjAwcHg7IGhlaWdodDo4MDBweDsgYm9yZGVyLXJpZ2h0OnNvbGlkIDNweCAjZWVlZWZmOyBmbG9hdDpsZWZ0OyB9XHJcbnNlY3Rpb257ZmxvYXQ6cmlnaHQ7IHdpZHRoOiA3MCU7fVxyXG5uYXYgYSB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5uYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xyXG4gIGNvbG9yOiAjMzM0OTUzO1xyXG59XHJcbm5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAzOWJlNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xyXG59XHJcbm5hdiBhLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMzliZTU7XHJcbn1cclxuYSxpbnB1dHsgbWFyZ2luLXJpZ2h0OjEwcHg7fVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'myapp';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _school_college_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./school/college.component */ "./src/app/school/college.component.ts");
            /* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/teacher/teacher.component.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _school_add_college_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./school/add-college.component */ "./src/app/school/add-college.component.ts");
            /* harmony import */ var _school_update_college_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./school/update-college.component */ "./src/app/school/update-college.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./department/department.component */ "./src/app/department/department.component.ts");
            /* harmony import */ var _department_add_dep_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./department/add-dep.component */ "./src/app/department/add-dep.component.ts");
            /* harmony import */ var _department_update_dep_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./department/update-dep.component */ "./src/app/department/update-dep.component.ts");
            /* harmony import */ var _teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./teacher/add-teacher.component */ "./src/app/teacher/add-teacher.component.ts");
            /* harmony import */ var _degree_degree_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./degree/degree.component */ "./src/app/degree/degree.component.ts");
            /* harmony import */ var _degree_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./degree/add.component */ "./src/app/degree/add.component.ts");
            /* harmony import */ var _degree_update_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./degree/update.component */ "./src/app/degree/update.component.ts");
            /* harmony import */ var _teacher_update_teacher_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./teacher/update-teacher.component */ "./src/app/teacher/update-teacher.component.ts");
            /* harmony import */ var _profTitle_add_prof_title_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profTitle/add-prof-title.component */ "./src/app/profTitle/add-prof-title.component.ts");
            /* harmony import */ var _profTitle_update_prof_title_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profTitle/update-prof-title.component */ "./src/app/profTitle/update-prof-title.component.ts");
            /* harmony import */ var _profTitle_prof_title_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profTitle/prof-title.component */ "./src/app/profTitle/prof-title.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _school_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"],
                        _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__["TeacherComponent"],
                        _school_add_college_component__WEBPACK_IMPORTED_MODULE_9__["AddCollegeComponent"],
                        _school_update_college_component__WEBPACK_IMPORTED_MODULE_10__["UpdateCollegeComponent"],
                        _department_department_component__WEBPACK_IMPORTED_MODULE_12__["DepartmentComponent"],
                        _department_add_dep_component__WEBPACK_IMPORTED_MODULE_13__["AddDepComponent"],
                        _department_update_dep_component__WEBPACK_IMPORTED_MODULE_14__["UpdateDepComponent"],
                        _teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_15__["AddTeacherComponent"],
                        _degree_degree_component__WEBPACK_IMPORTED_MODULE_16__["DegreeComponent"],
                        _degree_add_component__WEBPACK_IMPORTED_MODULE_17__["AddComponent"],
                        _degree_update_component__WEBPACK_IMPORTED_MODULE_18__["UpdateComponent"],
                        _profTitle_prof_title_component__WEBPACK_IMPORTED_MODULE_22__["ProfTitleComponent"],
                        _teacher_update_teacher_component__WEBPACK_IMPORTED_MODULE_19__["UpdateTeacherComponent"],
                        _profTitle_add_prof_title_component__WEBPACK_IMPORTED_MODULE_20__["AddProfTitleComponent"],
                        _profTitle_update_prof_title_component__WEBPACK_IMPORTED_MODULE_21__["UpdateProfTitleComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
                    ],
                    providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"], }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/degree/add.component.css": 
        /*!******************************************!*\
          !*** ./src/app/degree/add.component.css ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVncmVlL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQjtBQUNwRyIsImZpbGUiOiJzcmMvYXBwL2RlZ3JlZS9hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LHRleHRhcmVhe1xyXG4gIHdpZHRoOjEwMHB4OyBsaW5lLWhlaWdodDogMjVweDsgYm9yZGVyLXJhZGl1czogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWZmOyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/degree/add.component.ts": 
        /*!*****************************************!*\
          !*** ./src/app/degree/add.component.ts ***!
          \*****************************************/
        /*! exports provided: AddComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function () { return AddComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var AddComponent = /** @class */ (function () {
                function AddComponent(route, degreeService, location) {
                    this.route = route;
                    this.degreeService = degreeService;
                    this.location = location;
                }
                AddComponent.prototype.ngOnInit = function () {
                };
                AddComponent.prototype.save = function (description, no, remarks) {
                    var _this = this;
                    this.degree = { no: no.trim(), description: description.trim(), remarks: remarks.trim() };
                    if (!description) {
                        return;
                    }
                    this.degreeService.addDegree(this.degree)
                        .subscribe(function () { return _this.goBack(); });
                };
                AddComponent.prototype.goBack = function () {
                    this.location.back();
                };
                return AddComponent;
            }());
            AddComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _university_service__WEBPACK_IMPORTED_MODULE_3__["UniversityService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AddComponent.prototype, "degree", void 0);
            AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/degree/add.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.component.css */ "./src/app/degree/add.component.css")).default]
                })
            ], AddComponent);
            /***/ 
        }),
        /***/ "./src/app/degree/degree.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/degree/degree.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZ3JlZS9kZWdyZWUuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/degree/degree.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/degree/degree.component.ts ***!
          \********************************************/
        /*! exports provided: DegreeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreeComponent", function () { return DegreeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            var DegreeComponent = /** @class */ (function () {
                function DegreeComponent(degreeService) {
                    this.degreeService = degreeService;
                }
                DegreeComponent.prototype.ngOnInit = function () {
                    this.getdegrees();
                };
                DegreeComponent.prototype.getdegrees = function () {
                    var _this = this;
                    this.degreeService.getDegrees()
                        .subscribe(function (res) { return _this.degrees = res; });
                };
                DegreeComponent.prototype.delete = function (degree) {
                    this.degrees = this.degrees.filter(function (h) { return h !== degree; });
                    this.degreeService.deleteDegree(degree).subscribe(function (res) { return alert(res.message); });
                };
                return DegreeComponent;
            }());
            DegreeComponent.ctorParameters = function () { return [
                { type: _university_service__WEBPACK_IMPORTED_MODULE_2__["UniversityService"] }
            ]; };
            DegreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-degree',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./degree.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/degree/degree.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./degree.component.css */ "./src/app/degree/degree.component.css")).default]
                })
            ], DegreeComponent);
            /***/ 
        }),
        /***/ "./src/app/degree/update.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/degree/update.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVncmVlL3VwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQjtBQUNwRyIsImZpbGUiOiJzcmMvYXBwL2RlZ3JlZS91cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LHRleHRhcmVhe1xyXG4gIHdpZHRoOjEwMHB4OyBsaW5lLWhlaWdodDogMjVweDsgYm9yZGVyLXJhZGl1czogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWZmOyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/degree/update.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/degree/update.component.ts ***!
          \********************************************/
        /*! exports provided: UpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function () { return UpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var UpdateComponent = /** @class */ (function () {
                function UpdateComponent(route, degreeService, location) {
                    this.route = route;
                    this.degreeService = degreeService;
                    this.location = location;
                }
                UpdateComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this.route.snapshot.params.id;
                    this.degreeService.getDegree(id)
                        .subscribe(function (res) { return _this.degree = res; });
                };
                UpdateComponent.prototype.goBack = function () {
                    this.location.back();
                };
                UpdateComponent.prototype.save = function () {
                    var _this = this;
                    this.degreeService.updateDegree(this.degree)
                        .subscribe(function () { return _this.goBack(); });
                };
                return UpdateComponent;
            }());
            UpdateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _university_service__WEBPACK_IMPORTED_MODULE_3__["UniversityService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UpdateComponent.prototype, "degree", void 0);
            UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/degree/update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update.component.css */ "./src/app/degree/update.component.css")).default]
                })
            ], UpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/department/add-dep.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/department/add-dep.component.ts ***!
          \*************************************************/
        /*! exports provided: AddDepComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDepComponent", function () { return AddDepComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            var AddDepComponent = /** @class */ (function () {
                function AddDepComponent(route, departmentService, location) {
                    this.route = route;
                    this.departmentService = departmentService;
                    this.location = location;
                }
                AddDepComponent.prototype.ngOnInit = function () {
                    this.getColleges();
                };
                AddDepComponent.prototype.getColleges = function () {
                    var _this = this;
                    this.departmentService.getColleges()
                        .subscribe(function (res) { return _this.colleges = res; });
                };
                AddDepComponent.prototype.getDepSch = function (id) {
                    var _this = this;
                    this.departmentService.getDepartment(id)
                        .subscribe(function (res) { return _this.department = res; });
                };
                AddDepComponent.prototype.save = function (description, no, school, remarks) {
                    var _this = this;
                    this.department = { no: no.trim(), description: description.trim(), school: this.school, remarks: remarks.trim() };
                    if (!description) {
                        return;
                    }
                    this.departmentService.addDepartment(this.department)
                        .subscribe(function () { return _this.goBack(); });
                };
                AddDepComponent.prototype.goBack = function () {
                    this.location.back();
                };
                return AddDepComponent;
            }());
            AddDepComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AddDepComponent.prototype, "colleges", void 0);
            AddDepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-dep',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-dep.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/add-dep.component.html")).default
                })
            ], AddDepComponent);
            /***/ 
        }),
        /***/ "./src/app/department/department.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/department/department.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnQvZGVwYXJ0bWVudC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/department/department.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/department/department.component.ts ***!
          \****************************************************/
        /*! exports provided: DepartmentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function () { return DepartmentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            var DepartmentComponent = /** @class */ (function () {
                function DepartmentComponent(departmentService) {
                    this.departmentService = departmentService;
                }
                DepartmentComponent.prototype.ngOnInit = function () {
                    this.getDepantments();
                };
                DepartmentComponent.prototype.getDepantments = function () {
                    var _this = this;
                    this.departmentService.getDepartments()
                        .subscribe(function (res) { return _this.departments = res; });
                };
                DepartmentComponent.prototype.delete = function (department) {
                    this.departments = this.departments.filter(function (h) { return h !== department; });
                    this.departmentService.deleteDepartment(department).subscribe(function (res) { return alert(res.message); });
                };
                return DepartmentComponent;
            }());
            DepartmentComponent.ctorParameters = function () { return [
                { type: _university_service__WEBPACK_IMPORTED_MODULE_2__["UniversityService"] }
            ]; };
            DepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./department.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/department.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./department.component.css */ "./src/app/department/department.component.css")).default]
                })
            ], DepartmentComponent);
            /***/ 
        }),
        /***/ "./src/app/department/update-dep.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/department/update-dep.component.ts ***!
          \****************************************************/
        /*! exports provided: UpdateDepComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDepComponent", function () { return UpdateDepComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            var UpdateDepComponent = /** @class */ (function () {
                function UpdateDepComponent(route, departmentService, location) {
                    this.route = route;
                    this.departmentService = departmentService;
                    this.location = location;
                }
                UpdateDepComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getColleges(); // 下拉菜单赋值
                    var id = this.route.snapshot.params.id; // 要修改专业的id
                    this.departmentService.getDep(id)
                        .subscribe(function (res) {
                        _this.department = res;
                    });
                };
                UpdateDepComponent.prototype.compareFn = function (o1, o2) {
                    return o1 && o2 ? o1.id === o2.id : o1 === o2;
                };
                UpdateDepComponent.prototype.getColleges = function () {
                    var _this = this;
                    this.departmentService.getColleges()
                        .subscribe(function (res) { return _this.colleges = res; });
                };
                UpdateDepComponent.prototype.save = function () {
                    var _this = this;
                    console.log(this.department);
                    this.departmentService.updateDep(this.department)
                        .subscribe(function (res) {
                        alert(res.message);
                        _this.goBack();
                    });
                };
                UpdateDepComponent.prototype.goBack = function () {
                    this.location.back();
                };
                return UpdateDepComponent;
            }());
            UpdateDepComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UpdateDepComponent.prototype, "colleges", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UpdateDepComponent.prototype, "department", void 0);
            UpdateDepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-update-dep',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-dep.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/update-dep.component.html")).default,
                })
            ], UpdateDepComponent);
            /***/ 
        }),
        /***/ "./src/app/profTitle/add-prof-title.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/profTitle/add-prof-title.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZUaXRsZS9hZGQtcHJvZi10aXRsZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/profTitle/add-prof-title.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/profTitle/add-prof-title.component.ts ***!
          \*******************************************************/
        /*! exports provided: AddProfTitleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProfTitleComponent", function () { return AddProfTitleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var AddProfTitleComponent = /** @class */ (function () {
                function AddProfTitleComponent(route, profTitleService, location) {
                    this.route = route;
                    this.profTitleService = profTitleService;
                    this.location = location;
                }
                AddProfTitleComponent.prototype.ngOnInit = function () {
                };
                AddProfTitleComponent.prototype.save = function (description, no, remarks) {
                    var _this = this;
                    this.profTitle = { no: no.trim(), description: description.trim(), remarks: remarks.trim() };
                    if (!description) {
                        return;
                    }
                    this.profTitleService.addProfTitle(this.profTitle)
                        .subscribe(function () { return _this.goBack(); });
                };
                AddProfTitleComponent.prototype.goBack = function () {
                    this.location.back();
                };
                return AddProfTitleComponent;
            }());
            AddProfTitleComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _university_service__WEBPACK_IMPORTED_MODULE_3__["UniversityService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AddProfTitleComponent.prototype, "profTitle", void 0);
            AddProfTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-prof-title',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-prof-title.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profTitle/add-prof-title.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-prof-title.component.css */ "./src/app/profTitle/add-prof-title.component.css")).default]
                })
            ], AddProfTitleComponent);
            /***/ 
        }),
        /***/ "./src/app/profTitle/prof-title.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/profTitle/prof-title.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZUaXRsZS9wcm9mLXRpdGxlLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/profTitle/prof-title.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/profTitle/prof-title.component.ts ***!
          \***************************************************/
        /*! exports provided: ProfTitleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfTitleComponent", function () { return ProfTitleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            var ProfTitleComponent = /** @class */ (function () {
                function ProfTitleComponent(profTitleService) {
                    this.profTitleService = profTitleService;
                }
                ProfTitleComponent.prototype.ngOnInit = function () {
                    this.getprofTitles();
                };
                ProfTitleComponent.prototype.getprofTitles = function () {
                    var _this = this;
                    this.profTitleService.getProfTitles()
                        .subscribe(function (res) { return _this.profTitles = res; });
                };
                ProfTitleComponent.prototype.delete = function (profTitle) {
                    this.profTitles = this.profTitles.filter(function (h) { return h !== profTitle; });
                    this.profTitleService.deleteProfTitle(profTitle).subscribe(function (res) { return alert(res.message); });
                };
                return ProfTitleComponent;
            }());
            ProfTitleComponent.ctorParameters = function () { return [
                { type: _university_service__WEBPACK_IMPORTED_MODULE_2__["UniversityService"] }
            ]; };
            ProfTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-prof-title',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prof-title.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profTitle/prof-title.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prof-title.component.css */ "./src/app/profTitle/prof-title.component.css")).default]
                })
            ], ProfTitleComponent);
            /***/ 
        }),
        /***/ "./src/app/profTitle/update-prof-title.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/profTitle/update-prof-title.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZUaXRsZS91cGRhdGUtcHJvZi10aXRsZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/profTitle/update-prof-title.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/profTitle/update-prof-title.component.ts ***!
          \**********************************************************/
        /*! exports provided: UpdateProfTitleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfTitleComponent", function () { return UpdateProfTitleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var UpdateProfTitleComponent = /** @class */ (function () {
                function UpdateProfTitleComponent(route, profTitleService, location) {
                    this.route = route;
                    this.profTitleService = profTitleService;
                    this.location = location;
                }
                UpdateProfTitleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this.route.snapshot.params.id;
                    this.profTitleService.getProfTitle(id)
                        .subscribe(function (res) { return _this.profTitle = res; });
                };
                UpdateProfTitleComponent.prototype.goBack = function () {
                    this.location.back();
                };
                UpdateProfTitleComponent.prototype.save = function () {
                    var _this = this;
                    this.profTitleService.updateProfTitle(this.profTitle)
                        .subscribe(function () { return _this.goBack(); });
                };
                return UpdateProfTitleComponent;
            }());
            UpdateProfTitleComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _university_service__WEBPACK_IMPORTED_MODULE_3__["UniversityService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UpdateProfTitleComponent.prototype, "profTitle", void 0);
            UpdateProfTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-update-prof-title',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-prof-title.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profTitle/update-prof-title.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-prof-title.component.css */ "./src/app/profTitle/update-prof-title.component.css")).default]
                })
            ], UpdateProfTitleComponent);
            /***/ 
        }),
        /***/ "./src/app/school/add-college.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/school/add-college.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nob29sL2FkZC1jb2xsZWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CO0FBQ3BHIiwiZmlsZSI6InNyYy9hcHAvc2Nob29sL2FkZC1jb2xsZWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCx0ZXh0YXJlYXtcclxuICB3aWR0aDoxMDBweDsgbGluZS1oZWlnaHQ6IDI1cHg7IGJvcmRlci1yYWRpdXM6IDNweDsgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVmZjsgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/school/add-college.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/school/add-college.component.ts ***!
          \*************************************************/
        /*! exports provided: AddCollegeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCollegeComponent", function () { return AddCollegeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            var AddCollegeComponent = /** @class */ (function () {
                function AddCollegeComponent(route, schoolService, location) {
                    this.route = route;
                    this.schoolService = schoolService;
                    this.location = location;
                }
                AddCollegeComponent.prototype.ngOnInit = function () {
                };
                AddCollegeComponent.prototype.save = function (description, no, remarks) {
                    var _this = this;
                    this.college = { no: no.trim(), description: description.trim(), remarks: remarks.trim() };
                    if (!description) {
                        return;
                    }
                    this.schoolService.addCollege(this.college)
                        .subscribe(function () { return _this.goBack(); });
                };
                AddCollegeComponent.prototype.goBack = function () {
                    this.location.back();
                };
                return AddCollegeComponent;
            }());
            AddCollegeComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AddCollegeComponent.prototype, "college", void 0);
            AddCollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-college',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-college.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/school/add-college.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-college.component.css */ "./src/app/school/add-college.component.css")).default]
                })
            ], AddCollegeComponent);
            /***/ 
        }),
        /***/ "./src/app/school/college.component.css": 
        /*!**********************************************!*\
          !*** ./src/app/school/college.component.css ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaG9vbC9jb2xsZWdlLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/school/college.component.ts": 
        /*!*********************************************!*\
          !*** ./src/app/school/college.component.ts ***!
          \*********************************************/
        /*! exports provided: CollegeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeComponent", function () { return CollegeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            var CollegeComponent = /** @class */ (function () {
                function CollegeComponent(schoolService) {
                    this.schoolService = schoolService;
                }
                CollegeComponent.prototype.ngOnInit = function () {
                    this.getColleges();
                };
                CollegeComponent.prototype.getColleges = function () {
                    var _this = this;
                    this.schoolService.getColleges()
                        .subscribe(function (res) { return _this.colleges = res; });
                };
                CollegeComponent.prototype.delete = function (college) {
                    this.colleges = this.colleges.filter(function (h) { return h !== college; });
                    this.schoolService.deleteCollege(college).subscribe(function (res) { return alert(res.message); });
                };
                return CollegeComponent;
            }());
            CollegeComponent.ctorParameters = function () { return [
                { type: _university_service__WEBPACK_IMPORTED_MODULE_2__["UniversityService"] }
            ]; };
            CollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-college',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./college.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/school/college.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./college.component.css */ "./src/app/school/college.component.css")).default]
                })
            ], CollegeComponent);
            /***/ 
        }),
        /***/ "./src/app/school/update-college.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/school/update-college.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nob29sL3VwZGF0ZS1jb2xsZWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CO0FBQ3BHIiwiZmlsZSI6InNyYy9hcHAvc2Nob29sL3VwZGF0ZS1jb2xsZWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCx0ZXh0YXJlYXtcclxuICB3aWR0aDoxMDBweDsgbGluZS1oZWlnaHQ6IDI1cHg7IGJvcmRlci1yYWRpdXM6IDNweDsgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVmZjsgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/school/update-college.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/school/update-college.component.ts ***!
          \****************************************************/
        /*! exports provided: UpdateCollegeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCollegeComponent", function () { return UpdateCollegeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            var UpdateCollegeComponent = /** @class */ (function () {
                function UpdateCollegeComponent(route, schoolService, location) {
                    this.route = route;
                    this.schoolService = schoolService;
                    this.location = location;
                }
                UpdateCollegeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this.route.snapshot.params.id;
                    this.schoolService.getCollege(id)
                        .subscribe(function (res) { return _this.college = res; });
                };
                UpdateCollegeComponent.prototype.goBack = function () {
                    this.location.back();
                };
                UpdateCollegeComponent.prototype.save = function () {
                    var _this = this;
                    this.schoolService.updateCollege(this.college)
                        .subscribe(function (res) {
                        alert(res.message);
                        _this.goBack();
                    });
                };
                return UpdateCollegeComponent;
            }());
            UpdateCollegeComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UpdateCollegeComponent.prototype, "college", void 0);
            UpdateCollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-update-college',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-college.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/school/update-college.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-college.component.css */ "./src/app/school/update-college.component.css")).default]
                })
            ], UpdateCollegeComponent);
            /***/ 
        }),
        /***/ "./src/app/teacher/add-teacher.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/teacher/add-teacher.component.ts ***!
          \**************************************************/
        /*! exports provided: AddTeacherComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeacherComponent", function () { return AddTeacherComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            var AddTeacherComponent = /** @class */ (function () {
                function AddTeacherComponent(route, teacherService, location) {
                    this.route = route;
                    this.teacherService = teacherService;
                    this.location = location;
                }
                AddTeacherComponent.prototype.ngOnInit = function () {
                    this.getColleges();
                    this.getDegrees();
                    this.getTitles();
                    this.getDepartments();
                };
                AddTeacherComponent.prototype.getColleges = function () {
                    var _this = this;
                    this.teacherService.getColleges()
                        .subscribe(function (res) { return _this.schools = res; });
                };
                AddTeacherComponent.prototype.getDegrees = function () {
                    var _this = this;
                    this.teacherService.getDegrees()
                        .subscribe(function (res) { return _this.degrees = res; });
                };
                AddTeacherComponent.prototype.getTitles = function () {
                    var _this = this;
                    this.teacherService.getProfTitles()
                        .subscribe(function (res) { return _this.titles = res; });
                };
                AddTeacherComponent.prototype.getDepartments = function () {
                    var _this = this;
                    this.teacherService.getDepartments()
                        .subscribe(function (res) { return _this.departments = res; });
                };
                AddTeacherComponent.prototype.getDepSch = function (id) {
                    var _this = this;
                    this.teacherService.getDepartment(id)
                        .subscribe(function (res) { return _this.department = res; });
                };
                AddTeacherComponent.prototype.save = function (name, no, title, degree, department) {
                    var _this = this;
                    this.teacher = { id: null, name: name.trim(), no: no.trim(),
                        title: this.title, degree: this.degree, department: this.department };
                    if (!name) {
                        return;
                    }
                    this.teacherService.addTeacher(this.teacher)
                        .subscribe(function () { return _this.goBack(); });
                };
                AddTeacherComponent.prototype.goBack = function () {
                    this.location.back();
                };
                return AddTeacherComponent;
            }());
            AddTeacherComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AddTeacherComponent.prototype, "schools", void 0);
            AddTeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-teacher',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/add-teacher.component.html")).default,
                })
            ], AddTeacherComponent);
            /***/ 
        }),
        /***/ "./src/app/teacher/teacher.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/teacher/teacher.component.ts ***!
          \**********************************************/
        /*! exports provided: TeacherComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function () { return TeacherComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            var TeacherComponent = /** @class */ (function () {
                function TeacherComponent(teacherService) {
                    this.teacherService = teacherService;
                }
                TeacherComponent.prototype.ngOnInit = function () {
                    this.getTeachers();
                };
                TeacherComponent.prototype.getTeachers = function () {
                    var _this = this;
                    this.teacherService.getTeachers()
                        .subscribe(function (res) { return _this.teachers = res; });
                };
                TeacherComponent.prototype.delete = function (teacher) {
                    this.teachers = this.teachers.filter(function (h) { return h !== teacher; });
                    this.teacherService.deleteTeacher(teacher).subscribe(function (res) { return alert(res.message); });
                };
                return TeacherComponent;
            }());
            TeacherComponent.ctorParameters = function () { return [
                { type: _university_service__WEBPACK_IMPORTED_MODULE_2__["UniversityService"] }
            ]; };
            TeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-teacher',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/teacher.component.html")).default,
                })
            ], TeacherComponent);
            /***/ 
        }),
        /***/ "./src/app/teacher/update-teacher.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/teacher/update-teacher.component.ts ***!
          \*****************************************************/
        /*! exports provided: UpdateTeacherComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTeacherComponent", function () { return UpdateTeacherComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");
            var UpdateTeacherComponent = /** @class */ (function () {
                function UpdateTeacherComponent(route, teacherService, location) {
                    this.route = route;
                    this.teacherService = teacherService;
                    this.location = location;
                }
                UpdateTeacherComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getColleges();
                    this.getDegrees();
                    this.getTitles();
                    this.getDepartments();
                    var id = this.route.snapshot.params.id; // 要修改专业的id
                    this.teacherService.getTeacher(id)
                        .subscribe(function (res) {
                        _this.teacher = res;
                    });
                };
                UpdateTeacherComponent.prototype.getColleges = function () {
                    var _this = this;
                    this.teacherService.getColleges()
                        .subscribe(function (res) { return _this.schools = res; });
                };
                UpdateTeacherComponent.prototype.getDegrees = function () {
                    var _this = this;
                    this.teacherService.getDegrees()
                        .subscribe(function (res) { return _this.degrees = res; });
                };
                UpdateTeacherComponent.prototype.getTitles = function () {
                    var _this = this;
                    this.teacherService.getProfTitles()
                        .subscribe(function (res) { return _this.titles = res; });
                };
                UpdateTeacherComponent.prototype.getDepartments = function () {
                    var _this = this;
                    this.teacherService.getDepartments()
                        .subscribe(function (res) { return _this.departments = res; });
                };
                UpdateTeacherComponent.prototype.getDepSch = function (id) {
                    var _this = this;
                    this.teacherService.getDepartment(id)
                        .subscribe(function (res) { return _this.department = res; });
                };
                UpdateTeacherComponent.prototype.save = function () {
                    var _this = this;
                    this.teacherService.updateTeacher(this.teacher)
                        .subscribe(function (res) {
                        alert(res.message);
                        _this.goBack();
                    });
                };
                UpdateTeacherComponent.prototype.goBack = function () {
                    this.location.back();
                };
                UpdateTeacherComponent.prototype.compareFn = function (o1, o2) {
                    return o1 && o2 ? o1.id === o2.id : o1 === o2;
                };
                return UpdateTeacherComponent;
            }());
            UpdateTeacherComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UpdateTeacherComponent.prototype, "schools", void 0);
            UpdateTeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-update-teacher',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/update-teacher.component.html")).default,
                })
            ], UpdateTeacherComponent);
            /***/ 
        }),
        /***/ "./src/app/university.service.ts": 
        /*!***************************************!*\
          !*** ./src/app/university.service.ts ***!
          \***************************************/
        /*! exports provided: UniversityService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityService", function () { return UniversityService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            var UniversityService = /** @class */ (function () {
                function UniversityService(http) {
                    this.http = http;
                    this.collegeUrl = '../school.ctl';
                    this.depUrl = '../department.ctl';
                    this.teacherUrl = '../teacher.ctl';
                    this.degreeUrl = '../degree.ctl';
                    this.profTitleUrl = '../profTitle.ctl';
                }
                /*-----------------------------Get------------------------------------------------------------*/
                UniversityService.prototype.getColleges = function () {
                    return this.http.get(this.collegeUrl)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getColleges', [])));
                };
                UniversityService.prototype.getProfTitles = function () {
                    return this.http.get(this.profTitleUrl).pipe();
                };
                UniversityService.prototype.getDegrees = function () {
                    return this.http.get(this.degreeUrl).pipe();
                };
                UniversityService.prototype.getCollege = function (id) {
                    var url = this.collegeUrl + '?id=' + id;
                    return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getCollege id=" + id)));
                };
                UniversityService.prototype.getProfTitle = function (id) {
                    var url = this.profTitleUrl + '?id=' + id;
                    return this.http.get(url).pipe();
                };
                UniversityService.prototype.getDegree = function (id) {
                    var url = this.degreeUrl + '?id=' + id;
                    return this.http.get(url).pipe();
                };
                UniversityService.prototype.getDepartment = function (id) {
                    var url = this.depUrl + '?id=' + id;
                    return this.http.get(url).pipe();
                };
                UniversityService.prototype.getDepartments = function () {
                    return this.http.get(this.depUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDepartments', [])));
                };
                UniversityService.prototype.getDep = function (id) {
                    var url = this.depUrl + '?id=' + id;
                    return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getDep id=" + id)));
                };
                UniversityService.prototype.getTeacher = function (id) {
                    var url = this.teacherUrl + '?id=' + id;
                    return this.http.get(url).pipe();
                };
                UniversityService.prototype.getTeachers = function () {
                    return this.http.get(this.teacherUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTeacher', [])));
                };
                /*--------------------------------------------------------------------------------------------------------------*/
                /*---------------------------------Delete-----------------------------------------*/
                UniversityService.prototype.deleteCollege = function (college) {
                    var id = typeof college === 'number' ? college : college.id;
                    return this.http.delete(this.collegeUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteCollege')));
                };
                UniversityService.prototype.deleteProfTitle = function (profTitle) {
                    var id = typeof profTitle === 'number' ? profTitle : profTitle.id;
                    return this.http.delete(this.profTitleUrl + '?id=' + id, httpOptions).pipe();
                };
                UniversityService.prototype.deleteDegree = function (degree) {
                    var id = typeof degree === 'number' ? degree : degree.id;
                    return this.http.delete(this.degreeUrl + '?id=' + id, httpOptions).pipe();
                };
                UniversityService.prototype.deleteDepartment = function (department) {
                    var id = typeof department === 'number' ? department : department.id;
                    return this.http.delete(this.depUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteDepartment')));
                };
                UniversityService.prototype.deleteTeacher = function (teacher) {
                    var id = typeof teacher === 'number' ? teacher : teacher.id;
                    return this.http.delete(this.teacherUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteTeacher')));
                };
                /*--------------------------------------------------------------------------------------------------------------------*/
                /*------------------------------------------Add-------------------------------------------------------------------------*/
                UniversityService.prototype.addCollege = function (college) {
                    return this.http.post(this.collegeUrl, college, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addCollege')));
                };
                UniversityService.prototype.addProfTitle = function (profTitle) {
                    return this.http.post(this.profTitleUrl, profTitle, httpOptions);
                };
                UniversityService.prototype.addTeacher = function (teacher) {
                    return this.http.post(this.teacherUrl, teacher, httpOptions);
                };
                UniversityService.prototype.addDepartment = function (department) {
                    return this.http.post(this.depUrl, department, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addCollege')));
                };
                UniversityService.prototype.addDegree = function (degree) {
                    return this.http.post(this.degreeUrl, degree, httpOptions).pipe();
                };
                /*-------------------------------------------------------------------------------------------------------------*/
                /*--------------------------------------------Update---------------------------------------------------------*/
                UniversityService.prototype.updateCollege = function (college) {
                    return this.http.put(this.collegeUrl, college, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateCollege')));
                };
                UniversityService.prototype.updateDep = function (department) {
                    return this.http.put(this.depUrl, department, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateDep')));
                };
                UniversityService.prototype.updateProfTitle = function (profTitle) {
                    return this.http.put(this.profTitleUrl, profTitle, httpOptions).pipe();
                };
                UniversityService.prototype.updateDegree = function (degree) {
                    return this.http.put(this.degreeUrl, degree, httpOptions).pipe();
                };
                UniversityService.prototype.updateTeacher = function (teacher) {
                    return this.http.put(this.teacherUrl, teacher, httpOptions).pipe();
                };
                /*--------------------------------------------------------------------------------------------------*/
                UniversityService.prototype.handleError = function (operation, result) {
                    if (operation === void 0) { operation = 'operation'; }
                    return function (error) {
                        console.error(error); // log to console instead
                        // Let the app keep running by returning an empty result.
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
                    };
                };
                return UniversityService;
            }());
            UniversityService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UniversityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UniversityService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: true
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\学习\web前端\myapp\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map