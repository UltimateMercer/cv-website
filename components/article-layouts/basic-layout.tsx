import Link from "next/link";
import AuthorInfo from "../article-related/author-info";
import { FormatFullTimeStamp } from "../date-format";
import { Badge } from "../ui/badge";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const BasicLayout = ({ doc, authordetails, next, prev, children }) => {
  const { author, slug, fileName, date, title, tags } = doc;

  const typography = doc.typography && `${doc.typography}-article`;

  return (
    <section className="main-article">
      <div className="max-w-full h-auto pt-6 mb-8">
        <div className="xl:max-w-[1080px] lg:max-w-[900px] max-w-full h-auto block lg:mx-auto lg:my-4 m-4">
          <h5 className="text-xl tracking-wider leading-normal font-medium">
            <FormatFullTimeStamp date={date} />
          </h5>
          <h1 className="md:text-5xl text-3xl font-extrabold tracking-wide mb-4">
            {title}
          </h1>
        </div>
        <div className="max-w-[1080px] block mx-auto mb-5">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={doc.cover ? doc.cover : doc.imageHeader}
            />
            <source
              media="(min-width: 769px)"
              srcSet={doc.cover ? doc.cover : doc.imageHeader}
            />
            <img
              src={doc.cover ? doc.cover : doc.imageHeader}
              className={"w-full lg:h-[650px] h-[500px] object-cover"}
              alt={`${title} Image`}
            />
          </picture>
        </div>
      </div>
      <article
        className={`article-grid prose !pb-12 dark:prose-dark ${
          typography && typography
        }`}
      >
        {children}
        {doc.gallery && doc.gallery.length > 0 && (
          <div>
            <h3 className="mb-4 rounded-md bg-dark-500 text-3xl font-bold text-light-500 dark:bg-light-500 dark:text-dark-500">
              <span className="marker-line rounded-md !py-2 !px-3">
                Galeria:
              </span>
            </h3>
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
                <Badge key={tag} className="!rounded-md ">
                  {tag}
                </Badge>
              ))}
            </div>
          </>
        )}
      </article>
      <div className="article-grid mb-4">
        <h4 className="text-3xl font-bold mb-4">Escrito por:</h4>
        <AuthorInfo author={author} />
      </div>
    </section>
  );
};

export default BasicLayout;
