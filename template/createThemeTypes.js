const fs = require("fs");

fs.readFile("./src/theme/themes.ts", "utf8", (err, data) => {
  if (err) return;
  const rows = data.split("\n");
  let startIndex = rows.findIndex((e) =>
    e.includes(
      "ADD YOUR THEMES INSIDE THE themes object, TYPESCRIPT WILL WARN YOU IF YOU MESS UP"
    )
  );
  const objectRows = rows.slice(startIndex, rows.length);
  const enums = objectRows.filter((e) => e.match(/[a-zA-Z0-9]{0,}: {/));
  const themeNames = enums.map((e) => e.replace(/[^A-Za-z0-9]/g, ""));
  const enumThemes = themeNames.map((e) => {
    return `${e}='${e}',`;
  });
  const themeTypes = themeNames.map((e) => `'${e}'`);
  const themeColors = objectRows.filter((e) => e.match(/[a-zA-Z0-9]{0,}: "/));
  const themeColorsCleaned = themeColors.map((e, i) => {
    const trimmed = e.trim();
    const cleaned = trimmed.substr(0, trimmed.indexOf(":"));
    return `${cleaned}='${cleaned}',`;
  });
  const newFileValues = `import { ThemeContextProps } from "./ThemeContext";

//TODO: FIRSTLY, ADD THE NAME OF YOUR THEME TO Themes enum, and then to Theme type with | "themeName"
export enum Themes {
${enumThemes.join("\n")}
}

export type ThemeType = ${themeTypes.join(" | ")};

//TODO: ADD ALL OF THE COLORS YOU WANT TO HAVE IN YOUR THEME
export enum ThemeAttributes {
${themeColorsCleaned
  .slice(0, themeColorsCleaned.length / themeNames.length)
  .join("\n")}
}

${objectRows.join("\n")}`;

  fs.writeFile("./src/theme/themes.ts", newFileValues, (e, r) => {
    if (e) console.log("err", e);
    else console.log("UPDATED THEMES FILE");
  });
});
