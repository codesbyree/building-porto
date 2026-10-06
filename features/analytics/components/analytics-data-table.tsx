"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import type { AnalyticsCategory } from "@/features/analytics/data";

const toneClassName: Record<string, string> = {
  amber: "text-amber-600 dark:text-amber-400 font-medium",
  green: "text-green-600 dark:text-green-500",
  cyan: "text-cyan-600 dark:text-cyan-400",
  muted: "text-muted-foreground",
};

export function AnalyticsDataTable({ category }: { category: AnalyticsCategory }) {
  const searchParams = useSearchParams();
  const logKey = searchParams.get("logKey") ?? "";

  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);

  const filteredRows = useMemo(() => {
    if (!logKey.trim()) return category.rows;

    const query = logKey.toLowerCase();
    return category.rows.filter((row) => Object.values(row).some((value) => value.toLowerCase().includes(query)));
  }, [category.rows, logKey]);

  const pageCount = Math.max(1, Math.ceil(filteredRows.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const paginatedRows = filteredRows.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-lg ring-1 ring-foreground/10">
        <Table>
          <TableHeader>
            <TableRow>
              {category.columns.map((column) => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedRows.length === 0 && (
              <TableRow>
                <TableCell colSpan={category.columns.length} className="h-20 text-center text-muted-foreground">
                  No results found.
                </TableCell>
              </TableRow>
            )}
            {paginatedRows.map((row, index) => (
              <TableRow key={index}>
                {category.columns.map((column) => (
                  <TableCell key={column.key} className={cn(column.tone && toneClassName[column.tone])}>
                    {row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>{filteredRows.length} total row(s)</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Rows per page</span>
            <Select
              value={pageSize}
              onValueChange={(value) => {
                setPageSize(value as number);
                setPage(1);
              }}
            >
              <SelectTrigger size="sm" className="w-16">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={5}>5</SelectItem>
                <SelectItem value={10}>10</SelectItem>
                <SelectItem value={20}>20</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <p>
            Page {currentPage} of {pageCount}
          </p>

          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" disabled={currentPage <= 1} onClick={() => setPage((prev) => Math.max(1, prev - 1))}>
              Prev
            </Button>
            <Button variant="outline" size="sm" disabled={currentPage >= pageCount} onClick={() => setPage((prev) => Math.min(pageCount, prev + 1))}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
