## References

- <https://netninja.dev/courses/next-13-masterclass/lectures/48541168>

## Q: Folder with its name enclosed in parentheses

In Next.js 13 and 14, What is the meaning of a folder whose name is between parentheses?
I am not talking about brackets `[id]` but parenthesis `(authorization)`

## A: https://stackoverflow.com/ai/search/21517

Both OpenAI and Bard allucinated.

In Next.js 13 and 14, a folder whose name is between parentheses, like (auth), does not have any specific meaning within the framework. The use of parentheses in folder names is not a convention or pattern recognized by Next.js. It is likely that the folder name (auth) was chosen by the developer for their own organization or naming purposes.

If you are looking for a specific meaning or functionality associated with a folder name in Next.js, you may need to provide more context or check the project's documentation or codebase for any custom implementations.

## A. Google.

Google pointed to the correct solution.

See <https://stackoverflow.com/questions/76214501/nextjs-13-folder-structure-best-practice>


... but I used another Next 13 feature and it is Route Groups (as stated in the link):

<https://nextjs.org/docs/app/building-your-application/routing/colocation#route-groups>

**It is wrapping a folder name in parenthesis, so that it shows the folder is for organizational purposes (grouping folders) and should not be included in the route’s URL path, e.g. (routes)**.

![](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-route-groups.png&w=3840&q=75&dpl=dpl_BCKS3KDA6yGytV9yZZjUig8Bkeo8)

**Route groups** are useful for:

- Organizing routes into groups e.g. by site section, intent, or team.
- Enabling nested layouts in the same route segment level:
- Creating multiple nested layouts in the same segment, including multiple root layouts
- Adding a layout to a subset of routes in a common segment

See branch `lesson-13` in this course for more details.
