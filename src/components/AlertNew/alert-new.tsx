"use client";
import Link from "next/link";
import React from "react";
import { useAlertNew } from "../../../util/hooks/useAlertNew";

export function AlertNew() {
  const { closeAlert, alertClosed } = useAlertNew();

  if (alertClosed) {
    return null;
  }

  return (
    <div className="flex items-center justify-between bg-primary p-2 text-xs text-primary-content lg:px-4 lg:text-base">
      <div className="p-4">
        <h5 className="text-lg font-bold">Novità</h5>
        <p>Tappetone gonfiabile per prova la lotta svizzera</p>
      </div>
      <div className="flex items-center gap-1">
        <Link href="/pages/mat">
          <button
            className="btn btn-outline text-xs uppercase text-white lg:text-base"
            onClick={closeAlert}
            type="button"
          >
            Info
          </button>
        </Link>
        <button
          className="btn btn-circle btn-outline border-0 text-primary-content"
          onClick={closeAlert}
          type="button"
        >
          <svg
            className="size-3 lg:size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
