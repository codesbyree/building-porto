"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import type { AnalyticsCategory } from "@/features/analytics/config/data";
import { ScrollArea } from "@/components/ui/scroll-area";

const toneClassName: Record<string, string> = {
  amber: "text-amber-300 dark:text-amber-400 font-medium",
  green: "text-green-300 dark:text-green-500",
  cyan: "text-cyan-300 dark:text-cyan-400",
  muted: "text-muted-foreground",
};

export function AnalyticsDataTable({ category }: { category: AnalyticsCategory }) {
  const searchParams = useSearchParams();
  const logKey = searchParams.get("logKey") ?? "";

  const [pageSize, setPageSize] = useState(20);
  const [page, setPage] = useState(1);

  // Track logKey state during render to reset page without useEffect
  const [prevLogKey, setPrevLogKey] = useState(logKey);
  if (prevLogKey !== logKey) {
    setPrevLogKey(logKey);
    setPage(1);
  }

  const filteredRows = useMemo(() => {
    if (!logKey.trim()) return category.rows;

    const query = logKey.toLowerCase();
    return category.rows.filter((row) => Object.values(row).some((value) => value.toLowerCase().includes(query)));
  }, [category.rows, logKey]);

  const pageCount = Math.max(1, Math.ceil(filteredRows.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const paginatedRows = filteredRows.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden p-2 pr-0 rounded-md bg-gray-950/60 outline-gray-600/20 outline">
        <ScrollArea className="max-h-[calc(100dvh-235px)] w-full pr-3">
          <Table>
            <TableHeader className="sticky top-0 z-10">
              <TableRow className="border-gray-50/20 dark:border-border">
                {category.columns.map((column) => (
                  <TableHead key={column.key} className="text-sm text-gray-50">
                    {column.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedRows.length === 0 ? (
                <TableRow className="border-gray-50/20 dark:border-border">
                  <TableCell colSpan={category.columns.length} className="h-20 text-center text-sm text-gray-50">
                    No results found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedRows.map((row, index) => (
                  <TableRow key={index} className="border-gray-50/20 dark:border-border">
                    {category.columns.map((column) => (
                      <TableCell key={column.key} className={cn("text-sm text-gray-50", column.tone && toneClassName[column.tone])}>
                        {row[column.key]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-50/70 p-2 rounded-md bg-gray-950/60 outline-gray-600/20 outline">
        <p>{filteredRows.length} total row(s)</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Rows per page</span>
            <Select
              value={String(pageSize)}
              onValueChange={(value) => {
                setPageSize(Number(value));
                setPage(1);
              }}
            >
              <SelectTrigger size="sm" className="w-16">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
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
