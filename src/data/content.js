export const stats = [
  { value: 50000, suffix: '+', label: 'Meals & clothing distributed' },
  { value: 30000, suffix: '+', label: 'Interns trained via Project Vikas' },
  { value: 20000, suffix: '+', label: 'Saplings planted' },
  { value: 50, suffix: '+', label: 'Animals fed daily' },
]

export const credentials = [
  'Section 8 — Central Government licensed',
  '80G & 12A certified for donor transparency',
  'CSR-1 registered for corporate partnerships',
  'NITI Aayog registered',
  'IAF ISO 9001:2015 certified',
]

export const projects = [
  {
    id: 'seva',
    name: 'Project Seva',
    tagline: 'Food & dignity for all',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    impact: '50,000+ meals and clothing distributed to the underprivileged.',
    purpose:
      'Ensuring no one sleeps hungry — we provide nutritious meals and essential clothing to vulnerable communities across India.',
    hashtags: ['#ProjectSeva', '#FoodForAll', '#InAmigos'],
    date: '30 Jan 2025',
    views: 2840,
  },
  {
    id: 'bachpanshala',
    name: 'Project Bachpanshala',
    tagline: 'Education that transforms futures',
    image:
      'https://inamigosfoundation.org.in/public/storage/post/1738237659.jpeg',
    impact:
      'Digital literacy, life skills, and school education support for underprivileged children.',
    purpose:
      'Bridging educational gaps so every child can dream bigger — from classroom support to basic digital skills.',
    hashtags: ['#BachpanShala', '#EducationForAll', '#InAmigos'],
    date: '30 Jan 2025',
    views: 7240,
  },
  {
    id: 'jeev',
    name: 'Project Jeev',
    tagline: 'Compassion for every life',
    image:
      'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80',
    impact: '50+ stray animals fed daily through our volunteer network.',
    purpose:
      'Rescue, protection, feeding programs, and shelters — because every animal deserves care and safety.',
    hashtags: ['#ProjectJeev', '#AnimalWelfare', '#InAmigos'],
    date: '30 Jan 2025',
    views: 4294,
  },
  {
    id: 'udaan',
    name: 'Project Udaan',
    tagline: 'Where women rise together',
    image:
      'https://inamigosfoundation.org.in/public/storage/post/1738237839.jpeg',
    impact:
      'Self-help groups, skill development, financial independence, and menstrual hygiene awareness in rural India.',
    purpose:
      'Empowering women with skills, resources, and confidence to build independent, dignified lives.',
    hashtags: ['#ProjectUdaan', '#WomenEmpowerment', '#InAmigos'],
    date: '30 Jan 2025',
    views: 13818,
  },
  {
    id: 'prakriti',
    name: 'Project Prakriti',
    tagline: 'Sustainability in action',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    impact: '20,000+ saplings planted and eco-friendly agriculture supported.',
    purpose:
      'Environmental conservation through tree plantation, LIFE initiatives, and sustainable living advocacy.',
    hashtags: ['#ProjectPrakriti', '#LIFE', '#GreenIndia', '#InAmigos'],
    date: '30 Jan 2025',
    views: 2571,
  },
  {
    id: 'vikas',
    name: 'Project Vikas',
    tagline: 'Skills that open doors',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    impact:
      '30,000+ interns trained in data operations, finance, research, content writing, digital marketing, and social work.',
    purpose:
      "Enhancing employability through internships and skill programs — building India's next generation of professionals.",
    hashtags: ['#ProjectVikas', '#SkillDevelopment', '#InAmigos'],
    date: '01 Mar 2025',
    views: 4731,
  },
]

export const heroSlides = [
  {
    image: 'https://inamigosfoundation.org.in/public/storage/gallery/1738048982.jpg',
    title: 'Community Impact',
    subtitle: 'Volunteers making a difference across India',
  },
  ...projects.map((p) => ({
    image: p.image,
    title: p.name,
    subtitle: p.tagline,
  })),
]

export const campaigns = [
  {
    category: 'Community',
    date: '22 March 2025',
    title: 'World Water Day 2025',
    description:
      'This event highlights the importance of water conservation and collective action to ensure clean water for all.',
    image:
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    hashtags: ['#WorldWaterDay', '#SaveWater', '#InAmigos'],
  },
  {
    category: 'Community',
    date: '20 March 2025',
    title: 'International Day of Happiness 2025',
    description:
      'Join us in spreading joy, positivity, and well-being through engaging activities and inspiring discussions.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=480&fit=crop&auto=format&q=80',
    hashtags: ['#HappinessDay', '#WellBeing', '#InAmigos'],
  },
  {
    category: 'Education',
    date: '11 February 2025',
    title: 'International Day of Women and Girls in Science 2025',
    description:
      'Celebrate the International Day of Women and Girls in Science with workshops, stories, and inspiration for young minds.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=480&fit=crop&auto=format&q=80',
    hashtags: ['#WomenInScience', '#STEM', '#InAmigos'],
  },
]

export const highlights = [
  {
    title: 'Project Vikas: Transforming Careers',
    excerpt:
      'For the past four years, InAmigos Foundation has been committed to empowering young minds through Project Vikas, an initiative in data operations, finance, research, and more.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    date: '01 Mar 2025',
    views: 4731,
  },
  {
    title: 'Mission LIFE: Great Vision for Our Planet',
    excerpt:
      'Mission LIFE (Lifestyle For Environment) promotes sustainable living and combats climate change through everyday conscious choices.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    date: '30 Jan 2025',
    views: 2197,
  },
  {
    title: 'Save Water, Save Life: A Global Call',
    excerpt:
      'Water is life. Despite covering 70% of Earth, less than 1% is accessible and safe — join our conservation drive.',
    image:
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    date: '30 Jan 2025',
    views: 3367,
  },
  {
    title: 'Adopt a Healthy Lifestyle for Holistic Well-being',
    excerpt:
      'Discover simple, actionable steps to achieve holistic well-being for your body and mind with our wellness campaigns.',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    date: '30 Jan 2025',
    views: 1145,
  },
  {
    title: 'Udaan: Where Women Rise, Communities Thrive',
    excerpt:
      'Project Udaan transforms lives across India by providing skills, resources, and support to women in rural communities.',
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
    date: '30 Jan 2025',
    views: 13818,
  },
  {
    title: 'Project Jeev — In This Life, Every Paw Matters',
    excerpt:
      'Project Jeev is dedicated to helping stray animals through shelters, feeding programs, and emergency rescue efforts.',
    image:
      'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80',
    date: '30 Jan 2025',
    views: 4294,
  },
]

export const hashtags = [
  '#InAmigos',
  '#InAmigosFoundation',
  '#ProjectSeva',
  '#BachpanShala',
  '#ProjectJeev',
  '#ProjectUdaan',
  '#ProjectPrakriti',
  '#ProjectVikas',
  '#CSRForGood',
  '#VolunteerIndia',
  '#SocialImpact',
  '#NGOIndia',
  '#Chhattisgarh',
  '#CollectiveAction',
]

export const contact = {
  address: 'Ward No. 5, Gram Post, Sipat Ujwal Nagar, Bilaspur, Chhattisgarh — Pin: 495555',
  email: 'inamigosfoundation@gmail.com',
  phone: '+91 626 730 9902',
}
