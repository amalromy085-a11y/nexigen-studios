import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const logoVariants = {
    hidden: { letterSpacing: '0.4em', opacity: 0, scale: 0.9 },
    visible: {
      letterSpacing: '0.2em',
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut'
      }
    }
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        textAlign: 'center',
        padding: 'clamp(80px, 15vw, 120px) clamp(16px, 5vw, 40px) clamp(60px, 10vw, 100px)',
        overflow: 'hidden',
      }}
    >
      {/* Background soft ambient radial gradient */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1000px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(16px, 3vw, 28px)',
          width: '100%',
        }}
      >
        {/* Brand Tag */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: 'rgba(15, 23, 42, 0.03)',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            borderRadius: '20px',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
          }}
        >
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#0066ff',
            boxShadow: '0 0 8px #0066ff',
            display: 'inline-block',
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: 'clamp(0.6rem, 2vw, 0.75rem)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--color-text-muted)'
          }}>
            Award-Winning Creative Studio
          </span>
        </motion.div>

        {/* Agency Title */}
        <motion.h2
          variants={logoVariants}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 3.5vw, 2.2rem)',
            fontWeight: 800,
            color: '#0f172a',
            opacity: 0.9,
          }}
        >
          NEXIGEN STUDIOS
        </motion.h2>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 8vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            background: 'linear-gradient(to bottom, #0f172a 60%, #475569)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            maxWidth: '900px',
            width: '100%',
          }}
        >
          Transforming Ideas Into{' '}
          <br className="hero-br" />
          <span style={{
            background: 'linear-gradient(to right, #0066ff, #00d9ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Digital Experiences
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)',
            fontWeight: 400,
            color: 'var(--color-text-muted)',
            maxWidth: '580px',
            lineHeight: 1.7,
          }}
        >
          Premium Web Solutions Built For Modern Businesses. We combine high-end design, immersive 3D technology, and code to create award-winning platforms.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: 'clamp(12px, 3vw, 20px)',
            marginTop: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 102, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll('services')}
            style={{
              padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 36px)',
              backgroundColor: '#0066ff',
              color: '#ffffff',
              border: 'none',
              borderRadius: '30px',
              fontWeight: 600,
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              boxShadow: '0 0 15px rgba(0, 102, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              whiteSpace: 'nowrap',
            }}
          >
            Explore Services
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(15, 23, 42, 0.05)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll('contact')}
            style={{
              padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 36px)',
              backgroundColor: 'rgba(15, 23, 42, 0.02)',
              color: '#0f172a',
              border: '1px solid rgba(15, 23, 42, 0.1)',
              borderRadius: '30px',
              fontWeight: 600,
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              whiteSpace: 'nowrap',
            }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          y: { repeat: -1, repeatType: 'reverse', duration: 1.2, ease: 'easeInOut' },
          opacity: { delay: 2, duration: 0.8 }
        }}
        onClick={() => handleScroll('about')}
        style={{
          position: 'absolute',
          bottom: 'clamp(20px, 5vh, 40px)',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 2
        }}
      >
        <span style={{
          fontSize: '0.6rem',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: 'var(--color-text-muted)',
          fontWeight: 600
        }}>Scroll</span>
        <div style={{
          width: '20px',
          height: '32px',
          borderRadius: '10px',
          border: '1px solid rgba(15, 23, 42, 0.15)',
          display: 'flex',
          justifyContent: 'center',
          padding: '4px'
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            borderRadius: '2px',
            backgroundColor: '#0066ff',
          }} />
        </div>
      </motion.div>
    </section>
  );
}
