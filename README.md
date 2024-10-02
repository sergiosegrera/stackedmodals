# StackedModals

From what I could visually gather from the tweet the visual effect/animation is the following:

- Once the child modal is opened the parent modal is scaled down and moved up, it is also greyed out.
- The child modal has an enter animation where it moves up slightly
- Once the child is closed, the parent is reset.
- The background is blurry instead of opaque

If I had more time, I would’ve:

- Removed the default top right “X” button, I think I would have to modify the shadcn component.

- Find a way to make the cards the same size? To make it look more similar to the tweet?

- Overriden the child modal's enter animation and sequencing it with the parent modal (using maybe a passed ref back to the parent)? This way I could have the child's entering animation.

- Found a way to make it modular so it could work with any number of children? Maybe make a NestedDialog component?

- Validated the number input? Max Min etc… limit the rows on the table? (Not in the requirements, but would be the logical next step?)

- Found a way to do it with just css? (This would be the most performant)
