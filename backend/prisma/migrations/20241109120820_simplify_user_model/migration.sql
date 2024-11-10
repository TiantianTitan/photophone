/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Candidature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Competence` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Entreprise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Etudiant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EtudiantCompetence` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Favori` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Offre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Recruteur` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Universite` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Candidature" DROP CONSTRAINT "Candidature_etudiantId_fkey";

-- DropForeignKey
ALTER TABLE "Candidature" DROP CONSTRAINT "Candidature_offreId_fkey";

-- DropForeignKey
ALTER TABLE "Etudiant" DROP CONSTRAINT "Etudiant_universiteId_fkey";

-- DropForeignKey
ALTER TABLE "Etudiant" DROP CONSTRAINT "Etudiant_userId_fkey";

-- DropForeignKey
ALTER TABLE "EtudiantCompetence" DROP CONSTRAINT "EtudiantCompetence_competenceId_fkey";

-- DropForeignKey
ALTER TABLE "EtudiantCompetence" DROP CONSTRAINT "EtudiantCompetence_etudiantId_fkey";

-- DropForeignKey
ALTER TABLE "Favori" DROP CONSTRAINT "Favori_etudiantId_fkey";

-- DropForeignKey
ALTER TABLE "Favori" DROP CONSTRAINT "Favori_offreId_fkey";

-- DropForeignKey
ALTER TABLE "Offre" DROP CONSTRAINT "Offre_recruteurId_fkey";

-- DropForeignKey
ALTER TABLE "Recruteur" DROP CONSTRAINT "Recruteur_entrepriseId_fkey";

-- DropForeignKey
ALTER TABLE "Recruteur" DROP CONSTRAINT "Recruteur_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role";

-- DropTable
DROP TABLE "Candidature";

-- DropTable
DROP TABLE "Competence";

-- DropTable
DROP TABLE "Entreprise";

-- DropTable
DROP TABLE "Etudiant";

-- DropTable
DROP TABLE "EtudiantCompetence";

-- DropTable
DROP TABLE "Favori";

-- DropTable
DROP TABLE "Offre";

-- DropTable
DROP TABLE "Recruteur";

-- DropTable
DROP TABLE "Universite";

-- DropEnum
DROP TYPE "EtatCandidature";

-- DropEnum
DROP TYPE "Poste";

-- DropEnum
DROP TYPE "Role";

-- DropEnum
DROP TYPE "Rythme";
