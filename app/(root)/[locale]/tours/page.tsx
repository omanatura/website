import CardTour from "@/components/cards/CardTour";
import { tours } from "@/data/tours"

const Tours = () => {
  return (
    <main className="container mx-auto p-5 sm:p-0 mt-24 mb-10">
  <div
    className="grid gap-5 grid-cols-1 md:grid-cols-3 md:col-span-2 md:mx-[10vw] lg:mx-[15vw]"
  >
    <div className="md:col-span-3 w-full">
    <h2 className="text-center font-extrabold drop-shadow-md text-4xl md:text-5xl text-primary my-5">
            Tours
          </h2>
        <div className="divider h-10 mb-7"></div>
    </div>
    {tours.map((tour, index) => {
        return (
          <div key={tour.name} className={`${index === 0 ? "md:col-span-3" : null}`}>
            <CardTour tour={tour}/>
          </div>
        );
      })
    }
  </div>
</main>
  )
}

export default Tours