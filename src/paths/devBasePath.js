let s = module.exports = global.BasePath = {};
s.Path={
    currentEnv:"lost",
    Path:{
        private:'http://116.62.209.16:3333/',
    },
    fullPath(pathname) {
        return `${this.Path[pathname]}`;
    },
}
