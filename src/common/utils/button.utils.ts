import { ButtonSizeUnion } from 'src/common/types';

export class ButtonUtils {
    public static getButtonSize(size?: ButtonSizeUnion) {
        switch (size) {
            case 'xs':
                return '8px 10px';
            case 'sm':
                return '12px 24px';
            case 'lg':
                return '14px 32px';
            case 'md':
            default:
                return '12px 32px';
        }
    }
}
