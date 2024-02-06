import { Metadata, ResolvingMetadata } from "next";
import { MDXComponents } from "@/components/mdx";
import { allArticles } from "@/.contentlayer/generated";
import { getArticle } from "@/services";

const LAYOUTS = ["basic-layout", "fullpage-layout", "simple-layout"];

const DEFAULT_LAYOUT = "basic-layout";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateStaticParams = async () =>
  allArticles.map((doc: any) => ({
    slug: doc.slug.replace("/articles/", ""),
  }));

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const article = allArticles.find(
    (article) => article.slug === `/articles/${params.slug}`
  );

  const authors = {
    name: article?.author.name,
  };
  const images = article?.cover
    ? article?.cover
    : article?.imageHeader
    ? article?.imageHeader
    : "/cv-logo.jpg";

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: article?.title,
    authors: [authors],
    openGraph: {
      images: images,
    },
  };
}

const Article = ({ params }: { params: { slug: string } }) => {
  const data = getArticle({ params });

  return (
    <>
      {data && (
        <MDXComponents
          layout={
            data.article?.layout && LAYOUTS.includes(data.article?.layout)
              ? data.article?.layout
              : DEFAULT_LAYOUT
          }
          doc={data.article}
          code={data.article?.body.code}
          authordetails={data.article?.author}
          prev={data.prev}
          next={data.next}
        />
      )}
    </>
  );
};
export default Article;
