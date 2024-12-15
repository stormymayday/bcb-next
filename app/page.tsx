import { db } from "@/utils/db";
import { farmers } from "@prisma/client";

export default async function Home() {
    const farmers: farmers[] = await db.farmers.findMany();

    return (
        <div>
            {farmers.map((farmer) => {
                return <div key={farmer.id}>{farmer.producerName}</div>;
            })}
        </div>
    );
}
