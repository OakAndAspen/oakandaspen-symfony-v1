<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/timeline", name="timeline")
     */
    public function timeline()
    {
        return $this->render('main/timeline.html.twig', []);
    }
}
