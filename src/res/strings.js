import { NativeModules, Platform } from 'react-native';

let locale;

if (Platform.OS === 'ios') {
    locale = NativeModules.SettingsManager.settings.AppleLocale;
} else {
    locale = NativeModules.I18nManager.localeIdentifier;
}

locale = locale.substring(0, 2);

const strings = {
    pt: {
        appName: 'Sanarflix',
        presentation: 'Pronto para mergulhar em mundo de muito conhecimento e novas ideias? Então não perca mais tempo. Toque no botão abaixo e divirta-se!',
        enter: 'Entrar',
        courses: 'Cursos',
        modules: 'Módulos',
        warning: 'Aviso',
        markModule: 'Marcar módulo como visto?',
        closeApp: 'Deseja fechar a aplicação?'
    },
    en: {
        appName: 'Sanarflix',
        presentation: 'Ready to dive into the world of great knowledge and new ideas? So do not lose more time. Tap the button below and enjoy!',
        enter: 'Enter',
        courses: 'Courses',
        modules: 'Modules',
        warning: 'Warning',
        markModule: 'Mark module as seen?',
        closeApp: 'Do you want to close the application?'
    }
};

export default (strings[locale] ? strings[locale] : strings.pt);