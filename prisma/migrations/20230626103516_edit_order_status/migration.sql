/*
  Warnings:

  - The values [processing,shipping] on the enum `Orders_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `orders` MODIFY `status` ENUM('pending', 'canceled', 'delivered') NOT NULL DEFAULT 'pending';
