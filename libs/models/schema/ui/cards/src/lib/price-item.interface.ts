import { PriceItemColors } from "./price-item-colors.interface"
import { SliderButtonData } from "@elewa-website/models/schema/ui/buttons"

export interface PriceItem extends PriceItemColors {
    title: string
    amount: number
    subTitle: string
    description: string
    sliderButton: SliderButtonData
}