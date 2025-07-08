'use client';

import * as React from 'react';
import { Link } from 'react-router';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { cn } from '@/lib/utils';

const components = [
  {
    title: 'Overview',
    href: '/',
    description:
      'Explore fascinating insights and general information about the world of reptiles and amphibians.',
  },
  {
    title: 'Reptile Facts',
    href: '/',
    description:
      'Discover amazing and little-known facts about various reptiles, from their unique adaptations to their diverse habitats.',
  },
  {
    title: 'Crocodalia Facts',
    href: '/',
    description:
      'Dive into intriguing facts about alligators, crocodiles, caimans, and gharials – the ancient order of Crocodalia.',
  },
  {
    title: 'Lizard Facts',
    href: '/',
    description:
      'Uncover surprising details and fun facts about the incredibly diverse world of lizards.',
  },
  {
    title: 'Snake Facts',
    href: '/',
    description:
      'Slither into a collection of captivating facts about snakes, including their behaviors, venom, and unique characteristics.',
  },
  {
    title: 'Turtle Facts',
    href: '/',
    description:
      'Shell-ebrate with interesting facts about turtles and tortoises, from their longevity to their protective shells.',
  },
];

const Navbar = () => {
  return (
    <div className='fixed z-10 top-0.5 sm:top-5 left-0 w-screen md:w-full'>
      <NavigationMenu className='p-2.5 px-10 mx-auto'>
        <NavigationMenuList className='flex justify-evenly flex-col md:flex-row'>
          <Link to='/' className='font-base text-lg'>
            <NavigationMenuItem className='flex items-center gap-6 cursor-pointer pr-4'>
              <img src='./logo.png' alt='logo' className='h-12 w-12'></img>
              <h1 className='text-2xl'>Herpetology Hub</h1>
            </NavigationMenuItem>
          </Link>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className=' gap-3 p-2'>
              <Link
                className='flex h-full w-full select-none no-underline outline-hidden font-base text-lg'
                to='/'
              >
                Reptile News
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='font-base text-lg'>
              Fun Facts
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid max-w-[370px] sm:max-w-full gap-3 p-2 md:grid-cols-2 md:w-[874px] '>
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    link={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='font-base text-lg'>
              Games
            </NavigationMenuTrigger>
            <NavigationMenuContent className=''>
              <ul className='grid max-w-[370px] sm:max-w-full gap-3 p-2 md:grid-cols-[.75fr_1fr] md:w-[874px]'>
                <li className='row-span-4'>
                  <NavigationMenuLink asChild>
                    <Link
                      className='flex h-full w-full select-none flex-col justify-end rounded-base p-3 no-underline outline-hidden'
                      to='/'
                    >
                      <div className='mb-2 mt-4 text-lg font-heading'>
                        Explore the Herpetological World Through Play!
                      </div>
                      <p className='text-sm font-base leading-tight'>
                        Dive into our collection of interactive games designed
                        to test your knowledge and deepen your understanding of
                        amphibians and reptiles.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem link='/' title='Crossword'>
                  Test your knowledge with clues about snakes, frogs, lizards,
                  and more!
                </ListItem>
                <ListItem link='/' title='Wordsearch'>
                  Find hidden terms related to herpetology in our challenging
                  puzzles.
                </ListItem>
                <ListItem link='/' title='Matching Games'>
                  Match reptiles to another in order.
                </ListItem>
                <ListItem link='/' title='Trivia'>
                  How much do you know about herpetology? Play our trivia to
                  find out!
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='font-base text-lg'>
              About Us
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid max-w-[370px] sm:max-w-full gap-3 p-2 md:grid-cols-[.75fr_1fr] md:w-[874px]'>
                <li className='row-span-4'>
                  <NavigationMenuLink asChild>
                    <Link
                      className='flex h-full w-full select-none flex-col justify-end rounded-base p-3 no-underline outline-hidden'
                      to='/'
                    >
                      <div className='mb-2 mt-4 text-lg font-heading'>
                        A bit from the Author
                      </div>
                      <p className='text-sm font-base leading-tight'>
                        Discover the story behind Herpetology Hub, straight from
                        the creator's passion for reptiles and amphibians. Learn
                        what inspired this comprehensive resource!
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem link='/' title='Author Bio'>
                  A page about the author. My pets are included, of course. (2
                  lizards, learn more here!)
                </ListItem>
                <ListItem link='/' title='Inspiration and Credits'>
                  This is a huge thank you to these people who inspired and
                  helped me create the beautiful website I have today.
                </ListItem>
                <ListItem link='/' title='How to Get Involved'>
                  This is a page explaining how to get involved internationally
                  and in your local community to learn about and help reptiles.
                  It also explains the importance of involvement.
                </ListItem>
                <ListItem link='/' title='Feedback Form'>
                  Any feedback that I end up using will result in the name you
                  insert here going into the credits page. Thank you for your
                  assistance!
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

function ListItem({ className, title, link, children, ...props }) {
  return (
    <ul>
      <li>
        <NavigationMenuLink asChild>
          <Link
            to={link}
            className={cn(
              'hover:bg-accent block text-main-foreground select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-hidden transition-colors hover:border-border',
              className
            )}
            {...props}
          >
            <div className='text-base font-heading leading-none'>{title}</div>
            <p className='font-base line-clamp-2 text-sm leading-snug'>
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    </ul>
  );
}
ListItem.displayName = 'ListItem';

export default Navbar;
