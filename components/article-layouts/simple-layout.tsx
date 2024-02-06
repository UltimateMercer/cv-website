import Link from "next/link";
import AuthorInfo from "../article-related/author-info";
import { FormatFullTimeStamp } from "../date-format";
import { Badge } from "../ui/badge";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const SimpleLayout = ({ doc, authordetails, next, prev, children }) => {
  const { author, slug, fileName, date, title, tags } = doc;

  const typography = doc.typography && `${doc.typography}-article`;

  return (
    <section className="main-article py-4">
      <div className="article-grid">
        <h5 className="text-xl tracking-wider leading-normal font-medium mb-2">
          <FormatFullTimeStamp date={date} />
        </h5>
        <h1 className="md:text-5xl text-3xl font-extrabold tracking-wide !leading-normal mb-4">
          {title}
        </h1>
      </div>
      <article
        className={`article-grid prose !pb-12 dark:prose-dark ${
          typography && typography
        }`}
      >
        {children}
        {doc.gallery && doc.gallery.length > 0 && (
          <div>
            <h3 className="mb-4 text-3xl font-bold ">Galeria:</h3>
            <ScrollArea className="h-full w-full p-4">
              <div className="table min-w-full">
                <div className="flex gap-5 pb-4">
                  {doc.gallery.map((image: any, index: any) => (
                    <Link
                      href={image}
                      target="_blank"
                      key={index}
                      className="contents"
                    >
                      <img
                        src={image}
                        className="max-w-full object-cover mx-auto"
                        alt={`${title} image ${index}`}
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        )}
        {tags && tags.length > 0 && (
          <>
            <h4 className="text-2xl font-bold mb-4">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag: any) => (
                <Badge key={tag} className="!rounded-sm ">
                  {tag}
                </Badge>
              ))}
            </div>
          </>
        )}
      </article>
      <div className="article-grid mb-4">
        <h4 className="text-2xl font-bold">Escrito por:</h4>
        <AuthorInfo author={author} />
      </div>
    </section>
  );
};

export default SimpleLayout;
