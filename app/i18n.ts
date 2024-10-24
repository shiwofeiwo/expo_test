import storage from '@/utils/storage';

const i18nConfig: Record<string, any> = {
  'en-US': {},
  'zh-CN': {},
  'ja-JP': {},
};

const getLocale = async () => storage.load<string>({ key: 'locale' });

const setLocale = async (value: string) =>
  storage.save({ key: 'locale', data: value });

// 按低代码规范里面的要求进行变量替换
const format = (msg: any, variables: any) =>
  typeof msg === 'string'
    ? msg.replace(/\$?\{(\w+)\}/g, (match, key) => variables?.[key] ?? '')
    : msg;

const i18nFormat = async (
  { id, defaultMessage, fallback }: any,
  variables: any
) => {
  const locale = (await getLocale()) || 'en-US';
  const msg =
    i18nConfig[locale]?.[id] ??
    i18nConfig[locale.replace('-', '_')]?.[id] ??
    defaultMessage;
  if (msg == null) {
    console.warn('[i18n]: unknown message id: %o (locale=%o)', id, locale);
    return fallback === undefined ? `${id}` : fallback;
  }

  return format(msg, variables);
};

const i18n = (id: any, params: any) => {
  return i18nFormat({ id }, params);
};

// 将国际化的一些方法注入到目标对象&上下文中
const _inject2 = (target: any) => {
  target.i18n = i18n;
  target.getLocale = getLocale;
  target.setLocale = async (locale: string) => {
    await setLocale(locale);
    target.forceUpdate();
  };
  target._i18nText = async (t: any) => {
    const locale = (await getLocale()) || 'en-US';
    // 优先取直接传过来的语料
    const localMsg = t[locale] ?? t[String(locale).replace('-', '_')];
    if (localMsg != null) {
      return format(localMsg, t.params);
    }

    // 其次用项目级别的
    const projectMsg = i18nFormat({ id: t.key, fallback: null }, t.params);
    if (projectMsg != null) {
      return projectMsg;
    }

    // 兜底用 use 指定的或默认语言的
    return format(t[t.use || 'zh-CN'] ?? t.en_US, t.params);
  };

  // 注入到上下文中去
  if (target._context && target._context !== target) {
    Object.assign(target._context, {
      i18n,
      getLocale,
      setLocale: target.setLocale,
    });
  }
};

export { getLocale, setLocale, i18n, i18nFormat, _inject2 };
