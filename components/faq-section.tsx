import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full mb-20">
        <AccordionItem value="item-1">
          <AccordionTrigger>What types of templates does EasyUI.pro offer?</AccordionTrigger>
          <AccordionContent>
            EasyUI.pro provides a collection of premium Next.js website templates, including landing pages designed for various purposes, such as marketing, product launches, and personal portfolios.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is there any cost associated with using EasyUI.pro templates?</AccordionTrigger>
          <AccordionContent>
            EasyUI.pro offers a 100% free collection of landing page templates. Users can access a limited number of examples for free, with additional templates available through various subscription plans.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What support options are available for users?</AccordionTrigger>
          <AccordionContent>
            Users of EasyUI.pro can access community support for free plans. For those on paid plans, additional support options include priority assistance and dedicated account management.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  