let s = module.exports = global.BasePath = {};

s.Path={
    currentEnv:"lost",
    Path:{
        private:'api/',
        staticstate:'http://local.zhouws.com:3333/'
    },
    fullPath(pathname) {
        return `${this.Path[pathname]}`;
    },
}
