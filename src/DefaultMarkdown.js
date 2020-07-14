
const space = '  ';

const defaultMarkdown = `# Heading level 1

## Heading level 2

### Heading level 3

To create a line break, end a line with two or more spaces, and then type return.${space}

To bold text, add two asterisks **bold text**.${space}
To italicize text, add one asterisk *italic text*.${space}
This text is ***bold and italics at the same time***.${space}

### Code Blocks

To denote a word or phrase as code, enclose it in backticks.${space}
At the command prompt, type \`nano\`.${space}
To create code blocks, surrund them with 3 backticks.${space}
\`\`\`
<html>
	<head>
	</head>
</html>
\`\`\`

Remember to use a good font with Powerline symbols for code
\`\`\`
=> >=  <= == === !=
\`\`\`

### Blockquotes

To create a blockquote, add a > in front of a paragraph.

> Dorothy followed her through many of the beautiful rooms in her castle.

Blockquotes can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Lists

To create an ordered list, add line items with numbers followed by periods${space}

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items${space}
- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item


To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.${space}

____

To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com)).${space}
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).${space}

To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column. You can optionally add pipes on either end of the table.${space}

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

### Images

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.
![Markdown previewer made with React](logo.svg "Made with React")

`

export default defaultMarkdown;