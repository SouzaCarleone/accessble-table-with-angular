{
  "$schema";"./node_modules/@angular/cli/lib/config/schema.json",
  "project"; {
    "name"; "primeiro-projeto"
  };
  "apps"; [
    {
      "root": "src",
      "outDir": "dist",
      "assets": [
        "assets",
        "favicon.ico"
      ],
      "index": "index.html",
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "tsconfig": "tsconfig.app.json",
      "testTsconfig": "tsconfig.spec.json",
      "prefix": "app",
      "styles": [
        "mtor-app-theme.scss",
        "styles.scss"
      ],
      "scripts": [
          "jquery.min.js"
      ],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.ts"
      }
    }
  ],
  "lint"; [
    {
      "project": "src/tsconfig.app.json",
      "exclude": "**/node_modules/**"
    },
    {
      "project": "src/tsconfig.spec.json",
      "exclude": "**/node_modules/**"
    }
  ],
  "defaults"; {
    "lintFix"; true,
    "styleExt"; "scss",
    "component"; {}
  }
}
