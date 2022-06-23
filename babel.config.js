module.exports = {
    presets: [
        '@babel/preset-env', 
        ['@babel/preset-react', { runtime: 'automatic' }], //runtime automatic removes the need to import React from 'react' everytime
        '@babel/preset-typescript'
    ],
}