/*
 * Project: Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 *
 * Created Date:
 * Author:
 *
 */

const { pipeline } = require("stream/promises");

const unzipper = require("yauzl-promise"),
  fs = require("fs"),
  PNG = require("pngjs").PNG,
  path = require("path");

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {string} pathIn
 * @param {string} pathOut
 * @return {promise}
 */

async function unzip(pathIn, pathOut) {
  const zip = await unzipper.open(pathIn);
  try {
    for await (const entry of zip) {
      if (entry['filename'].endsWith('.png')) {
        const read = await entry.openReadStream();
        const write = fs.createWriteStream(`${pathOut}/${entry["filename"]}`);
        await pipeline(read, write);
      }
  }
  } catch (err) {
    console.error('An error occurred during extraction:', err);
  } finally {
    await zip.close();
  }
}

/**f
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {string} path
 * @return {promise}
 */
const readDir = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(
          files
            .filter((file) => file.endsWith(".png"))
            .map((file) => path.join(dir,file))
        );
      }
    });
  });
};

/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {
      pathIn.forEach((entry) => { 
        const read = fs.createReadStream(entry);
        const write = fs.createWriteStream(`${pathOut}/${path.basename(entry)}`);
        read.pipe(new PNG())
          .on("parsed", function () {
            for (let y = 0; y < this.height; y++) {
              for (let x = 0; x < this.width; x++) {
                const idx = (this.width * y + x) << 2;
                const avg = (this.data[idx] + this.data[idx + 1] + this.data[idx + 2]) / 3;
                // this.data[idx] = avg;
                // this.data[idx + 1] = avg;
                // this.data[idx + 2] = avg;
                this.data[idx], this.data[idx + 1], this.data[idx + 2] = avg, avg, avg;
              }
            }
            this.pack().pipe(write);
          });
      }); 
}

const sepia = (pathIn, pathOut) => {
  pathIn.forEach((entry) => {
    const read = fs.createReadStream(entry);
    const write = fs.createWriteStream(`${pathOut}/${path.basename(entry)}`)
    read.pipe(new PNG())
      .on("parsed", function () {
        for (let y = 0; y < this.height; y++) {
          for (let x = 0; x < this.width; x++) {
            const idx = (this.width * y + x) << 2;
            

            const red = this.data[idx];
            const green = this.data[idx + 1];
            const blue = this.data[idx + 2];
            const tr =  0.393*red + 0.769*green+ 0.189*blue
            const tg =  0.349*red + 0.686*green+ 0.168*blue
            const tb =  0.272*red + 0.534*green+ 0.131*blue

            if (tr > 255) {this.data[idx] = 255} else {this.data[idx] = tr;}
            if (tg > 255) {this.data[idx + 1] = 255;} else {this.data[idx + 1] = tg;}
            if (tb > 255) {this.data[idx + 2] = 255;} else {this.data[idx + 2] = tb;}
        }}
        this.pack().pipe(write);
      });
  }
  );
}


module.exports = {
  unzip,
  readDir,
  grayScale,
  sepia
};
