import type {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

import { cn } from "@/shared/lib/cn";

const fieldClass =
  "min-h-12 w-full rounded-lg border border-border bg-white px-4 text-sm text-foreground transition-colors placeholder:text-muted/70 hover:border-muted focus:border-brand focus:outline-none disabled:cursor-not-allowed disabled:bg-stone";

type FieldShellProps = {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
};

function FieldShell({ id, label, error, children }: FieldShellProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor={id}>
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-sm text-primary" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function TextField({ id, label, error, className, ...props }: TextFieldProps) {
  const fieldId = id ?? props.name ?? label;

  return (
    <FieldShell error={error} id={fieldId} label={label}>
      <input
        aria-describedby={error ? `${fieldId}-error` : undefined}
        aria-invalid={Boolean(error)}
        className={cn(fieldClass, className)}
        id={fieldId}
        {...props}
      />
    </FieldShell>
  );
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: string[];
  placeholder?: string;
};

export function SelectField({
  id,
  label,
  error,
  options,
  placeholder = "Selecciona una opción",
  className,
  ...props
}: SelectFieldProps) {
  const fieldId = id ?? props.name ?? label;

  return (
    <FieldShell error={error} id={fieldId} label={label}>
      <select
        aria-describedby={error ? `${fieldId}-error` : undefined}
        aria-invalid={Boolean(error)}
        className={cn(fieldClass, className)}
        id={fieldId}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function TextareaField({
  id,
  label,
  error,
  className,
  ...props
}: TextareaFieldProps) {
  const fieldId = id ?? props.name ?? label;

  return (
    <FieldShell error={error} id={fieldId} label={label}>
      <textarea
        aria-describedby={error ? `${fieldId}-error` : undefined}
        aria-invalid={Boolean(error)}
        className={cn(fieldClass, "min-h-32 py-3", className)}
        id={fieldId}
        {...props}
      />
    </FieldShell>
  );
}

type FileFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> & {
  label: string;
  error?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function FileField({ id, label, error, className, ...props }: FileFieldProps) {
  const fieldId = id ?? props.name ?? label;

  return (
    <FieldShell error={error} id={fieldId} label={label}>
      <input
        aria-describedby={error ? `${fieldId}-error` : undefined}
        aria-invalid={Boolean(error)}
        className={cn(
          "block min-h-12 w-full rounded-lg border border-dashed border-border bg-white px-4 py-3 text-sm text-muted file:mr-4 file:rounded-md file:border-0 file:bg-stone file:px-3 file:py-2 file:text-sm file:font-semibold file:text-foreground hover:border-muted focus:border-brand focus:outline-none",
          className,
        )}
        id={fieldId}
        type="file"
        {...props}
      />
    </FieldShell>
  );
}

type CheckboxFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function CheckboxField({ id, label, error, className, ...props }: CheckboxFieldProps) {
  const fieldId = id ?? props.name ?? label;

  return (
    <div>
      <label className="flex gap-3 text-sm leading-6 text-muted" htmlFor={fieldId}>
        <input
          aria-describedby={error ? `${fieldId}-error` : undefined}
          aria-invalid={Boolean(error)}
          className={cn("mt-1 h-4 w-4 accent-brand", className)}
          id={fieldId}
          type="checkbox"
          {...props}
        />
        <span>{label}</span>
      </label>
      {error ? (
        <p className="mt-2 text-sm text-primary" id={`${fieldId}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
