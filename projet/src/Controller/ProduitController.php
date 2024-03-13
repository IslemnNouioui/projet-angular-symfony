<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Produit;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
//use App\Service\FileUploader;



class ProduitController extends AbstractController
{
    // list produit :
    #[Route('/list_products', name: 'list_products')]
    public function list(EntityManagerInterface $entityManager)
    {   
        $produits = $entityManager->getRepository(Produit::class)->findAll();
        return $this->render('list_products.html.twig', [
            'produits' => $produits,
        ]);
    }


    // get all products :
    #[Route('/products', name: 'all_products')]
    public function index(EntityManagerInterface $entityManager, SerializerInterface $serializer): JsonResponse
    {
        $produits = $entityManager->getRepository(Produit::class)->findAll();

        // Use the json method directly with the SerializerInterface
        return $this->json($produits, Response::HTTP_OK, [], [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            },
        ]);
    }

   
    // get product by id :
    #[Route('/products/{id}', name: 'product_show')]
    public function show(EntityManagerInterface $entityManager, int $id): JsonResponse
    {
        $produit = $entityManager->getRepository(Produit::class)->find($id);

        // Use the json method directly with the SerializerInterface
        return $this->json($produit, Response::HTTP_OK, [], [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            },
        ]);
    }


    // add product form :
    #[Route('/store_product_form', name: 'store_product_form')] 
    public function store_product_form()
    {
        return $this->render('add_products.html.twig');
    }

    // edit product form :
    #[Route('/edit_product_form/{id}', name: 'edit_product_form')] 
    public function edit_product_form(EntityManagerInterface $entityManager , $id)
    {
        $product = $entityManager->getRepository(Produit::class)->find($id);
        return $this->render('edit_products.html.twig', [
            'product' => $product,
        ]);
    }


    // store new product
    #[Route('/store_product', name: 'store_product')] 
    //public function store(Request $request, FileUploader $fileUploader, EntityManagerInterface $entityManager)
    public function store(Request $request, EntityManagerInterface $entityManager)
    {
        $data = $request->request->all();
        
        // get values :
        $name = $data['nom'];
        $description = $data['description'];
        $image = $data['image'];
        $imageFileName = 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg'; //$fileUploader->upload($image);
           
        $prix = $data['prix'];
        $promo = $data['promo'];
       // $date_ajout = new \DateTime('@'.strtotime('now'));
       $date_ajout = '14/12/2024';

        // Create a new Product entity
        $product = new Produit();
        $product->setNom($name);
        $product->setDescription($name);
        $product->setImage($imageFileName);
        $product->setPrix($prix);
        $product->setPromo($promo);
        $product->setDateAjout($date_ajout);

        $entityManager->persist($product);
        $entityManager->flush();

        return $this->list($entityManager);
    }

    
    // create product :
    #[Route('/add_product', name: 'create_product')]
    public function createProduct(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        // Extract data from the request (assuming JSON payload)
        $data = $request->request->all();

        // get values :
        $name = $data['name'];
        $description = $data['description'];
        $image = $data['image'];
        $prix = $data['prix'];
        $promo = $data['promo'];
        $date_ajout = $data['date_ajout'];

        // Create a new Product entity
        $product = new Produit();
        $product->setNom($name);
        $product->setDescription($name);
        $product->setImage($image);
        $product->setPrix($prix);
        $product->setPromo($promo);
        $product->setDateAjout($date_ajout);

        $entityManager->persist($product);
        $entityManager->flush();

        // Return a JSON response indicating success
        return $this->json(['message' => 'Product created successfully'], JsonResponse::HTTP_CREATED);
    }


    // update product by id :
    #[Route('/update_product/{id}', name: 'update_product')]
    public function updateProduct(Request $request, EntityManagerInterface $entityManager, $id): JsonResponse
    {
        $jsonData = $request->getContent();
        $data = json_decode($jsonData, true);

        // get values :
        $name = $data['name'];
        $description = $data['description'];
        $image = $data['image'];
        $prix = $data['prix'];
        $promo = $data['promo'];
        $date_ajout = $data['date_ajout'];

        // Find the existing Product entity by ID
        $product = $entityManager->getRepository(Produit::class)->find($id);

        // If the product does not exist, return an error response
        if (!$product) {
            return $this->json(['message' => 'Product not found'], JsonResponse::HTTP_NOT_FOUND);
        }

        // Update the product properties
        $product->setNom($name);
        $product->setDescription($description);
        $product->setImage($image);
        $product->setPrix($prix);
        $product->setPromo($promo);
        $product->setDateAjout($date_ajout);

        // Persist the changes
        $entityManager->flush();

        // Return a JSON response indicating success
        return $this->json(['message' => 'Product updated successfully'], JsonResponse::HTTP_OK);
    }


    #[Route('/updateProduct', name: 'updateProduct')]
    public function update_product(Request $request, EntityManagerInterface $entityManager)
    {
        $data = $request->request->all();

        // get values :
        $id = $data['id'];
        $name = $data['nom'];
        $description = $data['description'];
        $image = $data['image'];
        $prix = $data['prix'];
        $promo = $data['promo'];
        $date_ajout = '11/11/1111';

        // Find the existing Product entity by ID
        $product = $entityManager->getRepository(Produit::class)->find($id);

        // If the product does not exist, return an error response
        if (!$product) {
            return $this->json(['message' => 'Product not found'], JsonResponse::HTTP_NOT_FOUND);
        }

        // Update the product properties
        $product->setNom($name);
        $product->setDescription($description);
        $product->setImage($image);
        $product->setPrix($prix);
        $product->setPromo($promo);
        $product->setDateAjout($date_ajout);

        // Persist the changes
        $entityManager->flush();

        // Return a JSON response indicating success
        return $this->list($entityManager);
    }

    
    // delete product by id :
    #[Route('/delete_product/{id}', name: 'delete_product')]
    public function deleteProduct(EntityManagerInterface $entityManager, $id): JsonResponse
    {
        // Find the existing Product entity by ID
        $product = $entityManager->getRepository(Produit::class)->find($id);

        // If the product does not exist, return an error response
        if (!$product) {
            return $this->json(['message' => 'Product not found'], JsonResponse::HTTP_NOT_FOUND);
        }

        // Remove the product from the database
        $entityManager->remove($product);
        $entityManager->flush();

        // Return a JSON response indicating success
        return $this->json(['message' => 'Product deleted successfully'], JsonResponse::HTTP_OK);
    }
}
