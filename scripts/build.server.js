// build.js - 클라이언트에서 사용할 빌드 파일
// build.server.js - 서버에서 사용할 빌드 파일

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', error => {
    throw error;
});

require('../config/env');
const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/webpack.config.server');
const paths = require('../config/paths');

function build() {
    console.log('Creating server build...');
    fs.emptyDirSync(paths.ssrBuild);
    let compiler = webpack(config);
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(stats.toString());
        });
    });
}

build();