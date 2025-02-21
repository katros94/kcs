module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/kcs/' : '/',
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Katrinas Coding Studio',
        },
    }
}