const path = require("path");
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
 *
 */

const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");


IOhandler.unzip(zipFilePath, pathUnzipped)
  .then (() => IOhandler.readDir(pathUnzipped))
  .then ((files) => IOhandler.grayScale(files, pathProcessed))
  .then (() => console.log("All files processed"))
  .catch ((err) => console.error(err));
