<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="blog")
     */
    public function blog()
    {
        return $this->render('main/blog.html.twig', []);
    }

    /**
     * @Route("/timeline", name="timeline")
     */
    public function timeline()
    {
        return $this->render('main/timeline.html.twig', []);
    }

    /**
     * @Route("/work", name="work")
     */
    public function work()
    {
        return $this->render('main/work.html.twig', []);
    }

    /**
     * @Route("/life", name="life")
     */
    public function life()
    {
        return $this->render('main/life.html.twig', []);
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact()
    {
        return $this->render('main/contact.html.twig', []);
    }
}
