"use client";

import Header from "@/components/Header";
import Loading from "@/components/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetPaymentsQuery,
  useGetPropertyLeasesQuery,
  useGetCovoiturageQuery,
} from "@/state/api";
import { ArrowDownToLine, ArrowLeft, Check, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const PropertyTenants = () => {
  const { id } = useParams();
  const propertyId = Number(id);

  const { data: property, isLoading: propertyLoading } = useGetCovoiturageQuery(propertyId);
  const { data: leases, isLoading: leasesLoading } = useGetPropertyLeasesQuery(propertyId);
  const { data: payments, isLoading: paymentsLoading } = useGetPaymentsQuery(propertyId);

  if (propertyLoading || leasesLoading || paymentsLoading) return <Loading />;

  const getCurrentMonthPaymentStatus = (leaseId: number) => {
    const currentDate = new Date();
    const currentMonthPayment = payments?.find(
      (payment) =>
        payment.leaseId === leaseId &&
        new Date(payment.dueDate).getMonth() === currentDate.getMonth() &&
        new Date(payment.dueDate).getFullYear() === currentDate.getFullYear()
    );
    return currentMonthPayment?.paymentStatus || "Not Paid";
  };

  return (
    <div className="dashboard-container">
      {/* Back to properties page */}
      <Link
        href="/conducteurs/properties"
        className="flex items-center mb-4 hover:text-primary-500"
        scroll={false}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        <span>Retour aux trajets</span>
      </Link>

      <Header
        title={property?.name || "My Property"}
        subtitle="Voir les détails et historiques des trajets"
      />

      <div className="w-full space-y-6">
        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">Fiche conducteur</h2>
              <p className="text-sm text-gray-500">
                Aperçu de vos trajets
              </p>
            </div>
            <div>
              <button
                className={`bg-white border border-gray-300 text-gray-700 py-2
              px-4 rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
              >
                <Download className="w-5 h-5 mr-2" />
                <span>Télécharger le PDF</span>
              </button>
            </div>
          </div>
          <hr className="mt-4 mb-1" />
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom complet du conducteur</TableHead>
                  <TableHead>Période du trajet</TableHead>
                  <TableHead>Point de départ</TableHead>
                  <TableHead>Point d’arrivée</TableHead>
                  <TableHead>Animaux autorisés</TableHead>
                  <TableHead>Statut du trajet</TableHead>
                  <TableHead>Immatriculation véhicule</TableHead>
                  <TableHead>Date de soumission</TableHead>
                  <TableHead>Contact (tèl.)	</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTenants;