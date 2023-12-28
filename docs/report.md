# Things learned on lesson-4

 - When you import a .css to a layout or page it is applied globally.

 - a page or layout can export a metadata object, which can define the title of the page and a description.

 - A `Link` prefetches the webpage that it navegates to, which enhances the navigation speed.

 - Tailwind restricts default css configuration by default.

 - `page.jsx` is the name the file must have for nextjs to make the route publicy available, so the Navbar component is not accesible as a webpage due to it's name.

 - A layout wraps child page/layouts (including the same level page) and they are not mounted/unmounted, which means that the state is kept and they are not re-rendered. The root layout is [required](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) and must contain the html and body tags.

 - The names of the export's do not matter; I can rename `RootLayout` to `Foo` and the webpage will work the same.

 - Layouts are server side components by default but can change to client component.

