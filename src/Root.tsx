import React from 'react';
import { Composition } from 'remotion';
import { LamoraBenchReel, LamoraReelProps } from './LamoraBenchReel';

const defaultProps: LamoraReelProps = {
  benchTitle: '\u0644\u0627\u0645\u0648\u0631\u0627 \u0644\u0644\u0623\u062b\u0627\u062b - \u0645\u0642\u0639\u062f \u0627\u0644\u0635\u0646\u062f\u0648\u0642 \u0627\u0644\u062c\u0645\u0644\u064a',
  hookTitle: '\u0648\u064a\u0646 \u0628\u0646\u062d\u0637 \u0627\u0644\u0645\u062e\u062f\u0627\u062a \u0627\u0644\u0632\u064a\u0627\u062f\u0629\u061f',
  hookSubtitle: '\u0627\u0644\u062d\u0644 \u0627\u0644\u0630\u0643\u064a \u0644\u062a\u0631\u062a\u064a\u0628 \u0627\u0644\u0645\u062f\u062e\u0644 \u0648\u063a\u0631\u0641\u0629 \u0627\u0644\u0646\u0648\u0645',
  revealTitle: '\u0635\u0646\u062f\u0648\u0642 \u062a\u062e\u0632\u064a\u0646 \u0645\u062e\u0641\u064a \u0628\u0633\u062d\u0628\u0629 \u062d\u0632\u0627\u0645',
  revealSubtitle: '\u0633\u0639\u0629 \u062f\u0627\u062e\u0644\u064a\u0629 \u0639\u0645\u064a\u0642\u0629 \u062a\u0644\u0645\u0651 \u0627\u0644\u0648\u0633\u0627\u0626\u0630 \u0648\u0627\u0644\u0634\u0627\u0644\u0627\u062a \u0628\u0647\u062f\u0648\u0621',
  fabricTitle: '\u0642\u0645\u0627\u0634 \u062c\u0645\u0644\u064a \u0645\u0646\u0633\u0648\u062c \u0639\u0627\u0644\u064a \u0627\u0644\u062a\u062d\u0645\u0651\u0644',
  fabricSubtitle: '\u062a\u0646\u062c\u064a\u062f \u0645\u0631\u0628\u0639\u0627\u062a \u0645\u0646\u062a\u0641\u062e\u0629 \u0648\u062b\u064a\u0631\u0629 - \u0643\u0648\u062f 5154-7',
  ctaTitle: '\u0627\u0628\u0639\import React from 'react';
import { Composition } from 'remotion';
import { LamoraBenchReel, LamoraReelProps } from './LamoraBenchReel';

const defaultProps: LamoraReelProps = {
  benchTitle: '\u0644\u0627\u0645\u0648\u0631\u0627 \u0644\u0644\u0623\u062b\u0627\u062b - \u0645\u0642\u0639\u062f \u0627\u0644\u0635\u0646\u062f\u0648\u0642 \u0627\u0644\u062c\u0645\u0644\u064a',
  hookTitle: '\u0648\u064a\u0646 \u0628\u0646\u062d\u0637 \u0627\u0644\u0645\u062e\u062f\u0627\u062a \u0627\u0644\u0632\u064a\u0627\u062f\u0629\u061f',
  hookSubtitle: '\u0627\u0644\u062d\u0644 \u0627\u0644\u0630\u0643\u064a \u0644\u062a\u0631\u062a\u064a\u0628 \u0627\u0644\u0645\u062f\u062e\u0644 \u0648\u063a\u0631\u0641\u0629 \u0627\u0644\u0646\u0648\u0645',
  revealTitle: '\u0635\u0646\u062f\u0648\u0642 \u062a\u062e\u0632\u064a\u0646 \u0645\u062e\u0641\u064a \u0628\u0633\u062d\u0628\u0629 \u062d\u0632\u0627\u0645',
  revealSubtitle: '\u0633\u0639\u0629 \u062f\u0627\u062e\u0644\u064a\u0629 \u0639\u0645\u064a\u0642\u0629 \u062a\u0644\u0645\u0651 \u0627\u0644\u0648\u0633\u0627\u0626\u0630 \u0648\u0627\u0644\u0634\u0627\u0644\u0627\u062a \u0628\u0647\u062f\u0648\u0621',
  fabricTitle: '\u0642\u0645\u0627\u0634 \u062c\u0645\u0644\u064a \u0645\u0646\u0633\u0648\u062c \u0639\u0627\u0644\u064a \u0627\u0644\u062a\u062d\u0645\u0651\u0644',
  fabricSubtitle: '\u062a\u0646\u062c\u064a\u062f \u0645\u0631\u0628\u0639\u0627\u062a \u0645\u0646\u062a\u0641\u062e\u0629 \u0648\u062b\u064a\u0631\u0629 - \u0643\u0648\u062f 5154-7',
  ctaTitle: '\u0627\u0628\u0639\u062a \u0642\u064a\u0627\u0633 \u0645\u0633\u0627\u062d\u062a\u0643 \u0628\u0627\u0644\u0631\u0633\u0627\u0626\u0644',
  ctaSubtitle: '\u062a\u0641\u0635\u064a\u0644 \u0645\u062a\u0642\u0646 \u0628\u0640 24 \u0644\u0648\u0646\u0627\u064b \u0648\u062a\u0648\u0635\u064a\u0644 \u0644\u0628\u0627\u0628 \u0628\u064a\u062a\u0643',
  accentColor: '#C49A6C',
  clips: [],
  audioSrc: ''
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LamoraBenchReel"
      component={LamoraBenchReel}
      durationInFrames={480}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={defaultProps}
    />
  );
};u062a \u0642\u064a\u0627\u0633 \u0645\u0633\u0627\u062d\u062a\u0643 \u0628\u0627\u0644\u0631\u0633\u0627\u0626\u0644',
  ctaSubtitle: '\u062a\u0641\u0635\u064a\u0644 \u0645\u062a\u0642\u0646 \u0628\u0640 24 \u0644\u0648\u0646\u0627\u064b \u0648\u062a\u0648\u0635\u064a\u0644 \u0644\u0628\u0627\u0628 \u0628\u064a\u062a\u0643',
  accentColor: '#C49A6C',
  clips: [],
  audioSrc: ''
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LamoraBenchReel"
      component={LamoraBenchReel}
      durationInFrames={480}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={defaultProps}
    />
  );}; 'eact';
import { Composition } from 'remotion';
import { LamoraBenchReel, LamoraReelProps } from './LamoraBenchReel';

const defaultProps: LamoraReelProps = {
  benchTitle: '\u0644\u0627\u0645\u0648\u0631\u0627 \u0644\u0644\u0623\u062b\u0627\u062b - \u0645\u0642\u0639\u062f \u0627\u0644\u0635\u0646\u062f\u0648\u0642 \u0627\u0644\u062c\u0645\u0644\u064a',
  hookTitle: '\u0648\u064a\u0646 \u0628\u0646\u062d\u0637 \u0627\u0644\u0645\u062e\u062f\u0627\u062a \u0627\u0644\u0632\u064a\u0627\u062f\u0629\u061f',
  hookSubtitle: '\u0627\u0644\u062d\u0644 \u0627\u0644\u0630\u0643\u064a \u0644\u062a\u0631\u062a\u064a\u0628 \u0627\u0644\u0645\u062f\u062e\u0644 \u0648\u063a\u0631\u0641\u0629 \u0627\u0644\u0646\u0648\u0645',
  revealTitle: '\u0635\u0646\u062f\u0648\u0642 \u062a\u062e\u0632\u064a\u0646 \u0645\u062e\u0641\u064a \u0628\u0633\u062d\u0628\u0629 \u062d\u0632\u0627\u0645',
  revealSubtitle: '\u0633\u0639\u0629 \u062f\u0627\u062e\u0644\u064a\u0629 \u0639\u0645\u064a\u0642\u0629 \u062a\u0644\u0645\u0651 \u0627\u0644\u0648\u0633\u0627\u0626\u0630 \u0648\u0627\u0644\u0634\u0627\u0644\u0627\u062a \u0628\u0647\u062f\u0648\u0621',
  fabricTitle: '\u0642\u0645\u0627\u0634 \u062c\u0645\u0644\u064a \u0645\u0646\u0633\u0648\u062c \u0639\u0627\u0644\u064a \u0627\u0644\u062a\u062d\u0645\u0651\u0644',
  fabricSubtitle: '\u062a\u0646\u062c\u064a\u062f \u0645\u0631\u0628\u0639\u0627\u062a \u0645\u0646\u062a\u0641\u062e\u0629 \u0648\u062b\u064a\u0631\u0629 - \u0643\u0648\u062f 5154-7',
  ctaTitle: '\u0627\u0628\u0639\u062a \u0642\u064a\u0627\u0633 \u0645\u0633\u0627\u062d\u062a\u0643 \u0628\u0627\u0644\u0631\u0633\u0627\u0626\u0644',
  ctaSubtitle: '\u062a\u0641\u0635\u064a\u0644 \u0645\u062a\u0642\u0646 \u0628\u0640 24 \u0644\u0648\u0646\u0627\u064b \u0648\u062a\u0648\u0635\u064a\u0644 \u0644\u0628\u0627\u0628 \u0628\u064a\u062a\u0643',
  accentColor: '#C49A6C',
  clips: [],
  audioSrc: ''
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LamoraBenchReel"
      component={LamoraBenchReel}
      durationInFrames={480}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={defaultProps}
    />
  );
};
const defaultProps: LamoraReelProps = {
  benchTitle: 'لامورا للأثاث - مقعد الصندوق الجملي',
  hookTitle: 'وين بنحط المخدات الزيادة؟',
  hookSubtitle: 'الحل الذكي لترتيب المدخل وغرفة النوم',
  revealTitle: 'صندوق تخزين مخفي بسحبة حزام',
  revealSubtitle: 'سعة داخلية عميقة تلمّ الوسائد والشالات بهدوء',
  fabricTitle: 'قماش جملي منسوج عالي التحمّل',
  fabricSubtitle: 'تنجيد مربعات منتفخة وثيرة - كود 5154-7',
  ctaTitle: 'ابعت قياس مساحتك بالرسائل',
  ctaSubtitle: 'تفصيل متقن بـ 24 لوناً وتوصيل لباب بيتك',
  accentColor: '#C49A6C',
  clips: [],
  audioSrc: ''
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LamoraBenchReel"
      component={LamoraBenchReel}
      durationInFrames={480}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={defaultProps}
    />
  );
};
