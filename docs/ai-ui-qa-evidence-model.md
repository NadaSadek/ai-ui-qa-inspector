# AI UI QA Inspector evidence model

AI UI QA Inspector uses a simple evidence model:

```txt
screenshot + DOM snippet -> structured QA finding
```

The important constraint is that the model must not mix visual evidence with implementation evidence.

## Evidence fields

Each finding includes:

- `visualObservation`
- `domEvidence`
- `userImpact`
- `suggestedFix`

## `visualObservation`

`visualObservation` is for screenshot-visible facts only.

It can describe:

- visible text
- visible layout
- visible controls
- visible state
- visible hierarchy
- visible error messages
- visible toasts, modals, menus, tables and step indicators

Good examples:

```txt
The top row visually acts as column headers with Customer, Status, Amount, and Date.
```

```txt
The account control shows initials, a user name, and a chevron.
```

```txt
A pale-green toast appears in the upper-right with the message "Saved".
```

Bad examples:

```txt
The headers are rendered as td instead of th.
```

```txt
The trigger is a div with no button semantics.
```

```txt
The toast has no aria-live attribute.
```

Those are implementation claims and belong in `domEvidence`, `userImpact`, or `suggestedFix`.

## `domEvidence`

`domEvidence` quotes the smallest relevant DOM fragment that supports the finding.

Good example:

```html
<thead>
  <tr>
    <td>Customer</td>
    <td>Status</td>
    <td>Amount</td>
    <td>Date</td>
  </tr>
</thead>
```

Bad example:

```html
<section>
  ...full page DOM...
</section>
```

The DOM evidence should be specific enough to support the issue without dumping the whole snippet.

## Why

Without this constraint, AI output can sound confident while using the wrong evidence source.

Bad evidence:

```txt
visualObservation: The table uses td elements instead of th elements.
```

A screenshot can only show that a row looks like headers without knowing what type of element it is. However, the DOM proves whether the row uses `td` or `th`.

Correct version:

```txt
visualObservation: The table header shows column titles: Customer, Status, Amount, and Date.
domEvidence: <thead><tr><td>Customer</td>...</tr></thead>
```


## Current validation

The project validates:

- every mock result matches the output schema
- every inspection target has a matching mock result
- every inspection target points to an existing screenshot
- visual observations don't include DOM or accessibility implementation claims

The above explained validation doesn't make AI output perfect. It makes the output safer to review.
