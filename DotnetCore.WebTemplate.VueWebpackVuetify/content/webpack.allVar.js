let DEV_folderName = '#{DEV_CustomProjName_Web_Folder}#'
let QAS_folderName = '#{QAS_CustomProjName_Web_Folder}#'
let PRO_folderName = '#{PRO_CustomProjName_Web_Folder}#'
let DEV_APIURL = '#{DEV_CustomProjName_APIURL}#'
let QAS_APIURL = '#{QAS_CustomProjName_APIURL}#'
let PRO_APIURL = '#{PRO_CustomProjName_APIURL}#'

let customConfig = {
  Local: {
    sourcePublicPath: '/',
    rootFolder: '""',
    apiUrl: JSON.stringify(`//www.root.com/route`),
    nodeEnv: '"development"'
  },
  Debug: {
    sourcePublicPath: `/${DEV_folderName}/`,
    rootFolder: JSON.stringify(`/${DEV_folderName}`),
    apiUrl: JSON.stringify(`//${DEV_APIURL}`),
    nodeEnv: '"production"'
  },
  QAS: {
    sourcePublicPath: `/${QAS_folderName}/`,
    rootFolder: JSON.stringify(`/${QAS_folderName}`),
    apiUrl: JSON.stringify(`//${QAS_APIURL}`),
    nodeEnv: '"production"'
  },
  Release: {
    sourcePublicPath: `/${PRO_folderName}/`,
    rootFolder: JSON.stringify(`/${PRO_folderName}`),
    apiUrl: JSON.stringify(`//${PRO_APIURL}`),
    nodeEnv: '"production"'
  }
}

module.exports = customConfig;
