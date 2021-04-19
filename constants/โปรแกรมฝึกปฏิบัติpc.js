export const defaultData = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: 'This is default text',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
]

export const Program0 = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: '    สวัสดีค่ะน้องๆ ยินดีต้อนรับเข้าสู่ mymind Web-based Application ซึ่งสร้างโดยทีมอาจารย์จากคณะพยาบาลศาสตร์ มหาวิทยาลัยมหิดลและผู้เชี่ยวชาญด้านปัญญาประดิษฐ์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ เพื่อประเมินสุขภาวะทางจิตใจ และจัดโปรแกรมที่ประกอบด้วยกิจกรรมส่งเสริมสุขภาวะทางจิตใจและป้องกันปัญหาสุขภาพจิตให้กับน้องๆ นักศึกษา นะคะ\n\n    เริ่มกันเลยนะคะ',
    options: {
      imageUri: require(`../assets/charecters/Character-03.png`)
    }
  },
  {
    contentId: '2',
    contentType: 'Info',
    contentText: '    ก่อนอื่น เรามารู้จักจิตใจของเรา ผ่านแบบประเมินกันก่อน คำถามจะถามเกี่ยวกับ ความคิด ความรู้สึก ของน้องๆ ซึ่งไม่มีคำตอบใดที่ถูกหรือผิด ขอให้น้องๆ ตอบตรงกับความเป็นจริงมากที่สุด คำตอบที่ได้จะเก็บเป็นความลับ และประมวลผลในภาพรวม เพื่อประโยชน์ต่อสุขภาวะทางจิตใจของน้องๆ เท่านั้น\n\n    แบบประเมินมีจำนวน 3 ชุด ใช้เวลาในการตอบคำถามทั้งหมดประมาณ 20 นาที ได้แก่\n\n        1. แบบประเมินสุขภาวะทางจิตใจ จำนวน 18 ข้อ\n        2. แบบประเมินการมีสติ จำนวน 15 ข้อ\n        3. แบบประเมินความเครียด วิตกกังวล และซึมเศร้า จำนวน 21 ข้อ',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    },
    goToEvaluation: true,
  },
]

export const DailyPretest = [
  {
    contentId: '1',
    contentType: 'EmotionButtons',
    contentText: '    “ดีใจที่ได้เจอ ตอนนี้รู้สึกอย่างไรบ้างค่ะ”\n\n    ขอให้น้องๆ เลือกภาพความรู้สึกจากรูปภาพข้างล่างนี้ ที่ตรงกับความรู้สึกของน้องๆ มากที่สุดนะคะ',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '2',
    contentType: 'EmotionRating',
    contentText: '    ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '1'
  },
  {
    contentId: '3',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'บางครั้งภาพอาจจะไม่สื่อถึงความรู้สึกของน้องที่ชัดเจน\nมีความรู้สึกอย่างอื่นเพิ่มเติมกันอีกไหมคะ บอกพี่ตรงนี้ได้เลยค่ะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
]

export const Program1 = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: '    ยินดีต้อนรับ น้องๆ เข้าสู่ โปรแกรมที่ 1 “มารู้จักการหายใจ...กันเถอะ”\n\n    โปรแกรมนี้น้องๆ จะได้รู้จักว่าการหายใจอย่างมีสติ เป็นอย่างไรและมีประโยชน์กับเราอย่างไรบ้าง',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
  {
    contentId: '2',
    contentType: 'Video',
    contentText: '    การหายใจอย่างมีสติ คือ การรู้สึกตัวตลอดเวลา โดยไม่ตัดสิน เน้นการตระหนักรู้ในปัจจุบัน คลิป “สิ่งมหัศจรรย์จากการหายใจอย่างมีสติ” จะช่วยให้น้องๆ เข้าใจได้มากขึ้น อย่าลืมแวะตอบคำถามเพื่อเก็บคะแนนท้ายคลิปด้วยนะคะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mumymind-cae0c.appspot.com/o/video%2FV2.mp4?alt=media&token=3dc90933-0726-4047-b462-aa69d11c4d2b'},
    minTime: 60
  },
  {
    contentId: '3',
    contentType: 'Info',
    contentText: '    ตอนนี้ก็ทราบกันแล้วนะคะว่ามีอะไรเกิดขึ้นบ้างกับตัวเรา อารมณ์ของเราจากการหายใจอย่างมีสติเรามาตอบคำถามท้ายคลิปกันค่ะ\n\n    โดยน้อง ๆ จะต้องเลือกตอบคำถามว่า ข้อความในคำถามนั้น ถูก หรือ ผิด นะคะ',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
  {
    contentId: '4',
    contentType: 'SelectionGroup',
    contentText: '1. การหายใจอย่างมีสติที่ถูกต้องคือ สูดลมหายใจเข้าลึก ๆ พุงป่อง ปล่อยลมหายใจออกยาว ๆ พุงแฟบ',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '5',
    contentType: 'SelectionGroup',
    contentText: '2. การหายใจอย่างถูกวิธีจะช่วยลดความเครียดได้',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '6',
    contentType: 'SelectionGroup',
    contentText: '3. การฝึกหายใจอย่างมีสติบ่อยๆ จะทำให้ความดันโลหิตสูงขึ้น',
    choices: [
      {
        choiceText: 'ถูก',
        value: 0
      },
      {
        choiceText: 'ผิด',
        value: 1
      },
    ]
  },
  {
    contentId: '7',
    contentType: 'SelectionGroup',
    contentText: '4. การหายใจคลายเครียดทำให้ร่างกายหลั่งสารคอร์ติซอลมากขึ้น จึงรู้สึกผ่อนคลาย',
    choices: [
      {
        choiceText: 'ถูก',
        value: 0
      },
      {
        choiceText: 'ผิด',
        value: 1
      },
    ]
  },
  {
    contentId: '8',
    contentType: 'SelectionGroup',
    contentText: '5. การหายใจอย่างมีสติจะทำให้ร่างกายมีภูมิคุ้มกันดีขึ้น',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '9',
    contentType: 'SelectionGroup',
    contentText: '6. การเต้นของหัวใจจะเพิ่มมากขึ้น หากเราฝึกหายใจอย่างมีสติ',
    choices: [
      {
        choiceText: 'ถูก',
        value: 0
      },
      {
        choiceText: 'ผิด',
        value: 1
      },
    ]
  },
  {
    contentId: '10',
    contentType: 'SelectionGroup',
    contentText: '7. การหายใจอย่างถูกวิธีทำให้ร่างกายได้รับออกซิเจนมากขึ้น',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '11',
    contentType: 'SelectionGroup',
    contentText: '8. การหายใจอย่างถูกวิธีจะเพิ่มคาร์บอนไดออกไซด์ในเลือด',
    choices: [
      {
        choiceText: 'ถูก',
        value: 0
      },
      {
        choiceText: 'ผิด',
        value: 1
      },
    ]
  },
  {
    contentId: '12',
    contentType: 'SelectionGroup',
    contentText: '9. การหายใจคลายเครียด จะช่วยหลั่งสารเอ็นดอร์ฟิน ช่วยให้ร่างกายมีความสุข',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '13',
    contentType: 'SelectionGroup',
    contentText: '10. การหายใจอย่างถูกวิธีเป็นการเพิ่มการใช้พลังงานในร่างกาย',
    choices: [
      {
        choiceText: 'ถูก',
        value: 0
      },
      {
        choiceText: 'ผิด',
        value: 1
      },
    ]
  },
  {
    contentId: '14',
    contentType: 'QuestionValidate',
    contentTextPass: 'เยี่ยมมากค่ะ ตอบถูกทุกข้อเลย',
    contentTextFail: 'เสียดายจังยังมีข้อที่ตอบไม่ถูก มาเรียนรู้เพื่อที่จะได้ตอบถูกทุกข้อกันนะคะ พี่มีทางเลือกให้ค่ะ',
    minScore: 10,
    backToVideo: 12,
    backToFirstQuestion: 10,
    answerIdRef: [
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
    ],
    options: {
      imageUriPass: require(`../assets/charecters/Character-03.png`),
      imageUriFail: require(`../assets/charecters/Character-02.png`)
    }
  },
  {
    contentId: '15',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'น้องๆ ได้ประโยชน์อะไรจาก โปรแกรม ที่ 1 บ้างค่ะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
  {
    contentId: '16',
    contentType: 'Info',
    contentText: '    เพื่อให้น้องๆ เกิดความเข้าใจมากยิ่งขึ้น อย่าลืมเข้ามาทบทวนโปรแกรมที่ 1 กันนะคะ ยิ่งทบทวนมากเท่าไหร่จะทำให้น้องๆเกิดความเข้าใจในโปรแกรมต่อๆ ไปยิ่งขึ้นนะคะ\n\n    อีก 3 วัน เจอกันในโปรแกรมที่ 2 ขอให้เป็นวันดีๆ พรุ่งนี้อย่าลืมแวะมานะคะ',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
]

export const Homework1 = [
  {
    contentId: '1',
    contentType: 'Video',
    contentText: '    การหายใจอย่างมีสติ คือ การรู้สึกตัวตลอดเวลา โดยไม่ตัดสิน เน้นการตระหนักรู้ในปัจจุบัน คลิป “สิ่งมหัศจรรย์จากการหายใจอย่างมีสติ” จะช่วยให้น้องๆ เข้าใจได้มากขึ้น อย่าลืมแวะตอบคำถามเพื่อเก็บคะแนนท้ายคลิปด้วยนะคะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mumymind-cae0c.appspot.com/o/video%2FV2.mp4?alt=media&token=3dc90933-0726-4047-b462-aa69d11c4d2b'},
    minTime: 60
  },
]

export const Program2 = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: '    สวัสดีค่ะน้องๆ ดีใจที่ได้เจอกันอีกนะคะ ยินดีต้อนรับน้อง ๆ เข้าสู่โปรแกรมที่ 2 “เครียดได้...หายได้..ด้วยหายใจ”\n\n    น้องๆเคยมีความเครียด หรือมีเรื่องไม่สบายใจ รบกวนจิตใจกันบ้างหรือเปล่าคะ...ไม่ต้องตอบพี่ก็ได้ค่ะ...ลองนึกย้อนถึงเรื่องราวต่างๆ ตอนนั้นดูนะคะ...\n\n    ...แค่คิดถึงก็เครียดแล้วใช่มั้ยคะ',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
  {
    contentId: '2',
    contentType: 'Video',
    contentText: '    เราลองมาดูกันนะคะ ว่าการหายใจจะช่วยลดความเครียดได้อย่างไร และมาฝึกการหายใจเพื่อช่วยจัดการกับความเครียด ไปพร้อมกับพี่ MyMind นะคะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.2.mp4?alt=media&token=5f1a7535-76b2-4bb6-8535-acdaed3d4375'},
    minTime: 60
  },
  {
    contentId: '3',
    contentType: 'Video',
    contentText: '',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.3.mp4?alt=media&token=7f323e23-8ca6-439b-b600-46a854732191'},
    minTime: 60
  },
  {
    contentId: '4',
    contentType: 'EmotionButtons',
    contentText: '    ฝึกหายใจ ไปพร้อมกันแล้ว น้องๆ รู้สึกอย่างไรบ้างค่ะ เลือกภาพที่ตรงกับความรู้สึกของน้องมากที่สุด เลือกได้ไม่เกิน 3 ภาพ ค่ะ',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '5',
    contentType: 'EmotionRating',
    contentText: '    ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '4'
  },
  {
    contentId: '6',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'บางครั้งภาพอาจจะไม่สื่อถึงความรู้สึกของน้องที่ชัดเจน\nมีความรู้สึกอย่างอื่นเพิ่มเติมกันอีกไหมคะ บอกพี่ตรงนี้ได้เลยค่ะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
  {
    contentId: '7',
    contentType: 'Info',
    contentText: '    การฝึกฝนจะทำให้เราเกิดความเชี่ยวชาญ และเมื่อไหร่ก็ตามเมื่อเราเกิดความเครียด สิ่งต่างๆที่ได้ฝึกฝนจะถูกนำออกมาใช้ได้อย่างมีประสิทธิภาพ\n\n    หลังจากนี้ พี่จะให้เวลาน้องๆ 3 วัน ในการเรียนรู้และฝึกฝนตามวิดีโอนะคะ ขอให้น้องๆ ฝึกตาม VDO “การหายใจอย่างถูกวิธี” ทุกวันนะคะ วันละประมาณ 10-15 นาที นะคะ จะทำให้น้องๆ ได้รับประโยชน์จากการหายใจอย่างถูกวิธี ที่สำคัญอย่าลืมเลือกภาพความรู้สึกที่ตรงกับความรู้สึกของน้องๆ มากที่สุด หลังการฝึกทุกครั้งด้วยนะคะ\n\n    ขอให้เป็นวันดีๆ พรุ่งนี้พบกันนะคะ',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
]

export const Homework2 = [
  {
    contentId: '1',
    contentType: 'Video',
    contentText: '    เราลองมาดูกันนะคะ ว่าการหายใจจะช่วยลดความเครียดได้อย่างไร และมาฝึกการหายใจเพื่อช่วยจัดการกับความเครียด ไปพร้อมกับพี่ MyMind นะคะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.2.mp4?alt=media&token=5f1a7535-76b2-4bb6-8535-acdaed3d4375'},
    minTime: 0
  },
  {
    contentId: '2',
    contentType: 'Video',
    contentText: '',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.3.mp4?alt=media&token=7f323e23-8ca6-439b-b600-46a854732191'},
    minTime: 60
  },
  {
    contentId: '3',
    contentType: 'EmotionButtons',
    contentText: '    ฝึกหายใจ ไปพร้อมกันแล้ว น้องๆ รู้สึกอย่างไรบ้างค่ะ เลือกภาพที่ตรงกับความรู้สึกของน้องมากที่สุด เลือกได้ไม่เกิน 3 ภาพ ค่ะ',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '4',
    contentType: 'EmotionRating',
    contentText: '    ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '3'
  },
  {
    contentId: '5',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'บางครั้งภาพอาจจะไม่สื่อถึงความรู้สึกของน้องที่ชัดเจน\nมีความรู้สึกอย่างอื่นเพิ่มเติมกันอีกไหมคะ บอกพี่ตรงนี้ได้เลยค่ะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
]

export const Program3 = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: '    สวัสดีค่ะ ดีใจที่ได้พบน้องๆ ในโปรแกรมที่ 3 นะคะ หลังจากที่เราได้ฝึกการหายใจ เพื่อกำจัดความเครียดแล้ว\n\n    วันนี้พี่MyMind จะพาน้องๆ มาเรียนรู้อีกวิธีการหนึ่งซึ่งก็เป็นวิธีที่ง่ายๆเช่นเดียวกัน เพื่อให้น้องๆมีการตระหนักรู้ตัวเองอยู่กับปัจจุบัน ช่วยให้เราไม่ครุ่นคิดในเรื่องอดีต และไม่กังวลกับสิ่งที่มาไม่ถึง นั่นคือ “การรู้สึกตัวทั่วร่างกายอย่างมีสติ” ซึ่งเป็นการรับรู้ความรู้สึกของร่างกายของเรา และหากเราสามารถรับรู้ได้จะเกิดผลดีกับเราอย่างไร มาเรียนรู้ไปด้วยกันนะคะ',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
  {
    contentId: '2',
    contentType: 'Video',
    contentText: '    เอาล่ะค่ะ พร้อมเรียนรู้และฝึกกันแล้วนะคะ ต่อไปนี้ ขอให้น้องๆ ชมวิดีโอและฝึกไปพร้อมๆ กันนะคะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mumymind-cae0c.appspot.com/o/video%2FV5.mp4?alt=media&token=dc4ae303-28da-4062-be2c-ea1905727498'},
    minTime: 60
  },
  {
    contentId: '3',
    contentType: 'EmotionButtons',
    contentText: '    เมื่อน้องๆ ได้ฝึกกันแล้ว ขอให้น้องเลือกภาพที่ตรงกับความรู้สึกของน้องมากที่สุด เลือกได้ไม่เกิน 3 ภาพ ค่ะ เรามาดูกันนะคะว่าสิ่งเหล่านี้จะเป็นอย่างไร แตกต่างจากเดิมกันหรือเปล่าค่ะ',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '4',
    contentType: 'EmotionRating',
    contentText: '    ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '3'
  },
  {
    contentId: '5',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'บางครั้งภาพอาจจะไม่สื่อถึงความรู้สึกของน้องที่ชัดเจน\nมีความรู้สึกอย่างอื่นเพิ่มเติมกันอีกไหมคะ บอกพี่ตรงนี้ได้เลยค่ะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
  {
    contentId: '6',
    contentType: 'Info',
    contentText: '    พี่จะให้เวลาน้องๆ 3 วัน ในการฝึกฝน การรับรู้ความรู้สึกของร่างกายตามวิดีโอนะคะ น้องจะได้รับประโยชน์หาก ได้ฝึกฝนอย่างสม่ำเสมอ ที่สำคัญอย่าลืมบันทึกการเลือกภาพความรู้สึกหลังการฝึกด้วยนะคะ จะทำให้น้องๆได้เห็นถึงความเปลี่ยนแปลงความรู้สึกของเราเองจากการได้ฝึกฝนค่ะ\n\n    ขอให้เป็นวันดีๆ พรุ่งนี้พบกันนะคะ',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
]

export const Homework3 = [
  {
    contentId: '1',
    contentType: 'Video',
    contentText: '    เอาล่ะค่ะ พร้อมเรียนรู้และฝึกกันแล้วนะคะ ต่อไปนี้ ขอให้น้องๆ ชมวิดีโอและฝึกไปพร้อมๆ กันนะคะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mumymind-cae0c.appspot.com/o/video%2FV5.mp4?alt=media&token=dc4ae303-28da-4062-be2c-ea1905727498'},
    minTime: 60
  },
  {
    contentId: '2',
    contentType: 'EmotionButtons',
    contentText: '    เมื่อน้องๆ ได้ฝึกกันแล้ว ขอให้น้องเลือกภาพที่ตรงกับความรู้สึกของน้องมากที่สุด เลือกได้ไม่เกิน 3 ภาพ ค่ะ เรามาดูกันนะคะว่าสิ่งเหล่านี้จะเป็นอย่างไร แตกต่างจากเดิมกันหรือเปล่าค่ะ',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '3',
    contentType: 'EmotionRating',
    contentText: '    ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '2'
  },
  {
    contentId: '4',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'บางครั้งภาพอาจจะไม่สื่อถึงความรู้สึกของน้องที่ชัดเจน\nมีความรู้สึกอย่างอื่นเพิ่มเติมกันอีกไหมคะ บอกพี่ตรงนี้ได้เลยค่ะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
]

export const Program4 = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: '    เราเดินทางกันมาจนถึง โปรแกรมที่ 4 แล้วนะคะ ได้ฝึกฝนกันหลายๆ เรื่อง ทั้งหายใจลดเครียด การมีสติอยู่กับปัจจุบัน ครั้งนี้จะพาน้องๆ ไปรู้จักกับการตระหนักรู้ในอารมณ์ของตนเอง',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
  {
    contentId: '2',
    contentType: 'Video',
    contentText: '    การตระหนักรู้ในอารมณ์ของตนเองเป็นสิ่งสำคัญที่จะทำให้น้องๆ สามารถเข้าใจตนเอง ทำให้สามารถมีปฏิสัมพันธ์กับบุคคลอื่นได้ดีโดยสามารถหลีกเลี่ยงหรือแก้ไขความขัดแย้งได้ดีขึ้น และช่วยทำให้ผ่านความรู้สึกที่แย่ๆ ไปได้ค่ะ เพื่อให้น้องๆ เข้าใจง่ายขึ้น มาดูคลิปไปกับพี่ MyMind นะคะ อย่าลืมแวะตอบคำถามท้ายคลิปด้วยนะคะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.5.mp4?alt=media&token=a5783b51-f8f1-499f-8423-2e55a93ba869'},
    minTime: 60
  },
  {
    contentId: '3',
    contentType: 'Info',
    contentText: '    น้องๆ ได้เรียนรู้การตระหนักรู้ในอารมณ์ของตนเองกันแล้วนะคะ เราลองมาทำแบบทดสอบความเข้าใจเกี่ยวกับการตระหนักรู้ในอารมณ์ตนเองจากคลิปกันค่ะ ขอให้น้องๆ อ่านข้อคำถามทั้ง 10 ข้อ แล้วพิจารณาดูนะคะว่า ถูก หรือ ผิด',
  },
  {
    contentId: '4',
    contentType: 'SelectionGroup',
    contentText: '1. การตระหนักรู้ในอารมณ์ของตัวเอง จะช่วยให้มีสัมพันธภาพที่ดีกับคนอื่นได้ดีขึ้น',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '5',
    contentType: 'SelectionGroup',
    contentText: '2. การเข้าใจและรู้ทันอารมณ์ของตัวเองจะทำให้จัดการอารมณ์ที่ไม่ดีได้อย่างรวดเร็ว',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '6',
    contentType: 'SelectionGroup',
    contentText: '3. การตระหนักรู้ในอารมณ์จะช่วยให้เรา รู้เท่าทันความรู้สึกของคนอื่นได้ดี',
    choices: [
      {
        choiceText: 'ถูก',
        value: 0
      },
      {
        choiceText: 'ผิด',
        value: 1
      },
    ]
  },
  {
    contentId: '7',
    contentType: 'SelectionGroup',
    contentText: '4. ความรู้สึก/อารมณ์ จะคงอยู่กับเราเพียงช่วงเดียว และสามารถเปลี่ยนแปลงได้',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '8',
    contentType: 'SelectionGroup',
    contentText: '5. การพยายามหลีกเลี่ยงหรือไม่ยอมรับอารมณ์ด้านลบ จะช่วยลดความขัดแย้งกับผู้อื่นได้ดีขึ้น',
    choices: [
      {
        choiceText: 'ถูก',
        value: 0
      },
      {
        choiceText: 'ผิด',
        value: 1
      },
    ]
  },
  {
    contentId: '9',
    contentType: 'SelectionGroup',
    contentText: '6. การตระหนักรู้ในอารมณ์ ทำให้เรารับรู้ความต้องการของเราได้ชัดเจนขึ้น',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '10',
    contentType: 'SelectionGroup',
    contentText: '7. การประเมินระดับความรุนแรงของอารมณ์ เป็นขั้นตอนแรกในการสร้างความตระหนักรู้ในอารมณ์',
    choices: [
      {
        choiceText: 'ถูก',
        value: 0
      },
      {
        choiceText: 'ผิด',
        value: 1
      },
    ]
  },
  {
    contentId: '11',
    contentType: 'SelectionGroup',
    contentText: '8. การสังเกตอารมณ์/ความรู้สึกตนเองต่อเหตุการณ์ต่างๆ เป็นขั้นตอนแรกในการฝึกสร้างการตระหนักรู้ในอารมณ์',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '12',
    contentType: 'SelectionGroup',
    contentText: '9. การเล่าระบายความรู้สึกของตนเองให้คนใกล้ชิดฟัง เป็นการฝึกฝนการแสดงอารมณ์ของตนเองในลักษณะคำพูด',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '13',
    contentType: 'SelectionGroup',
    contentText: '10. เมื่อรับรู้ว่ามีอารมณ์ความรู้สึกด้านลบ เช่น โกรธ โมโห ควรปฏิเสธและรีบเปลี่ยนเป็นอารมณ์ด้านบวกทันที',
    choices: [
      {
        choiceText: 'ถูก',
        value: 0
      },
      {
        choiceText: 'ผิด',
        value: 1
      },
    ]
  },
  {
    contentId: '14',
    contentType: 'QuestionValidate',
    contentTextPass: 'เก่งมากค่ะ ตอบถูกเป็นส่วนใหญ่แล้วนะคะ',
    contentTextFail: 'เสียดายจังยังมีข้อที่ตอบไม่ถูก มาเรียนรู้เพื่อที่จะได้ตอบถูกทุกข้อกันนะคะ พี่มีทางเลือกให้ค่ะ',
    minScore: 10,
    backToVideo: 12,
    backToFirstQuestion: 10,
    answerIdRef: [
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
    ],
    options: {
      imageUriPass: require(`../assets/charecters/Character-03.png`),
      imageUriFail: require(`../assets/charecters/Character-02.png`)
    }
  },
  {
    contentId: '15',
    contentType: 'PickerInput',
    contentText: 'ต่อไปเราจะเริ่มเรียนรู้และฝึกกันจากสถานการณ์จริงกันนะคะ\n\n    ขอให้น้องๆ นึกถึงเหตุการณ์ที่เกิดขึ้นในชีวิตที่ผ่านมา ที่ทำให้น้องๆ รู้สึก “ชอบ” 2 เหตุการณ์ และเลือกเหตุการณ์นั้นด้วยนะคะ',
    questions: [
      {
        questionText: 'เหตุการณ์ที่ชอบ (เหตุการณ์ที่ 1)',
        choices: [
          'ไปเที่ยวกับเพื่อน',
          'ครูชมว่ามีน้ำใจ',
          'พ่อ/แม่ให้รางวัลที่ช่วยงานบ้าน',
          'เพื่อนที่เราชอบยิ้มให้',
          'สอบผ่าน',
          'อื่นๆ'
        ],
        otherQuestionText: 'ช่วยเขียนเหตุการณ์อื่นๆ ที่ “ชอบ” ด้วยนะคะ'
      },
    ]
  },
  {
    contentId: '16',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'น้องรู้สึกอย่างไรกับเหตุการณ์ที่ “ชอบ” ที่เกิดขึ้น (เหตุการณ์ที่ 1)',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '17',
    contentType: 'PickerInput',
    contentText: '',
    questions: [
      {
        questionText: 'ให้ระดับคะแนน (1-10) ต่อความรู้สึกต่อเหตุการณ์ที่ “ชอบ” นี้ (เหตุการณ์ที่ 1)',
        choices: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10'
        ]
      },
    ]
  },
  {
    contentId: '18',
    contentType: 'PickerInput',
    contentText: '',
    questions: [
      {
        questionText: 'เหตุการณ์ที่ชอบ (เหตุการณ์ที่ 2)',
        choices: [
          'ไปเที่ยวกับเพื่อน',
          'ครูชมว่ามีน้ำใจ',
          'พ่อ/แม่ให้รางวัลที่ช่วยงานบ้าน',
          'เพื่อนที่เราชอบยิ้มให้',
          'สอบผ่าน',
          'อื่นๆ'
        ],
        otherQuestionText: 'ช่วยเขียนเหตุการณ์อื่นๆ ที่ “ชอบ” ด้วยนะคะ'
      },
    ]
  },
  {
    contentId: '19',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'น้องรู้สึกอย่างไรกับเหตุการณ์ที่ “ชอบ” ที่เกิดขึ้น (เหตุการณ์ที่ 2)',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '20',
    contentType: 'PickerInput',
    contentText: '',
    questions: [
      {
        questionText: 'ให้ระดับคะแนน (1-10) ต่อความรู้สึกต่อเหตุการณ์ที่ “ชอบ” นี้ (เหตุการณ์ที่ 2)',
        choices: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10'
        ]
      },
    ]
  },
  {
    contentId: '21',
    contentType: 'PickerInput',
    contentText: '    ต่อไปนะคะ ขอให้น้องๆ นึกถึงเหตุการณ์ที่เกิดขึ้นในชีวิตที่ผ่านมา ที่ทำให้น้องๆรู้สึก “ไม่ชอบ”\nช่วยเลือกเหตุการณ์นั้นพร้อมทั้งความรู้สึกที่เกิดขึ้นด้วยนะคะ',
    questions: [
      {
        questionText: 'เหตุการณ์ที่ไม่ชอบ',
        choices: [
          'ครูตำหนิว่าทำงานไม่เรียบร้อย',
          'ถูกพ่อแม่ดุว่า',
          'พ่อ/แม่ปลุกให้ตื่นแต่เช้า',
          'เพื่อนนินทา',
          'พ่อ/แม่ใช้ให้ทำงานให้',
          'อื่นๆ'
        ],
        otherQuestionText: 'ช่วยเขียนเหตุการณ์อื่นๆ ที่ “ไม่ชอบ” ด้วยนะคะ'
      },
    ]
  },
  {
    contentId: '22',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'น้องรู้สึกอย่างไรกับเหตุการณ์ที่ “ไม่ชอบ” ที่เกิดขึ้น',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '23',
    contentType: 'PickerInput',
    contentText: '',
    questions: [
      {
        questionText: 'ให้ระดับคะแนน (1-10) ต่อความรู้สึกต่อเหตุการณ์ที่ “ไม่ชอบ” นี้',
        choices: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10'
        ]
      },
    ]
  },
  {
    contentId: '24',
    contentType: 'EmotionButtons',
    contentText: '    เมื่อน้องๆ ได้เรียนรู้และฝึกฝนการตระหนักรู้ในอารมณ์ตนเองกันแล้ว ขอให้น้องเลือกภาพที่ตรงกับความรู้สึกของน้องมากที่สุด เลือกได้ไม่เกิน 3 ภาพค่ะ เรามาดูกันนะคะว่าสิ่งเหล่านี้จะเป็นอย่างไร แตกต่างจากเดิมกันหรือเปล่าค่ะ',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '25',
    contentType: 'EmotionRating',
    contentText: '    ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '24'
  },
  {
    contentId: '26',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'น้องๆ ช่วยบอกความคิด/ความรู้สึกที่เกิดขึ้น หลังจากฝึกการหายใจอย่างถูกวิธี ด้วยนะคะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
  {
    contentId: '27',
    contentType: 'Info',
    contentText: '    น้องๆ คะ การตระหนักรู้ในอารมณ์ของตนเองจะเกิดประโยชน์กับน้องๆ เป็นอย่างมาก หากน้องๆ ได้ฝึกฝนในการตระหนักรู้ในอารมณ์ของตนเองอย่างสม่ำเสมอ และเช่นเดียวกับทุกโปรแกรมนะคะน้องๆ พี่จะให้น้องๆได้ฝึกฝนเป็นเวลา 3 วัน ขอให้น้องสังเกตและรับรู้อารมณ์ ความรู้สึกที่เกิดขึ้นในแต่ละวัน และเขียนบันทึกเช่นเดียวกับที่เราทำกันในวันนี้นะคะ\n\n    และ หากน้องๆมีอารมณ์ลบทางลบ เช่น โกรธ โมโห รับรู้อารมณ์ที่เกิดขึ้นเป็นเป็นธรรมดาที่อารมณ์เหล่านี้สามารถเกิดขึ้นได้ แต่เมื่อเกิดขึ้นขอให้น้องๆ ย้อนกลับไปฝึกการหายใจอย่างถูกวิธี และฝึกการรู้สึกตัวทั่งร่างกายอย่างมีสติ ในโปรแกรมที่ 2 และ 3 นะคะ\n\n    ขอให้เป็นวันดีๆ พรุ่งนี้พบกันนะคะ',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
]

export const Homework4 = [
  {
    contentId: '1',
    contentType: 'Video',
    contentText: 'ทบทวน VDO “การตระหนักรู้ในอารมณ์”',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mymindmobile-d9d9b.appspot.com/o/video360p%2FEp.5.mp4?alt=media&token=a5783b51-f8f1-499f-8423-2e55a93ba869'},
    minTime: 60
  },
  {
    contentId: '2',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'มีเหตุการณ์อะไรเกิดขึ้นกับน้องบ้าง ช่วยเล่าให้ฟังหน่อยค่ะ',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '3',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'น้องรู้สึกอย่างไรกับเหตุการณ์ที่เกิดขึ้น',
        placeholderText: 'โปรดระบุ',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '4',
    contentType: 'PickerInput',
    contentText: '',
    questions: [
      {
        questionText: 'ให้ระดับคะแนน (1-10) ต่อความรู้สึกต่อเหตุการณ์นี้',
        choices: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10'
        ]
      },
    ]
  }
]

export const Program5 = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: '    สวัสดีค่ะน้องๆ เป็นอย่างไรบ้างคะ การบันทึกความรู้สึกที่เกิดขึ้นในแต่ละวัน ทำให้น้องๆ เข้าใจความรู้สึกที่เกิดขึ้นของตัวเองมากขึ้นกันแล้วใช่ไหมคะ ขอต้อนรับน้องเข้าสู่โปรแกรมในลำดับที่ 5 ซึ่งมีชื่อว่า “สุขภาพใจ.. เปลี่ยนได้ด้วยความคิด” นะคะ',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
  {
    contentId: '2',
    contentType: 'Video',
    contentText: '    ในโปรแกรมนี้ น้องๆ จะได้เรียนรู้ว่าอารมณ์ที่เกิดขึ้นของเรามีความสัมพันธ์อย่างไรกับความคิดและส่งผลต่อการแสดงออกของเราอย่างไร มาติดตามจากคลิปกันได้เลยค่ะ อย่าลืมแวะตอบคำถามท้ายคลิปด้วยนะคะ',
    videoUri: {uri: 'https://firebasestorage.googleapis.com/v0/b/mumymind-cae0c.appspot.com/o/video%2FP5.mp4?alt=media&token=769eb209-8611-413c-b761-84ef4550a97b'},
    minTime: 60
  },
  {
    contentId: '3',
    contentType: 'Info',
    contentText: '    น้องๆ ได้รู้ถึงความสัมพันธ์ระหว่าง ความคิด การแสดงออกของเรากันแล้ว เราลองมาทำแบบทดสอบกันนะคะ ขอให้น้องๆ อ่านข้อคำถามทั้ง 10 ข้อ แล้วพิจารณาดูนะคะว่า ถูก หรือ ผิด',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
  {
    contentId: '4',
    contentType: 'SelectionGroup',
    contentText: '1. ความคิดเป็นสิ่งที่ปรับเปลี่ยนไม่ได้',
    choices: [
      {
        choiceText: 'ถูก',
        value: 0
      },
      {
        choiceText: 'ผิด',
        value: 1
      },
    ]
  },
  {
    contentId: '5',
    contentType: 'SelectionGroup',
    contentText: '2. ความคิดเป็นสิ่งที่เกิดขึ้นอัตโนมัติ แตกต่างกันในแต่ละบุคคล',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '6',
    contentType: 'SelectionGroup',
    contentText: '3. ความคิดของแต่ละคน ขึ้นกับประสบการณ์ ความเชื่อ ของแต่ละบุคคล',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '7',
    contentType: 'SelectionGroup',
    contentText: '4. เราสามารถบังคับความคิดของเราได้',
    choices: [
      {
        choiceText: 'ถูก',
        value: 0
      },
      {
        choiceText: 'ผิด',
        value: 1
      },
    ]
  },
  {
    contentId: '8',
    contentType: 'SelectionGroup',
    contentText: '5. เวลาที่เผชิญความยากลำบาก ความคิดด้านลบ มักจะเกิดขึ้นก่อน',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '9',
    contentType: 'SelectionGroup',
    contentText: '6. การรู้เท่าทันความคิดของตนเอง จะทำให้สามารถจัดการกับพฤติกรรมที่ไม่ดี ได้อย่างรวดเร็ว',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '10',
    contentType: 'SelectionGroup',
    contentText: '7. การบอกถึงความคิดที่ไม่สมเหตุสมผลได้ จะทำให้ปรับเปลี่ยนความคิดได้',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '11',
    contentType: 'SelectionGroup',
    contentText: '8. การตระหนักรู้ในความคิด ทำให้เราเข้าใจปัญหาที่เกิดขึ้นได้',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '12',
    contentType: 'SelectionGroup',
    contentText: '9.การตระหนักรู้ในความคิดที่ไม่สมเหตุสมผล เป็นขั้นตอนแรกในการปรับเปลี่ยนความคิด',
    choices: [
      {
        choiceText: 'ถูก',
        value: 0
      },
      {
        choiceText: 'ผิด',
        value: 1
      },
    ]
  },
  {
    contentId: '13',
    contentType: 'SelectionGroup',
    contentText: '10. “คิดแบบอื่นได้ไหม?” เป็นการตั้งคำถามที่ช่วยปรับเปลี่ยนความคิดได้',
    choices: [
      {
        choiceText: 'ถูก',
        value: 1
      },
      {
        choiceText: 'ผิด',
        value: 0
      },
    ]
  },
  {
    contentId: '14',
    contentType: 'QuestionValidate',
    contentTextPass: 'เก่งมากค่ะ ตอบถูกเป็นส่วนใหญ่แล้วนะคะ',
    contentTextFail: 'เสียดายจังยังมีข้อที่ตอบไม่ถูก มาเรียนรู้เพื่อที่จะได้ตอบถูกทุกข้อกันนะคะ พี่มีทางเลือกให้ค่ะ',
    minScore: 10,
    backToVideo: 12,
    backToFirstQuestion: 10,
    answerIdRef: [
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
    ],
    options: {
      imageUriPass: require(`../assets/charecters/Character-03.png`),
      imageUriFail: require(`../assets/charecters/Character-02.png`)
    }
  },
  {
    contentId: '15',
    contentType: 'ImageButton',
    contentText: '    ต่อไปเราจะมาเริ่มมาทำความเข้าใจเกี่ยวกับเรื่องการสังเกตอารมณ์และความคิดของเราที่เกิดขึ้นกันนะคะ\n\n    พี่จะมีภาพให้น้องๆดูกัน และเมื่อน้องเห็นภาพ ให้น้องบอกว่า เห็นแล้วรู้สึกอย่างไร ให้เขียนความรู้สึกที่เกิดขึ้นลงไป หลังจากนั้นให้ถามตัวเองต่อไปว่าที่รู้สึกเช่นนั้น เรากำลังคิดอะไรอยู่ ให้น้องบันทึกลงไปนะคะ อย่างน้อย 3 ภาพค่ะ\n\n    มาเริ่มกันที่ภาพแรกกันเลยค่ะ ถ้าน้องๆ สนใจภาพไหน สามารถกดเลือกและกดปุ่มถัดไปได้เลยนะคะ',
  },
  {
    contentId: '16',
    contentType: 'ImageRating',
    contentText: 'ภาพที่ 1',
    answerIdRef: '15',
  },
  {
    contentId: '17',
    contentType: 'ImageButton',
    contentText: 'ต่อไป น้องๆ เลือกภาพที่ 2 ได้เลยค่ะ',
    answerIdRef: ['15'],
  },
  {
    contentId: '18',
    contentType: 'ImageRating',
    contentText: 'ภาพที่ 2',
    answerIdRef: '17',
  },
  {
    contentId: '19',
    contentType: 'ImageButton',
    contentText: 'น้องๆ เลือกภาพสุดท้ายได้เลยค่ะ',
    answerIdRef: ['15','17'],
  },
  {
    contentId: '20',
    contentType: 'ImageRating',
    contentText: 'ภาพที่ 3',
    answerIdRef: '19',
  },
  {
    contentId: '21',
    contentType: 'EmotionButtons',
    contentText: '    เมื่อน้องๆ ได้ฝึกกันแล้ว ขอให้น้องเลือกภาพที่ตรงกับความรู้สึกของน้องมากที่สุด เลือกได้ไม่เกิน 3 ภาพ ค่ะ เรามาดูกันนะคะว่าสิ่งเหล่านี้จะเป็นอย่างไร แตกต่างจากเดิมกันหรือเปล่าค่ะ',
    minEmotions: 1,
    maxEmotions: 3
  },
  {
    contentId: '22',
    contentType: 'EmotionRating',
    contentText: '    ช่วยบอกระดับความรู้สึกที่น้องๆเลือกมาด้วยนะคะ',
    answerIdRef: '21'
  },
  {
    contentId: '23',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'บางครั้งภาพอาจจะไม่สื่อถึงความรู้สึกของน้องที่ชัดเจน\nมีความรู้สึกอย่างอื่นเพิ่มเติมกันอีกไหมคะ บอกพี่ตรงนี้ได้เลยค่ะ',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: false
      },
    ]
  },
  {
    contentId: '24',
    contentType: 'Info',
    contentText: '    น้องๆ เริ่มเห็นความเชื่อมโยงระหว่างความคิดและความรู้สึกของเรากันแล้วใช่ไหมค่ะ หากน้องๆ ได้ฝึกฝนที่จะรับรู้ความคิด และความรู้สึกอย่างต่อเนื่อง จะทำให้สามารถปรับเปลี่ยนความคิดลบของเราและช่วยให้เรารู้สึกดีขึ้นได้ค่ะ\n\n    พี่จะให้เวลาน้องๆ 3 วัน ในการฝึกฝน ซึ่งจะเกิดรับประโยชน์มาก หากน้องๆ ได้ฝึกฝนอย่างสม่ำเสมอค่ะ\n\n    ขอให้เป็นวันดีๆ พรุ่งนี้พบกันนะคะ',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
]

export const Homework5 = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: '    เรามาเขียน diary เพื่อดูความสัมพันธ์ระหว่าง...\n\n        - เหตุการณ์\n        - ความรู้สึก หรือ พฤติกรรม ของเราต่อเหตุการณ์นั้น\n        - เราคิดอย่างไร ที่ทำให้เรารู้สึก หรือ แสดงอย่างนั้นออกไป\n        - ถ้าเราไม่คิดแบบเดิม คิดอย่างไรแทนได้มั้ย\n\n    การบันทึก diary แบบนี้ จะช่วยให้ น้องๆ เห็นความสัมพันธ์ของ เหตุการณ์ ความรู้สึกและความคิดของเราได้ชัดเจนขึ้น อีกทั้งยังเป็นการฝึกให้เราปรับเปลี่ยนความคิดด้านลบ ที่พร้อมจะเกิดขึ้นกับเราได้อย่างรวดเร็วค่ะ\n\n    เราไปเริ่มบันทึกกันเลยค่ะ',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
  {
    contentId: '2',
    contentType: 'TextInput',
    contentText: 'บันทึก Daily',
    questions: [
      {
        questionText: 'เหตุการณ์',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: true
      },
      {
        questionText: 'ความรู้สึก หรือ ความคิด ของเราต่อเหตุการณ์นั้น',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: true
      },
      {
        questionText: 'การแสดงออก หรือ พฤติกรรม ต่อเหตุการณ์นั้น',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '3',
    contentType: 'PickerInput',
    contentText: 'น้องๆ ลองตอบคำถามด้านล่าง เพื่อปรับเปลี่ยนความคิด',
    questions: [
      {
        questionText: 'สิ่งที่คิดต่อเหตุการณ์นั้น เป็นจริงหรือไม่',
        choices: [
          'จริง',
          'ไม่จริง',
        ],
      },
      {
        questionText: 'เราคิดเป็นแบบอื่นได้หรือไม่',
        choices: [
          'ได้',
          'ไม่ได้',
        ],
      },
      {
        questionText: 'เราคิดแบบนี้ เกิดประโยชน์มั้ย',
        choices: [
          'เกิด',
          'ไม่เกิด',
        ],
      },
    ]
  },
  {
    contentId: '4',
    contentType: 'TextInput',
    contentText: '',
    questions: [
      {
        questionText: 'หากคิดเป็นอย่างอื่นได้ คิดอย่างไรดี',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '5',
    contentType: 'DailyContinue',
    contentText: '    มีเหตุการณ์ไหนที่น้องๆ อยากเล่าหรือบันทึกอีกมั้ยคะ? ถ้าต้องการบันทึกเพิ่มสามารถกดปุ่ม "ถัดไป" ได้เลยค่ะ (บันทึกได้อีก 2 เหตุการณ์)',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
  {
    contentId: '6',
    contentType: 'TextInput',
    contentText: 'บันทึก Daily (เหตุการณ์ที่ 2)',
    disabledBackward: true,
    questions: [
      {
        questionText: 'เหตุการณ์',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: true
      },
      {
        questionText: 'ความรู้สึก หรือ ความคิด ของเราต่อเหตุการณ์นั้น',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: true
      },
      {
        questionText: 'การแสดงออก หรือ พฤติกรรม ต่อเหตุการณ์นั้น',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '7',
    contentType: 'PickerInput',
    contentText: 'น้องๆ ลองตอบคำถามด้านล่าง เพื่อปรับเปลี่ยนความคิด (เหตุการณ์ที่ 2)',
    questions: [
      {
        questionText: 'สิ่งที่คิดต่อเหตุการณ์นั้น เป็นจริงหรือไม่',
        choices: [
          'จริง',
          'ไม่จริง',
        ],
      },
      {
        questionText: 'เราคิดเป็นแบบอื่นได้หรือไม่',
        choices: [
          'ได้',
          'ไม่ได้',
        ],
      },
      {
        questionText: 'เราคิดแบบนี้ เกิดประโยชน์มั้ย',
        choices: [
          'เกิด',
          'ไม่เกิด',
        ],
      },
    ]
  },
  {
    contentId: '8',
    contentType: 'TextInput',
    contentText: '(เหตุการณ์ที่ 2)',
    questions: [
      {
        questionText: 'หากคิดเป็นอย่างอื่นได้ คิดอย่างไรดี',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '9',
    contentType: 'DailyContinue',
    contentText: '    มีเหตุการณ์ไหนที่น้องๆ อยากเล่าหรือบันทึกอีกมั้ยคะ? ถ้าต้องการบันทึกเพิ่มสามารถกดปุ่ม "ถัดไป" ได้เลยค่ะ (บันทึกได้อีก 1 เหตุการณ์)',
    options: {
      imageUri: require(`../assets/charecters/Character-02.png`)
    }
  },
  {
    contentId: '10',
    contentType: 'TextInput',
    contentText: 'บันทึก Daily (เหตุการณ์ที่ 3)',
    disabledBackward: true,
    questions: [
      {
        questionText: 'เหตุการณ์',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: true
      },
      {
        questionText: 'ความรู้สึก หรือ ความคิด ของเราต่อเหตุการณ์นั้น',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: true
      },
      {
        questionText: 'การแสดงออก หรือ พฤติกรรม ต่อเหตุการณ์นั้น',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
  {
    contentId: '11',
    contentType: 'PickerInput',
    contentText: 'น้องๆ ลองตอบคำถามด้านล่าง เพื่อปรับเปลี่ยนความคิด (เหตุการณ์ที่ 3)',
    questions: [
      {
        questionText: 'สิ่งที่คิดต่อเหตุการณ์นั้น เป็นจริงหรือไม่',
        choices: [
          'จริง',
          'ไม่จริง',
        ],
      },
      {
        questionText: 'เราคิดเป็นแบบอื่นได้หรือไม่',
        choices: [
          'ได้',
          'ไม่ได้',
        ],
      },
      {
        questionText: 'เราคิดแบบนี้ เกิดประโยชน์มั้ย',
        choices: [
          'เกิด',
          'ไม่เกิด',
        ],
      },
    ]
  },
  {
    contentId: '12',
    contentType: 'TextInput',
    contentText: '(เหตุการณ์ที่ 3)',
    questions: [
      {
        questionText: 'หากคิดเป็นอย่างอื่นได้ คิดอย่างไรดี',
        placeholderText: '',
        textBoxSize: 'large',
        needAnswer: true
      },
    ]
  },
]

export const ProgramFinal = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: '    สวัสดีค่ะน้องๆ เป็นอย่างไรกันบ้างคะ หลังจากได้ไปฝึกฝนในเรื่องการคิดและการจัดการกับความคิดมาเป็นเวลา 3 วัน แต่ละคนได้ฝึกบันทึกลงในตารางแล้วนะคะ\n\n    จากการเรียนรู้และฝึกฝนในแต่ละครั้ง มาถึงตอนนี้น้องๆ ก็ได้เรียนรู้เกี่ยวกับการรู้สึกตัวและการหายใจอย่างมีสติการจัดการกับความเครียด ด้วยการหายใจ ได้เรียนรู้การรับรู้ร่างกาย การตระหนักรู้อารมณ์ความรู้สึกและความสัมพันธ์ของอารมณ์ความคิด และการปรับเปลี่ยนความคิด ที่มีผลต่อสุขภาพจิตของน้องๆ ซึ่งน้องๆ ได้เรียนรู้และฝึกฝนมาเป็นระยะ 2-3 สัปดาห์กันแล้วนะคะ พี่ขอชื่นชมน้องๆ ทุกคนในความตั้งใจที่จะเรียนรู้และฝึกฝน อย่างไรก็ตาม การฝึกฝนอย่างสม่ำเสมอจะช่วยให้น้องๆ สามารถนำวิธีการเหล่านี้ไปใช้ได้จริง ซึ่งจะเกิดประโยชน์ในการดูแลสุขภาพจิตของตัวน้องๆ เอง ซึ่งจะส่งผลให้น้องๆ มีสุขภาพจิตที่ดีและมีความสุข สุดท้ายนี้ขอให้น้องๆ ประเมินสุขภาวะทางจิตใจของตนเองกันอีกครั้งนะคะ สวัสดีค่ะ',
    options: {
      imageUri: require(`../assets/charecters/Character-03.png`)
    }
  }
]

export const defaultButtonData = {
  data: defaultData,
  buttonType: 'Program',
  collectionName: 'unknowCollection',
  screenName: 1,
  buttonText: 'defaultButtonText',
  buttonDays: 1,
  preCollectionName: 'evaluation',
  preButtonText: 'defaultPreButtonText',
  preButtonDays: 1,
}

export const program1ButtonData = {
  data: Program1,
  buttonType: 'Program',
  collectionName: 'Program1',
  screenName: 'โปรแกรมที่ 1 “มารู้จักการหายใจ...กันเถอะ”',
  buttonText: 'โปรแกรมที่ 1 “มารู้จักการหายใจ...กันเถอะ”',
  buttonDays: 1,
  preCollectionName: 'evaluation',
  preButtonText: 'แบบประเมิน',
  preButtonDays: 1,
}

export const homework1ButtonData = {
  data: Homework1,
  buttonType: 'Homework',
  collectionName: 'Homework1',
  screenName: 'ทบทวนโปรแกรมที่ 1 “มารู้จักการหายใจ...กันเถอะ”',
  buttonText: 'ทบทวนโปรแกรมที่ 1',
  buttonDays: 1,
  preCollectionName: 'Program1',
  preButtonText: 'โปรแกรมที่ 1',
  preButtonDays: 1,
}

export const program2ButtonData = {
  data: Program2,
  buttonType: 'Program',
  collectionName: 'Program2',
  screenName: 'โปรแกรมที่ 2 “เครียดได้...หายได้..ด้วยหายใจ”',
  buttonText: 'โปรแกรมที่ 2 “เครียดได้...หายได้..ด้วยหายใจ”',
  buttonDays: 1,
  preCollectionName: 'Homework1',
  preButtonText: 'ทบทวนโปรแกรมที่ 1',
  preButtonDays: 1,
}

export const homework2ButtonData = {
  data: Homework2,
  buttonType: 'Homework',
  collectionName: 'Homework2',
  screenName: 'ทบทวนโปรแกรมที่ 2 “เครียดได้...หายได้..ด้วยหายใจ”',
  buttonText: 'ทบทวนโปรแกรมที่ 2',
  buttonDays: 3,
  preCollectionName: 'Program2',
  preButtonText: 'โปรแกรมที่ 2',
  preButtonDays: 1,
}

export const program3ButtonData = {
  data: Program3,
  buttonType: 'Program',
  collectionName: 'Program3',
  screenName: 'โปรแกรมที่ 3 “รู้ตัวไว้...ไร้ทุกข์”',
  buttonText: 'โปรแกรมที่ 3 “รู้ตัวไว้...ไร้ทุกข์”',
  buttonDays: 1,
  preCollectionName: 'Homework2',
  preButtonText: 'ทบทวนโปรแกรมที่ 2',
  preButtonDays: 3,
}

export const homework3ButtonData = {
  data: Homework3,
  buttonType: 'Homework',
  collectionName: 'Homework3',
  screenName: 'ทบทวนโปรแกรมที่ 3 “รู้ตัวไว้...ไร้ทุกข์”',
  buttonText: 'ทบทวนโปรแกรมที่ 3',
  buttonDays: 3,
  preCollectionName: 'Program3',
  preButtonText: 'โปรแกรมที่ 3',
  preButtonDays: 1,
}

export const program4ButtonData = {
  data: Program4,
  buttonType: 'Program',
  collectionName: 'Program4',
  screenName: 'โปรแกรมที่ 4 “สุข เศร้า เหงาใจ...รู้ได้งัย”',
  buttonText: 'โปรแกรมที่ 4 “สุข เศร้า เหงาใจ...รู้ได้งัย”',
  buttonDays: 1,
  preCollectionName: 'Homework3',
  preButtonText: 'ทบทวนโปรแกรมที่ 3',
  preButtonDays: 3,
}

export const homework4ButtonData = {
  data: Homework4,
  buttonType: 'Homework',
  collectionName: 'Homework4',
  screenName: 'ทบทวนโปรแกรมที่ 4 “สุข เศร้า เหงาใจ...รู้ได้งัย”',
  buttonText: 'ทบทวนโปรแกรมที่ 4',
  buttonDays: 3,
  preCollectionName: 'Program4',
  preButtonText: 'โปรแกรมที่ 4',
  preButtonDays: 1,
}

export const program5ButtonData = {
  data: Program5,
  buttonType: 'Program',
  collectionName: 'Program5',
  screenName: 'โปรแกรมที่ 5 “สุขภาพใจ.. เปลี่ยนได้ด้วยความคิด”',
  buttonText: 'โปรแกรมที่ 5 “สุขภาพใจ เปลี่ยนได้ด้วยความคิด”',
  buttonDays: 1,
  preCollectionName: 'Homework4',
  preButtonText: 'ทบทวนโปรแกรมที่ 4',
  preButtonDays: 3,
}

export const homework5ButtonData = {
  data: Homework5,
  buttonType: 'Homework',
  collectionName: 'Homework5',
  screenName: 'ทบทวนโปรแกรมที่ 5 “สุขภาพใจ.. เปลี่ยนได้ด้วยความคิด”',
  buttonText: 'ทบทวนโปรแกรมที่ 5',
  buttonDays: 3,
  preCollectionName: 'Program5',
  preButtonText: 'โปรแกรมที่ 5',
  preButtonDays: 1,
}

export const programFinalButtonData = {
  data: ProgramFinal,
  buttonType: 'Program',
  screenName: 'การสรุปโปรแกรมการเรียนรู้',
  buttonText: 'การสรุปโปรแกรมการเรียนรู้',
  buttonDays: 1,
  preCollectionName: 'Homework4',
  preButtonText: 'ทบทวนโปรแกรมที่ 4',
  preButtonDays: 3,
}