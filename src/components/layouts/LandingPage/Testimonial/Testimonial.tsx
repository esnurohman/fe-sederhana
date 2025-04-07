import CardTestimonial from "@/components/ui/CardTestimonial";

const Testimonial = () => {
  return (
    <div id="testimonials" className="max-w-4xl mx-auto my-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Testimonials</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <CardTestimonial />
          <CardTestimonial />
          <CardTestimonial />
          <CardTestimonial />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
