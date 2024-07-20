"use client"

import { ChangeEvent } from "react";
import { Dying } from "~/components/dying";
import { ProgressLife } from "~/components/progress-life";
import { ProgressSanity } from "~/components/progress-sanity";
import { Card, CardContent, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useToast } from "~/components/ui/use-toast";
import { Unconscious } from "~/components/unconscious";
import { user } from "~/server/test";

export default function HomePage({ params }: { params: { name: string } }) {
  const { toast } = useToast();

  function onUpdate(data: ChangeEvent<HTMLInputElement>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data.target.value, null, 2)}</code>
        </pre>
      ),
    })
  }


  return (
    <>
      <div className="grid grid-cols-3">
        <Card className="p-5 my-2 mx-1">
          <CardTitle className="text-center">
            Informações
          </CardTitle>
          <CardContent className="my-5 space-y-5">
            <div>
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" defaultValue={"db.nome"} onChange={onUpdate} />
            </div>
            <div>
              Jogador
              <Input />
            </div>
            <div>
              Sexokk
              <Input />
            </div>
          </CardContent>
        </Card>

        <Card className="p-5 my-2 mx-1">
          <CardTitle className="text-center">
            Status
          </CardTitle>
          <CardContent className="my-5 space-y-5">
            <div>
              <div className="flex flex-row">
                <p className="grow">Vida</p>
                <p className="grow text-end">8/10</p>
              </div>
              <ProgressLife value={user.vida} />
            </div>
            <div>
              <div className="flex flex-row">
                <p className="grow">Sanidade</p>
                <p className="grow text-end">8/10</p>
              </div>
              <ProgressSanity value={76} />
            </div>
            <div>
              <div className="grid grid-cols-2 space-x-5">
                <Dying>Morrendo</Dying>
                <Unconscious>Inconsciente</Unconscious>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
