<?php

declare(strict_types=1);

namespace App\Form\Checkout;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class SameAsRecipientType extends AbstractType
{
    private $urlGenerator;
    private $translator;

    public function __construct(UrlGeneratorInterface $urlGenerator, TranslatorInterface $translator)
    {
        $this->urlGenerator = $urlGenerator;
        $this->translator = $translator;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->setAction($this->urlGenerator->generate('cart-setSameAsRecipient'));
        $builder
            ->add('sameAsRecipient', ChoiceType::class, [
                'required' => true,
                'mapped' => true,
                'choices' => [
                    $this->translator->trans('checkout.sender.same-as-shipping-address') => true,
                    $this->translator->trans('checkout.sender.use-different-shipping-address') => false,
                ],
                'multiple' => false,
                'expanded' => true,
//                'placeholder' => false,
//                'data' => true,
            ])
            ->getForm();
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'attr' => ['novalidate' => 'novalidate'],
        ]);
    }
}