# Easter Accordion

A highly configurable accordion built using Tailwind CSS

## Usage

i. Takes in data input in this `schema`:

```
[
    {
        id: unique,
        title: string,
        description: string
    }
]
```

ii. Pass in properties for configuration

```
{
    isOpen: bool,
    showWordCount: bool
    handleToggle: fn(){}
}
```
