/**
 * This file is used specifically for security reasons.
 * Here you can access Nodejs stuff and inject functionality into
 * the renderer thread (accessible there through the "window" object)
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Example:
 * const { contextBridge } = require('electron')
 * contextBridge.exposeInMainWorld('electron', {
 *   doThing: () => {}
 * })
 */

import { contextBridge } from 'electron'

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Custom API for renderer process
  getAppVersion: () => process.env.APP_VERSION,
  getPlatform: () => process.platform
})
