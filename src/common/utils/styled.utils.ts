import { TextAttributes } from 'src/common/types';
import {
    colors, FontSize, FontWeight, LineHeight,
} from 'src/common/dictionaries';

export class StyledUtils {
    private static getFontFamilyByWeight(fontWeight: number): string {
        switch (fontWeight) {
            case 100:
                return 'PoppinsThin';
            case 200:
                return 'PoppinsExtraLight';
            case 300:
                return 'PoppinsLight';
            case 500:
                return 'PoppinsMedium';
            case 600:
                return 'PoppinsSemiBold';
            case 700:
                return 'PoppinsBold';
            case 800:
                return 'PoppinsExtraBold';
            case 900:
                return 'InterBlack';
            case 400:
            default:
                return 'PoppinsRegular';
        }
    }

    public static createTextTemplate({
        color = colors.text.primary,
        fontSize = FontSize.Default,
        fontWeight = FontWeight.Bold,
        lineHeight = LineHeight.Default,
    }: TextAttributes): string {
        return `
      margin: 0;
      padding: 0;

      color: ${color};
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
      font-family: '${this.getFontFamilyByWeight(fontWeight)}';
      letter-spacing: -0.02em;
    `;
    }
}
