import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity"
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == "blog"] | order(createdAt desc){
      title,
      description,
      "currentSlug": slug.current,
      titleImage
    }
    `
  const data = await client.fetch(query);
  return data;
}



export default async function Home() {

  const data: simpleBlogCard[] = await getData();

  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(post.titleImage).url()}
            alt={post.title}
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />
          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bolds">{post.title}</h3>
            <p className="text-sm line-clamp-3 mt-3 text-gray-500">{post.description}</p>
            <Button asChild className="w-full mt-5">
              <Link href={`/blog/${post.currentSlug}`}>Read More </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
