'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { MessageCircle } from 'lucide-react'

const svgOrder = ['svg1', 'svg2', 'svg3', 'svg4', 'svg3', 'svg2', 'svg1']

const createStopsArray = (svgStates, order, maxStops) => {
  const stopsArray = []

  for (let i = 0; i < maxStops; i += 1) {
    const stopConfigurations = order.map((svgKey) => {
      const svg = svgStates[svgKey]
      return svg.stops[i] || svg.stops[svg.stops.length - 1]
    })

    stopsArray.push(stopConfigurations)
  }

  return stopsArray
}

function GradientSvg({ className, isHovered, colors }) {
  const svgStates = {
    svg1: {
      gradientTransform: 'translate(287.5 280) rotate(-29.0546) scale(689.807 1000)',
      stops: [
        { offset: 0, stopColor: colors.color1 },
        { offset: 0.188423, stopColor: colors.color2 },
        { offset: 0.260417, stopColor: colors.color3 },
        { offset: 0.328792, stopColor: colors.color4 },
        { offset: 0.328892, stopColor: colors.color5 },
        { offset: 0.328992, stopColor: colors.color1 },
        { offset: 0.442708, stopColor: colors.color6 },
        { offset: 0.537556, stopColor: colors.color7 },
        { offset: 0.631738, stopColor: colors.color1 },
        { offset: 0.725645, stopColor: colors.color8 },
        { offset: 0.817779, stopColor: colors.color9 },
        { offset: 0.84375, stopColor: colors.color10 },
        { offset: 0.90569, stopColor: colors.color1 },
        { offset: 1, stopColor: colors.color11 },
      ],
    },
    svg2: {
      gradientTransform: 'translate(126.5 418.5) rotate(-64.756) scale(533.444 773.324)',
      stops: [
        { offset: 0, stopColor: colors.color1 },
        { offset: 0.104167, stopColor: colors.color12 },
        { offset: 0.182292, stopColor: colors.color13 },
        { offset: 0.28125, stopColor: colors.color1 },
        { offset: 0.328792, stopColor: colors.color4 },
        { offset: 0.328892, stopColor: colors.color5 },
        { offset: 0.453125, stopColor: colors.color6 },
        { offset: 0.515625, stopColor: colors.color7 },
        { offset: 0.631738, stopColor: colors.color1 },
        { offset: 0.692708, stopColor: colors.color8 },
        { offset: 0.75, stopColor: colors.color14 },
        { offset: 0.817708, stopColor: colors.color9 },
        { offset: 0.869792, stopColor: colors.color10 },
        { offset: 1, stopColor: colors.color1 },
      ],
    },
    svg3: {
      gradientTransform: 'translate(264.5 339.5) rotate(-42.3022) scale(946.451 1372.05)',
      stops: [
        { offset: 0, stopColor: colors.color1 },
        { offset: 0.188423, stopColor: colors.color2 },
        { offset: 0.307292, stopColor: colors.color1 },
        { offset: 0.328792, stopColor: colors.color4 },
        { offset: 0.328892, stopColor: colors.color5 },
        { offset: 0.442708, stopColor: colors.color15 },
        { offset: 0.537556, stopColor: colors.color16 },
        { offset: 0.631738, stopColor: colors.color1 },
        { offset: 0.725645, stopColor: colors.color17 },
        { offset: 0.817779, stopColor: colors.color9 },
        { offset: 0.84375, stopColor: colors.color10 },
        { offset: 0.90569, stopColor: colors.color1 },
        { offset: 1, stopColor: colors.color11 },
      ],
    },
    svg4: {
      gradientTransform: 'translate(860.5 420) rotate(-153.984) scale(957.528 1388.11)',
      stops: [
        { offset: 0.109375, stopColor: colors.color11 },
        { offset: 0.171875, stopColor: colors.color2 },
        { offset: 0.260417, stopColor: colors.color13 },
        { offset: 0.328792, stopColor: colors.color4 },
        { offset: 0.328892, stopColor: colors.color5 },
        { offset: 0.328992, stopColor: colors.color1 },
        { offset: 0.442708, stopColor: colors.color6 },
        { offset: 0.515625, stopColor: colors.color7 },
        { offset: 0.631738, stopColor: colors.color1 },
        { offset: 0.692708, stopColor: colors.color8 },
        { offset: 0.817708, stopColor: colors.color9 },
        { offset: 0.869792, stopColor: colors.color10 },
        { offset: 1, stopColor: colors.color11 },
      ],
    },
  }

  const maxStops = Math.max(...Object.values(svgStates).map((svg) => svg.stops.length))
  const stopsAnimationArray = createStopsArray(svgStates, svgOrder, maxStops)
  const gradientTransform = svgOrder.map((svgKey) => svgStates[svgKey].gradientTransform)

  const variants = {
    hovered: {
      gradientTransform,
      transition: { duration: 50, repeat: Infinity, ease: 'linear' },
    },
    notHovered: {
      gradientTransform,
      transition: { duration: 10, repeat: Infinity, ease: 'linear' },
    },
  }

  return (
    <svg
      className={className}
      width="1030"
      height="280"
      viewBox="0 0 1030 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="1030" height="280" rx="140" fill="url(#paint0_radial_whatsapp)" />
      <defs>
        <motion.radialGradient
          id="paint0_radial_whatsapp"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          animate={isHovered ? variants.hovered : variants.notHovered}
        >
          {stopsAnimationArray.map((stopConfigs, index) => (
            <AnimatePresence key={index}>
              <motion.stop
                initial={{
                  offset: stopConfigs[0].offset,
                  stopColor: stopConfigs[0].stopColor,
                }}
                animate={{
                  offset: stopConfigs.map((config) => config.offset),
                  stopColor: stopConfigs.map((config) => config.stopColor),
                }}
                transition={{
                  duration: 0,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              />
            </AnimatePresence>
          ))}
        </motion.radialGradient>
      </defs>
    </svg>
  )
}

function Liquid({ isHovered, colors }) {
  return (
    <>
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className={`absolute ${
            index < 3 ? 'h-[121px] w-[443px]' : 'h-[207px] w-[756px]'
          } ${
            index === 0
              ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-difference'
              : index === 1
                ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[164.971deg] mix-blend-difference'
                : index === 2
                  ? 'left-1/2 top-1/2 -translate-x-[53%] -translate-y-[53%] rotate-[-11.61deg] mix-blend-difference'
                  : index === 3
                    ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-[57%] rotate-[-179.012deg] mix-blend-difference'
                    : index === 4
                      ? 'left-1/2 top-1/2 -translate-x-[57%] -translate-y-1/2 rotate-[-29.722deg] mix-blend-difference'
                      : index === 5
                        ? 'left-1/2 top-1/2 -translate-x-[62%] -translate-y-[24%] rotate-[160.227deg] mix-blend-difference'
                        : 'left-1/2 top-1/2 -translate-x-[67%] -translate-y-[29%] rotate-180 mix-blend-hard-light'
          }`}
        >
          <GradientSvg className="h-full w-full" isHovered={isHovered} colors={colors} />
        </div>
      ))}
    </>
  )
}

const WHATSAPP_COLORS = {
  color1: '#FFFFFF',
  color2: '#0A5C36',
  color3: '#1A8E5F',
  color4: '#F8FFFB',
  color5: '#EAFBF2',
  color6: '#8BDEB0',
  color7: '#25D366',
  color8: '#20B95A',
  color9: '#34E277',
  color10: '#8CF4B4',
  color11: '#064E2B',
  color12: '#BFF5D4',
  color13: '#0E7A46',
  color14: '#D8FBE5',
  color15: '#56DB8D',
  color16: '#127C49',
  color17: '#16A34A',
}

export default function WhatsAppLiquidButton({ href, children, className = '' }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`flex justify-center ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group relative inline-block h-[3.4rem] w-full min-w-0 rounded-[1.1rem] border-2 border-[#083d24] sm:h-[3.6rem] sm:w-auto sm:min-w-[18rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <div className="absolute left-1/2 top-[8%] h-[130%] w-[112.5%] -translate-x-1/2 opacity-75 blur-[18px]">
          <span className="absolute inset-0 rounded-[1.1rem] bg-[#8ff0b7] blur-[7px]" />
          <div className="relative h-full w-full overflow-hidden rounded-[1.1rem]">
            <Liquid isHovered={isHovered} colors={WHATSAPP_COLORS} />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 h-[114%] w-[92%] -translate-x-1/2 -translate-y-[40%] rounded-[1rem] bg-[#052814] blur-[8px]" />

        <div className="relative h-full w-full overflow-hidden rounded-[1rem]">
          <span className="absolute inset-0 rounded-[1rem] bg-[#def8e9]" />
          <span className="absolute inset-0 rounded-[1rem] bg-[#0b0f0c]" />
          <Liquid isHovered={isHovered} colors={WHATSAPP_COLORS} />
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`absolute inset-0 rounded-[1rem] border-[3px] border-solid border-white/20 mix-blend-overlay ${
                i <= 2 ? 'blur-[3px]' : i === 3 ? 'blur-[5px]' : 'blur-[4px]'
              }`}
            />
          ))}
          <span className="absolute left-1/2 top-1/2 h-[42%] w-[72%] -translate-x-1/2 -translate-y-[40%] rounded-[1rem] bg-[#0b5e34] blur-[15px]" />
        </div>

        <span className="absolute inset-0 flex items-center justify-center rounded-[1rem] px-5">
          <span className="flex items-center gap-2 text-center text-sm font-semibold tracking-[0.01em] whitespace-nowrap text-white sm:text-base">
            <MessageCircle className="h-5 w-5 shrink-0 fill-white/10 text-white" />
            <span>{children}</span>
          </span>
        </span>
      </a>
    </div>
  )
}
