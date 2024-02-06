"use client";
import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";
import { Skeleton } from "@/components/ui/skeleton";

import { getArticles } from "@/services";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FormatDate } from "@/components/date-format";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function page() {
  const initialState = [...getArticles];
  const [isLoading, setIsLoading] = React.useState<Boolean>(true);
  const [displayArticles, setDisplayArticles] = React.useState<any[]>([]);

  const searchSchema = z.object({
    search: z.string(),
  });

  const { handleSubmit, register, watch } = useForm<
    z.infer<typeof searchSchema>
  >({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: "",
    },
  });

  const search = watch("search");

  const filterProjects = useDebouncedCallback((search) => {
    if (search) {
      const articles = [...initialState];
      const data = articles.filter((article) => {
        const searchContent = article.title;
        return searchContent.toLowerCase().includes(search.toLowerCase());
      });

      setDisplayArticles(data);
      setIsLoading(false);
    } else {
      setDisplayArticles(initialState);
      setIsLoading(false);
    }
  }, 1000);

  const onSubmit = (value: z.infer<typeof searchSchema>) => {
    const { search } = value;
    filterProjects(search);
  };

  React.useEffect(() => {
    filterProjects(search);
  }, [search]);

  return (
    <main className="container-fluid py-6 px-5">
      <h1 className="text-4xl text-center font-bold mb-5">Artigos</h1>
      <section className="container mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2 pb-8 md:space-y-5">
            <div className="flex justify-center mb-4">
              <div className="relative max-w-lg flex-1">
                <input
                  {...register("search")}
                  aria-label="Pesquisar artigos"
                  type="text"
                  placeholder="Pesquisar artigos"
                  className="block w-full rounded-sm border border-gray-300 bg-light-500 px-4 py-2 text-dark-500 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
                />
                <svg
                  className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </form>

        {isLoading && (
          <div className="flex items-start gap-2 py-2">
            <Skeleton className="w-56 h-40 rounded-md" />
            <div className="flex-1 py-0 space-y-2">
              <Skeleton className="h-8 w-full rounded-md" />
              <Skeleton className="h-4 w-64 rounded-md" />
              <Skeleton className="h-4 w-[160px]  rounded-md" />
              <div className="flex gap-2 items-center">
                <Skeleton className="h-5 w-24 rounded-md" />
                <Skeleton className="h-12 w-12 rounded-full" />
              </div>
            </div>
          </div>
        )}

        {!isLoading && displayArticles.length > 0 && (
          <div className="flex flex-col gap-y-3">
            {displayArticles.map((article) => (
              <Card
                className="flex items-start !border-none rounded-xs shadow-none hover:hover-card bg-transparent hover:hover-card-dark hover:dark:hover-card-light py-2"
                key={`${article.title}`}
              >
                <div className="w-56 h-40 rounded-xs overflow-hidden">
                  <img
                    src={article.cover ? article.cover : article.imageHeader}
                    className="w-56 h-40 scale-125 object-cover rounded-xs hidden sm:block"
                    alt=""
                  />
                </div>
                <CardContent className="flex-1 py-0">
                  <CardTitle className="text-2xl tracking-wide mb-2">
                    <Link className="hover:underline" href={`${article.slug}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                  {article.description && (
                    <p className="mb-2">{article.description}</p>
                  )}
                  <div className="mb-2 flex flex-wrap gap-1">
                    {article.tags &&
                      article.tags.length > 0 &&
                      article.tags.map((tag: any) => (
                        <Badge
                          className="rounded-sm font-mono"
                          variant="secondary"
                          key={tag}
                        >
                          {tag}
                        </Badge>
                      ))}
                  </div>
                  <div className="flex items-center my-1">
                    <time className="mr-2">
                      <FormatDate date={article.date} />
                    </time>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <img
                            src={article.author.avatar}
                            alt={`${article.author.name} photo`}
                            className="w-10 h-10 object-cover rounded-full border border-dark-500 mr-2"
                          />
                        </TooltipTrigger>
                        <TooltipContent align="center" side="right">
                          <p className="font-mono">{article.author.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!isLoading && displayArticles.length === 0 && (
          <h1 className="text-center font-bold text-7xl my-14">
            Nenhum artigo encontrado!
          </h1>
        )}
      </section>
    </main>
  );
}
