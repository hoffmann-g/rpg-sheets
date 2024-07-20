"use client"

import React from "react";
import { Card } from "./ui/card";
import { cn } from "~/lib/utils";
import { Progress } from "@radix-ui/react-progress";
import { db } from "~/server/db";

export const getServerSideProps = async() => {
}

const Status = () => {
    const [progress, setProgress] = React.useState(13)
 
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500)
      return () => clearTimeout(timer)
    }, [])

    return <Progress value={progress} />
}

export { Status };