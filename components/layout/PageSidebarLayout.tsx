import { renderToString } from "react-dom/server";
import { Container } from "./Container";
import { PageHeader } from "./PageHeader";

export function PageSidebarLayout({ children, meta }) {
  const contentString = renderToString(children);
  const { title, subTitle, ...attrs } = meta;

  const getHeadings = (source) => {
    const regex = /<h2 id=\s*.*>\s*.*<\/h2>/g;

    if (source.match(regex)) {
      console.log("source", source);
      return source.match(regex).map((heading) => {
        console.log("heading", heading);
        const link = heading.replace("h2", "a").replace('id="', `href="#`);
        return link;
      });
    }

    return [];
  };

  const headings = getHeadings(contentString);

  return (
    <>
      <PageHeader title={meta.title} {...attrs}>
        {meta?.subTitle}
      </PageHeader>
      <section className="pb-24">
        <Container className="flex flex-wrap">
          <div className="w-full px-4 md:w-1/4 sm:pr-2">
            <div className="sticky p-2 mt-4 top-12">
              <h2 className="mt-0 text-xl">Table of Contents</h2>
              {headings.length > 0 ? (
                <ol className="pl-2 border-l-4 border-gray-300">
                  {headings.map((heading) => (
                    <li
                      key={heading}
                      className="mb-3 text-base font-medium leading-tight hover:text-raven-orange active:text-raven-orange focus:text-raven-orange"
                      dangerouslySetInnerHTML={{ __html: heading }}
                    ></li>
                  ))}
                </ol>
              ) : null}
            </div>
          </div>
          <div className="w-full px-4 md:w-3/4 sm:pl-2">{children}</div>
        </Container>
      </section>
    </>
  );
}

export default PageSidebarLayout;
