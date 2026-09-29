'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Publication } from '@/types/publication';
import { PublicationPageConfig } from '@/types/page';
import { useMessages } from '@/lib/i18n/useMessages';
import FormattedBibTeXText from './FormattedBibTeXText';

interface PublicationsListProps {
    config: PublicationPageConfig;
    publications: Publication[];
    embedded?: boolean;
}

const authorUrls: Record<string, string> = {
    'Mayur Naik': 'https://www.cis.upenn.edu/~mhnaik/',
    'Zhiqiu Xu': 'https://oscarxzq.github.io/',
    'Zhiwei Zheng': 'https://zhiwei-zzz.github.io/',
    'Mingmin Zhao': 'https://www.cis.upenn.edu/~mingminz/',
    'Shangyu Gong': 'https://www.linkedin.com/in/shangyu-ricky-gong/',
};

export default function PublicationsList({ config, publications, embedded = false }: PublicationsListProps) {
    const messages = useMessages();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className="mb-8">
                {embedded
                    ? <h2 className="text-2xl font-serif font-bold text-primary mb-4">{config.title}</h2>
                    : <h1 className="text-4xl font-serif font-bold text-primary mb-4">{config.title}</h1>}
                {config.description && (
                    <p className={`${embedded ? "text-base" : "text-lg"} text-neutral-600 dark:text-neutral-500 max-w-2xl`}>
                        {config.description}
                    </p>
                )}
            </div>

            {/* Publications Grid */}
            <div className="space-y-6">
                {publications.length === 0 ? (
                    <div className="text-center py-12 text-neutral-500">
                        {messages.publications.noResults}
                    </div>
                ) : (
                    publications.map((pub, index) => (
                        <motion.div
                            key={pub.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            className="bg-white dark:bg-neutral-900 p-4 sm:p-5 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-all duration-200"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                {pub.preview && (
                                    <div
                                        className={`publication-preview ${pub.leaderboardUrl ? 'publication-preview--leaderboard' : ''} w-full max-w-72 mx-auto sm:mx-0 sm:max-w-none sm:w-[39%] min-[900px]:w-[42%] sm:flex-none rounded-lg overflow-hidden bg-white border border-neutral-100`}
                                        style={{ '--preview-aspect': Math.max(1.8, ((pub.previewWidth ?? 1200) / (pub.previewHeight ?? 600)) * 0.92) } as CSSProperties}
                                    >
                                        <Image
                                            src={`/papers/${pub.preview}`}
                                            alt={`Figure from ${pub.title}`}
                                            width={pub.previewWidth ?? 1200}
                                            height={pub.previewHeight ?? 600}
                                            className={`block w-full h-auto ${pub.leaderboardUrl ? 'object-left' : (pub.previewWidth ?? 0) / (pub.previewHeight ?? 1) > 2.5 ? 'object-[25%_center]' : 'object-center'}`}
                                            sizes={pub.leaderboardUrl
                                                ? '(max-width: 640px) 480px, (max-width: 900px) 65vw, (max-width: 1200px) 70vw, 700px'
                                                : '(max-width: 640px) 288px, (max-width: 900px) 39vw, (max-width: 1200px) 42vw, 420px'}
                                        />
                                    </div>
                                )}
                                <div className="min-w-0 flex-1">
                                    <h3 className={`${embedded ? "text-lg" : "text-xl"} font-semibold text-primary mb-1 leading-tight`}>
                                        <FormattedBibTeXText nodes={pub.titleNodes} fallback={pub.title} />
                                    </h3>
                                    <p className={`${embedded ? "text-sm" : "text-base"} text-neutral-600 dark:text-neutral-400 mb-1`}>
                                        {pub.authors.map((author, idx) => (
                                            <span key={idx}>
                                                {authorUrls[author.name] ? (
                                                    <a
                                                        href={authorUrls[author.name]}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-accent hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                                                    >
                                                        {author.name}
                                                    </a>
                                                ) : (
                                                    <span className={`${author.isHighlighted ? 'font-semibold text-accent' : ''} ${author.isCoAuthor ? `underline underline-offset-4 ${author.isHighlighted ? 'decoration-accent' : 'decoration-neutral-400'}` : ''}`}>
                                                        {author.name}
                                                    </span>
                                                )}
                                                {author.isEqualContribution && (
                                                    <sup className={`ml-0 ${author.isHighlighted ? 'text-accent' : 'text-neutral-600 dark:text-neutral-400'}`}>*</sup>
                                                )}
                                                {idx < pub.authors.length - 1 && ', '}
                                            </span>
                                        ))}
                                    </p>
                                    <p className="text-sm font-medium text-neutral-800 dark:text-neutral-600 mb-1">
                                        {pub.journal || pub.conference} {pub.year}
                                    </p>

                                    {(pub.url || pub.pdfUrl || pub.doi || pub.webpageUrl || pub.leaderboardUrl || pub.blogUrl || pub.code) && (
                                        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm font-medium">
                                            {(pub.url || pub.pdfUrl || pub.doi) && (
                                                <a href={pub.url || pub.pdfUrl || `https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                                                    [paper]
                                                </a>
                                            )}
                                            {pub.webpageUrl && (
                                                <a href={pub.webpageUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                                                    [webpage]
                                                </a>
                                            )}
                                            {pub.leaderboardUrl && (
                                                <a href={pub.leaderboardUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                                                    [leaderboard]
                                                </a>
                                            )}
                                            {pub.blogUrl && (
                                                <a href={pub.blogUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                                                    [blog]
                                                </a>
                                            )}
                                            {pub.code && (
                                                <a href={pub.code} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                                                    [code]
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </motion.div>
    );
}
