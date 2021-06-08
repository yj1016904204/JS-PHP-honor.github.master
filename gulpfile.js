// 我是 gulpfile.js 文件

// 1. 引入 gulp
const gulp = require('gulp')

// 2. 引入 gulp-cssmin
const cssmin = require('gulp-cssmin')

// 3-1. 引入 gulp-uglify
const uglify = require('gulp-uglify')

// 4. 引入 gulp-htmlmin
const htmlmin = require('gulp-htmlmin')
// 5. 引入 del
const clean = require('del')

// 6. 引入 gulp-webserver
const webserver = require('gulp-webserver')

//移动相关文件夹
const imgHandler = () => {
    //我打算把src处理完成以后,都放到dist文件夹下
    return gulp.src('./src/img/*')
        .pipe(gulp.dest('./dist/img'))
}
const uploadHandler = () => {
    //我打算把src处理完成以后,都放到dist文件夹下
    return gulp.src('./src/upload/*')
        .pipe(gulp.dest('./dist/upload'))
}
const phpHandler = () => {
    //我打算把src处理完成以后,都放到dist文件夹下
    return gulp.src('./src/php/*')
        .pipe(gulp.dest('./dist/php'))
}
// 2. 创建一个 css 的任务
const cssHandler = () => {
    return gulp.src('./src/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
}


// 3. 创建一个 js 任务
const jsHandler = () => {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

// 4.对html进行压缩
const htmlHandler = () => {
    return gulp.src('./src/pages/*.html')
        .pipe(htmlmin({
            removeAttributeQuotes: true,//移除属性上的双引号
            removeComments: true,//移除注释
            collapseWhitespace: true,//移除所有空格,会变成一行代码
            minifyCSS: true,//把页面里面style标签里面的css样式也去空格
            minifyJS: true,//把页面里面script标签里面的js代码也去空格
            collapseBooleanAttributes: true//把值为布尔值的属性简写
        }))
        .pipe(gulp.dest('./dist/pages'))
}
//5.删除dist文件夹
const delHandler = () => {
    return clean(['./dist'])
}
//6.配置服务器选项
const webserverHandler = () => {
    return gulp.src('./dist')   //找到要作为服务器根目录的文件夹
        .pipe(webserver({
            port: 8090,//端口号,0-6635之间,尽量不要用0-1023
            open: './pages/index.html',//你默认打开的首页,路径从dist开始书写
            livereload: true,//热更新,就是当dist里面代码有变化的时候自动刷新浏览器
            //这里不使用第三方代理服务器
            /*  
            proxies: [ //这个第三方模块还可以帮助我们配置代理
                 //直接在使用webserver的时候添加一个配置项:   proxies:[]
                 {
                     source: '/abc', //表示请求的地址
                     target: 'http://127.0.0.1/json.php'//你要代理的地址
                 }
             ] 
             */
        }))
}

//书写自动监控任务
const watchHandler = () => {
    /*
        当我在src里面书写代码的时候,只要我修改我的代码,就会被gulp监听到,
        一旦监听到,就重新帮我删除以前的和压缩现在的,一旦压缩,dist文件夹里面内容就变化了
        变化了以后服务器就会热更新
    */
    gulp.watch('./src/css/*.css', cssHandler);
    gulp.watch('./src/js/*.js', jsHandler);
    gulp.watch('./src/pages/*.html', htmlHandler);
    gulp.watch('./src/img/**', imgHandler);
    gulp.watch('./src/upload/**', uploadHandler);
    gulp.watch('./src/php/**', phpHandler);
}
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(imgHandler, uploadHandler, phpHandler, cssHandler, htmlHandler, jsHandler),
    webserverHandler,
    watchHandler
)