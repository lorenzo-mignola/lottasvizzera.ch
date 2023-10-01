import { Address } from "../icons/address";
import { Email } from "../icons/email";
import { Phone } from "../icons/phone";

interface ContactsCardProps {
  title: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  action?: boolean;
  size?: "small" | "large";
}

export function ContactsCard({
  title,
  name,
  email,
  phone,
  address,
  action = false,
  size = "small",
}: ContactsCardProps) {
  return (
    <div
      className={`card w-full border border-neutral bg-base-100 shadow-sm ${
        size === "small" ? "lg:w-72" : "lg:w-96"
      }`}
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3>{name}</h3>
        {email ? (
          <p className="flex items-center gap-1">
            <Email />
            {email}
          </p>
        ) : null}
        {phone ? (
          <p className="flex items-center gap-1">
            <Phone />
            {phone}
          </p>
        ) : null}
        {address ? (
          <p className="flex items-center gap-1">
            <Address />
            {address}
          </p>
        ) : null}
        {action ? (
          <div className="card-actions justify-end">
            <button className="btn btn-neutral" type="button">
              Contatta
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
