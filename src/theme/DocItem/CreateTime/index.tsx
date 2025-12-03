import React, { type ReactNode } from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDateTimeFormat } from '@docusaurus/theme-common/internal';
import clsx from 'clsx';

interface Props {
  className?: string;
}

function CreatedAtDate({ createdAt }: { createdAt: number }): ReactNode {
  const atDate = new Date(createdAt);
  
  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
  
  const formattedCreatedAt = dateTimeFormat.format(atDate);
  
  return (
    <time dateTime={atDate.toISOString()} itemProp="dateCreated">
      {formattedCreatedAt}
    </time>
  );
}

export default function DocItemCreateTime({ className }: Props): ReactNode {
  const { metadata } = useDoc();
  const { frontMatter } = metadata;
  
  // 从front matter中获取创建时间
  const createdAt = frontMatter.createdAt || frontMatter.createdTime || frontMatter.createTime;
  
  // 如果没有创建时间，则不显示
  if (!createdAt) {
    return null;
  }
  
  // 处理不同格式的时间
  let createTimeValue: number | null = null;
  
  if (typeof createdAt === 'number') {
    // Unix timestamp (seconds)
    createTimeValue = createdAt * 1000;
  } else if (typeof createdAt === 'string') {
    // Date string
    const date = new Date(createdAt);
    if (!isNaN(date.getTime())) {
      createTimeValue = date.getTime();
    }
  }
  
  if (!createTimeValue) {
    return null;
  }
  
  return (
    <div className={clsx(className, ThemeClassNames.common.lastUpdated)}>
      <span>
        创建时间: <CreatedAtDate createdAt={createTimeValue} />
      </span>
    </div>
  );
}