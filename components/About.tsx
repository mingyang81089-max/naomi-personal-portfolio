"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        // <p>{t("desc")}</p> //这样一段话没法分段
        <div className="flex flex-col gap-2">
          <div>A creative and hands-on media enthusiast with real experience in video production, PR campaigns, and digital content. I enjoy taking projects from idea to reality—whether directing a documentary, planning short videos, or supporting PR activities. I am a collaborative and adaptable teammate, always curious about digital trends and eager to contribute in a practical, supportive role.
          </div>
          <div>
          </div>
          <div>E-mail: yangming2218@163.com
          </div>
          <div>Phone: 7721618423
          </div>
        </div>
      ) : (
        <>
          <p className="mb-3">
            A creative and hands-on media enthusiast with real experience in video production, PR campaigns, and digital content.
            I enjoy taking projects from idea to reality—whether directing a documentary, planning short videos, or supporting PR activities. {" "}
            <span className="font-medium italic">
              Literally wearing every hat from director and editor to on-set problem solver.
            </span>
          </p>

          <p>
            E-mail: yangming2218@163.com
          </p>
           <p>
            Phone: 7721618423
          </p>
        </>
      )}
    </motion.section>
  )
}
