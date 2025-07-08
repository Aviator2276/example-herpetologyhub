import ImageSliderHero from '@/components/ImageSliderHero';
import Navbar from '@/components/Navbar';
import ImageCard from '@/components/ui/image-card';

function Home() {
  return (
    <>
      <Navbar />
      <ImageSliderHero />
      <main className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        <br className='my-4' />
        <h2 className='text-2xl font-heading sm:text-4xl'>
          What is herpetology?
        </h2>
        <br className='my-2' />
        <p>
          Herpetology is the scientific study of amphibians (like frogs,
          salamanders, and newts) and reptiles (including snakes, lizards,
          turtles, crocodiles, and alligators). This specialized field of
          zoology investigates everything from their biology, ecology, and
          behavior to their evolution and conservation. Despite being distinct
          biological groups, amphibians and reptiles are often studied together
          due to historical classifications and shared characteristics, such as
          being ectothermic—meaning they rely on external heat sources to
          regulate their body temperature. Understanding herpetology is crucial
          for appreciating the vital role these often-misunderstood creatures
          play in our ecosystems and for developing strategies to protect them.
        </p>
        <br className='my-2' />
        <div className='flex flex-wrap flex-row gap-2 justify-evenly'>
          <ImageCard
            caption='These fascinating creatures, often called "herps," are incredibly diverse, found in almost every habitat on Earth. Herpetologists explore their unique behaviors, intricate ecologies, and vital roles in nature.'
            imageUrl='https://images.unsplash.com/photo-1698435354321-0bccb1549b4d?w=200&auto=format&fit=crop'
          ></ImageCard>
          <ImageCard
            caption='Amphibians and reptiles are far more than just intriguing animals; they are crucial to healthy ecosystems worldwide. They play roles as both predators and prey, helping to maintain balance in food webs.'
            imageUrl='https://images.unsplash.com/photo-1570116909750-1ccde6be780a?q=80&w=200&auto=format&fit=crop'
            className='object-contain'
          ></ImageCard>
          <ImageCard
            caption={
              "Ready to explore the world of herpetology further? Our site offers a wealth of information. Whether you're curious about a specific snake, want to identify a frog in your backyard, or simply love nature, you'll find something new here."
            }
            imageUrl='https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?q=80&w=1476&auto=format&fit=crop'
            className='object-cover'
          ></ImageCard>
        </div>
      </main>
      <footer className='my-10'></footer>
    </>
  );
}

export default Home;
