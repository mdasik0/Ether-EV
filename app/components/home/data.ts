export const navItems = [
  { label: "Home", target: "home" },
  { label: "About Us", target: "about" },
  { label: "Capabilities", target: "technology" },
  { label: "Team", target: "team" },
  { label: "Testimonials", target: "product" },
  { label: "Contact", target: "contact" },
] as const;

export const thumbs = [
  "/header-image/header-image-1.jpeg",
  "/header-image/header-image-2.jpg",
  "/header-image/header-image-3.jpg",
  "/header-image/header-image-4.jpg",
] as const;

export const testimonials = [
  {
    quote:
      "This electric vehicle completely changed my daily commute. It's quiet, responsive, and the charging network is way more accessible than I expected.",
    name: "Amanda Rivera",
    initials: "AR",
  },
  {
    quote:
      "As someone who drives long distances, I'm impressed by the comfort and battery range. It's built for real-world use, not just show.",
    name: "Jordan Riley",
    initials: "JR",
  },
  {
    quote:
      "The ride quality is smooth, tech is intuitive, and the customer support is excellent. Easily one of the best EV experiences I've had.",
    name: "James Lin",
    initials: "JL",
  },
  {
    quote:
      "Charging has become effortless. The route planning and station visibility make weekend road trips far more predictable and stress-free.",
    name: "Priya Sen",
    initials: "PS",
  },
  {
    quote:
      "The build quality feels premium, and I love how quickly the app responds. It gives me confidence every time I head out.",
    name: "Noah Carter",
    initials: "NC",
  },
  {
    quote:
      "From onboarding to daily driving, the whole experience is polished. It feels like a complete EV ecosystem, not just a vehicle.",
    name: "Fatima Rahman",
    initials: "FR",
  },
] as const;

export const teamMembers = [
  {
    name: "Anis Hannan Chowdhury",
    role: "Chairman",
    image: "/users/chairman.jpg",
  },
  {
    name: "Syed Sahdab Mahbub",
    role: "Managing Director",
    image: "/users/Managing%20Director.jpg",
  },
  {
    name: "Nabil Hossain",
    role: "Director",
    image: "/users/director-one.jpg",
  },
  {
    name: "Farzana Karim",
    role: "Director",
    image: "/users/director-two.jpeg",
  },
] as const;
