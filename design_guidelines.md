# Design Guidelines: Leen Youness Profile Card

## Design Approach
**Reference-Based Approach**: Glassmorphic design inspired by modern iOS/Material You aesthetics with a distinctive pink/rose color palette. This is a visual-first, personality-driven profile card emphasizing playful elegance and softness.

## Core Design Principles
- **Glassmorphism**: Frosted glass effect with backdrop blur for depth and sophistication
- **Soft & Playful**: Pink gradient palette creates warmth and approachability
- **Gentle Animation**: Subtle floating motion adds life without distraction
- **Personal Expression**: Emoji-rich content reflecting personality and positivity

## Typography
- **Font Family**: Poppins (via Google Fonts CDN)
- **Heading (Name)**: 22px, weight 600, light pink tone (#ffedf5)
- **Body Text (Bio)**: 14px, lighter pink (#ffe6f2)
- **Footer Text**: 13px, italic, softest pink (#fff0f5)
- **Hierarchy**: Clear distinction through size and weight, not color contrast

## Layout System
- **Tailwind Spacing**: Use units of 4, 5, 6, and 8 (p-4, p-5, p-6, p-8, etc.)
- **Container**: Fixed width card (320px desktop, 90% on mobile under 400px)
- **Centering**: Perfect viewport centering (flex center both axes)
- **Card Structure**: Header section (140px), overlapping profile image, content padding (70px top to accommodate image overlap, 20px horizontal, 25px bottom), footer section

## Visual Design

### Glassmorphic Card
- Background: rgba(255, 255, 255, 0.25) with 15px backdrop blur
- Border: 1px solid rgba(255, 255, 255, 0.3)
- Border radius: 25px for soft, friendly appearance
- Shadow: 0 0 35px rgba(255, 182, 193, 0.4) for pink glow effect

### Background Treatment
- Radial gradient from top-left: #ffc1cc → #ff99aa → #fcbad3
- Full viewport height (100vh)
- No scroll (overflow hidden for single-page card)

### Profile Image
- Size: 110px × 110px circular
- Border: 5px solid white
- Position: Absolute, overlapping header and content sections
- Shadow: 0 5px 20px rgba(255, 105, 180, 0.4)
- Hover: Scale to 1.08× for interactive feedback

### Header Section
- Linear gradient: 135deg from #ffafcc → #ffb6c1 → #ffcce7
- Height: 140px
- No content, purely decorative backdrop for profile image

## Component Library

### Social Media Icons
- Container: Flexbox with 15px gap, center aligned
- Icon Buttons: 40px × 40px circles
- Background: White default, pink (#ff69b4) on hover
- Icon color: Pink default, white on hover
- Icon size: 18px (Font Awesome icons)
- Shadow: 0 3px 10px rgba(255,182,193,0.3), enhanced on hover to 0 6px 20px
- Hover: Translate Y by -6px for lift effect
- Platforms: Snapchat, Instagram, TikTok with proper brand links

### Footer Section
- Background: rgba(255, 255, 255, 0.2)
- Border top: 1px solid rgba(255, 255, 255, 0.3)
- Padding: 14px
- Style: Italic text for inspirational quote
- Content: Personal tagline with emoji bookends

## Animations
**Floating Card Animation**: 
- Infinite 4s ease-in-out loop
- Keyframes: 0%/100% at base position, 50% translated -10px on Y-axis
- Creates gentle bobbing effect

**Interactive Animations**:
- Profile image: Scale on card hover (0.4s ease)
- Social icons: Lift and color inversion on hover (0.3s ease)
- Card: All properties transition at 0.4s ease for smooth state changes

## Responsive Behavior
- Desktop: 320px fixed width card
- Mobile (<400px): 90% width to accommodate smaller screens
- Maintains all spacing and proportions across breakpoints
- Single-column layout, no multi-column considerations needed

## Content Strategy
- **Name**: Prominent display as primary identifier
- **Bio Line**: Emoji-prefixed descriptors (profession, personality, mission)
- **Social Links**: Direct CTAs to social platforms
- **Footer Quote**: Inspirational tagline reinforcing positive brand

## Images
**Profile Photo**: Single circular headshot image (icon.jpg) - the central visual element of the design. Should be high-quality, well-lit personal photo with clear facial visibility. Position overlaps header creating visual connection between sections.

**No Hero Image**: This is a compact profile card, not a landing page - the profile photo serves as the primary visual anchor.