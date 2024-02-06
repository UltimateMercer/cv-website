import Link from "next/link";
import AuthorInfo from "../article-related/author-info";
import { FormatFullTimeStamp } from "../date-format";
import { Badge } from "../ui/badge";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const FullpageLayout = ({ doc, authordetails, next, prev, children }) => {
  const { author, slug, fileName, date, title, tags } = doc;

  const typography = doc.typography && `${doc.typography}-article`;

  return (
    <section className="two-column-article">
      <div className="info-article">
        <div className="z-40 sticky top-16 h-[calc(100vh-64px)]">
          <img
            src={doc.cover ? doc.cover : doc.imageHeader}
            className={`w-full h-[calc(100vh-64px)] object-cover`}
            alt={`${title} image`}
          />
          <div className="z-[41] absolute inset-0 py-8 px-6">
            <div className="flex h-full flex-col justify-end">
              <h5 className="text-xl tracking-wider leading-normal font-medium mb-2">
                <span className="bg-dark-500 text-light-500 px-2 py-1">
                  <FormatFullTimeStamp date={date} />
                </span>
              </h5>
              <h1 className="md:text-5xl text-3xl font-extrabold tracking-wide !leading-normal mb-4">
                <span className="bg-dark-500 text-light-500 px-2 py-1">
                  {title}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="content-article">
        <div
          className={`two-column-article-grid prose !pb-8 dark:prose-dark ${
            typography && typography
          }`}
        >
          {children}
          {doc.gallery && doc.gallery.length > 0 && (
            <div>
              <h3 className="rounded-md mb-4 bg-dark-500 text-3xl font-bold text-light-500 dark:bg-light-500 dark:text-dark-500">
                <span className="marker-line !py-2 !px-3">Galeria:</span>
              </h3>
              <ScrollArea className="h-full w-full p-4">
                <div className="table min-w-full">
                  <div className="flex gap-5 pb-4">
                    {doc.gallery.map((image, index) => (
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
                  <Badge key={tag} className="!rounded-md ">
                    {tag}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="two-column-article-grid mb-4">
          <h4 className="text-3xl font-bold mb-4">Escrito por:</h4>
          <AuthorInfo author={author} />
        </div>
      </div>
    </section>
  );
};

export default FullpageLayout;
