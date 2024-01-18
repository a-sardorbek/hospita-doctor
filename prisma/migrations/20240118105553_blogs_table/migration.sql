-- CreateTable
CREATE TABLE "blog" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "logo" VARCHAR NOT NULL,
    "house_id" UUID NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(0),

    CONSTRAINT "blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResourceFilesOnBlogs" (
    "blog_id" UUID NOT NULL,
    "resource_id" UUID NOT NULL,

    CONSTRAINT "ResourceFilesOnBlogs_pkey" PRIMARY KEY ("blog_id","resource_id")
);

-- AddForeignKey
ALTER TABLE "ResourceFilesOnBlogs" ADD CONSTRAINT "ResourceFilesOnBlogs_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceFilesOnBlogs" ADD CONSTRAINT "ResourceFilesOnBlogs_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "resource_file"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
