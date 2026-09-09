"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  serviceCategories,
  servicesByCategory,
  type Service,
} from "@/content/services";
import { CategoryTabs } from "@/components/services/CategoryTabs";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceModal } from "@/components/services/ServiceModal";
import { ease } from "@/lib/motion";

export function ServicesExplorer() {
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState<Service | null>(null);

  const list = useMemo(() => servicesByCategory(category), [category]);

  return (
    <div>
      <CategoryTabs
        categories={serviceCategories}
        active={category}
        onChange={setCategory}
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((service, i) => (
            <motion.li
              key={service.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.28, ease, delay: Math.min(i * 0.04, 0.3) },
              }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.18, ease } }}
            >
              <ServiceCard service={service} onOpen={setSelected} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
