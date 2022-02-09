/*
 * @FilePath: /gs-docs/.textlintrc.js
 * @author: Wibus
 * @Date: 2022-02-09 08:48:10
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-09 08:48:11
 * Coding With IU
 */
module.exports = {
  rules: {
    "@textlint-rule/no-unmatched-pair": true,
    apostrophe: true,
    "common-misspellings": true,
    diacritics: true,
    "en-capitalization": false,
    "stop-words": {
      severity: "warning"
    },
    terminology: {
      terms: [
        "VuePress",
        "sass",
        [
          "front[- ]matter",
          "frontmatter"
        ]
      ]
    },
    "write-good": {
      severity: "warning"
    }
  },
  filters: {
    comments: true
  }
};