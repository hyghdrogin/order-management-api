/*
  Warnings:

  - You are about to drop the column `deleted` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `orders` DROP COLUMN `deleted`;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false;
