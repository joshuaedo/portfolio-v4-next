"use client";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

export default function index({ index, title, setModal, year, slug }) {
  return (
    <Link
      href={`/projects/${slug}`}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2 className="section-text">{title}</h2>
      <p className="text-xs md:text-sm">{year}</p>
    </Link>
  );
}
