import EmptyState from "@/components/features/emptyState";
import PageFrame from "@/components/ui/frame";
import React from "react";

function BlogPageContent() {
  const blogs = [];
  return (
    <PageFrame>
      {blogs.length === 0 ? (
        <EmptyState message={"هیچ مقاله‌ای منتشر نشده است."} />
      ) : (
        <div>{/* لیست مقالات */}</div>
      )}
    </PageFrame>
  );
}

export default BlogPageContent;
