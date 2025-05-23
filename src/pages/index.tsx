import Head from "next/head";
import { TestBlock } from "@/components/TestBlock";
import { TestBlock2 } from "@/components/TestBlock2";
import { tailblocksblock2 } from "@/components/tailblocksblock2";
export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <>
        <TestBlock2
          t1="Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage."
          t2="Button"
        />
        <TestBlock
          t1="Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage."
          t2="Button"
        />
        <TestBlock
          t1="Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage."
          t2="Button"
        />
        <TestBlock
          t1="Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage."
          t2="Button"
        />
        <TestBlock
          t1="Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage."
          t2="Button"
        />
        <tailblocksblock2 t1="Block2" />
        <TestBlock
          t1="Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage."
          t2="Button"
        />
      </>
    </>
  );
}
