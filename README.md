# GCF Batangas Church Website

A modern, responsive website for Gospel City Fellowship Batangas built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with mobile-first responsive layout
- **Complete Church Website**: All essential pages including Homepage, About, Sermons, Ministries, Events, Connect, and Online Giving
- **SEO Optimized**: Meta tags, structured data, and search engine friendly URLs
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance and loading speeds
- **Easy Content Management**: Structured content that can be easily updated by church staff

## Pages

### 🏠 Homepage
- Welcome message and church introduction
- Service times and key information
- Upcoming events preview
- Call-to-action sections for visitors

### ℹ️ About Us
- Church mission, vision, and values
- Church history and story
- Leadership team information
- Statement of faith

### 🎵 Sermons
- Sermon archive with search and filtering
- Audio and video playback options
- Series organization
- Podcast integration

### ⛪ Ministries
- Comprehensive ministry listings
- Ministry details and contact information
- Volunteer opportunities
- Leadership information

### 📅 Events
- Upcoming events calendar
- Event registration and details
- Regular activities schedule
- Newsletter signup

### 🤝 Connect
- Visitor information and service times
- Contact forms and information
- Next steps for involvement
- Interactive map integration

### 💝 Online Giving
- Secure online donation platform
- Multiple payment options
- Fund designation options
- Giving transparency information

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Heroicons
- **Fonts**: Inter (body text) and Playfair Display (headings)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/natadecua/gcfbatangas.git
cd gcfbatangas
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Content Management

The website is structured to allow easy content updates by church staff:

### Updating Content

1. **Event Information**: Edit `/src/app/events/page.tsx` to update upcoming events
2. **Sermon Archive**: Add new sermons in `/src/app/sermons/page.tsx`
3. **Ministry Information**: Update ministry details in `/src/app/ministries/page.tsx`
4. **Contact Information**: Update church details in the footer component and connect page
5. **Homepage Content**: Modify featured content in `/src/app/page.tsx`

### Adding New Content

- **New Events**: Add to the `upcomingEvents` array in the events page
- **New Sermons**: Add to the `sermons` array in the sermons page
- **New Ministries**: Add to the `ministries` array in the ministries page

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`. The primary color is blue with the following shades:
- Primary 50-900: Blue color palette
- Secondary 50-900: Pink accent colors

### Typography
- **Body Text**: Inter font family
- **Headings**: Playfair Display font family

### Layout
- **Container**: Max width of 7xl (80rem) centered
- **Responsive Breakpoints**: Mobile-first approach with sm, md, lg, xl breakpoints

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Other Platforms

The website can be deployed on any platform that supports Next.js applications:
- Netlify
- AWS Amplify
- Heroku
- DigitalOcean App Platform

## SEO Features

- Meta titles and descriptions for all pages
- Open Graph tags for social media sharing
- Structured data markup
- Semantic HTML structure
- Fast loading performance
- Mobile-friendly design

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Focus management
- Color contrast compliance
- Screen reader compatibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For technical support or questions about updating content, please contact:
- Email: info@gcfbatangas.org
- Phone: (043) 123-4567

## Acknowledgments

- Design inspiration from modern church websites
- Built with love for the GCF Batangas community
- Thanks to all contributors and supporters