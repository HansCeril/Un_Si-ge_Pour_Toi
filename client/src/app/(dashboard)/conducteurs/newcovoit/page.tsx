"use client";

import { CustomFormField } from "@/components/FormField";
import Header from "@/components/Header";
import { Form } from "@/components/ui/form";
import { CovoiturageFormData, covoiturageSchema } from "@/lib/schemas";
import { useCreateCovoiturageMutation, useGetAuthUserQuery } from "@/state/api";
import { CarTypeEnum } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const NewCovoiturage = () => {
  const [createCovoiturage] = useCreateCovoiturageMutation();
  const { data: authUser } = useGetAuthUserQuery();
  console.log(authUser)

  const form = useForm<CovoiturageFormData>({
    resolver: zodResolver(covoiturageSchema),
    defaultValues: {
      name: "",
      description: "",
      isPetsAllowed: true,
      photoUrls: [],
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
  });
  
  const onSubmit = async (data: CovoiturageFormData) => {
    console.log("heeel")
    if (!authUser?.cognitoInfo?.userId) {
      throw new Error("No manager ID found");
    }

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "photoUrls") {
        const files = value as File[];
        files.forEach((file: File) => {
          formData.append("photos", file);
        });
      } else if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    });

    formData.append("conducteurCognitoId", authUser.cognitoInfo.userId);

    await createCovoiturage(formData);
  };

  return (
    <div className="dashboard-container">
      <Header
        title="Ajouter un nouveau trajet"
        subtitle="Publiez une offre de covoiturage avec tous les détails"
      />
      <div className="bg-white rounded-xl p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 space-y-10"
          >
            {/* Informations principales */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Informations principales</h2>
              <div className="space-y-4">
                <CustomFormField name="name" label="Nom du conducteur" />
                <CustomFormField
                  name="description"
                  label="Description"
                  type="textarea"
                />
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Covoiturage Details */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold mb-4">Détails</h2>
        
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <CustomFormField
                  name="isPetsAllowed"
                  label="Animaux autorisés"
                  type="switch"
                />
              </div>
              <div className="mt-4">
                <CustomFormField
                  name="carType"
                  label="Type de voiture"
                  type="select"
                  options={Object.keys(CarTypeEnum).map((type) => ({
                    value: type,
                    label: type,
                  }))}
                />
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Photos */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Photos</h2>
              <CustomFormField
                name="photoUrls"
                label="Photos du conducteur"
                type="file"
                accept="image/*"
              />
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Additional Information */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold mb-4">
                Informations supplémentaires
              </h2>
              <CustomFormField name="address" label="Adresse" />
              <div className="flex justify-between gap-4">
                <CustomFormField name="city" label="Ville" className="w-full" />
                <CustomFormField
                  name="state"
                  label="Région"
                  className="w-full"
                />
                <CustomFormField
                  name="postalCode"
                  label="Code postal"
                  className="w-full"
                />
              </div>
              <CustomFormField name="country" label="Pays" />
            </div>

            <Button
                type="submit"
                className="bg-primary-700 text-white w-full mt-8"                  
            >
              Publier le trajet
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewCovoiturage;