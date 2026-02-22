export const keys = {
  WELCOME_MESSAGE: 'app.welcome_message',

  LANGUAGES: {
    EN: 'languages.en',
    HU: 'languages.hu',
    DE: 'languages.de',
    RO: 'languages.ro',
  },
} as const;

export type I18Key =
  | (typeof keys)[keyof typeof keys]
  | (typeof keys.LANGUAGES)[keyof typeof keys.LANGUAGES];
