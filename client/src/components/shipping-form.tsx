import { ShippingFormInputs, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });
  const router = useRouter()

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data)
    router.push("/cart?step=3", {scroll: false})
  };

  return (
    <form
      onSubmit={handleSubmit(handleShippingForm)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          id="name"
          {...register("name")}
          className="border-b border-gray-200 outline-none py-2 text-sm"
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-primary font-medium" htmlFor="name">
          Email
        </label>
        <input
          type="email"
          placeholder="johndoe@example.com"
          id="email"
          {...register("email")}
          className="border-b border-gray-200 outline-none py-2 text-sm"
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-primary font-medium" htmlFor="name">
          Phone
        </label>
        <input
          type="phone"
          placeholder="+1-(456)-789-455"
          id="phone"
          {...register("phone")}
          className="border-b border-gray-200 outline-none py-2 text-sm"
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-primary font-medium" htmlFor="name">
          Address
        </label>
        <input
          type="address"
          placeholder="123 Main st, Oakland"
          id="address"
          {...register("address")}
          className="border-b border-gray-200 outline-none py-2 text-sm"
        />
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-primary font-medium" htmlFor="name">
          City
        </label>
        <input
          type="city"
          placeholder="Washington"
          id="city"
          {...register("city")}
          className="border-b border-gray-200 outline-none py-2 text-sm"
        />
        {errors.city && (
          <p className="text-xs text-red-500">{errors.city.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-background text-foreground p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300"
      >
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  );
};

export default ShippingForm;
