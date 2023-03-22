# Screens
Since expo-router does not currently offer syntax that enables co-locating route definitions in the app folder with feature code, we have this directory serve as a mirror between the app folder, but with components and utilities related to a screen co-located with the screen.

Screens files should have the same name as their route name, with `.screen.tsx` extension, while layouts get the `.layout.tsx` extension. Screen directories should follow the same pattern.

Example

```
app/
  (tabs)/
    _layout.tsx
    timeline.tsx
  members/
    _layout.tsx
    index.tsx
  _layout.tsx
  [...missing].tsx
  modal.tsx

screens/
  (tabs).screen/
    tabs.layout.tsx
    (home,explore).screen/
      components/
        exploreStack.tsx
        homeStack.tsx
      utilities/
        timelineSorting.ts
      timeline.layout.tsx
      timeline.screen.tsx
    members.screen/
      members.layout.tsx
      index.screen.tsx
  root.layout.tsx
  [...missing].screen.tsx
  modal.screen.tsx
```