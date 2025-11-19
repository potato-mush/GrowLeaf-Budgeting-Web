import * as React from "react";

type AccordionContextValue = {
  value: string | undefined;
  onValueChange: (value: string) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "single";
  collapsible?: boolean;
  defaultValue?: string;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className = "", children, defaultValue, ...props }, ref) => {
    const [value, setValue] = React.useState<string | undefined>(defaultValue);

    const handleValueChange = (itemValue: string) => {
      setValue(value === itemValue ? undefined : itemValue);
    };

    return (
      <AccordionContext.Provider value={{ value, onValueChange: handleValueChange }}>
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = "Accordion";

export const AccordionItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
  ({ className = "", value, children, ...props }, ref) => (
    <div ref={ref} className={className} data-value={value} {...props}>
      {children}
    </div>
  )
);

AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", children, onClick, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const itemElement = buttonRef.current?.closest('[data-value]');
      const itemValue = itemElement?.getAttribute('data-value');
      if (itemValue && context) {
        context.onValueChange(itemValue);
      }
      onClick?.(e);
    };

    // Get current item value to check if it's open
    const itemValue = buttonRef.current?.closest('[data-value]')?.getAttribute('data-value');
    const isOpen = context?.value === itemValue;
    
    return (
      <button
        ref={(node) => {
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
          (buttonRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }}
        type="button"
        className={`flex w-full items-center justify-between py-4 font-medium transition-all hover:underline ${className}`}
        onClick={handleClick}
        {...props}
      >
        {children}
        <svg
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    );
  }
);

AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", children, style, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const [height, setHeight] = React.useState<number>(0);

    // Get parent item value
    const itemValue = contentRef.current?.closest('[data-value]')?.getAttribute('data-value');
    const isOpen = context?.value === itemValue;

    // Measure content height when it changes
    React.useEffect(() => {
      if (contentRef.current) {
        const child = contentRef.current.firstElementChild as HTMLElement;
        if (child) {
          setHeight(child.offsetHeight);
        }
      }
    }, [children, isOpen]);

    return (
      <div
        ref={(node) => {
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
          (contentRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={`overflow-hidden transition-all duration-200 ease-in-out ${className}`}
        style={{
          height: isOpen ? `${height}px` : '0px',
          ...style
        }}
        {...props}
      >
        <div className="pb-4 pt-0">{children}</div>
      </div>
    );
  }
);

AccordionContent.displayName = "AccordionContent";
