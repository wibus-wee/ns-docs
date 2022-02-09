# Writing frontend projects

The system takes the form of a frontend and backend separation without providing `template rendering options`, so developers can design frontend projects using any **framework** and **architecture**. 

Although the development is free, there are also inconveniences, such as <u>interface call and data definition, routing convention</u>. In this section, I’ll go over how to develop frontend projects.

## Routing convention

The routing convention can greatly ensure that the site because the **replacement** of different frontend topics lead to SEO abnormalities, dead links and other problems.

| Path                     | Descrition                             | Mark        |
| ------------------------ | -------------------------------------- | ----------- |
| `/`                      | Home                                   | Mandatory   |
| `/posts`                 | Blog posts lists                       | Mandatory   |
| `/posts/:category/:slug` | Blog posts details page                | Mandatory   |
| `/pages/:slug`           | Independent pages details page         | Mandatory   |
| `/notes/:nid`            | Dairy details page                     | Mandatory   |
| `/feed`                  | RSS subscribe                          | Mandatory   |
| `/:category/:slug`       | 302 -> `/posts/:category/:slug`        | Recommended |
| `/category/:slug`        | Posts lists page in categories         | Recommended |
| `/notes`                 | Dairy lists / Jump to the latest dairy | Recommended |
| `/notes/latest`          | The latest dairy details page          | Recommended |
| `/friends`               | Friends Link page                      | Recommended |
| `/says`                  | Essays Details page                    | Option      |
| `/sitemap`               | Site map                               | Recommended |
| `/timeline`              | Timeline                               | Option      |
| `/recently`              | Dynamic page                           | Option      |
| `/favorite/:type`        | Others page                            | Option      |
| `/projects`              | Projects page                          | Option      |
| `/projects/:id`          | Projects details page                  | Option      |

## Options and suggestions on the framework

Recommended to choose the modern framework with SSR function：

- React：NextJS, [RakkasJS](https://github.com/rakkasjs/rakkasjs), umi
- Vue: Vite (vite-ssr), NuxtJS

Small program:

- React: Remax, taro
- Vue: uni-app