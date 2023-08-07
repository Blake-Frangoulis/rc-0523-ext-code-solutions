# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Special functions that are only available while React is rendering

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  The three rules are: They must start with use, they can only be called from React components and other hooks, and they must be called on every render

- What is the purpose of state in React?
  To change what’s on the screen as a result of an interaction.

- Why can't we just maintain state in a local variable?
  Local variables don’t persist between renders.

- What two actions happen when you call a `state setter` function?
  The state variable is updated and react renders the component again

- When does the local `state variable` get updated with the new value?
  When the state setter function is called.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
