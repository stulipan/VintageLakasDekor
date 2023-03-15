<?php

declare(strict_types=1);

namespace App\Form\AddToCart;

use App\Entity\Product\ProductOptionValue;
use App\Services\StoreSettings;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\HttpKernel\HttpCache\Store;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Twig\Environment;


class CartAddItemProductOptionValueType extends AbstractType
{
    private $urlGenerator;
    private $twig;
    private $settings;

    public function __construct(UrlGeneratorInterface $urlGenerator, Environment $twig, StoreSettings $settings)
    {
        $this->urlGenerator = $urlGenerator;
        $this->twig = $twig;
        $this->settings = $settings;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $productOption = $builder->getOption('productOption');

        if ($this->settings->get('general.product-variant-view') === StoreSettings::VARIANT_VIEW_AS_DROPDOWN) {
            $isMultiple = false;
            $isExpanded = false;
        }

        if ($this->settings->get('general.product-variant-view') === StoreSettings::VARIANT_VIEW_AS_VARIANT_PICKER) {
            $isMultiple = false;
            $isExpanded = true;
        }

        $builder->add('selectedOption',HiddenType::class,[
            // ha hidden mezőről van szó, ami maga az ID, akkor azt nem szabad map-elni az entityvel.
            'mapped' => false,
            'data' => $productOption,
        ]);
        /**
         * If the Product is Flower, the OptionValue's label will be composed of:
         *      - the option value itself (eg: Deluxe size, Big, Small)
         *      - the price associated with this option value (this product variant)
         */
        if ($productOption->getProduct()->isFlower()) {
            $builder->add('selectedOptionValue', EntityType::class,[
                'class' => ProductOptionValue::class,
                'choices' => $productOption->getValues()->getValues(),
                'choice_label' => function (ProductOptionValue $optionValue) {
                    return $this->twig->render('webshop/site/vp-label-product-variant.html.twig', [
                        'name' => $optionValue->getValue(),
                        'price' => $optionValue->getOption()->findSelectedOption($optionValue->getOption(), $optionValue)->getVariant()->getPrice()->getNumericValue(),
                        'priceSale' => ($optionValue->getOption()->findSelectedOption($optionValue->getOption(), $optionValue)->getVariant()->getPrice()->getNumericValue() * 4)
                    ]);
                },
                'multiple' => false,
                'expanded' => true,
            ]);
        }
        /**
         * Else (when the Product is NOT a flower) the OptionValue's label will be the value itself (eg: Deluxe)
         * No price of this variant is passed into the label.
         */
        else {
            $builder->add('selectedOptionValue', EntityType::class,[
                'class' => ProductOptionValue::class,
                'choices' => $productOption->getValues()->getValues(),
                'choice_label' => 'value',
                'multiple' => $isMultiple,
                'expanded' => $isExpanded,
            ]);
        }
        $builder->getForm();
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'productOption' => '',
            'attr' => ['novalidate' => 'novalidate'],
        ]);
    }
}