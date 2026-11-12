import React from 'react';
import {
  AbsoluteFill,
  Audio,
  OffthreadVideo,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { loadFont } from '@remotion/google-fonts/NotoSansArabic';

const { fontFamily } = loadFont();

export interface LamoraReelProps {
  benchTitle: string;
  hookTitle: string;
  hookSubtitle: string;
  revealTitle: string;
  revealSubtitle: string;
  fabricTitle: string;
  fabricSubtitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  accentColor: string;
  clips: string[];
  audioSrc: string;
}

const OverlayCard: React.FC<{
  title: string;
  subtitle: string;
  accentColor: string;
  isCta?: boolean;
}> = ({ title, subtitle, accentColor, isCta = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 120 },
  });

  const translateY = interpolate(enter, [0, 1], [36, 0]);
  const opacity = interpolate(enter, [0, 1], [0, 1]);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 380,
        left: 72,
        right: 72,
        direction: 'rtl',
        fontFamily,
        transform: `translateY(${translateY}px)`,
        opacity,
        backgroundColor: isCta ? accentColor : 'rgba(32, 22, 16, 0.90)',
        border: `3px solid ${isCta ? '#FFF8EC' : accentColor}`,
        borderRadius: 28,
        padding: '28px 32px',
        textAlign: 'center',
        boxShadow: '0 16px 40px rgba(0,0,0,0.45)',
      }}
    >
      <div
        style={{
          fontSize: 44,
          fontWeight: 700,
          color: isCta ? '#1C120C' : '#FFFAF2',
          lineHeight: 1.35,
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div
          style={{
            marginTop: 10,
            fontSize: 28,
            fontWeight: 400,
            color: isCta ? '#2A1B12' : '#E0C4A2',
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
};

export const LamoraBenchReel: React.FC<LamoraReelProps> = (props) => {
  const { clips, audioSrc, benchTitle, accentColor } = props;

  return (
    <AbsoluteFill style={{ backgroundColor: '#120D0A', fontFamily }}>
      {clips.length > 0 && (
        <OffthreadVideo
          src={clips[0]}
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
      {audioSrc && <Audio src={audioSrc} />}
      <div
        style={{
          position: 'absolute',
          top: 90,
          left: '50%',
          transform: 'translateX(-50%)',
          direction: 'rtl',
          backgroundColor: 'rgba(32, 22, 16, 0.88)',
          border: `2px solid ${accentColor}`,
          borderRadius: 24,
          padding: '12px 36px',
          color: '#F8F2E8',
          fontSize: 28,
          fontWeight: 700,
          whiteSpace: 'nowrap',
        }}
      >
        {benchTitle}
      </div>
      <Sequence from={0} durationInFrames={75}>
        <OverlayCard title={props.hookTitle} subtitle={props.hookSubtitle} accentColor={accentColor} />
      </Sequence>
      <Sequence from={75} durationInFrames={95}>
        <OverlayCard title={props.revealTitle} subtitle={props.revealSubtitle} accentColor={accentColor} />
      </Sequence>
      <Sequence from={170} durationInFrames={120}>
        <OverlayCard title={props.fabricTitle} subtitle={props.fabricSubtitle} accentColor={accentColor} />
      </Sequence>
      <Sequence from={290} durationInFrames={190}>
        <OverlayCard title={props.ctaTitle} subtitle={props.ctaSubtitle} accentColor={accentColor} isCta />
      </Sequence>
    </AbsoluteFill>
  );
};
