import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useState } from "react";
import { Form } from "../../shared/form";
import { Button } from "../../shared/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../shared/tabs";
import { cn } from "../../../lib/utils";
import { Card } from "../../shared/card";
import type { FormGeneratorProps } from "./types";
import { getSchema, renderFields } from "./gen-functions";

export function FormGenerator({
  fields,
  onSubmit,
}: FormGeneratorProps): JSX.Element {
  const form = useForm({
    resolver: zodResolver(z.object(getSchema(fields))),
  });

  const [activeTab, setActiveTab] = useState<string | undefined>(String(0));

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        {Array.isArray(fields) ? (
          <Tabs value={activeTab}>
            <TabsList className="">
              {fields.map((field, idx) => (
                <TabsTrigger key={field.name} value={String(idx)}>
                  {field.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <Card className="p-5 my-4">
              {fields.map((fieldsObject, idx) => (
                <TabsContent key={fieldsObject.name} value={String(idx)}>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tighter mb-2">
                    {fieldsObject.header}
                  </h2>
                  <p className="tracking-tight text-warm mb-2">
                    {fieldsObject.description}
                  </p>
                  {Object.entries(fieldsObject.fields).map((field) =>
                    renderFields(field, form.control)
                  )}
                </TabsContent>
              ))}
              <div className="flex justify-between">
                <Button
                  disabled={Number(activeTab) === 0}
                  onClick={() => {
                    if (Number(activeTab) === 0) return;
                    setActiveTab((prevActiveTab) =>
                      String(Number(prevActiveTab) - 1)
                    );
                  }}
                  type="button"
                  variant="outline"
                >
                  Back
                </Button>
                <Button
                  className={cn(
                    "",
                    Number(activeTab) === fields.length - 1 && "hidden"
                  )}
                  onClick={async () => {
                    if (Number(activeTab) === fields.length - 1) return;
                    const fieldNames = Object.keys(
                      fields[Number(activeTab)].fields
                    );
                    const noError = await form.trigger(fieldNames, {
                      shouldFocus: true,
                    });
                    if (noError) {
                      setActiveTab((prevActiveTab) =>
                        String(Number(prevActiveTab) + 1)
                      );
                    }
                  }}
                  type="button"
                >
                  Next
                </Button>
                <Button
                  className={cn(
                    "",
                    Number(activeTab) !== fields.length - 1 && "hidden"
                  )}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Card>
          </Tabs>
        ) : (
          <Fragment>
            {Object.entries(fields).map((field) =>
              renderFields(field, form.control)
            )}
            <Button type="submit">Submit</Button>
          </Fragment>
        )}
      </form>
    </Form>
  );
}
