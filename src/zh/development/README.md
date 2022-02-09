# Writing frontend projects

The system takes the form of a frontend and backend separation without providing `template rendering options`, so frontend projects can be designed using any **framework** and **architecture**. 

However, although the development is relatively free, there are also many inconveniences, such as <u>interface call and data definition, routing convention</u>. So in this section, I’ll go over how to develop frontend projects.

## Routing convention

The routing convention can greatly ensure that the site due to the **replacement** of different frontend topics lead to SEO abnormalities, dead links and other problems.

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
| `/favorite/:type`        | Additional page                        | Option      |
| `/projects`              | Projects page                          | Option      |
| `/projects/:id`          | Projects details page                  | Option      |

## Options and suggestions on the framework

It is recommended to choose the modern framework with SSR function：

- React：NextJS, [RakkasJS](https://github.com/rakkasjs/rakkasjs), umi
- Vue: Vite (vite-ssr), NuxtJS

Small program:

- React: Remax, taro
- Vue: uni-app