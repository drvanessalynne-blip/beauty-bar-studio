import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Divider, Text } from "@/components/ui";
import { cn } from "@/lib/cn";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function FAQAccordion({ items, allowMultiple = false, className }: FAQAccordionProps) {
  const baseId = useId();
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((current) => {
      const isOpen = current.includes(index);
      if (allowMultiple) {
        return isOpen ? current.filter((i) => i !== index) : [...current, index];
      }
      return isOpen ? [] : [index];
    });
  };

  return (
    <div className={cn("flex flex-col", className)}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const buttonId = `${baseId}-question-${index}`;
        const panelId = `${baseId}-answer-${index}`;

        return (
          <div key={item.question}>
            {index > 0 && <Divider />}
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
              >
                <Text as="span" weight="medium" size="lg">
                  {item.question}
                </Text>
                <ChevronDown
                  size={20}
                  strokeWidth={1.5}
                  className={cn(
                    "shrink-0 text-rose-gold motion-safe:transition-transform motion-safe:duration-250",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6"
            >
              <Text color="muted">{item.answer}</Text>
            </div>
          </div>
        );
      })}
    </div>
  );
}
