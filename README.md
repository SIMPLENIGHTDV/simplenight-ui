# **Simplenight UI**

This is the Simpleniht UI library. It is a collection of components and icons that are used in the Simplenight web application.

## **Initialize project**

```
npm run initialize or
yarn initialize or
pnpm run initialize
```

## **Run project**

```
npm run storybook/dev or
yarn storybook/dev or
pnpm run/dev storybook
```

This will run in port 6006.

## **Working on the proyect**

Run `yarn changeset` to update current versioning with patch and describe your task or Add the jira ticket. Like a commit.

## **Adding Icons to the library**

1. Remember always to remove the `height` and `width` from the svg file.
2. After that, run `yarn compile-icons` to convert the svg file to a react component.
3. Finally, add the icon to the `src/icons/index.ts` and `src/icons/Icons.stories.mdx` files with a storybook story in its category.

## **How to install this package**

1. Super simple, just install the library with the next commands:

   ```
   npm install @simplenight/ui or
   pnpm add @simplenight/ui or
   yarn add @simplenight/ui
   ```
