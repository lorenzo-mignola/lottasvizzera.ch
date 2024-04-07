"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className="m-auto flex h-full flex-col items-center justify-center gap-3">
      <h2 className="text-xl">Errore</h2>
      <h2 className="text-xl">Fehler</h2>
      <Link className="mt-3" href="/">
        <button className="btn btn-primary uppercase" type="button">
          Home
        </button>
      </Link>
    </div>
  );
}
