import manifest from '../manifest';
import rimraf from 'rimraf'
import mkdirp from 'mkdirp'
import fs from 'fs';
import path from 'path';

const sdPluginDirSuffix = 'sdPlugin';
const { NameSpace: namespace } = manifest;
const distPath = 'dist';
const pluginPath = path.resolve(distPath, [namespace, sdPluginDirSuffix].join('.'))

// Clean and Create the dist
rimraf.sync(distPath)
mkdirp.sync(pluginPath);

// Write the manifest file
fs.writeFileSync(path.join(pluginPath, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8')

// Copy the resources (index.html, images, etc)
const assetRootPath = path.resolve('src/resources')
fs.readdirSync(assetRootPath).forEach(asset => {
    const filePath = path.join(assetRootPath, asset)
    fs.copyFileSync(filePath,  path.join(pluginPath, asset))
})

// Rollup the bundle into the plugin dist dir

// Zip the plugin dist dir into a namespaced zip dir with .streamDeckPlugin extention <- from my reverse engineering this is all the mac / windows only bundler bins do. I use linux as a dev env so we can do this manually.

