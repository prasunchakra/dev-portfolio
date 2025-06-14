# Building Our Portfolio's Structure: Laying the Semantic Foundation

## Topics Covered

### 1. Text Structure & Semantics
- **Paragraphs**
  - `<p>` - Basic paragraph element

- **Headings**
  - `<h1>` to `<h6>` - Hierarchical heading elements

- **Bold & Italics**
  - Semantic: `<strong>`, `<em>`
  - Stylistic: `<b>`, `<i>`

- **Special Text Elements**
  - Superscript/Subscript: `<sup>`, `<sub>`
  - Small text: `<small>`

### 2. Lists
- **Ordered Lists**
  - `<ol>` - Numbered lists

- **Unordered Lists**
  - `<ul>` - Bulleted lists

- **Description Lists**
  - `<dl>` - Description list container
  - `<dt>` - Description term
  - `<dd>` - Description details

### 3. Quotations & Citations
- **Block Quotes**
  - `<blockquote>` - Long quotations

- **Inline Quotes**
  - `<q>` - Short inline quotations

- **Citations**
  - `<cite>` - Reference citations

### 4. Dates & Times
- **Machine-readable Dates**
  - `<time datetime="...">` - Structured date/time information

### 5. Special Characters
- **Character Entities**
  - `&lt;` - Less than
  - `&copy;` - Copyright
  - `&nbsp;` - Non-breaking space

### 6. Code Display
- **Inline Code**
  - `<code>` - Inline code snippets

- **Preformatted Text**
  - `<pre>` - Preserved formatting

- **Line Breaks**
  - `<br>` - Line break element

### 7. Tables
- **Table Structure**
  - `<table>` - Table container
  - `<tr>` - Table row
  - `<td>` - Table data cell
  - `<th>` - Table header cell
  - `<caption>` - Table caption

### 8. Document Structure
- **DOM Relationships**
  - Parent/child/sibling nodes
  - Tree structure visualization

- **Semantic Layout**
  - `<header>` - Page header
  - `<main>` - Main content
  - `<footer>` - Page footer
  - `<section>` - Content section
  - `<article>` - Self-contained content
  - `<aside>` - Sidebar content

### 9. HTML Document Basics
- **Document Type**
  - `<!DOCTYPE html>`

- **HTML Root**
  - `<html lang="...">`

- **Head Section**
  - `<title>` - Page title
  - Meta tags (charset, viewport)
  - `<link>` - External resources

- **Body Structure**
  - `<body>` - Main content container

---

*Each topic includes code examples and explanations of semantic best practices.*

## Quiz Section

### 1. Which HTML tag is used to define a paragraph?

- A: `<div>`
- B: `<p>`
- C: `<span>`
- D: `<section>`

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The `<p>` tag is used to define paragraphs in HTML. It automatically inserts visual spacing between blocks of text, making content more readable.
</details>

---

### 2. What is the correct order of heading tags from highest to lowest importance?

- A: `<h6>`, `<h5>`, `<h4>`, `<h3>`, `<h2>`, `<h1>`
- B: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
- C: `<h3>`, `<h2>`, `<h1>`, `<h4>`, `<h5>`, `<h6>`
- D: `<h2>`, `<h1>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`

<details>
<summary><b>Answer</b></summary>

#### Answer: B

Headings range from `<h1>` (most important) to `<h6>` (least important), forming a clear content hierarchy.
</details>

---

### 3. Which list type should you use when the order of items matters?

- A: `<ul>`
- B: `<ol>`
- C: `<dl>`
- D: `<li>`

<details>
<summary><b>Answer</b></summary>

#### Answer: B

Ordered lists `<ol>` are used when the order of items matters, such as in instructions or steps.
</details>

---

### 4. What is the semantic difference between `<strong>` and `<b>` tags?

- A: `<strong>` is for styling only; `<b>` indicates importance
- B: `<strong>` indicates importance; `<b>` is for styling only
- C: Both tags have the same semantic meaning
- D: `<b>` is deprecated; `<strong>` is the standard tag

<details>
<summary><b>Answer</b></summary>

#### Answer: B

`<strong>` indicates importance and is semantic, while `<b>` is purely for stylistic bolding without semantic meaning.
</details>

---

### 5. How do you correctly include the less-than symbol < in HTML content?

- A: `<lt>`
- B: `&lt;`
- C: `<less>`
- D: `&less;`

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The less-than symbol is represented by the character entity `&lt;` in HTML.
</details>

---

### 6. Which tag is used for short inline quotations that automatically add quotation marks?

- A: `<blockquote>`
- B: `<q>`
- C: `<cite>`
- D: `<quote>`

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The `<q>` tag is used for short inline quotes and automatically adds curly quotation marks.
</details>

---

### 7. What is the purpose of the `<time>` tag in HTML?

- A: To display the current time dynamically
- B: To mark up dates and times in a machine-readable way
- C: To create countdown timers
- D: To format text as timestamps visually only

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The `<time>` tag marks up dates and times with a machine-readable datetime attribute, improving accessibility and SEO.
</details>

---

### 8. Which element provides a title or description for an HTML table?

- A: `<thead>`
- B: `<caption>`
- C: `<title>`
- D: `<summary>`

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The `<caption>` element provides an optional title or description for a table, appearing above the table.
</details>

---

### 9. In the DOM tree, what is the relationship between two elements that share the same parent?

- A: Parent and child
- B: Ancestor and descendant
- C: Siblings
- D: Unrelated

<details>
<summary><b>Answer</b></summary>

#### Answer: C

Elements with the same parent are siblings in the DOM tree.
</details>

---

### 10. Which HTML5 semantic element is best suited for self-contained content like blog posts?

- A: `<section>`
- B: `<article>`
- C: `<aside>`
- D: `<div>`

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The `<article>` element is used for self-contained content such as blog posts or product cards.
</details>

