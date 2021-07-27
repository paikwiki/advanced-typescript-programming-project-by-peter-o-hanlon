enum TagType {
  Paragraph,
  Header1,
  Header2,
  Header3,
  HorizontalRule,
}

interface IMarkdownDocument {
  Add(...content: string[]): void;
  Get(): string;
}

interface IVisitor {
  Visit(token: ParseElement, MarkdownDocument: IMarkdownDocument): void;
}

interface IVisitable {
  Accept(
    visitor: IVisitor,
    toke: ParseElement,
    markdownDocument: IMarkdownDocument
  ): void;
}

abstract class VisitorBase implements IVisitor {
  constructor(
    private readonly tagType: TagType,
    private readonly TagTypeToHtml: TagTypeToHtml
  ) {}

  public Visit(token: ParseElement, markdownDocument: IMarkdownDocument): void {
    markdownDocument.Add(
      this.TagTypeToHtml.OpengingTag(this.tagType),
      token.CurrentLine,
      this.TagTypeToHtml.ClosingTag(this.tagType)
    );
  }
}

class Header1Visitor extends VisitorBase {
  constructor() {
    super(TagType.Header1, new TagTypeToHtml());
  }
}

class Header2Visitor extends VisitorBase {
  constructor() {
    super(TagType.Header2, new TagTypeToHtml());
  }
}

class Header3Visitor extends VisitorBase {
  constructor() {
    super(TagType.Header3, new TagTypeToHtml());
  }
}

class ParagraphVisitor extends VisitorBase {
  constructor() {
    super(TagType.Paragraph, new TagTypeToHtml());
  }
}

class HorizontalRuleVisitor extends VisitorBase {
  constructor() {
    super(TagType.HorizontalRule, new TagTypeToHtml());
  }
}

class Visitable implements IVisitable {
  public Accept(
    visitor: IVisitor,
    token: ParseElement,
    markdownDocument: IMarkdownDocument
  ): void {
    visitor.Visit(token, markdownDocument);
  }
}

class MarkdownDocument implements IMarkdownDocument {
  private content: string = "";

  Add(...content: string[]): void {
    content.forEach((element) => {
      this.content += element;
    });
  }

  Get(): string {
    return this.content;
  }
}

class ParseElement {
  CurrentLine: string = "";
}

class TagTypeToHtml {
  private readonly tagType: Map<TagType, string> = new Map<TagType, string>();

  constructor() {
    this.tagType.set(TagType.Header1, "h1");
    this.tagType.set(TagType.Header2, "h2");
    this.tagType.set(TagType.Header3, "h3");
    this.tagType.set(TagType.Paragraph, "p");
    this.tagType.set(TagType.HorizontalRule, "hr");
  }

  private GetTag(tagType: TagType, openingTagPattern: string): string {
    let tag = this.tagType.get(tagType);
    if (tag !== null) {
      return `${openingTagPattern}${tag}>`;
    }
    return `${openingTagPattern}p>`;
  }

  public OpeningTag(tagType: TagType): string {
    return this.GetTag(tagType, `<`);
  }

  public ClosingTag(tagType: TagType): string {
    return this.GetTag(tagType, `</`);
  }
}

class HtmlHandler {
  public TextChangeHandler(id: string, output: string): void {
    let markdown = <HTMLTextAreaElement>document.getElementById(id);
    let markdownOutput = <HTMLLabelElement>document.getElementById(output);
    if (markdown !== null) {
      markdown.onkeyup = (e) => {
        if (markdown.value) {
          markdownOutput.innerHTML = markdown.value;
        } else {
          markdownOutput.innerHTML = "<p></p>";
        }
      };
    }
  }
}
