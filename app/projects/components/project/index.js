"use client";
import React from "react";
import styles from "./style.module.css";

export default function index({ index, title, setModal, year }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2 className="text-4xl">{title}</h2>
      <p className="">{year}</p>
    </div>
  );
}
